import React from 'react'
import { ConfirmContext } from '@/contexts/confirmDialogContext'

export const useConfirm = () => {
  const confirm = React.useContext(ConfirmContext)

  if (!confirm) throw new Error('useConfirm must be used within a ConfirmDialogProvider')

  return confirm
}
