import { TheHeader } from '~/locales/components/TheHeader'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fr',
  messages: {
    en: {
      flag: '🇺🇸',
      header: TheHeader.en,
    },
    fr: {
      flag: '🇫🇷',
      header: TheHeader.fr,
    },
  },
}))
