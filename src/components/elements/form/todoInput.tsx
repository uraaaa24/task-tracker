'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { TodoInputNames } from '@/schemas/todoInputForm'
import { TodoInputInferType, todoInputSchema } from '@/schemas/todoInputForm/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { CirclePlus } from 'lucide-react'
import { useForm } from 'react-hook-form'

const TodoInputForm = () => {
  // TODO: zodResolverを使ってバリデーションを追加する
  const methods = useForm<TodoInputInferType>({
    resolver: zodResolver(todoInputSchema),
    defaultValues: {
      [TodoInputNames.title]: ''
    }
  })
  const { control, handleSubmit } = methods

  const onSubmit = (data: TodoInputInferType) => {
    console.log(data)
  }

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-2 items-center">
        <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Add a new todo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="ghost" size="icon" type="submit">
          <CirclePlus />
        </Button>
      </form>
    </Form>
  )
}

export default TodoInputForm
