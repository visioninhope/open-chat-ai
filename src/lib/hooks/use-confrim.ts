import { useContext } from 'react'

import { ConfirmDialogContext } from '@/context/confirm-context'

export function useConfirm() {
  const context = useContext(ConfirmDialogContext)
  return context
}
