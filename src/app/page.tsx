import TodoInputForm from '@/components/elements/form/input/todoInput'
import TodoStatusForm from '@/components/elements/form/todoStatus'
import { getAllTodos } from '@/utils/requester/get/todos'

export default async function Home() {
  const todos = await getAllTodos()

  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-md p-8 mt-4 space-y-2 max-w-lg w-full mx-auto">
        {todos && <TodoStatusForm todos={todos.result} />}
        <TodoInputForm />
      </div>
    </div>
  )
}
