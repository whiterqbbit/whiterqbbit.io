<script setup lang="ts">
import { ref } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const { title, url, source, anim } = defineProps<{
  title?: string
  url?: string
  source?: string
  anim?: boolean
  emphasize?: boolean
}>()

const card = ref<HTMLDivElement>()
const { elementX, elementY } = useMouseInElement(card)

const colorMode = useColorMode()

watch(() => colorMode.value, () => {
  const color = colorMode.value === 'light' ? '#89B4FA20' : '#89B4FA30'
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
    class="p-4 lg:p-8 overflow-hidden rounded-3xl
    border border-gradient border-ctp-text/10 bg-ctp-mantle
    before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-xl
    transition-all ease-out group relative before:blur-xl"
    :class="[anim ? 'hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-0.5rem_12px_25px_-5px] duration-200' : 'hover:shadow-[0_0_30px_3px] duration-500',
             emphasize ? 'shadow-[0_0_80px_13px] shadow-ctp-overlay2/60 hover:shadow-ctp-overlay2/60 dark:shadow-ctp-blue/30 hover:dark:shadow-ctp-blue/30' : 'hover:shadow-ctp-surface0 hover:dark:shadow-ctp-blue/10']"
  >
    <!-- voir si certaines classes ne sont pas retirables -->
    <div class="relative">
      <div v-if="title" class="flex gap-4 place-content-center text-2xl">
        <div class="text-2xl font-semibold text-anim-color mb-4">
          {{ title }}
        </div>
        <div class="mt-1">
          <NuxtLink v-if="url" class="i-ci-link transition-fast hover:text-ctp-yellow" :to="url" target="_blank" />
          <NuxtLink v-if="source" class="i-ci-github transition-fast hover:text-ctp-yellow" :to="source" target="_blank" />
        </div>
      </div>

      <div class="">
        <slot name="image" />
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
