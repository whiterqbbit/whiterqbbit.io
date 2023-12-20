<script setup lang="ts">
const moi_src = ref('img/me_stationf.jpg')
</script>

<template>
  <UContainer class="text-center sm:text-left text-lg sm:text-xl mt-8">
    <div class="flex flex-col gap-10">
      <div class="bandeau" :style="{ '--enter-stage': 1 }">
        <div class="place-self-center text-center !max-w-sm">
          {{ $t('a_propos.childhood') }}
        </div>
        <NuxtImg
          :src="moi_src" :alt="$t('a_propos.alt.sf')" class="a-propos-pic"
          @click="moi_src = 'img/me_shojo.png'"
        />
      </div>

      <div class="bandeau !flex-col sm:!flex-row" :style="{ '--enter-stage': 2 }">
        <NuxtImg src="img/musk.png" :alt="$t('a_propos.alt.musk')" class="a-propos-pic max-h-64 place-self-center w-max object-contain" />
        <div class="textzone">
          {{ $t('a_propos.professionally') }}
        </div>
      </div>

      <div class="bandeau" :style="{ '--enter-stage': 3 }">
        <div class="textzone">
          {{ $t('a_propos.passions') }}<br><br>
          {{ $t('a_propos.side_project.main') }}<span class="text-anim-color font-bold text-2xl">{{ $t('a_propos.side_project.name') }}</span>
        </div>
        <NuxtImg src="img/wot_cat.jpg" :alt="$t('a_propos.alt.wot_cat')" class="a-propos-pic" />
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
