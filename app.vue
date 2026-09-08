<script setup lang="ts">
import { topography } from 'hero-patterns'

const { t } = useI18n({ useScope: 'local' })

if (useRuntimeConfig().public.ENVIRONNEMENT === 'local') // sets favicon to 🔮 in dev
  useHead({ link: [{ rel: 'icon', type: 'image/svg+xml', href: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🔮%3C/text%3E%3C/svg%3E` }] })

// carte de partage par défaut (LinkedIn, Slack, X…), surchargeable page par page
const og_image = new URL('/og-image.png', useSiteConfig().url).href
useSeoMeta({
  ogImage: og_image,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/png',
  ogImageAlt: () => t('og_alt'),
  twitterCard: 'summary_large_image',
  twitterImage: og_image,
  twitterImageAlt: () => t('og_alt'),
})

useSchemaOrg([
  definePerson({
    name: 'Guillaume Bonnefoy',
    img: '/img/me_malt.jpg',
    sameAs: [
      'https://www.linkedin.com/in/white-rqbbit/',
      'https://github.com/whiterqbbit',
      'https://gitlab.com/whiterqbbit',
      'https://whiterqbbit.io',
    ],
  }),
  defineWebSite({
    name: 'Guillaume Bonnefoy',
    url: 'https://www.guillaumebonnefoy.com',
  }),
  defineWebPage(),
])

const colorMode = useColorMode()
const bg_color = computed(() => colorMode.preference === 'light' ? '#E6E9EF' : '#1E1E2E')
</script>

<template>
  <div class="min-h-[100vh]" :style="`background-image: ${topography(bg_color, 1)}`">
    <TheHeader />
    <NuxtPage class="max-w-5xl" />
    <TheFooter />

    <NowPlaying />
    <UNotifications />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s ease-in;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.2rem);
}
</style>

<i18n lang="yaml">
fr:
  og_alt: "Guillaume Bonnefoy, développeur fullstack et designer graphique"
en:
  og_alt: "Guillaume Bonnefoy, fullstack developer and graphic designer"
</i18n>
