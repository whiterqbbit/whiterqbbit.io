<script setup>
import { CalendarHeatmap } from 'vue3-calendar-heatmap'

const { t, locale } = useI18n({ useScope: 'local' })

const gitData = ref(null)
const isLoading = ref(true)
onMounted(async () => {
  gitData.value = await $fetch('/api/git')
  isLoading.value = false
})

const colorMode = useColorMode()

const rangeColorsLight = ['#dce0e8', '#dce0e8', '#a5b1f3', '#8c9cf8', '#7287fd', '#546eff']
const rangeColorsDark = ['#1e1e2e', '#1e1e2e', '#495a80', '#5e78a9', '#7496d2', '#89b4fa']

const locales = {
  fr: {
    months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
    days: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    on: 'à',
    less: 'Moins',
    more: 'Plus',
  },
  en: {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    on: 'on',
    less: 'Less',
    more: 'More',
  },
  empty: {
    months: ['', '', '', '', '', '', '', '', '', '', '', '', ''],
    days: ['', '', '', '', '', '', ''],
    on: '',
    less: '',
    more: '',
  },
}
</script>

<template>
  <div v-if="isLoading" class="flex w-full items-center mb-16">
    <Spinner class="m-auto size-20 opacity-50" />
  </div>

  <div v-else class="flex w-full flex-col gap-3">
    <div v-if="gitData?.stats" class="text-sm text-ctp-overlay1 flex flex-wrap justify-between gap-x-6 gap-y-1">
      <p><span class="font-bold text-ctp-text">{{ gitData.stats.totalContributionCount }}</span> {{ t('last_year') }}</p>
      <p><span class="font-bold text-ctp-text">{{ gitData.stats.averageContributionsPerDay }}</span> {{ t('per_day') }}</p>
    </div>
    <!-- rtl : sur mobile la heatmap déborde et le scroll démarre sur les mois récents -->
    <div class="overflow-x-auto [direction:rtl] -mx-4 px-4 sm:mx-0 sm:px-0">
      <CalendarHeatmap
        v-if="gitData?.contributions" class="heatmap [direction:ltr] min-w-[820px] sm:min-w-0"
        :values="gitData.contributions" :end-date="new Date()"
        :round="3" :range-color="colorMode.preference === 'dark' ? rangeColorsDark : rangeColorsLight"
        :locale="{ ...locales[locale], days: locales.empty.days, less: '', more: '' }"
        :max="20"
        :tooltip-formatter="(v) => t('tooltip', { count: v.count, date: new Date(v.date).toLocaleDateString(locale) })"
        :no-data-text="t('no_data')"
      />
    </div>
  </div>
</template>

<style scoped>
.heatmap :deep(.vch__legend__wrapper) {
  display: none;
}

.heatmap :deep(text.vch__month__label) {
  fill: theme('colors.ctp-overlay1.DEFAULT');
  font-family: inherit;
  font-size: 6px;
}
</style>

<i18n lang="yaml">
en:
  last_year: "contributions in the last year"
  per_day: "contributions per day"
  tooltip: "{count} contributions on {date}"
  no_data: "No contributions"
fr:
  last_year: "contributions sur l'année"
  per_day: "contributions par jour"
  tooltip: "{count} contributions le {date}"
  no_data: "Aucune contribution"
</i18n>
