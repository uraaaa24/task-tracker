import { Checkbox } from '@/components/ui/checkbox'

export type Note = {
  id: string
  title: string
}

type ListItemProps = {
  note: Note
}

const ListItem = (props: ListItemProps) => {
  const { id, title } = props.note

  const noteId = `terms-${id}`

  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={noteId} />
      <label
        htmlFor={noteId}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {title}
      </label>
    </div>
  )
}

export default ListItem
