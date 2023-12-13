<script setup lang="ts">
const { locale } = useI18n()
function toggle_locale() {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}
</script>

<template>
  <div id="language_button" class="font-bold hover:text-anim-color place-self-center">
    <button @click="toggle_locale">{{ locale === 'fr' ? 'FR' : 'EN' }}</button>
  </div>
</template>
