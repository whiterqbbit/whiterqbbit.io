<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { t } = useI18n({ useScope: 'local' })
const { y } = useWindowScroll()

const route = useRoute()
const path = ref(route.path)

watch(() => route.path, newPath => path.value = newPath)
</script>

<template>
  <nav
    class="sticky top-0 z-50 transition-slow rounded-b-3xl bg-ctp-mantle"
    :class="y > 0 ? 'bg-opacity-50 dark:bg-opacity-70 backdrop-blur-sm py-1' : 'bg-opacity-0 dark:bg-opacity-0 py-4'"
  >
    <div name="container" class="flex max-w-5xl m-auto px-2 sm:px-4 md:px-6">
      <NuxtLink to="/" class="group flex gap-2 sm:gap-4">
        <NuxtImg
          src="/whiterqbbit.svg" width="48" height="48"
          class="w-10 h-10 md:w-12 md:h-12 autoSlideIn m-auto rounded-full transition-slow
                shadow-[0_0_14px_3px] shadow-ctp-blue/25 hover:shadow-[0_0_20px_4px] hover:shadow-ctp-blue/30"
        />
        <div class="m-auto hidden sm:block sm:text-xl md:text-2xl hover-target font-black tracking-tight">Guillaume Bonnefoy</div>
      </NuxtLink>

      <ul class="m-auto flex">
        <li class="flex gap-3 md:gap-6 md:text-lg">
          <NuxtLink to="/work-history" exact-active-class="nav-link"> {{ t('work_history') }} </NuxtLink>
          <NuxtLink to="/a-propos" exact-active-class="nav-link"> {{ t('about') }} </NuxtLink>
        </li>
      </ul>

      <div class="my-auto flex items-center gap-3">
        <LocaleButton class="text-sm md:text-base" />
        <span class="h-5 w-px bg-ctp-surface2" aria-hidden="true" />
        <DarkModeButton class="text-xl sm:text-2xl" />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.group:hover .hover-target {
  @apply raise-color;
}

ul li a {
  @apply font-bold text-ctp-subtext0 transition-fast hover:text-ctp-text;
}

ul li .nav-link {
  @apply text-ctp-text underline decoration-ctp-yellow decoration-2 underline-offset-[8px];
}

/* used by the logo */
@keyframes slideInFromLeft {
  0% {
    opacity: 0;
    transform: translate3d(-40px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.autoSlideIn {
  opacity: 0;
  animation: slideInFromLeft 0.65s ease-out forwards;
}
</style>

<i18n lang="yaml">
en:
  work_history: 'Work history'
  about: 'About'
fr:
  work_history: 'Expériences'
  about: 'À Propos'
</i18n>
