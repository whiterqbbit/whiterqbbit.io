<script setup lang="ts">
const { vue2, vue3, nuxt, tailwind, unocss, typescript, chrome, ethereum, node, nodets, prisma, react, sequelize, mongodb, elasticsearch, agile, aws_omniscient, aws_ttt, aws_calypso, terraform, docker, netlify, bootstrap, sass, html5, javascript, puppeteer, amplify, jest, vitest, cucumber, metabase } = icons

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
    name: 'ChadGuard',
    description: `<p>Extension Chrome utilisant IA pour bloquer le contenu adulte.</p>
                  <p>~3000 utilisateurs actifs.</p>`,
    tasks: 'Produit, développement fullstack, UI/UX',
    stack: { front: [vue2, tailwind], back: [chrome] },
    url: 'https://chromewebstore.google.com/detail/chadguard/oogpehhghgfaeojjbflgeemilhkhgbhe?hl=fr&pli=1',
    source: 'https://github.com/LaGuerrePiece/ChadGuard',
  },
  {
    name: 'Moonolith',
    description: `App web3 décentralisée axée sur la liberté d'expression.`,
    tasks: 'Produit, développement fullstack, direction artistique, musique',
    stack: { front: [html5, javascript], back: [ethereum] },
    url: 'https://www.moonolith.io/',
    source: 'https://github.com/LaGuerrePiece/moonolith',
  },
  {
    name: 'Kafo',
    description: 'Startup marketplace et rencontre coworking.',
    tasks: 'Produit, développement fullstack, UI/UX, enquêtes utilisateurs',
    stack: { front: [vue3, unocss, typescript, vitest], back: [nodets, prisma, amplify, agile] },
    url: 'https://www.kafo.work/',
    // source: 'https://github.com/whiterqbbit/kafo_front_vitesse'
  },
  {
    name: 'Aestima-immo',
    description: `Startup SaaS dans la gestion de patrimoine.`,
    tasks: 'Développement fullstack',
    stack: { front: [vue2, tailwind], back: [nodets, mongodb, docker, terraform, puppeteer] },
    url: 'https://www.aestima-immo.com/',
  },
  {
    name: 'My Omniscient',
    description: 'Startup IOT dans le secteur du BTP.',
    tasks: 'Développement fullstack',
    stack: { front: [vue2, bootstrap, sass], back: [node, aws_omniscient, elasticsearch, mongodb, cucumber, agile] },
    url: 'https://myomniscient.com/solutions/application/',
  },
  {
    name: 'Tictactrip',
    description: 'Startup de moteur de recherche d\'itinéraire.',
    tasks: 'Développement backend',
    stack: { front: [react, tailwind, jest], back: [nodets, aws_ttt, terraform, sequelize, metabase, jest, agile] },
    url: 'https://www.tictactrip.eu/',
  },
  {
    name: 'Calypso Bonnefoy',
    description: 'Site vitrine d\'artiste style classique. Formulaire, mailing.',
    stack: { front: [nuxt, tailwind], back: [aws_calypso, docker, terraform] },
    url: 'https://www.calypsobonnefoy.com/',
    source: 'https://github.com/whiterqbbit/calypso_bonnefoy/',
  },
  {
    name: 'Ce site !',
    description: 'Petit site statique mettant en valeur mes talents !',
    stack: { front: [nuxt, tailwind], back: [netlify] },
    source: 'https://github.com/whiterqbbit/whiterqbbit-website',
  },
]
</script>

<template>
  <div class="flex flex-col gap-4 m-auto py-4">
    <div class="text-4xl text-center text-anim-color mb-8">
      Quelques projets
    </div>
    <div
      class="flex flex-wrap justify-around w-full gap-4"
    >
      <GlowCard
        v-for="project in projects" :key="project.name" :title="project.name" :url="project.url" :source="project.source"
        class="max-w-xs overflow-visible"
      >
        <template #default>
          <div class="cursor-pointer text-sm flex flex-col gap-2" @click="console.log('dab')" v-html="project.description" />
          <div v-if="project.tasks" class="mt-2 text-sm italic text-ctp-overlay2"> {{ project.tasks }} </div>
          <div class="flex flex-col mt-4 gap-2 text-2xl cursor-default">
            <div class="flex flex-row gap-2">
              <div v-for="tech in project.stack.front" :key="tech.name">
                <UTooltip :text="tech.name">
                  <li :class="tech.icon" />
                </UTooltip>
              </div>
            </div>

            <div class="flex flex-row gap-2">
              <div v-for="tech in project.stack.back" :key="tech.name">
                <UTooltip :text="tech.name">
                  <li :class="tech.icon" />
                </UTooltip>
              </div>
            </div>
          </div>
        </template>
      </GlowCard>
    </div>
  </div>
</template>
