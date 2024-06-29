import { Button } from '@/components/ui/button'

type ViewModeButtonProps = {
  isActive: boolean
  handleViewMode: () => void
  text: string
}

const ViewModeButton = (props: ViewModeButtonProps) => {
  return (
    <Button
      disabled={props.isActive}
      onClick={props.handleViewMode}
      className={`rounded-none px-4 py-2 transition-colors duration-300 border ${
        props.isActive
          ? 'bg-gray-200 text-gray-700 border-gray-400'
          : 'bg-white text-gray-600 border-gray-400 hover:bg-gray-200'
      }`}
    >
      {props.text}
    </Button>
  )
}

export default ViewModeButton
