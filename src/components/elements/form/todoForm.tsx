'use client'

import { Form, FormField, FormItem } from '@/components/ui/form'
import { TodoFormInferType, todoFormSchema } from '@/schemas/todoListForm/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import ListItem, { Note } from '../list/listItem'
import TodoInput from './todoInput'

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
    // TODO: todoを更新する処理を追加する
  }

  return (
    <Form {...methods}>
      <div className="w-96 space-y-2">
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
        <TodoInput />
      </div>
      {/* ボタンで更新するのではなくチェックボックスの値が変わった段階で、フォームを送信する方針にしたため、一旦コメントアウト */}
      {/* <Button type="submit" onClick={handleSubmit(onSubmit)}>
        Save
      </Button> */}
    </Form>
  )
}

export default TodoForm
