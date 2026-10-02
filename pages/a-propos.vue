<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
const moi_src = ref('img/me_stationf.jpg')

function useEaster() {
  umTrackEvent('easter_egg')
  moi_src.value = moi_src.value === 'img/me_stationf.jpg' ? 'img/me_stationf_ai.jpg' : 'img/me_stationf.jpg'
}

useSeoMeta({
  title: () => t('title'),
  description: () => t('seo_description'),
})
</script>

<template>
  <UContainer class="mt-10 sm:mt-16 max-w-4xl text-lg">
    <h1 class="page-title mb-10 sm:mb-16 slide-enter" :style="{ '--enter-stage': 0 }">
      {{ t('title') }}
    </h1>
    <div class="flex flex-col gap-14 sm:gap-20">
      <section class="bandeau" :style="{ '--enter-stage': 1 }">
        <p class="textzone">
          {{ t('childhood') }}
        </p>
        <div class="pic-frame">
          <NuxtImg
            :src="moi_src"
            :alt="t('alt.sf')"
            class="a-propos-pic cursor-pointer"
            @click="useEaster()"
          />
        </div>
      </section>

      <section class="bandeau" :style="{ '--enter-stage': 2 }">
        <div class="pic-frame sm:order-first">
          <NuxtImg src="img/musk.png" :alt="t('alt.musk')" class="a-propos-pic object-top" />
        </div>
        <p class="textzone">
          {{ t('professionally') }}
        </p>
      </section>

      <section class="bandeau" :style="{ '--enter-stage': 3 }">
        <div class="textzone flex flex-col gap-4">
          <p>{{ t('passions') }}</p>
          <p>
            {{ t('side_project.main') }}
            <NuxtLink
              to="https://second-eyes.io/" target="_blank"
              class="font-semibold text-ctp-text underline decoration-ctp-yellow/60 underline-offset-4 decoration-2 hover:decoration-ctp-yellow transition-fast"
            >
              {{ t('side_project.name') }}
            </NuxtLink>
          </p>
        </div>
        <div class="pic-frame">
          <NuxtImg src="img/me_family.jpg" :alt="t('alt.family')" class="a-propos-pic" />
        </div>
      </section>
    </div>
  </UContainer>
</template>

<style scoped>
.bandeau {
  @apply slide-enter grid grid-cols-1 sm:grid-cols-2 items-center gap-8 sm:gap-12;
}

.textzone {
  @apply text-center sm:text-left text-ctp-subtext1 leading-relaxed;
}

.pic-frame {
  @apply border-animation p-1 rounded-3xl glow-anim w-full max-w-sm mx-auto;
}

.a-propos-pic {
  @apply block w-full aspect-[4/3] object-cover rounded-[1.3rem];
}
</style>

<i18n lang="yaml">
fr:
  title: 'À Propos'
  seo_description: "Développeur fullstack depuis ses 30 ans, passionné d'UI/UX, de piano et de photo. Le parcours de Guillaume Bonnefoy, du bricolage de carte mère aux startups."
  childhood: "Passionné depuis tout petit, je commence à m'électrocuter dès l'âge de 15 ans en bricolant mon ordi. À 17 ans, je programme des jeux sur ma calculette, et à 30 ans, j'en ai fait mon métier !"
  professionally: "Professionnellement, j'aime les environnements dynamiques et exigeants, je n'ai travaillé qu'en startup. J'apprécie contribuer à plus que du code, je me passionne notamment d'UI/UX et de copywriting."
  passions: "Au-delà du code, je fais du piano, de la photographie, et je m'occupe de ma petite famille. Je m'intéresse beaucoup au design, à l'IA, et au monde des startups."
  side_project:
    main: "Mon side-projet du moment\u00A0:"
    name: "Une app mobile de génération d'images pour artistes"
  alt:
    sf: 'Guillaume Bonnefoy à Station-F'
    musk: 'Elon Musk visiblement perturbé par ce paragraphe'
    family: 'Guillaume Bonnefoy, sa femme, sa fille, et son chien'
en:
  title: 'About'
  seo_description: "Fullstack developer since 30, passionate about UI/UX, piano and photography. Guillaume Bonnefoy's path, from tinkering with motherboards to startups."
  childhood: 'Geek since I was a kid, I started to electrocute myself at age 15 by tinkering with my motherboard. At 17, I was programming games on my calculator, and at 30, I made it my job!'
  professionally: 'Professionally, I like dynamic and demanding environments, which is why I have worked exclusively in startups. I like to contribute to more than just code, I am particularly passionate about UI/UX and copywriting.'
  passions: 'Beyond code, I play the piano, take pictures, and take care of my family. I am very interested in design, AI, and the world of startups.'
  side_project:
    main: 'My current side-project:'
    name: 'An AI image variation app for artists'
  alt:
    sf: 'Guillaume Bonnefoy at Station-F'
    musk: 'Elon Musk looking disturbed by that paragraph'
    family: 'Guillaume Bonnefoy, his wife, his daughter, and his dog'
</i18n>
