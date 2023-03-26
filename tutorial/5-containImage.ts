import { Image } from 'https://deno.land/x/imagescript@1.2.15/mod.ts'
import createImage from './template.ts'

const image = createImage()

const lakeImage = await Image.decode(await Deno.readFile('./tutorial/lake.jpg'))

lakeImage.contain(image.width, image.height)

image.composite(lakeImage)

await Deno.writeFile(
  `./tutorial/output/imageContained.png`,
  await image.encode(),
)
