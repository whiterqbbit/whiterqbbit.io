<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
</script>

<template>
  <nav class="rounded-t-3xl h-20 flex flex-col gap-5 my-10">
    <ul class="flex max-w-5xl mx-auto">
      <li class="m-auto flex gap-6 md:gap-8 text-3xl">
        <NuxtLink class="i-ci-mail" to="mailto:whiterqbbit@proton.me" target="_blank" />
        <NuxtLink class="i-ci-github" to="https://www.github.com/whiterqbbit" target="_blank" />
        <NuxtLink class="i-ci-linkedin" to="https://www.linkedin.com/in/white-rqbbit/" target="_blank" />
      </li>
    </ul>
    <div class="text-center text-sm text-ctp-overlay1">
      {{ t('made_by') }}<br>
      <NuxtLink class="hover:text-anim-color" to="https://www.github.com/whiterqbbit/whiterqbbit-website" target="_blank">
        {{ t('source') }}
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
ul li * {
  @apply transition-very-fast;
}

ul li *:hover {
  @apply text-ctp-flamingo scale-105;
}
</style>

<i18n lang="yaml">
en:
  made_by: "Made by my little hands with Nuxt."
  source: "Source code on Github"
fr:
  made_by: "Fait par mes petites mains avec Nuxt."
  source: "Code source sur Github"
</i18n>
