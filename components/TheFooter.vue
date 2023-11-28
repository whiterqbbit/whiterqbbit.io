<template>
  <nav class="rounded-t-3xl">
    <ul class="h-20 flex max-w-5xl m-auto">
      <li class="m-auto flex gap-6 md:gap-8 text-3xl">
        <NuxtLink class="i-ci-mail" to="mailto:whiterqbbit@proton.me" target="_blank" />
        <NuxtLink class="i-ci-github" to="https://www.github.com/whiterqbbit" target="_blank" />
        <NuxtLink class="i-ci-linkedin" to="https://www.linkedin.com/in/white-rqbbit/" target="_blank" />
      </li>
    </ul>
  </nav>
</template>

<style scoped>
ul li * {
  @apply hover-fast-transition;
}

ul li *:hover {
  @apply text-ctp-flamingo scale-105;
}
</style>
