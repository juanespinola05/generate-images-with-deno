import createImage from './template.ts'

// Clonamos la imagen
const image = createImage()

// Rellenamos el fondo con un color rojo #FF0000 con 100% opacidad (FF)
image.fill(0xFF0000FF)

// Guardamos el resultado en un nuevo archivo llamando al método encode()
await Deno.writeFile(`./tutorial/output/colorFilled.png`, await image.encode())
