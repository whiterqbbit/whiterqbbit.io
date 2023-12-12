<script setup lang="ts">
import { topography } from 'hero-patterns'

if (useRuntimeConfig().public.ENVIRONNEMENT === 'local') // sets favicon to 🔮 in dev
  useHead({ link: [{ rel: 'icon', type: 'image/svg+xml', href: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🔮%3C/text%3E%3C/svg%3E` }] })

useSchemaOrg([
  definePerson({
    name: 'Guillaume Bonnefoy',
    img: '/public/me_malt.jpg',
    sameAs: [
      'https://www.linkedin.com/in/white-rqbbit/',
      'https://github.com/whiterqbbit',
      'https://gitlab.com/whiterqbbit',
      'https://www.guillaumebonnefoy.com',
    ],
  }),
  defineWebSite({
    name: 'Guillaume Bonnefoy',
    url: 'https://whiterqbbit.io',
  }),
  defineWebPage(),
])

const colorMode = useColorMode()
const bg_color = computed(() => colorMode.preference === 'light' ? '#E6E9EF' : '#1E1E2E')
</script>

<template>
  <div :style="`background-image: ${topography(bg_color, 1)}`">
    <TheHeader />
    <NuxtPage class="min-h-[80vh] max-w-5xl" />
    <TheFooter />

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
