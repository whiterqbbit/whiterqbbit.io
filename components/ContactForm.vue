<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const { t } = useI18n({ useScope: 'local' })

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
    umTrackEvent('contact_form_sent', { email: event.data.email, message: event.data.message })
    useToast().add({ title: t('message_sent') })
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
    <div class="flex">
      <UButton :icon="has_sent ? 'i-ci-circle-check' : 'i-ci-paper-plane'" type="submit" class="mx-auto" :loading="is_emailing">
        {{ has_sent ? t('sent') : t('send') }}
      </UButton>
      <p class="m-auto text-ctp-subtext0">{{ t('or') }}</p>
      <UButton icon="i-ci-calendar-add" class="mx-auto">
        <NuxtLink to="https://cal.com/whiterqbbit" target="_blank">
          {{ t('book_a_call') }}
        </NuxtLink>
      </UButton>
    </div>
    <p v-if="display_error" class="text-ctp-red">
      {{ t('error') }}
    </p>
  </UForm>
</template>

<i18n lang="yaml">
en:
  message_sent: "Message sent !"
  sent: "Sent !"
  send: "Send"
  or: "or"
  book_a_call: "Schedule a call"
  error: "Sorry, there was an error, please write me an email at whiterqbbit{'@'}proton.me !"
fr:
  message_sent: "Message envoyé !"
  sent: "Envoyé !"
  send: "Envoyer"
  or: "ou"
  book_a_call: "Prendre RDV"
  error: "Navré, il y a eu une erreur, veuillez me contacter par mail à whiterqbbit{'@'}proton.me !"
</i18n>
