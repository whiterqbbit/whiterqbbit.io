<template>
  <ContentDoc class="max-w-2xl m-auto p-8">
    <template #not-found>
      <NotFound title="404 frero" content="lol" />
    </template>
  </ContentDoc>
</template>

<style>
h1 {
  @apply text-4xl font-black text-ctp-yellow my-8;
}

.published_at {
  @apply text-ctp-subtext1;
}

h2 {
  @apply text-2xl font-bold text-ctp-sky my-4;
}

h3 {
  @apply text-lg font-medium text-ctp-teal mt-2 mb-1;
}

p {
  @apply text-ctp-text;
}

ul {
  @apply list-disc list-inside;
}

img {
  @apply rounded-2xl my-6;
}
</style>
