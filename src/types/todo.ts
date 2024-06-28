export type Todo = {
  id: string
  title: string
  description: string
  completed: boolean
  created_at: string
  updated_at: string
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
