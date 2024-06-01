import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { CirclePlus } from 'lucide-react'
import { Form, useForm } from 'react-hook-form'

const TodoInput = () => {
  // TODO: zodResolverを使ってバリデーションを追加する
  const methods = useForm({
    defaultValues: {
      title: ''
    }
  })
  const { control, handleSubmit } = methods

  const onSubmit = (data: { title: string }) => {
    console.log(data)
  }

  return (
    <Form {...methods} className="flex space-x-2 items-center">
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
      <Button variant="ghost" size="icon" onClick={handleSubmit(onSubmit)}>
        <CirclePlus />
      </Button>
    </Form>
  )
}

export default TodoInput
