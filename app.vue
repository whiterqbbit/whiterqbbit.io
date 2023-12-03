<script setup lang="ts">
import { topography } from 'hero-patterns'

useHead({
  title: 'Guillaume Bonnefoy',
  meta: [{ name: 'Guillaume Bonnefoy', content: 'Veni, Vidi, Codi' }],
  link: [{ rel: 'icon', type: 'image/svg+xml', href: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ctext y=\'.9em\' font-size=\'90\'%3E🧙‍♂️%3C/text%3E%3C/svg%3E' }],
})

const colorMode = useColorMode()
const bg_color = computed(() => colorMode.preference === 'light' ? '#E6E9EF' : '#1E1E2E')
</script>

<template>
  <div :style="`background-image: ${topography(bg_color, 1)}`">
    <TheHeader />
    <NuxtPage class="min-h-[80vh] max-w-5xl" />
    <TheFooter />
  </div>
</template>
