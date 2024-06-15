import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { useToast } from '@/components/ui/use-toast'
import { TodoFormNames } from '@/schemas/todoStatusForm'
import { TodoFormInferType, todoFormSchema } from '@/schemas/todoStatusForm/validation'
import { putTodoCompleteStatus } from '@/utils/requester/put/todo'
import { zodResolver } from '@hookform/resolvers/zod'
import { Pencil, Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export type Todo = {
  id: string
  title: string
  completed: boolean
}

type TodoListItemProps = {
  todo: Todo
}

const TodoListItem = (props: TodoListItemProps) => {
  const router = useRouter()

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

      router.refresh()
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
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={props.todo.id}
                    checked={field.value}
                    onCheckedChange={async (value: boolean) => {
                      field.onChange(value)
                      await handleCheckboxChange(props.todo.id, props.todo.title, value)
                    }}
                  />
                  <label htmlFor={props.todo.id} className={`${field.value ? 'line-through text-gray-500' : ''} `}>
                    {props.todo.title}
                  </label>

                  <div className="space-x-1">
                    {/* 編集ボタン */}
                    <Button variant="ghost" onClick={() => console.log('Edit button clicked')} className="px-2">
                      <Pencil color="#6EE7B7" size={16} />
                    </Button>

                    {/* 削除ボタン */}
                    <Button variant="ghost" onClick={() => console.log('Delete button clicked')} className="px-2">
                      <Trash color="#F87171" size={16} />
                    </Button>
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default TodoListItem
