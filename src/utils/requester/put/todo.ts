import { API_URL_TODOS } from '@/constants/api'
import { PutTodoStatusRequest, PutTodoTitleRequest } from '@/types/todo'

/**
 * Update a todo's complete status
 */
export const updateTodoCompleteStatus = async (requestBody: PutTodoStatusRequest) => {
  const response = await fetch(API_URL_TODOS, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })

  return response
}

/**
 * Update a todo's title
 */
export const updateTodoTitle = async (requestBody: PutTodoTitleRequest) => {
  const response = await fetch(API_URL_TODOS, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })

  return response
}
