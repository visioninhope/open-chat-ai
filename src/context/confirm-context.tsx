'use client'

import { useState, createContext, ReactNode } from 'react'

import type { ConfirmDialogProps } from '@/components/confirm-dialog'

interface IConfirmDialogContextProps {
  confirmInfo: ConfirmDialogProps | null
  isShowConfirm: boolean
  showConfirmDialog: (confirmInfo: ConfirmDialogProps) => void
  closeConfirmDialog: () => void
}

interface IProps {
  children: ReactNode
}

export const ConfirmDialogContext = createContext<IConfirmDialogContextProps>(
  {} as IConfirmDialogContextProps,
)

export const ConfirmDialogContextProvider = ({
  children,
}: IProps): ReactNode => {
  const [confirmInfo, setConfirmInfo] = useState<ConfirmDialogProps>({})
  const [isShowConfirm, setIsShowConfirm] = useState(false)

  const showConfirmDialog = (confirmInfo: ConfirmDialogProps) => {
    setIsShowConfirm(true)
    setConfirmInfo((pre) => ({ ...pre, ...confirmInfo }))
  }

  const closeConfirmDialog = () => {
    setIsShowConfirm(false)
    setConfirmInfo({})
  }

  return (
    <ConfirmDialogContext.Provider
      value={{
        confirmInfo,
        isShowConfirm,
        showConfirmDialog,
        closeConfirmDialog,
      }}
    >
      {children}
    </ConfirmDialogContext.Provider>
  )
}
