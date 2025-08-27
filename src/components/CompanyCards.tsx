'use client'

import Link from 'next/link'
import {
    useMotionValue,
} from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { SnowConePattern } from '@/images/svgs/SnowconePattern'
import { RamifiPattern } from '@/images/svgs/RamifiPattern'
import { EazyInvPattern } from '@/images/svgs/EazyinvPattern'
import { HeliusIcon } from '@/images/logoIcons/helius-icon'
import { SnowconeIcon } from '@/images/logoIcons/snowcone-icon'
import { RamifiIcon } from '@/images/logoIcons/ramifi-icon'
import { EazyinvLogo } from '@/images/logoIcons/eazyinv-logo'
import { XforkeyLogo } from '@/images/logoIcons/xforkey-logo'

function CompanyLogo({ icon: Icon, className }: { icon: React.ComponentType<{ className?: string }>, className: string }) {
    return (
        <div className="flex h-min w-min items-start justify-start ">
            <Icon className={cn('h-14 w-auto', className)} />
        </div>
    )
}

export function SnowconeCard() {
    return (
        <Link href="https://www.snowcones.io">
            <div
                className="group relative flex rounded-2xl transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5 my-6"
            >
                {/* <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} /> */}
                <div className="relative rounded-2xl px-4 pb-4 pt-16">
                    <SnowconeIcon className={"h-auto transition-colors duration-300"} />
                    <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                        {'An all in one organization creation and management tool.'}
                    </p>
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-fuchsia-500" />
                <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)]">
                    <SnowConePattern />
                </div>
            </div >
        </Link>
    )
}

export function HeliusCard() {
    return (
        <Link href="https://dashboard.landsplits.com/properties">
            <div
                className="group relative flex items-center rounded-2xl h-[160px] transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
            >
                {/* Left side content */}
                <div className="flex-grow relative rounded-2xl px-4 pb-4 pt-16">
                    <CompanyLogo icon={HeliusIcon} className='' />
                    <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                        {'Buy sell and trade real estate.'}
                    </p>
                </div>

                {/* Right side image with grayscale-to-color effect */}
                <div className="relative inset-0 rounded-2xl transition duration-300">
                    <div className="rounded-2xl overflow-hidden  [mask-image:linear-gradient(white,transparent)]">
                        <Image
                            src={'/images/neighborhoods.png'}
                            alt="House"
                            width={600}
                            height={147}
                            className="filter grayscale transition duration-300 ease-in-out group-hover:filter-none"
                        />
                    </div>
                </div>

                {/* Ring effect */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-emerald-400" />
            </div >
        </Link>
    )
}


export function RamifiCard() {
    return (
        <Link href="/ramifi">
            <div
                className="group relative flex rounded-2xl transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5 my-6"
            >
                {/* <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} /> */}
                <div className="relative rounded-2xl px-4 pb-4 pt-16">
                    <RamifiIcon className={"h-12 transition-colors duration-300"} />
                    <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                        {'Inflation Immune Dynamic Money'}
                    </p>
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-amber-100" />
                <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)]">
                    <RamifiPattern className='filter grayscale transition duration-300 ease-in-out group-hover:filter-none' />
                </div>
            </div >
        </Link>
    )
}
export function EazyinvCard() {
    return (
        <Link href="https://www.eazyinv.com/login">
            <div
                className="group relative flex rounded-2xl transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5 my-6"
            >
                {/* <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} /> */}
                <div className="relative rounded-2xl px-4 pb-4 pt-16">
                    <EazyinvLogo className={"h-16 filter grayscale transition duration-300 ease-in-out group-hover:filter-none"} />
                    <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                        {'Get Paid, Stay Chill.'}
                    </p>
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-blue-500" />
                <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)]">
                    <EazyInvPattern className='filter grayscale transition duration-300 ease-in-out group-hover:filter-none' />
                </div>
            </div >
        </Link>
    )
}

export function KeyboardConfiguratorCard() {
    return (
        <Link href="https://keyboard-3d.vercel.app/">
            <div
                className="group relative flex items-center rounded-2xl h-[160px] transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5 overflow-hidden"
            >
                {/* Background image */}
                <div className="absolute -right-1/4 top-0 w-full h-full rounded-2xl overflow-hidden">
                    <Image
                        src={'/images/keyboard_image.png'}
                        alt="Keyboard Configurator"
                        width={600}
                        height={160}
                        className="w-full h-full object-cover filter grayscale transition duration-300 ease-in-out group-hover:filter-none opacity-30 group-hover:opacity-50"
                    />
                </div>

                {/* Content overlay */}
                <div className="relative z-10 flex-grow rounded-2xl px-4 pb-4 pt-8">
                    <div className="flex h-min w-min items-start justify-start">
                        <h3 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100 transition duration-300 ease-in-out">
                            ZMK Keyboard
                        </h3>
                    </div>
                    <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                        {'3D Keyboard Configuration Tool'}
                    </p>
                </div>

                {/* Ring effect with yellow hover */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-yellow-400" />
            </div >
        </Link>
    )
}

export function XforkeyCard() {
    return (
        <Link href="https://ui-two-kohl.vercel.app/">
            <div
                className="group better-outline relative flex items-center rounded-2xl h-[194px] transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
            >
                {/* Left side content */}
                <div className="flex-grow relative rounded-2xl px-4 pb-4 pt-16">
                    <XforkeyLogo className="h-12 w-auto filter grayscale transition duration-300 ease-in-out group-hover:filter-none" />
                    <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                        {'UI Component Library & Design System'}
                    </p>
                </div>

                {/* Right side image with grayscale-to-color effect and isometric positioning */}
                <div className="absolute right-0 top-0 w-full h-full overflow-hidden rounded-2xl pointer-events-none">
                    <div className="absolute -right-[10%] top-[30%] w-[300px] h-[300px] origin-top-left"
                        style={{ transform: 'rotateX(55deg) rotateY(0deg) rotateZ(-35deg)' }}>
                        {/* First image */}
                        <div className="absolute transform -translate-y-[20%] group-hover:-translate-y-[120%] transition-transform duration-[900000000000s] group-hover:duration-[40000ms] ease-linear">
                            <Image
                                src={'/images/ui-kit-buttons.png'}
                                alt="UI Kit Buttons"
                                width={600}
                                height={600}
                                className="saturate-0 transition duration-300 ease-in-out group-hover:saturate-100"
                            />
                        </div>
                        {/* Second image for seamless loop */}
                        <div className="absolute transform translate-y-[80%] group-hover:-translate-y-[20%] transition-transform duration-[900000000000s] group-hover:duration-[40000ms] ease-linear mt-5">
                            <Image
                                src={'/images/ui-kit-buttons.png'}
                                alt="UI Kit Buttons"
                                width={600}
                                height={600}
                                className="saturate-0 transition duration-300 ease-in-out group-hover:saturate-100"
                            />
                        </div>
                    </div>
                </div>

                {/* Ring effect */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-emerald-400" />
            </div >
        </Link>
    )
}


