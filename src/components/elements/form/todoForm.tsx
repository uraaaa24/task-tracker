'use client'

import { Controller, FormProvider, useForm } from 'react-hook-form'
import ListItem, { Note } from '../list/listItem'

type TodoFormProps = {
  notes: Note[]
}

const TodoForm = (props: TodoFormProps) => {
  const methods = useForm()

  return (
    <FormProvider {...methods}>
      {props.notes?.map((note) => (
        <Controller
          key={note.id}
          name={`notes.${note.id}`}
          render={({ field }) => <ListItem key={note.id} note={note} {...field} />}
        />
      ))}
    </FormProvider>
  )
}

export default TodoForm
