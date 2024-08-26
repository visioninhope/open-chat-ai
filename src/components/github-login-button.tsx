'use client'

import { useEffect, useState } from 'react'

import { Button } from '@nextui-org/button'
import { useRouter } from 'next/navigation'
import { signIn, signOut, useSession } from 'next-auth/react'

import type { ToastProps } from '@/components/toast'
import Toast from '@/components/toast'

import { signInByGithub } from '@/lib/auth/actions'

interface IProps {
  redirectPath: string
}

export default function GithubLoginButton({ redirectPath = '/' }: IProps) {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [isLoading, setIsLoading] = useState(false)
  const [showToast, setShowToast] = useState<ToastProps | null>(null)

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
    setIsLoading(true)
    try {
      await signIn('github', { callbackUrl: redirectPath })
      // setShowToast({
      //   isVisible: true,
      //   message: '登录成功，开始使用吧~',
      //   type: 'success',
      //   onClose: () => {
      //     setShowToast(null)
      //     router.refresh()
      //   },
      // })
    } catch (error) {
      console.error('github授权登录失败', error)
      setShowToast({
        isVisible: true,
        message: '服务器出了点意外，请稍后再试试~',
        type: 'error',
        onClose: () => {
          setShowToast(null)
          setIsLoading(false)
        },
      })
    }
    return
    try {
      const res = await signInByGithub(redirectPath)
      if (res && res.code === 0) {
        console.log('github登录成功~')
        setShowToast({
          isVisible: true,
          message: '登录成功，开始使用吧~',
          type: 'success',
          onClose: () => {
            setShowToast(null)
            router.refresh()
          },
        })
      } else {
        console.log('github登录失败', res?.message)
        setShowToast({
          isVisible: true,
          message: res?.message as string,
          type: 'error',
          onClose: () => {
            setShowToast(null)
            setIsLoading(false)
          },
        })
      }
    } catch (error) {
      console.log('github登录失败', error)
      setShowToast({
        isVisible: true,
        message: '服务器出了点意外，请稍后再试试~',
        type: 'error',
        onClose: () => {
          setShowToast(null)
          setIsLoading(false)
        },
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

      {showToast && (
        <Toast
          message={showToast.message}
          isVisible={showToast.isVisible}
          type={showToast.type}
          onClose={showToast.onClose}
        />
      )}
    </>
  )
}
