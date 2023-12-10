<script setup lang="ts">
import { topography } from 'hero-patterns'

const env_is_local = useRuntimeConfig().public.ENVIRONNEMENT === 'local'
const emoji = env_is_local ? '🔮' : '🐇'

useHead({
  title: env_is_local ? 'LOC - Guillaume Bonnefoy' : 'Guillaume Bonnefoy',
  meta: [{ name: 'Guillaume Bonnefoy', content: 'Veni, Vidi, Codi' }],
  link: [{ rel: 'icon', type: 'image/svg+xml', href: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E${emoji}%3C/text%3E%3C/svg%3E` }],
})

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
