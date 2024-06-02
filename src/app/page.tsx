import TodoInputForm from '@/components/elements/form/todoInput'
import TodoStatusForm from '@/components/elements/form/todoStatus'
import { API_URL_TODOS } from '@/constants/api'

export default async function Home() {
  const result = await fetch(API_URL_TODOS, {
    cache: 'no-store'
  })
  const notes = await result.json()

  return (
    <div className="p-8">
      Home
      <div className="bg-white shadow-md rounded-md p-4 mt-4 space-y-4">
        {notes && notes.map((note: any) => <TodoStatusForm key={note.id} note={note} />)}
        <TodoInputForm />
      </div>
    </div>
  )
}
