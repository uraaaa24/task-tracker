import { useTodoDetail } from '@/contexts/todoDetail'

const TodoDetail = () => {
  const { selectedTodo } = useTodoDetail()

  return (
    <div>
      詳細を表示
      {selectedTodo.title}
    </div>
  )
}

export default TodoDetail
