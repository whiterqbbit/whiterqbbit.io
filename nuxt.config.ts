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

  build: { transpile: ['vue3-calendar-heatmap'] },

  runtimeConfig: {
    public: { ENVIRONNEMENT: process.env.ENVIRONNEMENT },
    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    GITHUB_PERSONAL_KEY: process.env.NUXT_GITHUB_PERSONAL_KEY,
  },

  devtools: { enabled: true },
  devServer: { port: 3210 },

  i18n: {
    defaultLocale: 'fr',
    strategy: 'no_prefix',
    locales: ['fr', 'en'],
  },

  colorMode: { preference: 'dark', classSuffix: '' },

  image: {
    domains: ['guillaumebonnefoy.com'],
    dir: 'public',
    format: ['webp'],
    provider: 'netlify',
  },

  content: { documentDriven: true, contentHead: false },

  site: {
    url: 'https://www.guillaumebonnefoy.com',
    name: 'Guillaume Bonnefoy',
    description: 'Portfolio de Guillaume Bonnefoy - "Veni, Vidi, Codi"',
    identity: { type: 'Person' },
    trailingSlash: true,
    defaultLocale: 'fr-FR',
  },

  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: ['/'],
    },
  },
})
