'use client'

import { Separator } from '@/components/ui/separator'
import TodoListItem, { Todo } from './list/todoListItem'

type TodoFormProps = {
  todos: Todo[]
}

const TodoStatusForm = (props: TodoFormProps) => {
  const completedTodos = props.todos.filter((todo) => todo.completed)
  const incompletedTodos = props.todos.filter((todo) => !todo.completed)

  return (
    <>
      {incompletedTodos && incompletedTodos.length > 0 && (
        <div>
          {incompletedTodos.map((todo: Todo) => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
      {completedTodos && completedTodos.length > 0 && (
        <div>
          <Separator />
          {completedTodos.map((todo: Todo) => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </>
  )
}

export default TodoStatusForm
