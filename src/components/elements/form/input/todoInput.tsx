'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { API_URL_TODOS } from '@/constants/api'
import { TodoInputNames } from '@/schemas/todoInputForm'
import { TodoInputInferType, todoInputSchema } from '@/schemas/todoInputForm/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { CirclePlus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

const TodoInputForm = () => {
  const router = useRouter()

  const methods = useForm<TodoInputInferType>({
    resolver: zodResolver(todoInputSchema),
    defaultValues: {
      [TodoInputNames.title]: ''
    }
  })
  const { control, handleSubmit } = methods

  const onSubmit = async (data: TodoInputInferType) => {
    const result = await fetch(API_URL_TODOS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (result.ok) router.refresh()
  }

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <div className="flex space-x-2 items-center justify-between">
                <FormControl>
                  <Input placeholder="Add a new todo" {...field} />
                </FormControl>
                <Button variant="ghost" size="icon" type="submit">
                  <CirclePlus />
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default TodoInputForm
