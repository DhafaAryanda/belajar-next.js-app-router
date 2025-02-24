'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'

type FieldErrors = {
  [key: string]: string[]
}

export async function createNote(
  prevState: {
    message: string
    errors: object
  },
  formData: FormData,
) {
  const formSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().min(1, 'Description is required'),
  })

  const parse = formSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
  })

  if (!parse.success) {
    const fieldErrors: FieldErrors = parse.error.formErrors.fieldErrors || {}
    const errors = Object.keys(fieldErrors).reduce((acc, key) => {
      acc[key] = fieldErrors[key]?.[0] || 'Unknown error'
      return acc
    }, {} as Record<string, string>)
    return { errors }
  }

  try {
    await fetch('https://service.pace-unv.cloud/api/notes', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(parse.data),
    }).then((res) => res.json())

    revalidatePath('/notes/server')
    return { message: 'Added notes successfully' }
  } catch (error) {
    return { message: 'Failed add notes' }
  }
}
