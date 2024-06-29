import { useTodoDetail } from '@/contexts/todoDetail'
import { formatDateTime } from '@/utils'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import ViewModeButton from '../elements/button/viewModeButton'

const ViewMode = {
  WRITE: 'Write',
  PREVIEW: 'Preview'
} as const

type ViewMode = (typeof ViewMode)[keyof typeof ViewMode]

const TodoDetail = () => {
  const { selectedTodo } = useTodoDetail()

  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.WRITE)
  const [editDescription, setEditDescription] = useState(selectedTodo.description || '')

  useEffect(() => {
    setEditDescription(selectedTodo.description || '')
  }, [selectedTodo])

  // TODO: 更新処理を入れる

  return (
    <div>
      <div className="pb-1">
        <h1 className="text-4xl font-semibold leading-tight mb-4">{selectedTodo.title}</h1>
        <div className="mb-4">
          <p className="text-lg text-gray-600">
            Created at:&nbsp; <span className="font-semibold">{formatDateTime(selectedTodo.created_at)}</span>
          </p>
          <p className="text-lg text-gray-600">
            Updated at: <span className="font-semibold">{formatDateTime(selectedTodo.updated_at)}</span>
          </p>
        </div>
      </div>

      <div className="my-4">
        <ViewModeButton
          isActive={viewMode === ViewMode.WRITE}
          handleViewMode={() => setViewMode(ViewMode.WRITE)}
          text={ViewMode.WRITE}
        />
        <ViewModeButton
          isActive={viewMode === ViewMode.PREVIEW}
          handleViewMode={() => setViewMode(ViewMode.PREVIEW)}
          text={ViewMode.PREVIEW}
        />
        <hr />

        {viewMode === ViewMode.WRITE ? (
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="w-full p-4 border-none focus:outline-none focus:ring-0 text-lg leading-relaxed resize-none"
            placeholder="Write something..."
            rows={26}
          />
        ) : (
          <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown w-full p-4 text-lg leading-relaxed">
            {editDescription}
          </ReactMarkdown>
        )}
      </div>
    </div>
  )
}

export default TodoDetail
