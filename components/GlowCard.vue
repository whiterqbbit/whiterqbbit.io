<script setup lang="ts">
import { ref } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const { title, url, source } = defineProps<{
  title?: string
  url?: string
  source?: string
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
    ref="card" :style="{ '--x': `${elementX}px`, '--y': `${elementY}px` }"
    class="flex flex-col p-5 lg:p-7 rounded-3xl
    border border-gradient border-ctp-text/10 hover:border-ctp-text/20 bg-white/70 dark:bg-ctp-base/70 backdrop-blur-sm
    before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-3xl
    transition-all ease-out group relative before:blur-xl duration-500"
    :class="emphasize
      ? 'shadow-[0_0_40px_4px] shadow-ctp-overlay2/30 dark:shadow-ctp-blue/15 hover:dark:shadow-ctp-blue/25'
      : 'hover:shadow-[0_8px_30px_-12px] hover:shadow-ctp-overlay2/40 hover:dark:shadow-ctp-blue/20'"
  >
    <div class="relative flex flex-col flex-1">
      <div v-if="title" class="flex items-start justify-between gap-3 mb-4">
        <h2 class="text-xl sm:text-2xl font-bold tracking-tight text-ctp-text group-hover:text-anim-color">
          {{ title }}
        </h2>
        <div v-if="url || source" class="flex gap-1 text-xl text-ctp-overlay1 mt-0.5">
          <NuxtLink v-if="url" :to="url" target="_blank" :aria-label="`${title} website`" class="i-ci-link transition-fast hover:text-ctp-yellow" />
          <NuxtLink v-if="source" :to="source" target="_blank" :aria-label="`${title} source code`" class="i-ci-github transition-fast hover:text-ctp-yellow" />
        </div>
      </div>

      <div class="flex flex-col flex-1 text-base text-ctp-subtext1">
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
