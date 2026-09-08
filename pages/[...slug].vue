<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })

useSeoMeta({
  title: () => t('title'),
})
</script>

<template>
  <NotFound title="404 frero" content="wsh" />
</template>

<i18n lang="yaml">
fr:
  title: "Page introuvable"
en:
  title: "Page not found"
</i18n>
