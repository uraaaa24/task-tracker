import { Button } from '@/components/ui/button'
import { FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { CirclePlus } from 'lucide-react'
import { useForm } from 'react-hook-form'

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
    <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-2 items-center">
      <FormField
        name="title"
        control={control}
        render={({ field }) => <Input {...field} type="text" placeholder="Add a new todo" />}
      />

      <Button variant="ghost" size="icon">
        <CirclePlus />
      </Button>
    </form>
  )
}

export default TodoInput
