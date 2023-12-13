<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-2 m-auto place-content-center">
    <ContentList v-slot="{ list }" path="/blog" class="">
      <GlowCard
        v-for="post in list" :key="post._path" :title="post.title"
        class="bg-ctp-surface0 rounded-2xl flex max-w-md place-self-center flex-col p-10 m-12 cursor-pointer"
      >
        <NuxtLink :to="post._path">
          <NuxtImg v-if="post.cover" :src="post.cover" class="rounded-2xl" />
          <div class="text-lg text-ctp-flamingo"> {{ post.description }}</div>
        </NuxtLink>
      </GlowCard>
    </ContentList>
  </div>
</template>
