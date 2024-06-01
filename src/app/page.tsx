import ListItem from '@/components/elements/listItem'
import { createClient } from '@/utils/supabase/server'

export default async function Home() {
  const supabase = createClient()
  const { data: notes } = await supabase.from('notes').select()

  return (
    <div>
      Home
      <div className="bg-white shadow-md rounded-md p-4 mt-4 space-y-4">
        {notes?.map((note) => (
          <ListItem key={note.id} note={note} />
        ))}
      </div>
    </div>
  )
}
