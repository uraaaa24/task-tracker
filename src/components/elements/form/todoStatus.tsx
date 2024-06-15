'use client'

import TodoListItem, { Todo } from './list/todoListItem'

type TodoFormProps = {
  todos: Todo[]
}

const TodoStatusForm = (props: TodoFormProps) => {
  return <>{props.todos && props.todos.map((todo: Todo) => <TodoListItem key={todo.id} todo={todo} />)}</>
}

export default TodoStatusForm
