<template>
  <ContentDoc class="max-w-2xl m-auto p-6">
    <template #not-found>
      <NotFound title="404 frero" content="lol" />
    </template>
  </ContentDoc>
</template>

<style>
h1 {
  @apply text-4xl font-black text-ctp-lavender my-8;
}

h2 {
  @apply text-2xl font-bold text-ctp-red my-4;
}

h3 {
  @apply text-lg italic text-ctp-sky my-2;
}

p {
  @apply text-ctp-subtext0;
}

ul {
  @apply list-disc list-inside;
}

img {
  @apply rounded-2xl;
}
</style>
