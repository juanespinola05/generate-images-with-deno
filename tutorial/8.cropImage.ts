import { Image } from 'https://deno.land/x/imagescript@1.2.15/mod.ts'

const image = new Image(500, 500)

image.composite(
  await Image.decode(await Deno.readFile('./tutorial/lake.jpg')),
)

image.crop(0, 0, 400, 200)

await Deno.writeFile(`./output/scroppedImage.png`, await image.encode())
