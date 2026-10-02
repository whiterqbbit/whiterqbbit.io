<script setup lang="ts">
const title = ref<HTMLHeadingElement>()
const glow = useProximity(title, 200)
</script>

<template>
  <h1 ref="title" class="page-title glow-text w-fit mx-auto" :style="{ '--glow': glow }">
    <slot />
  </h1>
</template>
