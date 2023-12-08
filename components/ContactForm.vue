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
  <UForm ref="form" :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup name="email" label="Email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup name="message" label="Votre message">
      <UTextarea autoresize v-model="state.message" />
    </UFormGroup>

    <UButton icon="i-ci-mail" type="submit">
      Submit
    </UButton>
  </UForm>
</template>
