import TodoForm from '@/components/elements/form/todoForm'
import { createClient } from '@/utils/supabase/server'

export default async function Home() {
  const supabase = createClient()
  const { data: notes } = await supabase.from('notes').select()

  return (
    <div>
      Home
      <div className="bg-white shadow-md rounded-md p-4 mt-4 space-y-4">
        <TodoForm notes={notes ?? []} />
      </div>
    </div>
  )
}
