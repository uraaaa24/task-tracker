export type Todo = {
  id: string
  title: string
  completed: boolean
}

export type TodoSuccessResponse = {
  status: number
  result: Todo[]
}
