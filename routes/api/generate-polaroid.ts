import { Handlers } from '$fresh/server.ts'
import generatePolaroid from '../../utils/polaroid.ts'

export const handler: Handlers = {
  async POST(req): Promise<Response> {
    const data = await req.json()
    const { text, imageUrl, cover } = data
    return generatePolaroid(imageUrl, text, cover)
      .then((image) =>
        new Response(image, {
          headers: {
            'Content-Type': 'image/png',
            'Access-Control-Allow-Origin': '*',
          },
        })
      )
      .catch((e) =>
        new Response(
          JSON.stringify({ message: e.message }),
          { status: 400, headers: { 'Content-Type': 'application/json' } },
        )
      )
  },
}
