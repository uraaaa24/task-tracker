export const TodoFormNames = {
  id: 'id',
  completed: 'completed'
} as const

export type TodoFormSchema = {
  id: string
  completed: boolean
}
