/* eslint-disable react/display-name */
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Pencil, Trash } from 'lucide-react'
import { forwardRef } from 'react'

export type Note = {
  id: string
  title: string
  completed: boolean
}

type ListItemProps = {
  note: Note
  value: boolean
  onChange: (value: boolean) => void
}

const ListItem = forwardRef<HTMLDivElement, ListItemProps>((props, ref) => {
  const { id, title } = props.note

  return (
    <div className="flex items-center space-x-2" ref={ref}>
      <Checkbox id={id} checked={props.value} onCheckedChange={props.onChange} />
      <label htmlFor={id} className={`${props.value ? 'line-through text-gray-500' : ''} `}>
        {title}
      </label>
      <div className="space-x-1">
        {/* 編集ボタン */}
        <Button variant="ghost" onClick={() => console.log('Edit button clicked')} className="px-2">
          <Pencil color="#6EE7B7" size={16} />
        </Button>
        {/* 削除ボタン */}
        <Button variant="ghost" onClick={() => console.log('Delete button clicked')} className="px-2">
          <Trash color="#F87171" size={16} />
        </Button>
      </div>
    </div>
  )
})

export default ListItem
