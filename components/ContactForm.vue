<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const { t } = useI18n({ useScope: 'local' })

const state = reactive({
  email: undefined,
  message: undefined,
  website: '', // honeypot
})

// le serveur jette les envois trop rapides (bots)
const mounted_at = ref(0)
onMounted(() => mounted_at.value = Date.now())

const schema = z.object({
  email: z.string().email('Adresse email invalide'),
  message: z.string(),
  website: z.string().optional(),
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
    await $fetch('/api/resend', { method: 'POST', body: { ...event.data, elapsed: Date.now() - mounted_at.value } })
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
      <UInput v-model="state.email" icon="i-ci-mail" size="md" type="email" />
    </UFormGroup>

    <!-- honeypot : invisible pour les humains, rempli par les bots -->
    <div class="absolute -left-[9999px] size-px overflow-hidden" aria-hidden="true">
      <label>Website <input v-model="state.website" type="text" name="website" tabindex="-1" autocomplete="off"></label>
    </div>

    <UFormGroup name="message" label="Message">
      <UTextarea v-model="state.message" size="md" :rows="4" autoresize />
    </UFormGroup>

    <div class="flex flex-wrap items-center gap-3 pt-2">
      <UButton :icon="has_sent ? 'i-ci-circle-check' : 'i-ci-paper-plane'" type="submit" size="md" :loading="is_emailing">
        {{ has_sent ? t('sent') : t('send') }}
      </UButton>
      <span class="text-ctp-overlay1 text-sm">{{ t('or') }}</span>
      <UButton icon="i-ci-calendar-add" variant="soft" size="md" to="https://cal.com/guillaume-bonnefoy" target="_blank">
        {{ t('book_a_call') }}
      </UButton>
    </div>
    <p v-if="display_error" class="text-ctp-red">
      {{ t('error') }}
    </p>
  </UForm>
</template>

<i18n lang="yaml">
en:
  message_sent: "Message sent!"
  sent: "Sent!"
  send: "Send"
  or: "or"
  book_a_call: "Schedule a call"
  error: "Sorry, there was an error, please write me an email at whiterqbbit{'@'}proton.me !"
fr:
  message_sent: "Message envoyé\u00A0!"
  sent: "Envoyé\u00A0!"
  send: "Envoyer"
  or: "ou"
  book_a_call: "Prendre RDV"
  error: "Navré, il y a eu une erreur, veuillez me contacter par mail à whiterqbbit{'@'}proton.me !"
</i18n>
