<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

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
        <div class="m-auto hidden sm:block sm:text-xl md:text-2xl text-sky hover-target font-black ">Guillaume Bonnefoy</div>
      </NuxtLink>

      <ul class="m-auto flex">
        <li class="flex gap-2 md:gap-6 font-bold  md:text-lg">
          <NuxtLink to="/portfolio" exact-active-class="nav-link"> {{ $t('header.portfolio') }} </NuxtLink>
          <NuxtLink to="/blog" exact-active-class="nav-link"> {{ $t('header.blog') }} </NuxtLink>
          <NuxtLink to="/a-propos" exact-active-class="nav-link"> {{ $t('header.about') }} </NuxtLink>
        </li>
      </ul>

      <div class="my-auto flex gap-1">
        <LocaleButton class="sm:text-sm md:text-base pr-1" />
        <p class="m-auto"> | </p>
        <DarkModeButton class="text-xl sm:text-3xl" />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.group:hover .hover-target {
  @apply raise-color;
}

ul li * {
  @apply font-black;
}

ul li .nav-link {
  @apply text-anim-color font-black underline decoration-ctp-yellow/50 underline-offset-[6px] decoration-2;
}

ul li *:hover {
  @apply raise-color font-black;
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
