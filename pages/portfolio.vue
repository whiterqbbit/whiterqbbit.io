<script setup lang="ts">
const { vue2, vue3, nuxt, tailwind, unocss, typescript, chrome, ethereum, node, nodets, express, prisma, react, sequelize, mongodb, elasticsearch, aws_omniscient, aws_ttt, terraform, docker, netlify, bootstrap, sass, html5, javascript, puppeteer, amplify, jest, vitest, cucumber, metabase } = icons

interface IProject {
  name: string
  description: string
  image?: string
  url?: string
  source?: string
  stack: { front: typeof icons[keyof typeof icons][], back: typeof icons[keyof typeof icons][] }
}

const projects: IProject[] = [
  {
    name: 'ChadGuard',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien aliquet nunc, nec ult',
    stack: { front: [vue2, tailwind], back: [chrome] },
    url: 'https://chromewebstore.google.com/detail/chadguard/oogpehhghgfaeojjbflgeemilhkhgbhe?hl=fr&pli=1',
    source: 'https://github.com/LaGuerrePiece/ChadGuard'
  },
  {
    name: 'Moonolith',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien aliquet nunc, nec ult',
    stack: { front: [html5, javascript], back: [ethereum] },
    url: 'https://www.moonolith.io/',
    source: 'https://github.com/LaGuerrePiece/moonolith'
  },
  {
    name: 'Kafo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien aliquet nunc, nec ult',
    stack: { front: [vue3, unocss, typescript, vitest], back: [nodets, express, prisma, amplify] },
  },
  {
    name: 'Aestima-immo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien aliquet nunc, nec ult',
    stack: { front: [vue2, tailwind], back: [nodets, mongodb, docker, terraform, puppeteer] },
  },
  {
    name: 'My Omniscient',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien aliquet nunc, nec ult',
    stack: { front: [vue2, bootstrap, sass], back: [node, aws_omniscient, elasticsearch, cucumber] },
  },
  {
    name: 'Tictactrip',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien aliquet nunc, nec ult',
    stack: { front: [react, tailwind, jest], back: [nodets, aws_ttt, terraform, sequelize, metabase, jest] },
  },
  {
    name: 'Ce site !',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien aliquet nunc, nec ult',
    stack: { front: [nuxt, tailwind], back: [netlify] },
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
          <p>{{ project.description }}</p>
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
