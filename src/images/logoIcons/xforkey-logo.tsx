import React from 'react';

const nameClasses = 'transition-colors duration-300 fill-zinc-100 dark:fill-zinc-500 dark:group-hover:fill-zinc-100'
const iconClasses = 'transition-colors duration-300 fill-zinc-100 stroke-zinc-700 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400'
const accentClasses = 'transition-colors duration-300 stroke-emerald-500 group-hover:stroke-emerald-400 dark:stroke-emerald-400 dark:group-hover:stroke-emerald-300'
const accentTextClasses = 'transition-colors duration-300 fill-emerald-500 group-hover:fill-emerald-400 dark:fill-emerald-400 dark:group-hover:fill-emerald-300'

export function XforkeyLogo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 941 162.67" {...props}>
      <g id="Layer_2-2" data-name="Layer 2">
        <g>
          <text transform="translate(353.22 116.4)" className={nameClasses} fontFamily="Arial-BoldMT, Arial" fontSize="114.61" fontWeight={700}><tspan x={0} y={0}>XForkey/ui</tspan></text>
          <g>
            <rect x={4} y="5.15" width="145.55" height="145.55" rx={12} ry={12} fill="none" className={accentClasses} strokeMiterlimit={10} strokeWidth={8} />
            <text transform="translate(36.84 119.53)" className={accentTextClasses} fontFamily="Arial-BoldMT, Arial" fontSize="114.61" fontWeight={700}><tspan x={0} y={0}>X</tspan></text>
            <rect x="180.5" y={4} width="145.55" height="145.55" rx={12} ry={12} fill="none" className={accentClasses} strokeMiterlimit={10} strokeWidth={8} />
            <text transform="translate(216.55 118.38)" className={accentTextClasses} fontFamily="Arial-BoldMT, Arial" fontSize="114.61" fontWeight={700}><tspan x={0} y={0}>F</tspan></text>
          </g>
        </g>
      </g>
    </svg>
  )
}