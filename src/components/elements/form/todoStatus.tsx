'use client'

import { Button } from '@/components/ui/button'
import { Form, FormField, FormItem } from '@/components/ui/form'
import { TodoFormNames } from '@/schemas/todoStatusForm'
import { TodoFormInferType, todoFormSchema } from '@/schemas/todoStatusForm/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import ListItem, { Note } from '../list/listItem'

type TodoFormProps = {
  notes: Note[]
}

const TodoStatusForm = (props: TodoFormProps) => {
  const methods = useForm<TodoFormInferType>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      [TodoFormNames.notes]: props.notes?.reduce((acc, note) => ({ ...acc, [note.id]: false }), {})
    }
  })
  const { control, handleSubmit } = methods

  const onSubmit = (data: TodoFormInferType) => {
    console.log(data)
    // TODO: todoを更新する処理を追加する
  }

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-96 space-y-2">
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
        {/* TODO: checkboxの状態を変えた時点で、DBを更新するようにする */}
        <Button type="submit">Save</Button>
      </form>
    </Form>
  )
}

export default TodoStatusForm
