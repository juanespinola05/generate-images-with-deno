import { Image } from 'https://deno.land/x/imagescript@1.2.15/mod.ts'

const image = new Image(500, 500)

const lakeImage = await Image.decode(await Deno.readFile('./tutorial/lake.jpg'))

image.composite(lakeImage)

const box = new Image(200, 200).drawBox(0, 0, 200, 200, 0xFF0000FF)
const circle = new Image(200, 200).drawCircle(100, 100, 100, 0x00FF00FF)

image.composite(box)
image.composite(circle)

await Deno.writeFile(`./output/drawing.png`, await image.encode())
