import { Buffer } from 'node:buffer'

export default defineEventHandler(async () => {
  const refresh_token = useRuntimeConfig().SPOTIFY_REFRESH_TOKEN
  const clientId = useRuntimeConfig().SPOTIFY_CLIENT_ID
  const clientSecret = useRuntimeConfig().SPOTIFY_CLIENT_SECRET

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

  const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
  const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'

  const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ grant_type: 'refresh_token', refresh_token }).toString(),
    })

    return response.json()
  }

  async function getNowPlaying() {
    const { access_token: accessToken } = await getAccessToken()
    const response = await fetch(NOW_PLAYING_ENDPOINT, { headers: { Authorization: `Bearer ${accessToken}` } })

    return response.json()
  }

  return await getNowPlaying()
})
