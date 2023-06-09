import { Image } from 'https://deno.land/x/imagescript@1.2.15/mod.ts'
const lakeImage = await Image.decode(await Deno.readFile('./tutorial/lake.jpg'))

// Indicamos las medidas
lakeImage.resize(600, Image.RESIZE_AUTO)

await Deno.writeFile(`./tutorial/output/resized.png`, await lakeImage.encode())
