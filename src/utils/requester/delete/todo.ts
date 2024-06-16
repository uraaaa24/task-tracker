import { API_URL_TODOS } from '@/constants/api'

export const deleteTodo = async (id: string) => {
  const response = await fetch(API_URL_TODOS, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id
    })
  })

  return response
}
