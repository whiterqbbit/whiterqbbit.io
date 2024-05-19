<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
const moi_src = ref('img/me_stationf.jpg')
</script>

<template>
  <UContainer class="text-center sm:text-left text-lg sm:text-xl mt-8">
    <div class="flex flex-col gap-10">
      <div class="bandeau" :style="{ '--enter-stage': 1 }">
        <div class="place-self-center text-center !max-w-sm">
          {{ t('childhood') }}
        </div>
        <NuxtImg
          :src="moi_src" :alt="t('alt.sf')" class="a-propos-pic"
          @click="moi_src = 'img/me_shojo.png'"
        />
      </div>

      <div class="bandeau !flex-col sm:!flex-row" :style="{ '--enter-stage': 2 }">
        <NuxtImg
          src="img/musk.png" :alt="t('alt.musk')"
          class="a-propos-pic max-h-64 place-self-center w-max object-contain"
        />
        <div class="textzone">
          {{ t('professionally') }}
        </div>
      </div>

      <div class="bandeau" :style="{ '--enter-stage': 3 }">
        <div class="textzone">
          {{ t('passions') }}<br><br>
          {{ t('side_project.main') }}
          <span class="text-anim-color font-bold text-2xl">{{ t('side_project.name') }}</span>
        </div>
        <NuxtImg src="img/wot_cat.jpg" :alt="t('alt.wot_cat')" class="a-propos-pic" />
      </div>
    </div>
  </UContainer>
</template>

<style scoped>
.bandeau {
  @apply slide-enter flex flex-col-reverse sm:flex-row gap-4 justify-evenly place-content-center;
}

.textzone {
  @apply max-w-lg place-self-center;
}

.a-propos-pic {
  @apply sm:h-64 border-animation p-[0.2rem] sm:p-[0.3rem] glow-anim object-cover rounded-3xl;
}
</style>

<i18n lang="yaml">
fr:
  childhood: "Passionné depuis tout petit, je commence à m'électrocuter dès l'âge de 15 ans en bricolant mon ordi. À 17 ans, je programme des jeux sur ma calculette, et à 30 ans, j'en ai fait mon métier !"
  professionally: "Professionnellement, j'aime les environnements dynamiques et exigeants, je n'ai travaillé qu'en startup. J'apprécie contribuer à plus que du code, je me passionne notamment d'UI/UX et de copywriting."
  passions: "Au-delà du code, je fais du piano et de la photographie. Je m'intéresse beaucoup au design, à l'IA, et au monde des startups."
  side_project:
    main: "Mon side-projet du moment est : "
    name: "une webapp pour automatiser des posts Twitter !"
  alt:
    sf: "Guillaume Bonnefoy à Station-F"
    musk: "Elon Musk visiblement perturbé par ce paragraphe"
    wot_cat: "Un chat incrédule"
en:
  childhood: "Geek since I was a kid, I started to electrocute myself at age 15 by tinkering with my motherboard. At 17, I was programming games on my calculator, and at 30, I made it my job!"
  professionally: "Professionally, I like dynamic and demanding environments, which is why I have worked exclusively in startups. I like to contribute to more than just code, I am particularly passionate about UI/UX and copywriting."
  passions: "Beyond code, I play the piano and take pictures. I am very interested in design, AI, and the world of startups."
  side_project:
    main: "My current side-project is: "
    name: "a webapp to automate tweets!"
  alt:
    sf: "Guillaume Bonnefoy at Station-F"
    musk: "Elon Musk looking disturbed by that paragraph"
    wot_cat: "A cat in disbelief"
</i18n>
