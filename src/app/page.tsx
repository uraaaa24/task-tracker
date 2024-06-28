import TodoInputForm from '@/components/elements/form/input/todoInput'
import TodoStatusForm from '@/components/elements/form/todoStatus'
import { getAllTodos } from '@/utils/requester/get/todos'

export default async function Home() {
  const todos = await getAllTodos()

  return (
    <div className="flex w-full h-full">
      <div className="p-8 space-y-2 flex-1">
        <TodoInputForm />
        {todos && <TodoStatusForm todos={todos.result} />}
      </div>
      <div className="p-8 flex-1 border-l-2">
        {/* todoの詳細を表示する */}
        詳細を表示
      </div>
    </div>
  )
}
