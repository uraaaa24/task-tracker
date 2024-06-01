import { Checkbox } from '../ui/checkbox'

type ListItemProps = {
  title: string
}

const ListItem = (props: ListItemProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {props.title}
      </label>
    </div>
  )
}

export default ListItem
