import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { useToast } from '@/components/ui/use-toast'
import { useUpdateTodoComplete } from '@/hooks/useUpdateTodoComplete'
import { TodoFormNames } from '@/schemas/todoStatusForm'
import { TodoFormInferType, todoFormSchema } from '@/schemas/todoStatusForm/validation'
import { PutTodoStatusRequest, PutTodoTitleRequest, Todo } from '@/types/todo'
import { deleteTodo } from '@/utils/requester/delete/todo'
import { updateTodoTitle } from '@/utils/requester/put/todo'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Pencil, Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

type TodoListItemProps = {
  todo: Todo
}

const TodoListItem = (props: TodoListItemProps) => {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)

  const [isEditing, setIsEditing] = useState(false)
  const [editingTitle, setEditingTitle] = useState(props.todo.title)

  const { updateTodoComplete, isLoading, hasError, errorMessage } = useUpdateTodoComplete()

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
    const requestBody: PutTodoStatusRequest = {
      id,
      completed
    }

    const _ = await updateTodoComplete(requestBody)

    if (hasError) {
      toast({
        title: errorMessage
      })
    }

    if (completed) {
      toast({
        title: `${title} is completed`
      })
    }

    router.refresh()
  }

  /** Edit the todo */
  const handleEdit = (event: React.MouseEvent) => {
    event.preventDefault()

    setIsEditing(!isEditing)
  }

  /** Update the title of the todo */
  const handleUpdateTitle = useCallback(async () => {
    if (editingTitle !== props.todo.title) {
      const requestBody: PutTodoTitleRequest = {
        id: props.todo.id,
        title: editingTitle
      }
      const _ = await updateTodoTitle(requestBody)

      router.refresh()
    }
  }, [editingTitle, props.todo.id, props.todo.title, router])

  /** Delete the todo */
  const handleDelete = async (event: React.MouseEvent) => {
    event.preventDefault()

    const response = await deleteTodo(props.todo.id)
    if (!response.ok) return
    toast({
      title: `${props.todo.title} is deleted`
    })

    router.refresh()
  }

  useEffect(() => {
    /* Close the form when clicking outside */
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        handleUpdateTitle()
        setIsEditing(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleUpdateTitle])

  return (
    <Form {...form}>
      <form ref={formRef} className="space-y-2">
        <FormField
          name={TodoFormNames.completed}
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center justify-between gap-1">
                  <div className="flex items-center space-x-2 w-full">
                    <Checkbox
                      id={props.todo.id}
                      checked={field.value}
                      onCheckedChange={async (value: boolean) => {
                        field.onChange(value)
                        await handleCheckboxChange(props.todo.id, props.todo.title, value)
                      }}
                    />
                    {isEditing ? (
                      <input
                        type="text"
                        className="pl-1 py-1 border rounded-md w-full border-gray-500 focus:outline-none focus:ring-2"
                        defaultValue={props.todo.title}
                        onChange={(e) => setEditingTitle(e.target.value)}
                      />
                    ) : (
                      <label htmlFor={props.todo.id} className={`pl-1 ${field.value ? 'line-through text-gray-500' : ''} `}>
                        {props.todo.title}
                      </label>
                    )}
                  </div>

                  <div className="flex space-x-1 justify-center">
                    {isLoading ? (
                      <div className="flex items-center justify-center w-full">
                        <Loader2 className="animate-spin text-gray-500" size={16} aria-label="Loading" />
                      </div>
                    ) : (
                      <>
                        <Button variant="ghost" onClick={handleEdit} className="px-2">
                          <Pencil color="#6EE7B7" size={16} />
                        </Button>

                        <Button variant="ghost" onClick={handleDelete} className="px-2">
                          <Trash color="#F87171" size={16} />
                        </Button>
                      </>
                    )}
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
