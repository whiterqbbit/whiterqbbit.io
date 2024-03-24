<script setup lang="ts">
const pic_src = ref('img/me_malt.jpg')

function useEaster() {
  umTrackEvent('easter_egg')
  pic_src.value = pic_src.value === 'img/me_malt.jpg' ? 'img/me_chad.jpg' : 'img/me_malt.jpg'
}
</script>

<template>
  <div
    class="flex flex-col gap-8 sm:gap-12 mx-auto sm:text-lg text-center sm:text-left mt-12 max-w-4xl px-2 sm:px-4 md:px-6"
  >
    <!-- INTRO -->
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
      <div class="flex flex-col text-center w-1/2 gap-4 justify-round place-content-center slide-enter">
        <div class="text-xl sm:text-3xl">
          {{ $t('landing.intro.hello') }}
          <span class="text-anim-color font-bold text-xl sm:text-4xl">Guillaume Bonnefoy</span>
        </div>
        <p class="text-ctp-subtext1">
          <strong>{{ $t('landing.intro.fullstack') }}</strong>
          {{ $t('landing.intro.designer') }}
        </p>
      </div>
    </div>

    <!-- AVAILABILITY -->
    <div class="card-duo" :style="{ '--enter-stage': 2 }">
      <div class="sm:w-1/2 place-self-center">
        {{ $t('landing.availability.main') }} <span class="text-anim-color text-xl sm:text-2xl italic font-bold sm:pr-1">{{ $t('landing.availability.no') }}</span><br><br>
        {{ $t('landing.work_preference.main') }} <strong>{{ $t('landing.work_preference.ambitious') }}</strong> {{ $t('landing.work_preference.and') }} <strong> {{ $t('landing.work_preference.challenging') }}</strong> !<br>
        {{ $t('landing.vision') }} <strong>{{ $t('landing.record_time') }}</strong> !
        <!-- Mon TJM est de <span class="text-anim-color font-bold pr-1">400€</span><br> -->
      </div>
      <GlowCard :title="$t('landing.contact_me')" class="m-auto sm:w-1/2">
        <ContactForm />
      </GlowCard>
    </div>

    <!-- STACK -->
    <div class="card-duo" :style="{ '--enter-stage': 3 }">
      <GlowCard :title="$t('landing.my_stack')" class="place-self-center max-w-sm sm:max-w-none sm:w-1/2">
        <TechStack />
      </GlowCard>
      <div class="sm:w-1/2 place-self-center">
        {{ $t('landing.technical.main') }} <strong>Vue/Nuxt</strong>{{ $t('landing.technical.speed') }} <strong>Typescript</strong>.<br>
        {{ $t('landing.technical.approach') }} <strong>{{ $t('landing.technical.modern') }}</strong>, {{ $t('landing.technical.yet') }} <strong>{{ $t('landing.technical.mature') }}</strong>{{ $t('landing.technical.everything') }}
      </div>
    </div>

    <!-- COLLECTIF VITE -->
    <!-- <div class="card-duo" :style="{ '--enter-stage': 4 }">
      <div class="sm:w-1/2 place-self-center">
        {{ $t('landing.collective.main') }}
        <span class="text-anim-color text-lg sm:text-2xl italic font-bold sm:pr-1">Vite!</span>.<br>
        {{ $t('landing.collective.relevance') }}
      </div>
      <img src="https://media1.tenor.com/m/w61O0eYj-M4AAAAC/frens.gif" class="h-52 hidden sm:block object-cover rounded-3xl">
    </div> -->

    <!-- CONTACT -->
    <div class="flex slide-enter" :style="{ '--enter-stage': 5 }">
      <GlowCard :title="$t('landing.contact_me')" class="w-full max-w-sm sm:max-w-md sm:my-16 m-auto" emphasize>
        <ContactForm />
      </GlowCard>
    </div>
    <GitHeatmap />
  </div>
</template>

<style scoped>
.card-duo{
  @apply slide-enter flex flex-col-reverse sm:flex-row gap-4 md:gap-12 px-4 sm:px-0;
}
</style>
