export type Todo = {
  id: string
  title: string
  completed: boolean
  created_at: string
}

export type GetAllTodosSuccessResponse = {
  status: number
  result: Todo[]
}
