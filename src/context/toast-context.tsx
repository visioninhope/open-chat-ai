'use client'

import { useState, createContext, ReactNode } from 'react'

import type { ToastProps } from '@/components/toast'

interface IToastContextProps {
  toastInfo: ToastProps | null
  showToast: (toastInfo: ToastProps) => void
  closeToast: () => void
}

interface IProps {
  children: ReactNode
}

export const ToastContext = createContext<IToastContextProps>(
  {} as IToastContextProps,
)

export const ToastContextProvider = ({ children }: IProps): ReactNode => {
  const [toastInfo, setToastInfo] = useState<ToastProps>({
    isVisible: false,
    message: 'toast info!',
    type: 'info',
    duration: 3000,
  })

  return (
    <ToastContext.Provider
      value={{
        toastInfo,
        showToast: (currenToastInfo): void => {
          setToastInfo((pre) => ({ ...pre, ...currenToastInfo }))
        },
        closeToast: () => {
          setToastInfo({
            isVisible: false,
            message: 'toast info!',
            type: 'info',
            duration: 3000,
          })
        },
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}
