<script setup>
const { data } = await useAsyncData('spotify', () => $fetch('/api/spotify'))

const artist = data?.value?.item?.artists[0]?.name
const song = data?.value?.item?.name
const link = data?.value?.item?.external_urls?.spotify
const image = data?.value?.item?.album?.images[2]?.url
const is_playing = data?.value?.is_playing

// TODO: fix backdrop-blur-lg not working
</script>

<template>
  <GlowCard
    v-if="data && is_playing"
    class="flex flex-col gap-4 !p-4 w-fit
      sticky bottom-4 left-4 right-0
      opacity-50 hover:opacity-100 !backdrop-blur-lg
      place-items-center rounded-xl place-self-center"
  >
    <NuxtLink :to="link" target="_blank">
      <p class="font-bold mb-2">Now listening to</p>
      <div class="flex gap-3 place-content-center">
        <NuxtImg :src="image" class="rounded-xl h-10" />
        <div class="flex flex-col text-sm place-content-center">
          <p>{{ song }}</p>
          <p>{{ artist }}</p>
        </div>
      </div>
    </NuxtLink>
  </GlowCard>
</template>
