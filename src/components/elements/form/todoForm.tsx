'use client'

import { Button } from '@/components/ui/button'
import { Form, FormField, FormItem } from '@/components/ui/form'
import { TodoFormInferType, todoFormSchema } from '@/schemas/todoListForm/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import ListItem, { Note } from '../list/listItem'

type TodoFormProps = {
  notes: Note[]
}

const TodoForm = (props: TodoFormProps) => {
  const methods = useForm<TodoFormInferType>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      notes: props.notes?.reduce((acc, note) => ({ ...acc, [note.id]: false }), {})
    }
  })
  const { control, handleSubmit } = methods

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Form {...methods}>
      {props.notes?.map((note) => (
        <FormField
          key={note.id}
          name={`notes.${note.id}`}
          control={control}
          render={({ field }) => (
            <FormItem>
              <ListItem {...field} note={note} value={field.value} onChange={(value: boolean) => field.onChange(value)} />
            </FormItem>
          )}
        />
      ))}
      <Button type="submit" onClick={handleSubmit(onSubmit)}>
        Save
      </Button>
    </Form>
  )
}

export default TodoForm
