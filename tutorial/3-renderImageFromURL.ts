import { Image } from 'https://deno.land/x/imagescript@1.2.15/mod.ts'
import createImage from './template.ts'

const image = createImage()

const URL = 'https://upload.wikimedia.org/wikipedia/commons/0/05/Cat.png'

// Hacemos fetch de nuestra URL
const response = await fetch(URL)

// Creamos un objeto Uint8Array a partir del array binario de la respuesta
const imageFromURL = new Uint8Array(await response.arrayBuffer())

// Lo codificamos y colocamos en nuestro lienzo
image.composite(await Image.decode(imageFromURL), 0, 0)

await Deno.writeFile(`./tutorial/output/imageFromURL.png`, await image.encode())
