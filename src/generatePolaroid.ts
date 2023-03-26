import {
  Image,
  TextLayout,
} from 'https://deno.land/x/imagescript@1.2.15/mod.ts'

const POLAROID_HEIGHT = 800
const POLAROID_WIDTH = 900
const IMAGE_WIDTH = 765
const IMAGE_HEIGHT = 517
const IMAGE_POS = { x: 68, y: 73 }

const polaroidImageTemplate = new Image(POLAROID_WIDTH, POLAROID_HEIGHT)

polaroidImageTemplate.composite(
  await Image.decode(await Deno.readFile('./src/assets/polaroid.png')),
)

const font = await Deno.readFile('./src/assets/Lato.ttf')
const textLayout = new TextLayout({
  maxWidth: 800,
})

const getImageFromURL = async (imageUrl: string) => {
  const url = new URL(imageUrl)
  const res = await fetch(url.toString())

  const mime = res.headers.get('Content-Type')
  if (!mime) throw new Error('Invalid URL')
  const [type, ext] = mime.split('/')
  if (!['png', 'jpg', 'webp', 'jpeg'].includes(ext) || type !== 'image') {
    throw new Error('Invalid image URL')
  }
  const image = new Uint8Array(await res.arrayBuffer())
  return Image.decode(image)
}

async function generatePolaroid(imageUrl: string, text: string) {
  const imageFromURL = await getImageFromURL(imageUrl)
  const polaroid = polaroidImageTemplate.clone()

  imageFromURL.cover(IMAGE_WIDTH, IMAGE_HEIGHT)
  polaroid.composite(imageFromURL, IMAGE_POS.x, IMAGE_POS.y)

  const textImage = Image.renderText(font, 48, text, 0x000000FF, textLayout)
  const xPos = polaroid.width / 2 - textImage.width * 0.5
  polaroid.composite(textImage, xPos, 650)

  return await polaroid.encode()
}

export default generatePolaroid
