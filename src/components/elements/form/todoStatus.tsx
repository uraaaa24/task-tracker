'use client'

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { useToast } from '@/components/ui/use-toast'
import { TodoFormNames } from '@/schemas/todoStatusForm'
import { TodoFormInferType, todoFormSchema } from '@/schemas/todoStatusForm/validation'
import { putTodoCompleteStatus } from '@/utils/requester/put/todo'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import ListItem, { Todo } from '../list/listItem'

type TodoFormProps = {
  todo: Todo
}

const TodoStatusForm = (props: TodoFormProps) => {
  const { toast } = useToast()

  const form = useForm<TodoFormInferType>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      [TodoFormNames.id]: props.todo.id,
      [TodoFormNames.completed]: props.todo.completed || false
    }
  })

  const { control } = form

  /** Change the status of the todo */
  const handleCheckboxChange = async (id: string, title: string, completed: boolean) => {
    const response = await putTodoCompleteStatus(id, completed)
    const statusMessage = completed ? 'completed' : 'incompleted'

    if (response.ok) {
      toast({
        title: `${title} is ${statusMessage}`
      })
    }
  }

  return (
    <Form {...form}>
      <form className="space-y-2">
        <FormField
          name={TodoFormNames.completed}
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <ListItem
                  todo={props.todo}
                  value={field.value}
                  onChange={async (value: boolean) => {
                    field.onChange(value)
                    await handleCheckboxChange(props.todo.id, props.todo.title, value)
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default TodoStatusForm
