import { API_URL_TODOS } from '@/constants/api'

/**
 * Get all todos
 */
export const getAllTodos = async () => {
  const response = await fetch(API_URL_TODOS, {
    cache: 'no-store'
  })

  const data = await response.json()

  return {
    status: 200,
    result: data
  }
}
