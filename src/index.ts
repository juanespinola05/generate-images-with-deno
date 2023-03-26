import { Application, Router } from 'https://deno.land/x/oak@v12.1.0/mod.ts'

const PORT = 8000

const app = new Application()
const router = new Router()

router.get('/', ({ response }) => {
  response.body = '<h1>Hello world</h1>'
})

app.use(router.routes())

console.log(`Running server on port ${PORT}`)
await app.listen({ port: PORT })
