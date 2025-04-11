<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
const { vue2, vue3, nuxt, tailwind, unocss, typescript, chrome, ethereum, node, graphql, playwright, nodets, prisma, postgresql, umami, google_analytics, react, sequelize, redis, mongodb, elasticsearch, aws_omniscient, aws_ttt, aws_calypso, terraform, docker, airtable, netlify, bootstrap, sass, html5, canvas, javascript, puppeteer, amplify, jest, vitest, cucumber } = icons

interface IProject {
  name: string
  formatted: string
  url?: string
  source?: string
  stack: { front: typeof icons[keyof typeof icons][], back: typeof icons[keyof typeof icons][] }
}

const projects: IProject[] = [
  {
    name: 'patrowl',
    formatted: 'Patrowl',
    stack: { front: [vue3, typescript, tailwind] },
    url: 'https://patrowl.io/',
  },
  {
    name: 'vitesse',
    formatted: 'Vitesse',
    stack: { front: [nuxt, typescript, tailwind, playwright], back: [nuxt, redis, postgresql, graphql] },
    url: 'https://vitesseautomation.com/',
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
    name: 'omniscient',
    formatted: 'My Omniscient',
    stack: { front: [vue2, bootstrap, sass], back: [node, aws_omniscient, elasticsearch, mongodb, cucumber] },
    url: 'https://myomniscient.com/solutions/application/',
  },
  {
    name: 'kafo',
    formatted: 'Kafo',
    stack: { front: [vue3, unocss, typescript, vitest], back: [nodets, postgresql, prisma, amplify] },
    url: 'https://www.kafo.work/',
    // source: 'https://github.com/whiterqbbit/kafo_front_vitesse'
  },
  {
    name: 'camello',
    formatted: 'Camello',
    stack: { front: [nuxt, tailwind, typescript], back: [nuxt, airtable] },
    url: 'https://www.camello.fr/',
  },
  {
    name: 'moonolith',
    formatted: 'Moonolith',
    stack: { front: [html5, javascript, canvas], back: [ethereum] },
    url: 'https://www.moonolith.io/',
    source: 'https://github.com/LaGuerrePiece/moonolith',
  },
  {
    name: 'chadguard',
    formatted: 'ChadGuard',
    stack: { front: [vue3, tailwind], back: [chrome] },
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
    formatted: t('whiterqbbit.title'),
    stack: { front: [nuxt, tailwind], back: [netlify, umami] },
    source: 'https://github.com/whiterqbbit/whiterqbbit-website',
  },
]
</script>

<template>
  <div class="flex flex-col gap-4 m-auto py-4">
    <div class="text-2xl sm:text-4xl text-center md:mb-4 lg:mb-8">
      {{ t('title') }}
    </div>
    <div class="flex flex-wrap justify-evenly w-full gap-4">
      <GlowCard
      v-for="project, idx in projects" :key="project.name"
      :title="project.name === 'whiterqbbit' ? t('whiterqbbit.title') : project.formatted" 
      :url="project.url" :source="project.source"
      class="w-80 overflow-visible slide-enter" :style="{ '--enter-stage': idx, '--enter-step': '130ms' }"
      >
        <div class="text-sm flex flex-col gap-1" v-html="t(`${project.name}.description`)" />
        <div class="mt-2 text-sm italic text-ctp-overlay2 hover:text-anim-color-light"> {{ t(`${project.name}.tasks`) }} </div>
        <div class="flex flex-col mt-4 gap-2 text-lg cursor-default text-ctp-overlay2 hover:text-ctp-text transition-fast">
          <div class="flex flex-row gap-2">
            <span class="text-sm text-ctp-overlay2">Front :</span>
            <div v-for="tech in project.stack.front" :key="tech.name">
              <UTooltip :text="tech.name">
                <li :class="tech.icon" />
              </UTooltip>
            </div>
          </div>

          <div v-if="project.stack.back" class="flex flex-row gap-2">
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

<i18n lang="yaml">
en:
  title: "Work history"
  patrowl:
    description: "Cybersecurity all-in-one platform."
    tasks: "Front-end dev, planning and remake of a front-end app, at scale"
  kafo:
    description: "Coworking find and meet startup."
    tasks: "Founder, lead dev, product, UI/UX, user surveys, scrapping"
  vitesse:
    description: "Industrial IoT startup."
    tasks: "Fullstack dev, UI/UX"
  moonolith:
    description: "Decentralized web3 app. Custom game engine, backend fully on the blockchain."
    tasks: "Dev, product, art direction, music"
  chadguard:
    description: "Chrome extension using AI to block adult content. ~1500 active users."
    tasks: "Dev, product, UI/UX"
  omniscient:
    description: "IoT startup in the construction industry."
    tasks: "Fullstack dev, sensor integration, backoffice tools development"
  aestima:
    description: "SaaS startup in wealth management."
    tasks: "Fullstack dev, front refactor of a v1 and dev of a v2"
  tictactrip:
    description: "Itinerary search engine startup."
    tasks: "Backend dev, apps reverse-engineering"
  calypso:
    description: "Classical artist showcase website. Form, mailing."
    tasks: "Dev, design"
  whiterqbbit:
    title: "This website!"
    description: "Small static website showcasing my talents!"
    tasks: "Dev, design"
  camello:
    description: "Integrated management platform for a condo syndicate management company."
    tasks: "Fullstack dev, UI/UX"
fr:
  title: "Expériences"
  kafo:
    description: "Startup recherche et rencontre coworking."
    tasks: "Fondateur, lead dev, produit, UI/UX, enquêtes utilisateurs, scrapping"
  vitesse:
    description: "Startup IoT industriel."
    tasks: "Dev fullstack, UI/UX"
  moonolith:
    description: "App web3 décentralisée. Moteur graphique maison, backend entièrement sur la blockchain."
    tasks: "Dev, produit, direction artistique, musique"
  chadguard:
    description: "Extension Chrome utilisant IA pour bloquer le contenu adulte. ~1500 utilisateurs actifs."
    tasks: "Dev, produit, UI/UX"
  omniscient:
    description: "Startup IOT dans le secteur du BTP."
    tasks: "Dev fullstack, intégration de capteurs, développement d'outils backoffice"
  aestima:
    description: "Startup SaaS dans la gestion de patrimoine."
    tasks: "Dev fullstack, refactor front d'une v1 et dev d'une v2"
  tictactrip:
    description: "Startup de moteur de recherche d'itinéraire."
    tasks: "Dev backend, reverse-engineering d'apps"
  calypso:
    description: "Site vitrine d'artiste de style classique. Formulaire, mailing."
    tasks: "Dev, design"
  whiterqbbit:
    title: "Ce site-ci!"
    description: "Petit site statique mettant en valeur mes talents !"
    tasks: "Dev, design"
  camello:
    description: "Plateforme de gestion intégrée pour un gestionnaire de copropriétés."
    tasks: "Dev, produit, UI/UX"
</i18n>
