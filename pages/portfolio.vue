<script setup lang="ts">
const { vue2, vue3, nuxt, tailwind, unocss, typescript, chrome, ethereum, node, nodets, prisma, umami, google_analytics, react, sequelize, redis, mongodb, elasticsearch, aws_omniscient, aws_ttt, aws_calypso, terraform, docker, netlify, bootstrap, sass, html5, javascript, puppeteer, amplify, jest, vitest, cucumber } = icons

interface IProject {
  name: string
  description: string
  image?: string
  url?: string
  tasks?: string
  source?: string
  stack: { front: typeof icons[keyof typeof icons][], back: typeof icons[keyof typeof icons][] }
}

const projects: IProject[] = [
  {
    name: 'Kafo',
    description: 'Startup marketplace et rencontre coworking.',
    tasks: 'Lead dev, produit, UI/UX, enquêtes utilisateurs, scrapping',
    stack: { front: [vue3, unocss, typescript, vitest], back: [nodets, prisma, amplify] },
    url: 'https://www.kafo.work/',
    // source: 'https://github.com/whiterqbbit/kafo_front_vitesse'
  },
  {
    name: 'Moonolith',
    description: `<p>App web3 décentralisée.</p>
                  <p>Moteur graphique maison, backend entièrement sur la blockchain.</p>`,
    tasks: 'Dev, produit, direction artistique, musique',
    stack: { front: [html5, javascript], back: [ethereum] },
    url: 'https://www.moonolith.io/',
    source: 'https://github.com/LaGuerrePiece/moonolith',
  },
  {
    name: 'ChadGuard',
    description: `<p>Extension Chrome utilisant IA pour bloquer le contenu adulte.</p>
                    <p>~3000 utilisateurs actifs.</p>`,
    tasks: 'Dev, produit, UI/UX',
    stack: { front: [vue2, tailwind], back: [chrome] },
    url: 'https://chromewebstore.google.com/detail/chadguard/oogpehhghgfaeojjbflgeemilhkhgbhe?hl=fr&pli=1',
    source: 'https://github.com/LaGuerrePiece/ChadGuard',
  },
  {
    name: 'My Omniscient',
    description: 'Startup IOT dans le secteur du BTP.',
    tasks: `Dev fullstack: intégration de capteurs, développement d'outils backoffice`,
    stack: { front: [vue2, bootstrap, sass], back: [node, aws_omniscient, elasticsearch, mongodb, cucumber] },
    url: 'https://myomniscient.com/solutions/application/',
  },
  {
    name: 'Aestima',
    description: `Startup SaaS dans la gestion de patrimoine.`,
    tasks: `Dev fullstack, refactor front d'une v1 et dev d'une v2`,
    stack: { front: [vue2, tailwind], back: [nodets, mongodb, docker, terraform, puppeteer] },
    url: 'https://www.aestima-immo.com/',
  },
  {
    name: 'Tictactrip',
    description: `Startup de moteur de recherche d'itinéraire.`,
    tasks: `Dev backend, reverse-engineering d'apps`,
    stack: { front: [react, tailwind, jest], back: [nodets, aws_ttt, terraform, sequelize, redis, jest] },
    url: 'https://www.tictactrip.eu/',
  },
  {
    name: 'Calypso',
    description: `Site vitrine d'artiste de style classique. <br>Formulaire, mailing.`,
    stack: { front: [nuxt, tailwind], back: [aws_calypso, docker, terraform, google_analytics] },
    url: 'https://www.calypsobonnefoy.com/',
    source: 'https://github.com/whiterqbbit/calypso_bonnefoy/',
  },
  {
    name: 'Ce site-même!',
    description: 'Petit site statique mettant en valeur mes talents !',
    stack: { front: [nuxt, tailwind], back: [netlify, umami] },
    source: 'https://github.com/whiterqbbit/whiterqbbit-website',
  },
]
</script>

<template>
  <div class="flex flex-col gap-4 m-auto py-4">
    <div class="text-2xl sm:text-4xl text-center md:mb-4 lg:mb-8">
      Quelques projets
    </div>
    <div class="flex flex-wrap justify-evenly w-full gap-4">
      <GlowCard
        v-for="project, idx in projects" :key="project.name" :title="project.name" :url="project.url" :source="project.source"
        class="w-80 overflow-visible slide-enter" :style="{ '--enter-stage': idx, '--enter-step': '130ms' }"
      >
        <div class="text-sm flex flex-col gap-1" v-html="project.description" />
        <div v-if="project.tasks" class="mt-2 text-sm italic text-ctp-overlay2 hover:text-anim-color-light"> {{ project.tasks }} </div>
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
