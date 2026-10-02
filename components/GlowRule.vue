<script setup lang="ts">
import { computed, ref } from 'vue'
import { useElementBounding, useMouse } from '@vueuse/core'

// distance (px) à partir de laquelle le filet commence à s'allumer
const REACH = 160

const rule = ref<HTMLDivElement>()
const { x, y } = useMouse({ type: 'client' })
const { left, top, height } = useElementBounding(rule)

const glow = computed(() => {
  const distance = Math.abs(y.value - (top.value + height.value / 2))
  return Math.max(0, 1 - distance / REACH)
})
</script>

<template>
  <div
    ref="rule"
    class="glow-rule relative h-px bg-ctp-surface0"
    :style="{ '--x': `${x - left}px`, '--glow': glow }"
    aria-hidden="true"
  />
</template>

<style scoped>
/* même spot jaune que la bordure des GlowCard, suit le curseur à l'horizontale */
.glow-rule::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    220px circle at var(--x) 50%,
    theme('colors.ctp-yellow.DEFAULT') 0%,
    transparent 100%
  );
  opacity: var(--glow);
  transition: opacity 0.2s ease-out;
}
</style>
