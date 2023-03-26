import {
  Image,
  TextLayout,
} from 'https://deno.land/x/imagescript@1.2.15/mod.ts'
import createImage from './template.ts'

const image = createImage()

// Con la clase TextLayout definimos algunos parámetros para nuestro texto
const textLayout = new TextLayout({
  maxWidth: 800,
  maxHeight: 300,
  wrapStyle: 'word',
})

// Cargamos nuestra fuente
const font = await Deno.readFile('./tutorial/Lato.ttf')

// Enviamos la fuente, el tamaño de la letra, nuestro texto, el color y la configuración (es opcional)
const textImage = Image.renderText(font, 56, 'My text!', 0x000000FF, textLayout)

image.composite(textImage)

await Deno.writeFile(`./tutorial/output/renderText.png`, await image.encode())
