import { z } from 'zod'

const MIN_FILL_MS = 3000

const schema = z.object({
  email: z.string().trim().email(),
  message: z.string().trim().min(1).max(5000),
  // honeypot : champ caché, seuls les bots le remplissent
  website: z.string().optional(),
  // ms entre l'affichage du formulaire et l'envoi
  elapsed: z.number().optional(),
})

export default defineEventHandler(async (event) => {
  const parsed = schema.safeParse(await readBody(event))
  if (!parsed.success)
    throw createError({ statusCode: 400, statusMessage: 'Invalid form' })

  const { email, message, website, elapsed } = parsed.data

  // on fait semblant d'avoir envoyé pour ne rien apprendre aux bots
  if (website) {
    console.warn('[contact] dropped: honeypot filled', { email })
    return { ok: true }
  }
  if (elapsed === undefined || elapsed < MIN_FILL_MS) {
    console.warn('[contact] dropped: sent too fast', { email, elapsed })
    return { ok: true }
  }

  const { emails } = useResend()
  const result = await emails.send({
    from: 'Moi-même <onboarding@resend.dev>',
    to: ['whiterqbbit@proton.me'],
    subject: 'Nouveau message whiterqbbit.io',
    text: `Un nouveau message a été envoyé par ${email}:\n\n${message}`,
  })

  return result
})
