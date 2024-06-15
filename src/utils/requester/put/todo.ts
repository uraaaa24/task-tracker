import { API_URL_TODOS } from '@/constants/api'

/**
 * Update a todo's complete status
 * @param id        - string
 * @param completed - boolean
 */
export const putTodoCompleteStatus = async (id: string, completed: boolean) => {
  const response = await fetch(API_URL_TODOS, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, completed })
  })

  return response
}
