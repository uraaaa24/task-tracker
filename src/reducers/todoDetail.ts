import { defaultTodo } from '@/contexts/todoDetail'
import { Todo } from '@/types/todo'

export type Action = { type: 'SET'; payload: Todo } | { type: 'RESET'; payload: null }

export const todoDetailReducer = (state: Todo, action: Action): Todo => {
  switch (action.type) {
    case 'SET':
      return action.payload
    case 'RESET':
      return defaultTodo
    default:
      throw new Error('Invalid action type')
  }
}
