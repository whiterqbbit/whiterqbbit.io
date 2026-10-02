<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })

useSeoMeta({
  title: () => t('title'),
  description: () => t('seo_description'),
})

const {
  vue2,
  vue3,
  nuxt,
  tailwind,
  unocss,
  typescript,
  chrome,
  ethereum,
  node,
  graphql,
  playwright,
  nodets,
  prisma,
  postgresql,
  react_native,
  expo,
  fastify,
  gemini,
  telegram,
  umami,
  google_analytics,
  react,
  sequelize,
  redis,
  mongodb,
  elasticsearch,
  aws_omniscient,
  aws_ttt,
  aws_calypso,
  terraform,
  docker,
  airtable,
  netlify,
  bootstrap,
  sass,
  html5,
  canvas,
  javascript,
  puppeteer,
  amplify,
  jest,
  vitest,
  cucumber,
} = icons

type Category = 'employed' | 'products' | 'freelance'

interface IProject {
  name: string
  category: Category
  formatted: string
  url?: string
  source?: string
  stack: {
    front: (typeof icons)[keyof typeof icons][]
    back?: (typeof icons)[keyof typeof icons][]
  }
}

const projects: IProject[] = [
  {
    name: 'second_eyes',
    category: 'products',
    formatted: 'Second Eyes',
    stack: {
      front: [react_native, expo, typescript],
      back: [nodets, fastify, prisma, postgresql, gemini, telegram],
    },
    url: 'https://second-eyes.io/',
  },
  {
    name: 'patrowl',
    category: 'employed',
    formatted: 'Patrowl',
    stack: { front: [vue3, typescript, tailwind] },
    url: 'https://patrowl.io/',
  },
  {
    name: 'vitesse',
    category: 'employed',
    formatted: 'Vitesse',
    stack: {
      front: [nuxt, typescript, tailwind, playwright],
      back: [nuxt, redis, postgresql, graphql],
    },
    url: 'https://vitesseautomation.com/',
  },
  {
    name: 'atsora',
    category: 'freelance',
    formatted: 'Atsora',
    stack: { front: [nuxt, typescript, graphql] },
    url: 'https://www.atsora.com/',
  },
  {
    name: 'aestima',
    category: 'freelance',
    formatted: 'Aestima',
    stack: { front: [vue2, tailwind], back: [nodets, mongodb, docker, terraform, puppeteer] },
    url: 'https://www.aestima-immo.com/',
  },
  {
    name: 'ief',
    category: 'products',
    formatted: 'Mon journal IEF',
    stack: {
      front: [vue3, typescript, tailwind],
      back: [nodets, postgresql, prisma, playwright, umami],
    },
    url: 'https://mon-journal-ief.com/',
    source: 'https://github.com/mon-journal-ief',
  },
  {
    name: 'tictactrip',
    category: 'employed',
    formatted: 'Tictactrip',
    stack: {
      front: [react, tailwind, jest],
      back: [nodets, aws_ttt, terraform, postgresql, sequelize, redis, jest],
    },
    url: 'https://www.tictactrip.eu/',
  },
  {
    name: 'omniscient',
    category: 'employed',
    formatted: 'My Omniscient',
    stack: {
      front: [vue2, bootstrap, sass],
      back: [node, aws_omniscient, elasticsearch, mongodb, cucumber],
    },
    url: 'https://myomniscient.com/solutions/application/',
  },
  {
    name: 'kafo',
    category: 'products',
    formatted: 'Kafo',
    stack: {
      front: [vue3, unocss, typescript, vitest],
      back: [nodets, postgresql, prisma, amplify],
    },
    url: 'https://www.kafo.work/',
    // source: 'https://github.com/whiterqbbit/kafo_front_vitesse'
  },
  {
    name: 'camello',
    category: 'freelance',
    formatted: 'Camello',
    stack: { front: [nuxt, tailwind, typescript], back: [nuxt, airtable] },
    url: 'https://www.camello.fr/',
  },
  {
    name: 'moonolith',
    category: 'products',
    formatted: 'Moonolith',
    stack: { front: [html5, javascript, canvas], back: [ethereum] },
    url: 'https://www.youtube.com/watch?v=tp0KJ-fR6Ik',
    source: 'https://github.com/LaGuerrePiece/moonolith',
  },
  {
    name: 'chadguard',
    category: 'products',
    formatted: 'ChadGuard',
    stack: { front: [vue3, tailwind], back: [chrome] },
    url: 'https://chromewebstore.google.com/detail/chadguard/oogpehhghgfaeojjbflgeemilhkhgbhe?hl=fr&pli=1',
    source: 'https://github.com/LaGuerrePiece/ChadGuard',
  },
  {
    name: 'calypso',
    category: 'freelance',
    formatted: 'Calypso',
    stack: { front: [nuxt, tailwind], back: [aws_calypso, docker, terraform, google_analytics] },
    url: 'https://www.calypsobonnefoy.com/',
    source: 'https://github.com/whiterqbbit/calypso_bonnefoy/',
  },
  {
    name: 'whiterqbbit',
    category: 'products',
    formatted: t('whiterqbbit.title'),
    stack: { front: [nuxt, tailwind], back: [netlify, umami] },
    source: 'https://github.com/whiterqbbit/whiterqbbit-website',
  },
]

