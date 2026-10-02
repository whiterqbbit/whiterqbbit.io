export default defineAppConfig({
  ui: {
    primary: 'emerald',
    gray: 'cool',
    input: { color: { white: { outline:
      'bg-ctp-base dark:bg-ctp-base text-ctp-text dark:text-ctp-text placeholder-ctp-overlay0 dark:placeholder-ctp-overlay0 ring-ctp-surface1 dark:ring-ctp-surface1 focus:ring-2 focus:ring-ctp-yellow dark:focus:ring-ctp-yellow',
    } } },
    formGroup: { label: { base:
      'text-ctp-subtext1 dark:text-ctp-subtext1',
    } },
    textarea: { color: { white: { outline:
      'bg-ctp-base dark:bg-ctp-base text-ctp-text dark:text-ctp-text placeholder-ctp-overlay0 dark:placeholder-ctp-overlay0 ring-ctp-surface1 dark:ring-ctp-surface1 focus:ring-2 focus:ring-ctp-yellow dark:focus:ring-ctp-yellow',
    } } },
    button: { variant: {
      solid:
        'rounded-xl bg-anim-color dark:bg-anim-color text-ctp-crust dark:text-ctp-crust font-bold shadow-sm transition-fast hover:-translate-y-0.5 hover:shadow-[0_6px_20px_-6px] hover:shadow-ctp-yellow/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ctp-yellow',
      soft:
        'rounded-xl bg-ctp-surface0/60 dark:bg-ctp-surface0/60 text-ctp-text dark:text-ctp-text font-semibold ring-1 ring-inset ring-ctp-surface1 dark:ring-ctp-surface1 transition-fast hover:bg-ctp-surface0 dark:hover:bg-ctp-surface0 hover:ring-ctp-overlay0 dark:hover:ring-ctp-overlay0 focus-visible:ring-2 focus-visible:ring-ctp-yellow',
    } },
    tooltip: {
      // fixed est décalé dans les cartes (transform de slide-enter + backdrop-blur)
      popper: { strategy: 'absolute' },
      background: 'bg-ctp-crust dark:bg-ctp-crust',
      color: 'text-ctp-text dark:text-ctp-text',
      ring: 'ring-1 ring-ctp-surface1 dark:ring-ctp-surface1',
      rounded: 'rounded-md',
      shadow: 'shadow-lg',
    },
    notification: {
      position: 'left-0',
      rounded: 'rounded-xl',
      background: 'bg-ctp-mantle dark:bg-ctp-mantle',
      progress: { background: 'bg-ctp-sky dark:bg-ctp-sky' },
    },
  },
  umami: {
    autoTrack: true,
    version: 2,
    ignoreLocalhost: true,
  },
})
