<script setup lang="ts">
import { ref } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const { title } = defineProps<{ title?: string }>()

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
    class="p-4 lg:p-8 overflow-hidden rounded-3xl shadow-xl
    border border-b-0 border-gradient border-ctp-text/10 bg-ctp-mantle
    before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-xl
    group relative before:blur-xl"
  >
    <!-- voir si certaines classes ne sont pas retirables -->
    <div class="relative">
      <div class="">
        <slot name="image" />
      </div>

      <div v-if="title" class="text-2xl font-medium text-anim-color mb-4">
        {{ title }}
      </div>

      <div class="text-base text-subtext0">
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
