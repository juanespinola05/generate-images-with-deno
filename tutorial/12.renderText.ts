import {
  Image,
  TextLayout,
} from 'https://deno.land/x/imagescript@1.2.15/mod.ts'

const image = new Image(800, 400)
image.fill(0xFFFFFFFF)
const textLayout = new TextLayout({
  maxWidth: 800,
  maxHeight: 300,
  wrapStyle: 'word',
})

const font = await Deno.readFile('./tutorial/Lato.ttf')

image.composite(
  Image.renderText(
    font,
    56,
    'Rendering text that is super long and dont know whats gonna happeennn!',
    0x000000FF,
    textLayout,
  ),
  100,
  100,
)

await Deno.writeFile(`./output/renderText.png`, await image.encode())
