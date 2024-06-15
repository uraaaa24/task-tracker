import { API_URL_TODOS } from '@/constants/api'
import { TodoInputInferType } from '@/schemas/todoInputForm/validation'

/**
 * Post a new todo
 * @param data  - TodoInputInferType
 */
export const postTodo = async (data: TodoInputInferType) => {
  const response = await fetch(API_URL_TODOS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return response
}
