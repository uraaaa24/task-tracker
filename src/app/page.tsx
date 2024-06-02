import TodoInputForm from '@/components/elements/form/todoInput'
import TodoStatusForm from '@/components/elements/form/todoStatus'
import { createClient } from '@/utils/supabase/server'

export default async function Home() {
  const supabase = createClient()
  const { data: notes } = await supabase.from('notes').select()

  return (
    <div className="p-8">
      Home
      <div className="bg-white shadow-md rounded-md p-4 mt-4 space-y-4">
        <TodoStatusForm notes={notes ?? []} />
        <TodoInputForm />
      </div>
    </div>
  )
}
