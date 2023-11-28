<script setup lang="ts">
const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    class="text-3xl hover:text-ctp-yellow rounded-full
    i-heroicons-moon-20-solid dark:i-heroicons-sun-solid"
    @click="toggleColorMode"
  />
</template>
