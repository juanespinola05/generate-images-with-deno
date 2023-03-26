import { Image } from 'https://deno.land/x/imagescript@1.2.15/mod.ts'
import createImage from './template.ts'

const image = createImage()

image.composite(
  await Image.decode(await Deno.readFile('./tutorial/lake.jpg')),
)

// Indicamos desde qué punto y cuáles medidas
image.crop(0, 0, 400, 200)

await Deno.writeFile(
  `./tutorial/output/scroppedImage.png`,
  await image.encode(),
)
