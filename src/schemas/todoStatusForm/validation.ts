import * as z from 'zod'

export const todoFormSchema = z.object({
  notes: z.record(z.boolean())
})

export type TodoFormInferType = z.infer<typeof todoFormSchema>
