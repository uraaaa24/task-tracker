export const TodoFormNames = {
  notes: 'notes'
} as const

export type TodoFormSchema = {
  notes: Record<string, boolean>
}
