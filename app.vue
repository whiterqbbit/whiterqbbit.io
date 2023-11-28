<script setup lang="ts">
const colorMode = useColorMode()
const bg_color = computed(() => colorMode.preference === 'light' ? '#E6E9EF' : '#1E1E2E')
</script>

<template>
  <TheHeader />
  <TopographySvg :color="bg_color" class="background" />
  <NuxtPage class="min-h-[90vh] max-w-5xl" />
  <!-- <Footer /> -->
</template>

<style scoped>
.background {
  @apply fixed top-0 left-0 w-full h-full -z-10;
}
</style>
