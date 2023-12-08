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
      'rounded-xl bg-anim-color-light dark:bg-anim-color-light hover:bg-anim-color hover:dark:bg-anim-color text-ctp-mantle dark:text-ctp-mantle font-bold transform transition duration-300 ease-out hover:scale-105 focus:ring-ctp-blue dark:focus:ring-ctp-blue',
    } },
  },
})
