'use client'

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { API_URL_TODOS } from '@/constants/api'
import { TodoFormNames } from '@/schemas/todoStatusForm'
import { TodoFormInferType, todoFormSchema } from '@/schemas/todoStatusForm/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import ListItem, { Note } from '../list/listItem'

type TodoFormProps = {
  note: Note
}

const TodoStatusForm = (props: TodoFormProps) => {
  const form = useForm<TodoFormInferType>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      [TodoFormNames.id]: props.note.id,
      [TodoFormNames.completed]: props.note.completed || false
    }
  })

  const { control } = form

  const handleCheckboxChange = async (id: string, value: boolean) => {
    const response = await fetch(API_URL_TODOS, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, completed: value })
    })
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
                  note={props.note}
                  value={field.value}
                  onChange={async (value: boolean) => {
                    field.onChange(value)
                    await handleCheckboxChange(props.note.id, value)
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
