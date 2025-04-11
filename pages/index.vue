<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
const pic_src = ref('img/me_malt.jpg')

function useEaster() {
  umTrackEvent('easter_egg')
  pic_src.value = pic_src.value === 'img/me_malt.jpg' ? 'img/me_chad.jpg' : 'img/me_malt.jpg'
}
</script>

<template>
  <div
    class="flex flex-col gap-12 mx-auto sm:text-lg text-center sm:text-left mt-12 max-w-4xl px-2 sm:px-4 md:px-6"
  >
    <!-- INTRO -->
    <div
      class="flex justify-evenly place-content-center slide-enter"
      :style="{ '--enter-stage': 1 }"
    >
      <div class="place-self-center">
        <div class="border-animation rounded-full cursor-pointer">
          <div class="p-1 sm:p-1.5 rounded-full glow-anim">
            <NuxtImg :src="pic_src" class="w-36 sm:w-48 md:w-64 object-cover rounded-full m-0" @click="useEaster()" />
          </div>
        </div>
      </div>
      <div class="flex flex-col text-center w-1/2 gap-4 justify-round place-content-center slide-enter">
        <div class="text-xl sm:text-3xl">
          {{ t('intro.hello') }}
          <span class="text-anim-color font-bold text-xl sm:text-4xl">Guillaume Bonnefoy</span>
        </div>
        <p class="text-ctp-subtext1">
          <strong>{{ t('intro.fullstack') }}</strong>
          {{ t('intro.designer') }}
        </p>
      </div>
    </div>

    <!-- AVAILABILITY -->
    <div class="card-duo" :style="{ '--enter-stage': 2 }">
      <div class="sm:w-1/2 place-self-center">
        {{ t('availability.main') }} <span class="text-anim-color text-xl sm:text-2xl italic font-bold sm:pr-1">{{ t('availability.employed') }}</span><br><br>
        {{ t('work_preference.main') }} <strong>{{ t('work_preference.ambitious') }}</strong> {{ t('work_preference.and') }} <strong> {{ t('work_preference.challenging') }}</strong> !<br>
        {{ t('collaborate') }} <strong>{{ t('uiux') }}</strong> {{ t('share') }} !
      </div>
      <GlowCard :title="t('contact_me')" class="m-auto sm:w-1/2">
        <ContactForm />
      </GlowCard>
    </div>

    <!-- STACK -->
    <div class="card-duo" :style="{ '--enter-stage': 3 }">
      <GlowCard :title="t('my_stack')" class="place-self-center max-w-sm sm:max-w-none sm:w-1/2">
        <TechStack />
      </GlowCard>
      <div class="sm:w-1/2 place-self-center">
        {{ t('technical.main') }} <strong>Vue/Nuxt</strong>{{ t('technical.speed') }} <strong>Typescript</strong>.<br>
        {{ t('technical.approach') }} <strong>{{ t('technical.modern') }}</strong>, {{ t('technical.yet') }} <strong>{{ t('technical.mature') }}</strong>{{ t('technical.everything') }}
      </div>
    </div>

    <!-- COLLECTIF VITE -->
    <!-- <div class="card-duo" :style="{ '--enter-stage': 4 }">
      <div class="sm:w-1/2 place-self-center">
        {{ t('collective.main') }}
        <span class="text-anim-color text-lg sm:text-2xl italic font-bold sm:pr-1">Vite!</span>.<br>
        {{ t('collective.relevance') }}
      </div>
      <img src="https://media1.tenor.com/m/w61O0eYj-M4AAAAC/frens.gif" class="h-52 hidden sm:block object-cover rounded-3xl">
    </div> -->

    <!-- CONTACT -->
    <div class="flex slide-enter" :style="{ '--enter-stage': 5 }">
      <GlowCard :title="t('contact_me')" class="w-full max-w-sm sm:max-w-md sm:my-16 m-auto" emphasize>
        <ContactForm />
      </GlowCard>
    </div>
    <GitHeatmap />
  </div>
</template>

<style scoped>
.card-duo{
  @apply slide-enter flex flex-col-reverse sm:flex-row gap-6 md:gap-12 px-4 sm:px-0;
}
</style>

<i18n lang="yaml">
en:
  intro:
    hello: "Hello! I am"
    fullstack: "Fullstack developer"
    designer: " and graphic designer, specialized in the Vue/Nuxt ecosystem"
  availability:
    main: "I am currently"
    yes: "available!"
    no: "in a freelance mission."
    employed: "in a full-time position."
  contact_me: "Contact me !"
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
  intro:
    hello: "Hello ! Je suis"
    fullstack: "Développeur fullstack"
    designer: " et designer graphique, spécialisé dans l'écosystème Vue/Nuxt"
  availability:
    main: "Je suis actuellement"
    yes: "disponible !"
    no: "en mission."
    employed: "en CDI !"
  contact_me: "Contactez-moi !"
  work_preference:
    main: "J'aime travailler sur des projets"
    ambitious: "ambitieux"
    and: "et"
    challenging: "challengeants"
  collaborate: "Passionné, j'adore collaborer sur les sujets"
  uiux: "UI/UX"
  share: " et partager mes idées"
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
