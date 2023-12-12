export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxt/ui',
    'nuxt-resend',
    '@nuxtjs/fontaine',
    '@nuxtseo/module',
  ],
  extends: ['nuxt-umami'],

  app: {
    pageTransition: { name: 'page', mode: 'in-out' },
    head: {
      templateParams: { site: { name: 'Guillaume Bonnefoy' }, separator: '|' },
      titleTemplate: '%pageTitle %separator %site.name',
      meta: [{ name: 'Guillaume Bonnefoy', content: 'Portfolio de Guillaume Bonnefoy - "Veni, Vidi, Codi"' }],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🐇%3C/text%3E%3C/svg%3E` }],
    },
  },

  runtimeConfig: { public: { ENVIRONNEMENT: process.env.ENVIRONNEMENT } },

  devtools: { enabled: true },
  devServer: { port: 3210 },

  i18n: { vueI18n: './i18n.config.ts' },

  colorMode: { preference: 'dark', classSuffix: '' },

  image: {
    domains: ['whiterqbbit.io'],
    dir: 'public',
    format: ['webp'],
    provider: 'netlify',
  },

  content: { documentDriven: true, contentHead: false },

  site: {
    url: 'https://whiterqbbit.io',
    name: 'Guillaume Bonnefoy',
    description: 'Portfolio de Guillaume Bonnefoy - "Veni, Vidi, Codi"',
    identity: { type: 'Person' },
    trailingSlash: true,
    defaultLocale: 'fr-FR',
  },
})
