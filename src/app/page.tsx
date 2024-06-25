import TodoInputForm from '@/components/elements/form/input/todoInput'
import TodoStatusForm from '@/components/elements/form/todoStatus'
import { getAllTodos } from '@/utils/requester/get/todos'

export default async function Home() {
  const todos = await getAllTodos()

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full h-full">
        <div className="bg-white shadow-lg rounded-md p-8 mt-4 space-y-2 w-full flex-1">
          <TodoInputForm />
          {todos && <TodoStatusForm todos={todos.result} />}
        </div>
      </div>
    </div>
  )
}
