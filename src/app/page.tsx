import HomePage from '@/components/pages/home'
import { getAllTodos } from '@/utils/requester/get/todos'

export default async function Home() {
  const todos = await getAllTodos()

  return <HomePage todos={todos.result} />
}
