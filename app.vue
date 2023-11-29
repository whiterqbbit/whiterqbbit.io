<script setup lang="ts">
useHead({
  title: 'Guillaume Bonnefoy',
  meta: [{ name: 'Guillaume Bonnefoy', content: 'Veni, Vidi, Codi' }],
  link: [{ rel: 'icon', type: 'image/svg+xml', href: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ctext y=\'.9em\' font-size=\'90\'%3E🧙‍♂️%3C/text%3E%3C/svg%3E' }],
})

const colorMode = useColorMode()
const bg_color = computed(() => colorMode.preference === 'light' ? '#E6E9EF' : '#1E1E2E')
</script>

<template>
  <TheHeader />
  <TopographySvg :color="bg_color" class="background" />
  <NuxtPage class="min-h-[90vh] max-w-5xl" />
  <TheFooter />
</template>

<style scoped>
.background {
  @apply fixed top-0 left-0 w-full h-full -z-10;
}
</style>
