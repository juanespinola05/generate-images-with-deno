import { useState } from 'preact/hooks'
import { FunctionalComponent, JSX } from 'preact'

const Form: FunctionalComponent = () => {
  const [image, setImage] = useState<string | null>(null)
  const [error, setError] = useState<string | undefined>(undefined)

  const handleSubmit = (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    setError(undefined)
    e.preventDefault()
    const { text, imageUrl, cover } = e.target as HTMLFormElement

    fetch('/api/generate-polaroid', {
      body: JSON.stringify({
        text: text.value,
        imageUrl: imageUrl.value,
        cover: cover.checked,
      }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })
      .then((res) => {
        if (!res.ok) throw res
        return res.blob()
      })
      .then((img) => setImage(URL.createObjectURL(img)))
      .catch(async (res) => {
        console.log('🚀 ~ file: Form.tsx:28 ~ handleSubmit ~ res:', res)
        const err = await res.json()
        setError(err.message)
        setTimeout(() => {
          setError(undefined)
        }, 5000)
      })
  }

  return (
    <div class='flex flex-col gap-6'>
      <form
        onSubmit={handleSubmit}
        class='w-96 h-60 rounded-md shadow-md p-4 mx-auto bg-white grid place-content-center'
      >
        <div class='flex flex-col gap-6'>
          <div class='flex gap-2 items-center justify-between'>
            <label htmlFor='text'>Picture text</label>
            <input
              type='text'
              id='text'
              name='text'
              maxLength={32}
              class='rounded-md h-8 border-[1px] border-blue-800'
            />
          </div>
          <div class='flex gap-2 items-center justify-between'>
            <label htmlFor='imageUrl'>Image URL</label>
            <input
              type='URL'
              id='imageUrl'
              name='imageUrl'
              required
              class='rounded-md h-8 border-[1px] border-blue-800'
            />
          </div>
          <div class='flex flex-row-reverse gap-4 justify-end'>
            <label htmlFor='cover'>Adjust image to polaroid size</label>
            <input
              type='checkbox'
              id='cover'
              name='cover'
            />
          </div>
          <div class='flex justify-center'>
            <input
              type='submit'
              value='Generar'
              class='px-2 py-1 rounded-md bg-blue-700 text-white'
            />
          </div>
        </div>
      </form>
      <p className='text-lg text-red-600 text-center'>
        {!error ? null : error}
      </p>
      <div>
        {!image ? null : <img src={image} alt='' />}
      </div>
    </div>
  )
}

export default Form
