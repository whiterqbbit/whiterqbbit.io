<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-2 m-auto place-content-center">
    <ContentList v-slot="{ list }" path="/blog" class="">
      <div v-for="post, idx in list" :key="post._path">
        <NuxtLink :to="post._path">
          <GlowCard
            :title="post.title" :style="{ '--enter-stage': idx, '--enter-step': '130ms' }"
            class="bg-ctp-surface0 rounded-2xl flex max-w-md place-self-center flex-col p-8 m-4 cursor-pointer slide-enter"
          >
            <NuxtImg v-if="post.cover" :src="post.cover" class="rounded-2xl" />
            <div class="text-lg text-ctp-flamingo"> {{ post.description }}</div>
          </GlowCard>
        </NuxtLink>
      </div>
    </ContentList>
  </div>
</template>
