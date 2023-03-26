import { Image } from 'https://deno.land/x/imagescript@1.2.15/mod.ts'

const image = new Image(500, 500)

const URL = 'https://upload.wikimedia.org/wikipedia/commons/0/05/Cat.png'

const response = await fetch(URL)
const imageFromURL = new Uint8Array(await response.arrayBuffer())

image.composite(await Image.decode(imageFromURL), 0, 0)

await Deno.writeFile(`./output/imageFromURL.png`, await image.encode())
