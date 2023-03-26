import { Image } from 'https://deno.land/x/imagescript@1.2.15/mod.ts'

const POLAROID_HEIGHT = 800
const POLAROID_WIDTH = 900

const polaroidImageTemplate = new Image(POLAROID_WIDTH, POLAROID_HEIGHT)

const template = polaroidImageTemplate.composite(
  await Image.decode(await Deno.readFile('./src/assets/polaroid.png')),
)

export default function createImage() {
  return template.clone()
}
