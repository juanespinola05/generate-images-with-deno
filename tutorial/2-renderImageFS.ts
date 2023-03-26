import { Image } from 'https://deno.land/x/imagescript@1.2.15/mod.ts'

const image = new Image(500, 500)

const imageFile = await Deno.readFile('./tutorial/lake.jpg')
const decodedImage = await Image.decode(imageFile)

image.composite(decodedImage)

await Deno.writeFile(
  `./tutorial/output/renderedImage.png`,
  await image.encode(),
)
