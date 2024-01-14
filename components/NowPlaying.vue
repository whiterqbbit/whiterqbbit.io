<script setup>
const data = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('/api/spotify')
    if (!response.ok)
      throw new Error('Failed to fetch')

    data.value = await response.json()
  }
  catch (error) {
    console.error('Error fetching Spotify data:', error)
  }
})

const artist = computed(() => data.value?.item?.artists[0]?.name)
const song = computed(() => data.value?.item?.name)
const link = computed(() => data.value?.item?.external_urls?.spotify)
const image = computed(() => data.value?.item?.album?.images[2]?.url)
const is_playing = computed(() => data.value?.is_playing)
</script>

<template>
  <GlowCard
    v-if="data && is_playing"
    class="flex flex-col gap-4 !p-4 w-fit
      sticky bottom-4 left-4 right-0
      !bg-opacity-20 !backdrop-blur-sm hover:!bg-opacity-90
      place-items-center rounded-xl place-self-center"
  >
    <NuxtLink :to="link" target="_blank">
      <p class="font-bold mb-2">Now listening to</p>
      <div class="flex gap-3 place-content-center">
        <img :src="image" class="rounded-xl h-10">
        <div class="flex flex-col text-sm place-content-center">
          <p>{{ song }}</p>
          <p>{{ artist }}</p>
        </div>
      </div>
    </NuxtLink>
  </GlowCard>
</template>
