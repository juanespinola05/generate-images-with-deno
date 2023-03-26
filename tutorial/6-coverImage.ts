import { Image } from 'https://deno.land/x/imagescript@1.2.15/mod.ts'

const image = new Image(500, 500)

const lakeImage = await Image.decode(await Deno.readFile('./tutorial/lake.jpg'))

lakeImage.contain(image.width, image.height)

image.composite(lakeImage)

await Deno.writeFile(`./output/coverImage.png`, await image.encode())
