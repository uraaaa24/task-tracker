import { PutTodoStatusRequest } from '@/types/todo'
import { updateTodoCompleteStatus } from '@/utils/requester/put/todo'
import { useState } from 'react'

export const useUpdateTodoComplete = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const updateTodoComplete = async (request: PutTodoStatusRequest) => {
    setIsLoading(true)
    setHasError(false)

    try {
      const _response = await updateTodoCompleteStatus(request)
    } catch (error) {
      if (error instanceof Error) {
        setHasError(true)
        setErrorMessage(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    hasError,
    errorMessage,
    updateTodoComplete
  }
}
