import { Todo } from '@/types/todo'
import { createContext, useContext } from 'react'

export const defaultTodo = {
  id: '',
  title: '',
  description: '',
  completed: false,
  created_at: '',
  updated_at: ''
}

type TodoDetailContext = {
  selectedTodo: Todo
  setTodo: (todo: Todo) => void
  resetTodo: () => void
}

const defaultTodoContext: TodoDetailContext = {
  selectedTodo: defaultTodo,
  setTodo: () => console.log('setTodo function not defined'),
  resetTodo: () => console.log('resetTodo function not defined')
}

export const TodoDetailContext = createContext(defaultTodoContext)

export const useTodoDetail = () => useContext(TodoDetailContext)
