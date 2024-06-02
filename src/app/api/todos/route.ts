import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'
import { v4 as uuid } from 'uuid'

export const GET = async () => {
  const supabase = createClient()

  try {
    const { data: notes } = await supabase.from('todos').select()
    return NextResponse.json(notes)
  } catch (error) {
    console.error('Error fetching notes:', error)
    return NextResponse.error()
  }
}

export const POST = async (request: Request) => {
  const supabase = createClient()

  try {
    const json = await request.json()
    const { title } = json
    if (!title) return NextResponse.error()

    const { data, error } = await supabase.from('todos').insert([
      {
        id: uuid(),
        title,
        completed: false
      }
    ])
    if (error) throw new Error(error.message)

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error creating note:', error)
    return NextResponse.error()
  }
}
