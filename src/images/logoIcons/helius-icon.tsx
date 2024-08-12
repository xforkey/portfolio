import React from 'react';

const nameClasses = 'transition-colors duration-300 fill-zinc-100 dark:fill-zinc-500 dark:group-hover:fill-zinc-100'
const iconClasses = 'transition-colors duration-300 fill-zinc-100 stroke-zinc-700  group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400'

export function HeliusIcon(props: React.ComponentPropsWithoutRef<'svg'>) {

  return (
    <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.5 22.93" {...props}>
      <g id="uuid-78883095-9da3-477f-8fd0-b83f1949e6a5">
        <g id="uuid-65d11343-d55c-478a-8994-aa6efbb64063" className={iconClasses} strokeWidth={2}>
          <path d="M11.64,21.42c-.25,0-.51-.06-.74-.19l-5.77-3.25c-.47-.27-.76-.77-.76-1.31v-4.5h-1.37c-.62,0-1.18-.38-1.4-.97s-.06-1.24.4-1.65L10.61,1.88c.28-.25.64-.38,1-.38s.71.13,1,.38l8.67,7.73c.46.41.62,1.07.4,1.65-.22.58-.78.97-1.4.97h-1.44v4.45c0,.54-.29,1.04-.76,1.3l-5.7,3.25c-.23.13-.49.2-.74.2h0Z" />
        </g>
        <g id="Header">
          <g id="logo">
            <path className={nameClasses} strokeWidth={0} d="M29.4,9.29c.72-.61,2.02-1.41,3.82-1.41,1.91,0,3.63.89,4.74,2.3.83,1.05,1.28,2.38,1.28,4.63v6.37h-2.63v-6.51c0-1.66-.3-2.44-.77-3.02-.61-.78-1.61-1.28-2.69-1.28-1.72,0-2.97.92-3.74,1.86v8.95h-2.63V1.5h2.63v7.79Z" />
            <path className={nameClasses} strokeWidth={0} d="M44.05,12.98h7.09c-.39-1.66-1.88-2.83-3.44-2.83-1.69,0-3.21,1.14-3.66,2.83ZM43.83,15.19c.14,2.19,1.94,3.93,4.21,3.93,1.94,0,2.99-.94,3.74-1.77l1.72,1.64c-.97,1.25-2.83,2.44-5.49,2.44-3.8,0-6.73-2.88-6.73-6.79s2.66-6.79,6.35-6.79,6.26,2.94,6.26,6.79c0,.11,0,.3-.03.55h-10.03Z" />
            <polygon className={nameClasses} strokeWidth={0} points="55.8 21.18 58.43 21.18 58.43 1.5 55.8 1.5 55.8 21.18" />
            <path className={nameClasses} strokeWidth={0} d="M60.75,20.9h2.63V7.87h-2.63v13.02ZM62.05,1.5c.97,0,1.75.78,1.75,1.75s-.78,1.72-1.75,1.72-1.72-.75-1.72-1.72.75-1.75,1.72-1.75Z" />
            <path className={nameClasses} strokeWidth={0} d="M66.97,18.96c-.8-1-1.19-2.27-1.19-4.46v-6.65h2.63v7.07c0,1.33.28,2.05.75,2.6.58.69,1.52,1.14,2.52,1.14,1.61,0,2.91-.97,3.66-1.86V7.85h2.63v13.02h-2.55v-1.19c-.58.55-2.02,1.47-3.82,1.47s-3.55-.83-4.63-2.19" />
            <path className={nameClasses} strokeWidth={0} d="M80.74,17.69c1.22.94,2.55,1.44,3.85,1.44,1.14,0,2.27-.61,2.27-1.63,0-1.5-2.16-1.58-4.07-2.22-1.58-.53-2.99-1.52-2.99-3.35,0-2.8,2.49-4.07,4.82-4.07,1.91,0,3.3.61,4.32,1.44l-1.36,1.88c-.8-.61-1.75-1.03-2.8-1.03-1.27,0-2.36.61-2.36,1.64,0,.89,1.03,1.19,2.33,1.52,2.05.53,4.74,1.44,4.74,4.13,0,2.47-2.3,3.99-4.85,3.99-2.08,0-3.82-.64-5.27-1.8l1.36-1.94Z" />
          </g>
        </g>
      </g>
    </svg>

  );
}
