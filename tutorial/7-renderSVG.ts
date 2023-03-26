import { Image } from 'https://deno.land/x/imagescript@1.2.15/mod.ts'

const image = new Image(500, 500)

const svgString = await Deno.readTextFile('./tutorial/deno.svg')

image.composite(
  Image.renderSVG(svgString, 500, Image.SVG_MODE_WIDTH),
)

await Deno.writeFile(`./output/renderSVG.png`, await image.encode())
