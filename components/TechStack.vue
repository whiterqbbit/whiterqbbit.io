<script setup lang="ts">
const { vue23, nuxt, tailwind, unocss, typescript, node, nodets, playwright, postman, prisma, react, graphql, sentry, sequelize, postgresql, mongodb, openai, elasticsearch, firebase, terraform, docker, netlify, aws, bootstrap, sass, redis, lighthouse, puppeteer, amplify, jest, vitest, cucumber, figma, i18n, express, cypress, metabase, google_analytics, umami, cloudwatch, radix, macOS, debian, arch, lambda, github_actions, s3, ec2, route53, step_functions, iot_core, photoshop } = icons
const { t } = useI18n({ useScope: 'local' })

const short_stack = [
  { name: 'Front', tech: [typescript, vue23, nuxt, tailwind] },
  { name: 'Back', tech: [nodets, express, postgresql, mongodb] },
  { name: 'Infra', tech: [docker, terraform, aws] },
  { name: 'Design', tech: [figma, photoshop] },
]

const long_stack = [
  { name: 'Front', tech: [typescript, vue23, nuxt, react, tailwind, bootstrap, sass, unocss, radix, i18n, lighthouse] },
  { name: 'Back', tech: [nodets, node, express, graphql, openai] },
  { name: 'Database', tech: [postgresql, mongodb, prisma, sequelize, redis, elasticsearch, firebase] },
  { name: 'Monitoring', tech: [metabase, sentry, cloudwatch, umami, google_analytics] },
  { name: 'Infra', tech: [terraform, docker, github_actions, netlify] },
  { name: 'Test', tech: [vitest, jest, playwright, cypress, postman, puppeteer, cucumber] },
  { name: 'AWS', tech: [s3, lambda, ec2, route53, amplify, cloudwatch, step_functions, iot_core] },
  { name: 'OS', tech: [arch, debian, macOS] },
  { name: 'Design', tech: [figma, photoshop] },
]

const is_short_stack = ref(true)
const current_stack = computed(() => is_short_stack.value ? short_stack : long_stack)
</script>

<template>
  <div class="rounded-3xl">
    <div class="mt-4 flex flex-wrap gap-4">
      <div
        v-for="type in current_stack" :key="type.name"
        class="flex gap-2 bg-ctp-mantle transition-slow rounded-xl px-4 pt-4 pb-2 w-fit
              border border-ctp-surface0 hover:border-ctp-overlay2"
      >
        <div class="font-semibold text-ctp-overlay2 min-w-fit">{{ type.name }} :</div>
        <div class="flex flex-wrap gap-2">
          <ul v-for="tech in type.tech" :key="tech.name" class="flex">
            <UTooltip :text="tech.name">
              <li :class="tech.icon" class="text-xl hover:text-ctp-sky transition-slow" />
            </UTooltip>
          </ul>
        </div>
      </div>
    </div>
    <UButton :icon="is_short_stack ? 'i-ci-caret-down-md' : 'i-ci-caret-up-md'" class="mt-8 pr-4" @click="is_short_stack = !is_short_stack">
      {{ is_short_stack ? t('less_details') : t('less_buzzwords') }}
    </UButton>
  </div>
</template>

<i18n lang="yaml">
en:
  less_details: More details
  less_buzzwords: Less buzzwords
fr:
  less_details: En détail
  less_buzzwords: Moins de buzzwords
</i18n>
