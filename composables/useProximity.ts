import { computed } from 'vue'
import { type MaybeElementRef, useElementBounding, useMouse } from '@vueuse/core'

/** 0 quand le curseur est à `reach` px ou plus de l'élément, 1 dessus */
export function useProximity(target: MaybeElementRef, reach: number) {
  const { x, y } = useMouse({ type: 'client' })
  const { left, top, right, bottom, width } = useElementBounding(target)

  return computed(() => {
    // pas encore mesuré (SSR) : éteint
    if (!width.value)
      return 0
    const dx = Math.max(0, left.value - x.value, x.value - right.value)
    const dy = Math.max(0, top.value - y.value, y.value - bottom.value)
    return Math.max(0, 1 - Math.hypot(dx, dy) / reach)
  })
}
