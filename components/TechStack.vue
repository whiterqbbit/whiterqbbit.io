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
  <div>
    <div class="flex flex-wrap gap-3">
      <div
        v-for="type in current_stack" :key="type.name"
        class="flex items-center gap-3 rounded-xl px-3 py-2 w-fit
              bg-ctp-crust/40 dark:bg-ctp-mantle ring-1 ring-inset ring-ctp-surface0 transition-slow hover:ring-ctp-surface2"
      >
        <span class="text-xs font-bold uppercase tracking-wider text-ctp-overlay1">{{ type.name }}</span>
        <ul class="flex flex-wrap gap-2 text-xl text-ctp-subtext1">
          <li v-for="tech in type.tech" :key="tech.name" class="flex">
            <UTooltip :text="tech.name">
              <span :class="tech.icon" :aria-label="tech.name" role="img" class="hover:text-ctp-sky transition-fast" />
            </UTooltip>
          </li>
        </ul>
      </div>
    </div>
    <UButton
      :icon="is_short_stack ? 'i-ci-caret-down-md' : 'i-ci-caret-up-md'"
      variant="soft" class="mt-6" @click="is_short_stack = !is_short_stack"
    >
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
