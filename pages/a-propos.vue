<script setup lang="ts">
const moi_src = ref('img/me_stationf.jpg')
</script>

<template>
  <UContainer class="text-center sm:text-left text-lg sm:text-xl mt-8">
    <div class="flex flex-col gap-10">
      <div class="bandeau">
        <div class="place-self-center text-center !max-w-sm">
          Passionné depuis tout petit, je commence à m'électrocuter dès l'âge de
          15 ans en bricolant mon ordi. À 17 ans, je programme des jeux sur ma calculette,
          et à 30 ans, j'en ai fait mon métier !
        </div>
        <NuxtImg
          :src="moi_src" alt="Guillaume à Station-F" class="a-propos-pic"
          @click="moi_src = 'img/me_shojo.png'"
        />
      </div>

      <div class="bandeau !flex-col sm:!flex-row">
        <NuxtImg src="img/musk.png" class="a-propos-pic max-h-64 place-self-center w-max object-contain" />
        <div class="textzone">
          Professionnellement, j'aime les environnements dynamiques et exigeants, je n'ai travaillé qu'en startup.
          J'apprécie contribuer à plus que du code, je me passionne notamment d'UI/UX et de copywriting.
        </div>
      </div>

      <div class="bandeau">
        <div class="textzone">
          Au-delà du code, je fais du piano et de la photographie.
          Je m'intéresse beaucoup au design, à l'IA, et au monde des startups.<br>
          Mon side-projet du moment est : <span class="text-anim-color font-bold text-2xl">ce site !</span>
        </div>
        <NuxtImg src="img/wot_cat.jpg" class="a-propos-pic" />
      </div>
    </div>
  </UContainer>
</template>

<style scoped>
.bandeau {
  @apply flex flex-col-reverse sm:flex-row gap-4 justify-evenly place-content-center ;
}

.textzone {
  @apply max-w-lg place-self-center;
}

.a-propos-pic {
  @apply sm:h-64 border-animation p-[0.2rem] sm:p-[0.3rem] glow-anim object-cover rounded-3xl;
}
</style>
