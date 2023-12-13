<script setup lang="ts">
const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    class="hover:text-ctp-yellow rounded-full hover-zoom place-self-center m-auto
    i-heroicons-moon-20-solid dark:i-heroicons-sun-solid"
    @click="toggleColorMode"
  />
</template>
