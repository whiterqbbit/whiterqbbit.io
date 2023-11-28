export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
  ],

  devtools: { enabled: true },
  devServer: { port: 3210 },

  i18n: { vueI18n: './i18n.config.ts' },
})
