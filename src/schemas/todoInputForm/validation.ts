import * as z from 'zod'

export const todoInputSchema = z.object({
  title: z.string().min(1)
})

export type TodoInputInferType = z.infer<typeof todoInputSchema>
