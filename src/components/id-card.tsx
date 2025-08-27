'use client'

import * as THREE from 'three'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei'
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint, RapierRigidBody, RigidBodyProps } from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import { useControls } from 'leva'

const cardModel = '/kyle-id-card.glb'
const bandImage = '/kyle-band-80.jpg'

type CustomRigidBodyRef = RefObject<RapierRigidBody & { lerped?: THREE.Vector3 }>
type CustomRigidBody = RapierRigidBody & { lerped: THREE.Vector3Like }

extend({ MeshLineGeometry, MeshLineMaterial })

useGLTF.preload(cardModel)
/* useGLTF.preload('https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb') */
useTexture.preload(bandImage)

export default function IdCard() {
    return (
        <Canvas
            camera={{ position: [0, 0, 10], fov: 25 }}
            gl={{ alpha: true, antialias: true }}
        >
            <ambientLight intensity={Math.PI} />
            <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
                <Band />
            </Physics>
            <Environment >
                <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
                <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
                <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
                <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
            </Environment>
        </Canvas>
    )
}

function Band({ maxSpeed = 50, minSpeed = 10 }) {
    const band = useRef<THREE.Mesh>(null!)
    const fixed = useRef<RapierRigidBody>(null!)
    const j1 = useRef<RapierRigidBody>(null!)
    const j2 = useRef<RapierRigidBody>(null!)
    const j3 = useRef<RapierRigidBody>(null!)
    const card = useRef<RapierRigidBody>(null!)
    const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3() // prettier-ignore
    const segmentProps: RigidBodyProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 2, linearDamping: 2 }
    const { nodes, materials } = useGLTF(cardModel)
    console.log(materials)
    const texture = useTexture(bandImage)
    const { width, height } = useThree((state) => state.size)
    const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]))
    const [dragged, drag] = useState<false | THREE.Vector3>(false);
    const [hovered, hover] = useState(false)

    useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
    useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
    useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
    useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]]) // prettier-ignore

    useEffect(() => {
        if (hovered) {
            document.body.style.cursor = dragged ? 'grabbing' : 'grab'
            return () => void (document.body.style.cursor = 'auto')
        }
    }, [hovered, dragged])

    useFrame((state, delta) => {
        if (dragged) {
            vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
            dir.copy(vec).sub(state.camera.position).normalize()
            vec.add(dir.multiplyScalar(state.camera.position.length()))
                ;[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
            card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z })
        }
        if (fixed.current) {
            // Fix most of the jitter when over pulling the card
            ;[j1, j2].forEach((ref: CustomRigidBodyRef) => {
                if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation())
                const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())))
                ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)))
            })
            // Calculate catmul curve
            const bandGeometry = (band.current.geometry as MeshLineGeometry)
            curve.points[0].copy(j3.current.translation())
            curve.points[1].copy((j2.current as unknown as CustomRigidBody).lerped)
            curve.points[2].copy((j1.current as unknown as CustomRigidBody).lerped)
            curve.points[3].copy(fixed.current.translation())
            bandGeometry.setPoints(curve.getPoints(32))
            // Tilt it back towards the screen
            ang.copy(card.current.angvel())
            rot.copy(card.current.rotation())
            card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z }, true)
        }
    })

    curve.curveType = 'chordal'
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping

    return (
        <>
            <group position={[3, 4, 0]}>
                <RigidBody ref={fixed} {...segmentProps} type="fixed" />
                <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
                    <CuboidCollider args={[0.8, 1.125, 0.01]} />
                    <group
                        scale={2.25}
                        position={[0, -1.2, -0.05]}
                        onPointerOver={() => hover(true)}
                        onPointerOut={() => hover(false)}
                        onPointerUp={(e) => ((e.target as HTMLElement).releasePointerCapture(e.pointerId), drag(false))}
                        onPointerDown={(e) => ((e.target as HTMLElement).setPointerCapture(e.pointerId), drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation()))))}>
                        <mesh geometry={(nodes.card as THREE.Mesh).geometry}>
                            <meshPhysicalMaterial map={(materials.base as THREE.MeshStandardMaterial).map} map-anisotropy={16} clearcoat={1} clearcoatRoughness={0.15} roughness={0.3} metalness={0.5} />
                        </mesh>
                        <mesh geometry={(nodes.clip as THREE.Mesh).geometry} material={materials.metal} material-roughness={0.3} />
                        <mesh geometry={(nodes.clamp as THREE.Mesh).geometry} material={materials.metal} />
                    </group>
                </RigidBody>
            </group>
            <mesh ref={band}>
                {/* src/types/meshline.d.ts */}
                <meshLineGeometry />
                <meshLineMaterial color="white" depthTest={false} resolution={[width, height]} useMap map={texture} repeat={[-3, 1]} lineWidth={1} />
            </mesh>
        </>
    )
}

