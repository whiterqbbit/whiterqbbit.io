<script setup lang="ts">
const { locale } = useI18n()
function toggle_locale() {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}
</script>

<template>
  <div id="language_button" class="font-bold text-ctp-subtext0 hover:text-ctp-text transition-fast place-self-center">
    <button type="button" :aria-label="locale === 'fr' ? 'Switch to English' : 'Passer en français'" @click="toggle_locale">{{ locale === 'fr' ? 'FR' : 'EN' }}</button>
  </div>
</template>
