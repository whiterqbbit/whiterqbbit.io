export default defineEventHandler(async (event) => {
  const { emails } = useResend()

  const body = await readBody(event)
  const { email, message } = body

  const result = await emails.send({
    from: 'Moi-même <onboarding@resend.dev>',
    to: ['whiterqbbit@proton.me'],
    subject: 'Nouveau message whiterqbbit.io',
    text: `Un nouveau message a été envoyé par ${email}:\n\n${message}`,
  })

  return result
})
