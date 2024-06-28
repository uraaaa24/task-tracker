import { TodoDetailContext, defaultTodo } from '@/contexts/todoDetail'
import { todoDetailReducer } from '@/reducers/todoDetail'
import { Todo } from '@/types/todo'
import React, { useReducer } from 'react'

type TodoDetailProvider = {
  children: React.ReactNode
}

export const TodoDetailProvider = (props: TodoDetailProvider) => {
  const [state, dispatch] = useReducer(todoDetailReducer, defaultTodo)

  const contextValue = {
    selectedTodo: state,
    setTodo: (todo: Todo) => dispatch({ type: 'SET', payload: todo }),
    resetTodo: () => dispatch({ type: 'RESET', payload: null })
  }

  return <TodoDetailContext.Provider value={contextValue}>{props.children}</TodoDetailContext.Provider>
}
