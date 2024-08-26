'use client'

import { useContext, useEffect, useState } from 'react'

import { Button } from '@nextui-org/button'
// import { useRouter } from 'next/navigation'
import { signIn, signOut, useSession } from 'next-auth/react'

import { ToastContext } from '@/context/toast-context'

interface IProps {
  redirectPath: string
}

export default function GithubLoginButton({ redirectPath = '/' }: IProps) {
  const { data: session, status } = useSession()
  const [isLoading, setIsLoading] = useState(false)

  const { showToast } = useContext(ToastContext)

  const handleSignOut = async () => {
    setIsLoading(true)
    try {
      await signOut({ callbackUrl: '/' })
    } catch (error) {
      console.error('注销登录失败', error)
      // 这里可以选择处理错误，例如显示一个错误消息
    }
    setIsLoading(false)
  }

  const handleLoginClick = async () => {
    showToast({
      isVisible: true,
      message: '登录成功，开始使用吧~',
      type: 'success',
    })
    return
    setIsLoading(true)
    try {
      await signIn('github', { callbackUrl: redirectPath })
      showToast({
        isVisible: true,
        message: '登录成功，开始使用吧~',
        type: 'success',
      })
    } catch (error) {
      console.error('github授权登录失败', error)
      showToast({
        isVisible: true,
        message: '登录失败，请稍后再试试~',
        type: 'error',
      })
    }
  }

  useEffect(() => {
    console.log('登录状态改变', status)
  }, [status])

  return (
    <>
      {status === 'loading' ? null : !session ? (
        <Button
          isLoading={isLoading}
          onClick={handleLoginClick}
          color="secondary"
          spinner={
            <svg
              className="h-5 w-5 animate-spin text-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                fill="currentColor"
              />
            </svg>
          }
        >
          <i className="ph-thin ph-github-logo"></i> 开始登录
        </Button>
      ) : (
        <Button
          isLoading={isLoading}
          onClick={handleSignOut}
          color="secondary"
          spinner={
            <svg
              className="h-5 w-5 animate-spin text-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                fill="currentColor"
              />
            </svg>
          }
        >
          注销登录
        </Button>
      )}
    </>
  )
}
