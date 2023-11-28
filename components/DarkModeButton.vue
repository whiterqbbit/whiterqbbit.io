<script setup lang="ts">
const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    class="text-xl p-2 rounded-full hover:bg-orange-50 dark:hover:bg-slate-600
    i-heroicons-moon-20-solid dark:i-heroicons-sun-20-solid"
    @click="toggleColorMode"
  />
</template>
