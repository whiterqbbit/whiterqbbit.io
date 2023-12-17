<script setup lang="ts">
const pic_src = ref('img/me_malt.jpg')

function useEaster() {
  useToast().add({
    timeout: 8000,
    ui: { wrapper: 'w-fit' },
    icon: 'i-ci-help',
    closeButton: { loading: true },
    actions: [
      { label: '🐇', size: 'xl', click: () => { pic_src.value = 'img/me_seinen.jpg' } },
      { label: '🐑', size: 'xl', click: () => { pic_src.value = 'img/me_chad.jpg' } },
    ],
  })
  umTrackEvent('easter_egg')
}
</script>

<template>
  <div
    class="flex flex-col gap-8 sm:gap-12 mx-auto sm:text-lg text-center sm:text-left mt-12 max-w-4xl px-2 sm:px-4 md:px-6"
  >
    <div
      class="flex justify-evenly place-content-center slide-enter"
      :style="{ '--enter-stage': 1 }"
    >
      <div class="place-self-center">
        <div class="border-animation rounded-full">
          <div class="p-1 sm:p-1.5 rounded-full glow-anim">
            <NuxtImg :src="pic_src" class="w-36 sm:w-48 md:w-64 object-cover rounded-full m-0" @click="useEaster()" />
          </div>
        </div>
      </div>

      <div
        class="flex flex-col text-center w-1/2 gap-4 justify-round place-content-center slide-enter"
      >
        <div class="text-xl sm:text-3xl">
          Hello ! Je suis <span class="text-anim-color font-bold text-xl sm:text-4xl">Guillaume Bonnefoy</span>
        </div>
        <p class="text-ctp-subtext1">
          <strong>Développeur fullstack</strong> et designer graphique,
          spécialisé dans la création d'app early-stage
        </p>
      </div>
    </div>

    <div class="card-duo" :style="{ '--enter-stage': 2 }">
      <div class="sm:w-1/2 place-self-center">
        Je suis actuellement : <span class="text-anim-color text-xl sm:text-2xl italic font-bold sm:pr-1">disponible !</span><br><br>
        J'aime travailler sur des projets <strong>ambitieux</strong> et <strong>challengeants</strong>!<br>
        Si votre vision est claire, je peux vous livrer le design et le développement de votre app en un
        <strong>temps record</strong> !
        <!-- Mon TJM est de <span class="text-anim-color font-bold pr-1">400€</span><br> -->
      </div>
      <GlowCard title="Contactez-moi !" class="m-auto sm:w-1/2">
        <ContactForm />
      </GlowCard>
    </div>

    <div class="card-duo" :style="{ '--enter-stage': 3 }">
      <GlowCard title="Ma stack" class="place-self-center max-w-sm sm:max-w-none sm:w-1/2">
        <TechStack />
      </GlowCard>
      <div class="sm:w-1/2 place-self-center">
        Techniquement, j'ai un faible pour l'écosystème <strong>Vue/Nuxt</strong>, qui allie rapidité et scalabilité, ainsi que <strong>Typescript</strong>.<br>
        Je privilégie les techniques <strong>modernes</strong>, mais <strong>matures</strong>. Évidemment, tout est fonction du projet !
      </div>
    </div>

    <div class="card-duo" :style="{ '--enter-stage': 4 }">
      <div class="sm:w-1/2 place-self-center">
        Si votre projet le nécessite, je peux également solliciter mes amis au travers de notre collectif de freelance
        <span class="text-anim-color text-lg sm:text-2xl italic font-bold sm:pr-1">Vite!</span>.<br>
        C'est particulièrement pertinent pour les projets crypto/web3/IA, ou simplement si vous voulez avancer encore plus vite.
      </div>
      <img src="https://media1.tenor.com/m/w61O0eYj-M4AAAAC/frens.gif" class="h-52 hidden sm:block object-cover rounded-3xl">
    </div>
    <div class="flex slide-enter" :style="{ '--enter-stage': 5 }">
      <GlowCard title="Contactez-moi !" class="w-full max-w-sm sm:max-w-md sm:my-16 m-auto" emphasize>
        <ContactForm />
      </GlowCard>
    </div>
  </div>
</template>

<style scoped>
.card-duo{
  @apply slide-enter flex flex-col-reverse sm:flex-row gap-4 md:gap-12 px-4 sm:px-0;
}
</style>
