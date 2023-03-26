import { Image } from 'https://deno.land/x/imagescript@1.2.15/mod.ts'

// Establecemos las medidas de nuestro lienzo
const POLAROID_HEIGHT = 800
const POLAROID_WIDTH = 900

// Instanciamos nuestra imagen con las medidas
const template = new Image(POLAROID_WIDTH, POLAROID_HEIGHT)

// Creamos una función con el método clone()
export default function createImage() {
  return template.clone()
}
