<script setup>
import { CalendarHeatmap } from 'vue3-calendar-heatmap'

const gitData = ref(null)

onMounted(async () => {
  gitData.value = await $fetch('/api/git')
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
  <div class="flex w-full flex-col">
    <div v-if="gitData?.stats" class="text-sm mt-3 text-ctp-surface2 flex justify-between">
      <p><span class="text-anim-color opacity-70">{{ gitData.stats.totalContributionCount }}</span> contributions in the last year</p>
      <p><span class="text-anim-color opacity-70">{{ gitData.stats.averageContributionsPerDay }}</span> contributions per day</p>
    </div>
    <CalendarHeatmap
      v-if="gitData?.contributions" :values="gitData.contributions" :end-date="new Date()"
      :round="3" :range-color="colorMode.preference === 'dark' ? rangeColorsDark : rangeColorsLight"
      :locale="locales.empty"
      :max="20"
      :tooltip-formatter="(v) => {
        const date = new Date(v.date);
        return `${v.count} contributions on ${date.toLocaleDateString('fr-FR')}`
      }"
      no-data-text="No contributions"
    />
  </div>
</template>