const categories: Category[] = ['employed', 'freelance', 'products']
const sections = categories.map(category => ({
  category,
  projects: projects.filter(p => p.category === category),
}))
</script>

<template>
  <div class="mx-auto mt-10 sm:mt-16 px-4 sm:px-6 w-full">
    <h1 class="page-title mb-10 sm:mb-14">
      {{ t('title') }}
    </h1>
    <section
      v-for="(section, sectionIdx) in sections"
      :key="section.category"
      class="mb-14 sm:mb-20 last:mb-0"
    >
      <div
        class="slide-enter mb-5 sm:mb-6"
        :style="{ '--enter-stage': sectionIdx * 4, '--enter-step': '80ms' }"
      >
        <h2 class="pb-3 text-lg sm:text-xl font-bold tracking-tight text-ctp-text">
          {{ t(`categories.${section.category}.title`) }}
        </h2>
        <GlowRule />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        <GlowCard
          v-for="(project, idx) in section.projects"
          :key="project.name"
          :title="project.name === 'whiterqbbit' ? t('whiterqbbit.title') : project.formatted"
          :url="project.url"
          :source="project.source"
          class="slide-enter"
          :style="{ '--enter-stage': sectionIdx * 4 + idx + 1, '--enter-step': '80ms' }"
        >
          <p class="text-sm text-ctp-subtext1 leading-relaxed -mt-2">
            {{ t(`${project.name}.description`) }}
          </p>
          <p class="mt-2 text-sm text-ctp-overlay1 italic leading-relaxed">
            {{ t(`${project.name}.tasks`) }}
          </p>

          <div class="mt-auto pt-5 flex flex-col gap-2.5">
            <div v-for="side in (['front', 'back'] as const)" :key="side">
              <div v-if="project.stack[side]" class="flex gap-2">
                <span class="w-11 shrink-0 text-[0.65rem] leading-5 font-bold uppercase tracking-wider text-ctp-overlay0">{{ side }}</span>
                <div class="flex flex-wrap items-start content-start gap-1.5">
                  <UTooltip v-for="tech in project.stack[side]" :key="tech.name" :text="tech.name" :prevent="!('short' in tech)">
                    <span class="tech-chip">
                      <span :class="tech.icon" aria-hidden="true" />
                      {{ 'short' in tech ? tech.short : tech.name }}
                    </span>
                  </UTooltip>
                </div>
              </div>
            </div>
          </div>
        </GlowCard>
      </div>
    </section>
  </div>
</template>

<style scoped>
.tech-chip {
  @apply inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 cursor-default select-none
    text-xs text-ctp-subtext0 bg-ctp-surface0/50 ring-1 ring-inset ring-ctp-surface0
    transition-fast hover:ring-ctp-yellow/50 hover:text-ctp-text;
}
</style>

