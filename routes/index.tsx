import { Head } from '$fresh/runtime.ts'
import Form from '../islands/Form.tsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>Generate Images with Deno</title>
      </Head>
      <div class='p-4 mx-auto max-w-screen-md'>
        <Form />
      </div>
    </>
  )
}
