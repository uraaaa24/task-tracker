import { API_URL_TODOS } from '@/constants/api'
import { GetAllTodosSuccessResponse } from '@/types/todo'

/**
 * Get all todos
 */
export const getAllTodos = async (): Promise<GetAllTodosSuccessResponse> => {
  const response = await fetch(API_URL_TODOS, {
    cache: 'no-store'
  })

  const data = await response.json()

  return {
    status: 200,
    result: data
  }
}