<i18n lang="yaml">
en:
  title: 'Work history'
  categories:
    employed:
      title: 'Full-time'
    freelance:
      title: 'Freelance & websites'
    products:
      title: 'Side projects'
  seo_description: 'The projects and startups Guillaume Bonnefoy has worked on: Second Eyes, Patrowl, Vitesse, Aestima, Tictactrip, My Omniscient and more — Vue/Nuxt, TypeScript, Node.'
  second_eyes:
    description: 'AI image variation app for artists.'
    tasks: 'Fullstack dev, product, UI/UX'
  patrowl:
    description: 'Pentest as a Service platform.'
    tasks: 'Front-end dev, planning and total makeover of a front-end app, at scale'
  kafo:
    description: 'Coworking find and meet startup.'
    tasks: 'Founder, lead dev, product, UI/UX, user surveys, scrapping'
  vitesse:
    description: 'Industrial IoT startup.'
    tasks: 'Fullstack dev, UI/UX'
  ief:
    description: 'Homeschooling tracking app.'
    tasks: 'Fullstack dev, UI/UX'
  moonolith:
    description: 'Decentralized web3 app. Custom game engine, backend fully on the blockchain.'
    tasks: 'Dev, product, art direction, music'
  chadguard:
    description: 'Chrome extension using AI to block adult content. ~1500 active users.'
    tasks: 'Dev, product, UI/UX'
  omniscient:
    description: 'IoT startup in the construction industry.'
    tasks: 'Fullstack dev, sensor integration, backoffice tools development'
  atsora:
    description: 'Real-time machine monitoring for machining workshops.'
    tasks: 'Front-end dev, UI/UX'
  aestima:
    description: 'SaaS startup in wealth management.'
    tasks: 'Fullstack dev, front refactor of a v1 and dev of a v2'
  tictactrip:
    description: 'Itinerary search engine startup.'
    tasks: 'Backend dev, apps reverse-engineering'
  calypso:
    description: 'Classical artist showcase website. Form, mailing.'
    tasks: 'Dev, design'
  whiterqbbit:
    title: 'This website!'
    description: 'Small static website showcasing my talents!'
    tasks: 'Dev, design'
  camello:
    description: 'Integrated management platform for a condo syndicate management company.'
    tasks: 'Fullstack dev, UI/UX'
fr:
  title: 'Expériences'
  categories:
    employed:
      title: 'CDI'
    freelance:
      title: 'Freelance & sites'
    products:
      title: 'Projets perso'
  seo_description: "Les projets et startups sur lesquels Guillaume Bonnefoy a travaillé : Second Eyes, Patrowl, Vitesse, Aestima, Tictactrip, My Omniscient et d'autres — Vue/Nuxt, TypeScript, Node."
  second_eyes:
    description: "App de variations d'images par IA pour les artistes."
    tasks: 'Dev fullstack, produit, UI/UX'
  patrowl:
    description: 'Plateforme de Pentest as a Service.'
    tasks: "Dev front-end, planification et refonte totale d'une application front-end à l'échelle."
  kafo:
    description: 'Startup recherche et rencontre coworking.'
    tasks: 'Fondateur, lead dev, produit, UI/UX, enquêtes utilisateurs, scrapping'
  vitesse:
    description: 'Startup IoT industriel.'
    tasks: 'Dev fullstack, UI/UX'
  ief:
    description: "Journal de suivi pour l'instruction en famille."
    tasks: 'Dev fullstack, produit, UI/UX'
  moonolith:
    description: 'App web3 décentralisée. Moteur graphique maison, backend entièrement sur la blockchain.'
    tasks: 'Dev, produit, direction artistique, musique'
  chadguard:
    description: 'Extension Chrome utilisant IA pour bloquer le contenu adulte. ~1500 utilisateurs actifs.'
    tasks: 'Dev, produit, UI/UX'
  omniscient:
    description: 'Startup IOT dans le secteur du BTP.'
    tasks: "Dev fullstack, intégration de capteurs, développement d'outils backoffice"
  atsora:
    description: "Suivi en temps réel des machines pour les ateliers d'usinage."
    tasks: 'Dev front-end, UI/UX'
  aestima:
    description: 'Startup SaaS dans la gestion de patrimoine.'
    tasks: "Dev fullstack, refactor front d'une v1 et dev d'une v2"
  tictactrip:
    description: "Startup de moteur de recherche d'itinéraire."
    tasks: "Dev backend, reverse-engineering d'apps"
  calypso:
    description: "Site vitrine d'artiste de style classique. Formulaire, mailing."
    tasks: 'Dev, design'
  whiterqbbit:
    title: 'Ce site-ci!'
    description: 'Petit site statique mettant en valeur mes talents !'
    tasks: 'Dev, design'
  camello:
    description: 'Plateforme de gestion intégrée pour un gestionnaire de copropriétés.'
    tasks: 'Dev, produit, UI/UX'
</i18n>
