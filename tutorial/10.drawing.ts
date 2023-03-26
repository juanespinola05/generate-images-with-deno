import { Image } from 'https://deno.land/x/imagescript@1.2.15/mod.ts'
import createImage from './template.ts'

const image = createImage()

const lakeImage = await Image.decode(await Deno.readFile('./tutorial/lake.jpg'))

image.composite(lakeImage)

// Indicamos las coordenadas, las medidas y el color
const box = new Image(200, 200).drawBox(0, 0, 200, 200, 0xFF0000FF)

// Indicamos las coordenadas, el radio y el color
const circle = new Image(200, 200).drawCircle(100, 100, 100, 0x00FF00FF)

image.composite(box)
image.composite(circle)

await Deno.writeFile(`./tutorial/output/drawing.png`, await image.encode())
