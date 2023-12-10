export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxt/ui',
    'nuxt-resend',
    '@nuxtjs/fontaine',
  ],
  extends: [
    'nuxt-umami',
  ],

  app: { pageTransition: { name: 'page', mode: 'out-in' } },
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

  content: { documentDriven: true },
})
