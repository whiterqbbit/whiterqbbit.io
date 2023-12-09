<script setup lang="ts">
const { vue23, nuxt, tailwind, unocss, typescript, node, nodets, prisma, react, sequelize, postgresql, mongodb, openai, elasticsearch, firebase, terraform, docker, netlify, aws, bootstrap, sass, redis, lighthouse, puppeteer, amplify, jest, vitest, cucumber, figma, i18n, express, cypress, metabase, google_analytics, umami, cloudwatch, radix, macOS, debian, arch, lambda, github_actions, s3, ec2, route53, step_functions, iot_core, photoshop } = icons

const short_stack = [
  { name: 'Front', tech: [typescript, vue23, nuxt, tailwind, vitest] },
  { name: 'Back', tech: [nodets, express, postgresql, mongodb, redis, jest] },
  { name: 'Infra', tech: [docker, terraform, aws] },
  { name: 'Design', tech: [figma, photoshop] },
]

const long_stack = [
  { name: 'Front', tech: [typescript, vue23, nuxt, react, tailwind, bootstrap, sass, unocss, radix, i18n, lighthouse, jest, vitest, cypress] },
  { name: 'Back', tech: [nodets, node, express, openai, puppeteer, jest, cucumber] },
  { name: 'Database', tech: [postgresql, mongodb, prisma, sequelize, redis, elasticsearch, firebase] },
  { name: 'Monitoring', tech: [metabase, cloudwatch, umami, google_analytics] },
  { name: 'Infra', tech: [terraform, docker, github_actions, netlify] },
  { name: 'AWS', tech: [s3, lambda, ec2, route53, amplify, cloudwatch, step_functions, iot_core] },
  { name: 'OS', tech: [arch, debian, macOS] },
  { name: 'Design', tech: [figma, photoshop] },
]

const is_short_stack = ref(true)
const current_stack = computed(() => is_short_stack.value ? short_stack : long_stack)
</script>

<template>
  <div class="bg-ctp-base p-12 rounded-3xl">
    Un panorama des technologies avec lesquelles j'ai travaillé :
    <div class="mt-4 flex flex-wrap gap-4">
      <div
        v-for="type in current_stack" :key="type.name"
        class="flex gap-2 transition-slow rounded-xl px-2 pt-4 pb-2 w-fit
      border-2 border-ctp-surface2 hover:border-ctp-overlay2"
      >
        <div class="place-self-center font-semibold text-ctp-overlay2">{{ type.name }} :</div>
        <ul v-for="tech in type.tech" :key="tech.name">
          <UTooltip :text="tech.name">
            <li :class="tech.icon" class="text-4xl hover:text-ctp-sky transition-slow" />
          </UTooltip>
        </ul>
      </div>
    </div>
    <UButton class="mt-4" @click="is_short_stack = !is_short_stack">{{ is_short_stack ? 'Voir plus' : 'Voir moins' }}</UButton>
  </div>
</template>
