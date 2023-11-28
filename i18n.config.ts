export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fr',
  messages: {
    en: {
      flag: '🇬🇧',
      header: {
        portfolio: 'Portfolio',
        blog: 'Blog',
        about: 'About',
      },
    },
    fr: {
      flag: '🇫🇷',
      header: {
        portfolio: 'Portfolio',
        blog: 'Blog',
        about: 'À Propos',
      },
    },
  },
}))
