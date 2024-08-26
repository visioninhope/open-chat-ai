'use client'

import React, { useState, createContext } from 'react'

import type { ToastProps } from '@/components/toast'

/**
 * User 数据来源、更新来源可以是多个组件，这里context初始值永远是空数组，仅仅用于共享数据
 */

interface IToastContextProps {
  toastInfo: ToastProps | null
  showToast: (toastInfo: ToastProps) => void
  closeToast: () => void
}

interface IProps {
  children: React.ReactNode
}

export const ToastContext = createContext<IToastContextProps>(
  {} as IToastContextProps,
)

export const ToastContextProvider = ({ children }: IProps): React.ReactNode => {
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
