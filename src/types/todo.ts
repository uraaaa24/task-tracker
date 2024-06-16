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

export type PutTodoStatusRequest = {
  id: string
  completed: boolean
}

export type PutTodoTitleRequest = {
  id: string
  title: string
}
