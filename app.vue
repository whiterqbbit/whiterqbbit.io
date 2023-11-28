<script setup lang="ts">
const colorMode = useColorMode()
const bg_color = computed(() => colorMode.preference === 'light' ? '#eeeeee' : '#46a34e')
</script>

<template>
  <div>
    <TheHeader />
    <TopographySvg :color="bg_color" class="background" />
    <NuxtPage class="min-h-[90vh]" />
    <!-- <Footer /> -->
  </div>
</template>

<style scoped>
.background {
  @apply absolute top-0 left-0 w-full h-full -z-10;
}
</style>
