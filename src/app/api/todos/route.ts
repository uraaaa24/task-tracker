import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'
import { v4 as uuid } from 'uuid'

/**
 * Get all todos
 */
export const GET = async () => {
  const supabase = createClient()

  try {
    const { data } = await supabase.from('todos').select()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching notes:', error)
    return NextResponse.error()
  }
}

/**
 * Create a new todo
 * @param request  - Request( title: string )
 */
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

/**
 * Update a todo
 * @param request - Request( id: string, title?: string, completed?: boolean )
 */
export const PUT = async (request: Request) => {
  const supabase = createClient()

  try {
    const json = await request.json()
    const { id, title, completed } = json
    if (!id || (title === undefined && completed === undefined)) return NextResponse.error()

    const updateData: { title?: string; completed?: boolean } = {}
    if (title !== undefined) updateData.title = title
    if (completed !== undefined) updateData.completed = completed

    const { data, error } = await supabase.from('todos').update(updateData).eq('id', id)
    if (error) throw new Error(error.message)

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error updating todo:', error)
    return NextResponse.error()
  }
}
