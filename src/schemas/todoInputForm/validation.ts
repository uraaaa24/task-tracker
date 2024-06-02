import * as z from 'zod'

export const todoInputSchema = z.object({
  title: z.string().min(1, { message: 'Todo must be at least 1 character long' })
})

export type TodoInputInferType = z.infer<typeof todoInputSchema>
