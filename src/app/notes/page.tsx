import { createClient } from '@/utils/supabase/server'

// TODO: supabaseのサンプルとして一時的に追加したため、必要がなくなったら削除する
export default async function Notes() {
  const supabase = createClient()
  const { data: notes } = await supabase.from('notes').select()

  return <p>{JSON.stringify(notes, null, 2)}</p>
}
