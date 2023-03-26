import { Image } from 'https://deno.land/x/imagescript@1.2.15/mod.ts'
import createImage from './template.ts'

const image = createImage()

const lakeImage = await Image.decode(await Deno.readFile('./tutorial/lake.jpg'))

// Primero le indicamos el tamaño de la caja donde debe ajustarse
lakeImage.fit(image.width, image.height)

// La renderizamos en nuestro lienzo
image.composite(lakeImage, 0, 0)

await Deno.writeFile(`./tutorial/output/fitImage.png`, await image.encode())
