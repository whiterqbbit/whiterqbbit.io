import { landing } from '~/locales/pages'
import { portfolio } from '~/locales/pages/portfolio'

// These are there instead of in <i18n>
// because of idiosyncrasies of the i18n module

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    en: {
      landing: landing.en,
      portfolio: portfolio.en,
    },
    fr: {
      landing: landing.fr,
      portfolio: portfolio.fr,
    },
  },
}))
