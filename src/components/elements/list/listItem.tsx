/* eslint-disable react/display-name */
import { Checkbox } from '@/components/ui/checkbox'
import { forwardRef } from 'react'

export type Note = {
  id: string
  title: string
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
      <label htmlFor={id} className={`flex-1 ${props.value ? 'line-through text-gray-500' : ''} `}>
        {title}
      </label>
    </div>
  )
})

export default ListItem
