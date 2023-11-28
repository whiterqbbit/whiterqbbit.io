<script setup lang="ts">
import { ref } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const card = ref<HTMLDivElement>()
const { elementX, elementY } = useMouseInElement(card)

const colorMode = useColorMode()

watch(() => colorMode.value, () => {
  const color = colorMode.value === 'light' ? '#EED49F45' : '#89B4FA30'
  if (card.value)
    card.value.style.setProperty('--gradient-color', color)
})
</script>

<template>
  <div
    ref="card"
    :style="{
      '--x': `${elementX}px`,
      '--y': `${elementY}px`,
    }"
    class="p-4 lg:p-8 overflow-hidden rounded-2xl
    border border-b-0 border-gradient border-ctp-text/10 bg-ctp-mantle
    before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-xl
    group relative before:blur-xl"
  >
    <!-- voir si certaines classes ne sont pas retirables -->
    <div class="relative">
      <div class="">
        <slot name="image" />
      </div>

      <div class="text-2xl font-medium">
        <slot name="title" />
      </div>

      <div class="mt-3 text-base text-subtext0">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.border-gradient::before {
  background: radial-gradient(
    350px circle at var(--x) var(--y),
    var(--gradient-color, #89B4FA30) 0%,
    transparent 100%
  );
}
</style>
