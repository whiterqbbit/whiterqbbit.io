<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()

const route = useRoute()
const path = ref(route.path)

watch(() => route.path, newPath => path.value = newPath)
</script>

<template>
  <nav
    class="sticky top-0 z-50 transition-all duration-1000 rounded-b-3xl backdrop-blur-sm"
    :class="y > 0 ? 'bg-opacity-50 dark:bg-opacity-70 py-0' : 'bg-opacity-0 dark:bg-opacity-0 py-3'"
  >
    <div name="container" class="flex max-w-5xl m-auto font-bold px-2 sm:px-4 md:px-6 lg:px-0">
      <NuxtLink to="/" class="flex gap-2 sm:gap-4">
        <NuxtImg src="/catppuccin_logo.png" width="48" height="48" class="w-10 h-10 md:w-12 md:h-12 m-auto rounded-full" />
        <div class="m-auto sm:text-xl md:text-2xl text-sky">Guillaume Bonnefoy</div>
      </NuxtLink>

      <ul class="m-auto">
        <li class="p-2 sm:p-3 flex gap-2 md:gap-6 text-sm sm:text-base md:text-lg">
          <NuxtLink to="/portfolio" exact-active-class="nav-link"> {{ $t('header.portfolio') }} </NuxtLink>
          <NuxtLink to="/blog" exact-active-class="nav-link"> {{ $t('header.blog') }} </NuxtLink>
          <NuxtLink to="/a-propos" exact-active-class="nav-link"> {{ $t('header.about') }} </NuxtLink>
        </li>
      </ul>

      <div class="my-auto">
        <DarkModeButton />
        <!-- <LocaleButton /> -->
      </div>
    </div>
  </nav>
</template>

<style scoped>
ul li * {
  @apply hover-zoom;
}

ul li .nav-link {
  @apply text-anim-color font-black underline decoration-ctp-yellow/50 underline-offset-[6px] decoration-2;
}

ul li *:hover {
  @apply hover:text-anim-color hover:scale-105 font-black;
}
</style>
