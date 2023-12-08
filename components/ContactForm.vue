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

const is_emailing = ref(false)
const display_error = ref(false)
const has_sent = ref(false)
async function submit(event: FormSubmitEvent<Schema>) {
  is_emailing.value = true
  display_error.value = false

  try {
    await $fetch('/api/resend', { method: 'POST', body: { ...event.data } })
    has_sent.value = true
  }
  catch (error) {
    console.error(error)
    display_error.value = true
  }
  is_emailing.value = false
}
</script>

<template>
  <UForm ref="form" :schema="schema" :state="state" class="space-y-4 flex flex-col" data-netlify="true" @submit="submit">
    <UFormGroup name="email" label="Email">
      <UInput v-model="state.email" icon="i-ci-mail" />
    </UFormGroup>

    <UFormGroup name="message" label="Message">
      <UTextarea v-model="state.message" autoresize />
    </UFormGroup>

    <div class="my-3" />
    <UButton :icon="has_sent ? 'i-ci-circle-check' : 'i-ci-paper-plane'" type="submit" size="lg" class="mx-auto" :loading="is_emailing">
      {{ has_sent ? 'Envoyé !' : 'Envoyer' }}
    </UButton>
    <p v-if="display_error" class="text-ctp-red">
      Navré, il y a eu une erreur, veuillez me contacter par mail à whiterqbbit@proton.me !
    </p>
  </UForm>
</template>
