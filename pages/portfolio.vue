<script setup lang="ts">
const icons = {
  vue2: {
    name: 'Vue 2',
    icon: 'i-ci-apple',
  },
  nuxt: {
    name: 'Nuxt 3',
    icon: 'i-ci-app-store',
  },
}
interface IProject {
  name: string
  description: string
  image?: string
  stack: typeof icons[keyof typeof icons][]
}

const projects: IProject[] = [
  {
    name: 'ChadGuard',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien aliquet nunc, nec ult',
    stack: [icons.vue2, icons.nuxt],
  },
  {
    name: 'Moonolith',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien aliquet nunc, nec ult',
    stack: [icons.vue2, ],
  },
  {
    name: 'Kafo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien aliquet nunc, nec ult',
    stack: [icons.vue2, ],
  },
  {
    name: 'Aestima-immo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien aliquet nunc, nec ult',
    stack: [icons.vue2, ],
  },
  {
    name: 'My Omniscient',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien aliquet nunc, nec ult',
    stack: [icons.vue2, ],
  },
  {
    name: 'Tictactrip',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien aliquet nunc, nec ult',
    stack: [icons.vue2, ],
  },
]
</script>

<template>
  <div class="flex flex-col gap-4 m-auto py-4">
    <div class="text-4xl text-center text-anim-color">
      Portfolio
    </div>
    <div class="text-3xl text-center text-ctp-subtext0">
      Mes projets
    </div>
    <div
      class="flex flex-wrap justify-around w-full gap-4"
    >
      <GlowCard
        v-for="project in projects" :key="project.name" :title="project.name"
        class="max-w-xs"
      >
        <template #default>
          <p>{{ project.description }}</p>
          <ul class="flex">
            <li v-for="tech in project.stack" :key="tech.name" :class="tech.icon">
              {{ tech.name }}
            </li>
          </ul>
        </template>
      </GlowCard>
    </div>
  </div>
</template>
