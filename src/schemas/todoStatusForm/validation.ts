import * as z from 'zod'

export const todoFormSchema = z.object({
  id: z.string(),
  completed: z.boolean()
})

export type TodoFormInferType = z.infer<typeof todoFormSchema>
