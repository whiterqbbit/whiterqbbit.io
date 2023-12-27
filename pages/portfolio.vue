<script setup lang="ts">
const { vue2, vue3, nuxt, tailwind, unocss, typescript, chrome, ethereum, node, nodets, prisma, postgresql, umami, google_analytics, react, sequelize, redis, mongodb, elasticsearch, aws_omniscient, aws_ttt, aws_calypso, terraform, docker, netlify, bootstrap, sass, html5, javascript, puppeteer, amplify, jest, vitest, cucumber } = icons
const { t } = useI18n()

interface IProject {
  name: string
  formatted: string
  url?: string
  source?: string
  stack: { front: typeof icons[keyof typeof icons][], back: typeof icons[keyof typeof icons][] }
}

const projects: IProject[] = [
  {
    name: 'kafo',
    formatted: 'Kafo',
    stack: { front: [vue3, unocss, typescript, vitest], back: [nodets, postgresql, prisma, amplify] },
    url: 'https://www.kafo.work/',
    // source: 'https://github.com/whiterqbbit/kafo_front_vitesse'
  },
  {
    name: 'omniscient',
    formatted: 'My Omniscient',
    stack: { front: [vue2, bootstrap, sass], back: [node, aws_omniscient, elasticsearch, mongodb, cucumber] },
    url: 'https://myomniscient.com/solutions/application/',
  },
  {
    name: 'aestima',
    formatted: 'Aestima',
    stack: { front: [vue2, tailwind], back: [nodets, mongodb, docker, terraform, puppeteer] },
    url: 'https://www.aestima-immo.com/',
  },
  {
    name: 'tictactrip',
    formatted: 'Tictactrip',
    stack: { front: [react, tailwind, jest], back: [nodets, aws_ttt, terraform, postgresql, sequelize, redis, jest] },
    url: 'https://www.tictactrip.eu/',
  },
  {
    name: 'moonolith',
    formatted: 'Moonolith',
    stack: { front: [html5, javascript], back: [ethereum] },
    url: 'https://www.moonolith.io/',
    source: 'https://github.com/LaGuerrePiece/moonolith',
  },
  {
    name: 'chadguard',
    formatted: 'ChadGuard',
    stack: { front: [vue2, tailwind], back: [chrome] },
    url: 'https://chromewebstore.google.com/detail/chadguard/oogpehhghgfaeojjbflgeemilhkhgbhe?hl=fr&pli=1',
    source: 'https://github.com/LaGuerrePiece/ChadGuard',
  },
  {
    name: 'calypso',
    formatted: 'Calypso',
    stack: { front: [nuxt, tailwind], back: [aws_calypso, docker, terraform, google_analytics] },
    url: 'https://www.calypsobonnefoy.com/',
    source: 'https://github.com/whiterqbbit/calypso_bonnefoy/',
  },
  {
    name: 'whiterqbbit',
    formatted: 'Ce site-ci!',
    stack: { front: [nuxt, tailwind], back: [netlify, umami] },
    source: 'https://github.com/whiterqbbit/whiterqbbit-website',
  },
]
</script>

<template>
  <div class="flex flex-col gap-4 m-auto py-4">
    <div class="text-2xl sm:text-4xl text-center md:mb-4 lg:mb-8">
      {{ $t('portfolio.title') }}
    </div>
    <div class="flex flex-wrap justify-evenly w-full gap-4">
      <GlowCard
        v-for="project, idx in projects" :key="project.name" :title="project.formatted" :url="project.url" :source="project.source"
        class="w-80 overflow-visible slide-enter" :style="{ '--enter-stage': idx, '--enter-step': '130ms' }"
      >
        <div class="text-sm flex flex-col gap-1" v-html="t(`portfolio.${project.name}.description`)" />
        <div class="mt-2 text-sm italic text-ctp-overlay2 hover:text-anim-color-light"> {{ $t(`portfolio.${project.name}.tasks`) }} </div>
        <div class="flex flex-col mt-4 gap-2 text-lg cursor-default text-ctp-overlay2 hover:text-ctp-text transition-fast">
          <div class="flex flex-row gap-2">
            <span class="text-sm text-ctp-overlay2">Front :</span>
            <div v-for="tech in project.stack.front" :key="tech.name">
              <UTooltip :text="tech.name">
                <li :class="tech.icon" />
              </UTooltip>
            </div>
          </div>

          <div class="flex flex-row gap-2">
            <span class="text-sm text-ctp-overlay2">Back :</span>
            <div v-for="tech in project.stack.back" :key="tech.name">
              <UTooltip :text="tech.name">
                <li :class="tech.icon" />
              </UTooltip>
            </div>
          </div>
        </div>
      </GlowCard>
    </div>
  </div>
</template>
