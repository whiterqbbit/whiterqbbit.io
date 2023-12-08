<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const state = reactive({
  email: undefined,
  message: undefined,
})

const schema = z.object({
  email: z.string().email('Adresse email invalide'),
  message: z.string(),
})

type Schema = z.infer<typeof schema>

const form = ref()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data)
}
</script>

<template>
  <UForm ref="form" :schema="schema" :state="state" class="space-y-4 flex flex-col" netlify @submit="onSubmit">
    <UFormGroup name="email" label="Email">
      <UInput v-model="state.email" icon="i-ci-mail" />
    </UFormGroup>

    <UFormGroup name="message" label="Message">
      <UTextarea v-model="state.message" autoresize />
    </UFormGroup>

    <UButton icon="i-ci-paper-plane" type="submit" size="lg" class="mx-auto pt-4">
      Envoyer
    </UButton>
  </UForm>
</template>
