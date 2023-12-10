<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-2 m-auto place-content-center">
    <ContentList v-slot="{ list }" path="/blog" class="">
      <div
        v-for="post in list" :key="post._path"
        class="bg-ctp-surface0 rounded-2xl flex flex-col p-10 m-12"
      >
        <NuxtLink :to="post._path">
          <NuxtImg v-if="post.cover" :src="post.cover" class="rounded-2xl" />
          <div class="h2 text-2xl text-ctp-lavender"> {{ post.title }} </div>
          <div class="text-base"> {{ post.publishedAt }}</div>
          <div class="text-lg text-ctp-flamingo"> {{ post.description }}</div>
        </NuxtLink>
      </div>
    </ContentList>
  </div>
</template>
