export default defineAppConfig({
  ui: {
    primary: 'emerald',
    gray: 'cool',
    input: { color: { white: { outline:
      'bg-ctp-mantle dark:bg-ctp-mantle text-ctp-text dark:text-ctp-text ring-ctp-surface0 dark:ring-ctp-surface0 focus:ring-ctp-lavender dark:focus:ring-ctp-lavender',
    } } },
    formGroup: { label: { base:
      'text-ctp-subtext1 dark:text-ctp-subtext1',
    } },
    textarea: { color: { white: { outline:
      'bg-ctp-mantle dark:bg-ctp-mantle text-ctp-text dark:text-ctp-text ring-ctp-surface0 dark:ring-ctp-surface0 focus:ring-ctp-lavender dark:focus:ring-ctp-lavender',
    } } },
    button: { variant: { solid:
      'rounded-xl bg-anim-color-light dark:bg-anim-color-light hover:bg-anim-color hover:dark:bg-anim-color text-ctp-mantle dark:text-ctp-mantle font-bold transform transition-fast hover:scale-105 focus:ring-ctp-blue dark:focus:ring-ctp-blue',
    } },
    tooltip: {
      background: 'bg-ctp-mantle dark:bg-ctp-mantle',
      color: 'text-ctp-text dark:text-ctp-text',
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
