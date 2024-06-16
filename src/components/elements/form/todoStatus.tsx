'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import { Todo } from '@/types/todo'
import TodoListItem from './list/todoListItem'

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
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger>
                <Separator className="w-full" />
              </AccordionTrigger>
              <AccordionContent>
                {completedTodos.map((todo: Todo) => (
                  <TodoListItem key={todo.id} todo={todo} />
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </>
  )
}

export default TodoStatusForm
