import createImage from './template.ts'

const image = createImage()

image.fill(0xFF0000FF)

await Deno.writeFile(`./tutorial/output/colorFilled.png`, await image.encode())
