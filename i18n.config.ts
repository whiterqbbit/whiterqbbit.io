import { TheHeader } from '~/locales/components/TheHeader'
import { landing } from '~/locales/pages'

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    en: {
      flag: '🇺🇸',
      header: TheHeader.en,
      landing: landing.en,
    },
    fr: {
      flag: '🇫🇷',
      header: TheHeader.fr,
      landing: landing.fr,
    },
  },
}))
