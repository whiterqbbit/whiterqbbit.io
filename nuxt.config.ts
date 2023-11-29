export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
  ],

  devtools: { enabled: true },
  devServer: { port: 3210 },

  i18n: { vueI18n: './i18n.config.ts' },

  colorMode: { preference: 'dark', classSuffix: '' },

  image: {
    domains: ['whiterqbbit.io'],
    dir: 'assets',
    format: ['webp'],
  },
})
