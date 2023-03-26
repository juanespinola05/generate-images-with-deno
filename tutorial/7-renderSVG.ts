import { Image } from 'https://deno.land/x/imagescript@1.2.15/mod.ts'
import createImage from './template.ts'

const image = createImage()

const svgString = await Deno.readTextFile('./tutorial/deno.svg')

image.composite(
  Image.renderSVG(svgString, 500, Image.SVG_MODE_WIDTH),
)

await Deno.writeFile(`./tutorial/output/renderSVG.png`, await image.encode())
