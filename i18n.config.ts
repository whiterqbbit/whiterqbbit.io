import { landing } from '~/locales/pages'
import { portfolio } from '~/locales/pages/portfolio'
import { a_propos } from '~/locales/pages/a-propos'
import { header } from '~/locales/components/TheHeader'
import { footer } from '~/locales/components/TheFooter'
import { contact } from '~/locales/components/ContactForm'

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    en: {
      landing: landing.en,
      portfolio: portfolio.en,
      a_propos: a_propos.en,

      header: header.en,
      footer: footer.en,
      contact: contact.en,
    },
    fr: {
      landing: landing.fr,
      portfolio: portfolio.fr,
      a_propos: a_propos.fr,

      header: header.fr,
      footer: footer.fr,
      contact: contact.fr,
    },
  },
}))
