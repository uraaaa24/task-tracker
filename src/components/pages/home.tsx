'use client'

import { TodoDetailProvider } from '@/providers/todoDetail'
import { Todo } from '@/types/todo'
import TodoInputForm from '../elements/form/input/todoInput'
import TodoStatusForm from '../elements/form/todoStatus'
import TodoDetail from '../layouts/details'

type HomePageProps = {
  todos: Todo[]
}

const HomePage = (props: HomePageProps) => {
  return (
    <TodoDetailProvider>
      <div className="flex w-full h-full">
        <div className="p-8 space-y-2 flex-1">
          <TodoInputForm />
          <TodoStatusForm todos={props.todos} />
        </div>
        <div className="p-8 flex-1 border-l-2">
          <TodoDetail />
        </div>
      </div>
    </TodoDetailProvider>
  )
}

export default HomePage
