<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
const pic_src = ref('img/me_malt.jpg')

useSeoMeta({
  title: () => t('seo.title'),
  description: () => t('seo.description'),
})

function useEaster() {
  umTrackEvent('easter_egg')
  pic_src.value = pic_src.value === 'img/me_malt.jpg' ? 'img/me_malt_ai.jpg' : 'img/me_malt.jpg'
}
</script>

<template>
  <div class="flex flex-col gap-16 sm:gap-24 mx-auto sm:text-lg mt-10 sm:mt-16 max-w-4xl px-4 sm:px-6">
    <!-- INTRO -->
    <section
      class="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 slide-enter"
      :style="{ '--enter-stage': 1 }"
    >
      <div class="shrink-0 border-animation rounded-full cursor-pointer">
        <div class="p-1 sm:p-1.5 rounded-full glow-anim">
          <NuxtImg :src="pic_src" alt="Guillaume Bonnefoy" class="size-40 sm:size-52 md:size-60 object-cover rounded-full" @click="useEaster()" />
        </div>
      </div>
      <div class="flex flex-col gap-3 text-center sm:text-left">
        <p class="text-lg sm:text-xl text-ctp-subtext0">
          {{ t('intro.hello') }}
        </p>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] pb-1">
          <span class="text-anim-color">Guillaume Bonnefoy</span>
        </h1>
        <p class="text-lg sm:text-xl text-ctp-subtext1 max-w-md leading-relaxed">
          <strong>{{ t('intro.fullstack') }}</strong>{{ t('intro.designer') }}
        </p>
      </div>
    </section>

    <!-- AVAILABILITY -->
    <section class="card-duo flex-col" :style="{ '--enter-stage': 2 }">
      <div class="prose-block">
        <p>
          {{ t('availability.main') }}
          <span class="status-pill">
            <span class="relative flex size-2">
              <span class="absolute inline-flex size-full rounded-full bg-ctp-yellow opacity-60 motion-safe:animate-ping" />
              <span class="relative inline-flex size-2 rounded-full bg-ctp-yellow" />
            </span>
            {{ t('availability.employed') }}
          </span>
        </p>
        <p>
          {{ t('work_preference.main') }} <strong>{{ t('work_preference.ambitious') }}</strong> {{ t('work_preference.and') }} <strong>{{ t('work_preference.challenging') }}</strong>{{ t('excl') }}
          {{ t('collaborate') }} <strong>{{ t('uiux') }}</strong> {{ t('share') }}{{ t('excl') }}
        </p>
      </div>
      <GlowCard :title="t('contact_me')" class="w-full sm:w-1/2" emphasize>
        <ContactForm />
      </GlowCard>
    </section>

    <!-- STACK -->
    <section class="card-duo flex-col-reverse" :style="{ '--enter-stage': 3 }">
      <GlowCard :title="t('my_stack')" class="w-full sm:w-1/2">
        <TechStack />
      </GlowCard>
      <div class="prose-block">
        <p>
          {{ t('technical.main') }} <strong>Vue/Nuxt</strong>{{ t('technical.speed') }} <strong>TypeScript</strong>.
        </p>
        <p>
          {{ t('technical.approach') }} <strong>{{ t('technical.modern') }}</strong>, {{ t('technical.yet') }} <strong>{{ t('technical.mature') }}</strong>{{ t('technical.everything') }}
        </p>
      </div>
    </section>

    <!-- GIT CONTRIBUTIONS -->
    <section class="slide-enter" :style="{ '--enter-stage': 4 }">
      <GitHeatmap />
    </section>
  </div>
</template>

<style scoped>
.card-duo {
  @apply slide-enter flex sm:flex-row items-center gap-8 md:gap-12;
}

.prose-block {
  @apply flex flex-col gap-4 sm:w-1/2 text-center sm:text-left text-ctp-subtext1 leading-relaxed;
}

.status-pill {
  @apply inline-flex items-center gap-2 align-middle whitespace-nowrap rounded-full
    bg-ctp-surface0/70 ring-1 ring-inset ring-ctp-surface1 px-3 py-0.5 ml-1
    text-base font-semibold text-ctp-text;
}
</style>

<i18n lang="yaml">
en:
  seo:
    title: "Fullstack Vue/Nuxt developer & graphic designer"
    description: "Guillaume Bonnefoy, fullstack developer and graphic designer specialized in the Vue/Nuxt ecosystem. Startup experience, UI/UX, TypeScript."
  intro:
    hello: "Hello! I am"
    fullstack: "Fullstack developer"
    designer: " and graphic designer, specialized in the Vue/Nuxt ecosystem"
  availability:
    main: "I am currently"
    yes: "available!"
    no: "in a freelance mission."
    employed: "in a full-time position"
  contact_me: "Contact me!"
  excl: "!"
  work_preference:
    main: "I love working on"
    ambitious: "ambitious"
    and: "and"
    challenging: "challenging projects"
  collaborate: "Furthermore, I love collaborating on"
  uiux: "UI/UX"
  share: "and sharing my insights"
  record_time: "no time"
  my_stack: "My Stack"
  technical:
    main: "Technically, I have a preference for the"
    speed: " ecosystem, which combines speed and scalability, as well as"
    approach: "I favor"
    modern: "modern"
    yet: "yet"
    mature: "mature"
    everything: " technologies. Obviously, everything depends on the project!"
  collective:
    main: "If your project requires it, I can also engage my friends through our freelance collective"
    relevance: "This is particularly relevant for crypto/web3/AI projects, or simply if you want to move forward even faster."
fr:
  seo:
    title: "Développeur fullstack Vue/Nuxt & designer graphique"
    description: "Guillaume Bonnefoy, développeur fullstack et designer graphique spécialisé dans l'écosystème Vue/Nuxt. Expérience startup, UI/UX, TypeScript."
  intro:
    hello: "Hello ! Je suis"
    fullstack: "Développeur fullstack"
    designer: " et designer graphique, spécialisé dans l'écosystème Vue/Nuxt"
  availability:
    main: "Je suis actuellement"
    yes: "disponible !"
    no: "en mission."
    employed: "en CDI"
  contact_me: "Contactez-moi\u00A0!"
  excl: "\u00A0!"
  work_preference:
    main: "J'aime travailler sur des projets"
    ambitious: "ambitieux"
    and: "et"
    challenging: "challengeants"
  collaborate: "Passionné, j'adore collaborer sur les sujets"
  uiux: "UI/UX"
  share: "et partager mes idées"
  record_time: "temps record"
  my_stack: "Ma stack"
  technical:
    main: "Techniquement, j'ai une préférence pour l'écosystème"
    speed: ", qui combine vitesse et scalabilité, ainsi que"
    approach: "Je privilégie les technologies"
    modern: "modernes"
    yet: "mais"
    mature: "matures"
    everything: ". Évidemment, tout est fonction du projet !"
  collective:
    main: "Si votre projet le nécessite, je peux également solliciter mes amis au travers de notre collectif de freelance"
    relevance: "C'est particulièrement pertinent pour les projets crypto/web3/IA, ou simplement si vous voulez avancer encore plus vite."
</i18n>
