'use client'
import React, { useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { clsx } from 'clsx'

import { ToastContext } from '@/context/toast-context'

type MessageType = 'info' | 'success' | 'warning' | 'error'

interface ToastType {
  [key: string]: {
    icon: string
    bgColor: string
    textColor: string
  }
}

export interface ToastProps {
  message?: string
  type?: MessageType
  duration?: number
  onClose?: () => void
  isVisible?: boolean // 新增的控制显示隐藏的属性
}

// Toast 类型定义
const toastTypes: ToastType = {
  info: {
    icon: 'ph-info',
    bgColor: 'bg-blue-500',
    textColor: 'text-white',
  },
  success: {
    icon: 'ph-check-circle',
    bgColor: 'bg-green-500',
    textColor: 'text-white',
  },
  warning: {
    icon: 'ph-warning',
    bgColor: 'bg-yellow-500',
    textColor: 'text-black',
  },
  error: {
    icon: 'ph-x-circle',
    bgColor: 'bg-red-500',
    textColor: 'text-white',
  },
}

const Toast = () => {
  const { toastInfo, closeToast } = useContext(ToastContext)

  useEffect(() => {
    if (toastInfo?.isVisible) {
      const timer = setTimeout(() => {
        closeToast()
        if (toastInfo?.onClose) toastInfo?.onClose()
      }, toastInfo?.duration)

      return () => clearTimeout(timer)
    }
  }, [toastInfo?.isVisible, toastInfo?.duration, toastInfo?.onClose])

  if (!toastInfo?.isVisible) return null

  const { icon, bgColor, textColor } = toastTypes[toastInfo.type || 'info']

  return ReactDOM.createPortal(
    <div
      className={clsx(
        'fixed left-4 top-4 z-50 flex max-w-xs items-center space-x-3 rounded-lg p-4 shadow-lg',
        bgColor,
        textColor,
      )}
    >
      <i className={clsx(icon, 'text-xl', 'ph-thin')}></i>
      <span>{toastInfo.message}</span>
    </div>,
    document.body,
  )
}

export default Toast
