import { Image } from 'https://deno.land/x/imagescript@1.2.15/mod.ts'
import createImage from './template.ts'

const image = createImage()

// Primero leemos la imagen en nuestra carpeta
const imageFile = await Deno.readFile('./tutorial/lake.jpg')

// Luego lo convertimos en un objeto Image con el método decode
const decodedImage = await Image.decode(imageFile)

// Lo renderizamos en nuestro lienzo
image.composite(decodedImage, 0, 0)

// Guardamos la imagen nuevamente
await Deno.writeFile(
  `./tutorial/output/renderedImage.png`,
  await image.encode(),
)
