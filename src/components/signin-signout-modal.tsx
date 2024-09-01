'use client'

import { useEffect, useState } from 'react'

import { Button } from '@nextui-org/button'
// import { useRouter } from 'next/navigation'
import { signIn, signOut, useSession } from 'next-auth/react'

import ModalContainer from '@/components/modal-container'

import { useToast } from '@/lib/hooks/use-toast'

interface IProps {
  redirectPath: string
}

export default function SignInOrOutModal({ redirectPath = '/' }: IProps) {
  const { data: session, status } = useSession()
  const [isLoading, setIsLoading] = useState(false)
  const [isShowModal, setIsShowModal] = useState(false)

  const { showToast } = useToast()

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

  const handleOpenModal = () => {
    setIsShowModal(true)
  }

  const handleLoginClick = async () => {
    // showToast({
    //   isVisible: true,
    //   message: '消息',
    // })
    // return
    setIsLoading(true)
    try {
      await signIn('github', { callbackUrl: redirectPath })
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
    if (status === 'authenticated') {
      setIsShowModal(false)
    }
    // if (status === 'unauthenticated') {
    //   setIsShowModal(true)
    // } else if (status === 'authenticated') {
    //   setIsShowModal(false)
    // }
  }, [status])

  return (
    <>
      {/* 定制你的用以弹窗登录or注销弹窗的按钮样式 */}
      {status === 'loading' ? null : !session ? (
        <Button
          isIconOnly
          color="danger"
          aria-label="signIn"
          onClick={handleOpenModal}
        >
          <i className="ph-thin ph-door-open"></i>
        </Button>
      ) : (
        <Button
          isIconOnly
          color="warning"
          variant="faded"
          aria-label="signOut"
          onClick={handleOpenModal}
        >
          <i className="ph-thin ph-sign-out"></i>
        </Button>
      )}

      {/* 模态框容器，具体内容是一个登录or注销的按钮组件样式 */}
      <ModalContainer
        isVisible={isShowModal}
        isHideOpenBtn={true}
        isHideFooter={true}
        onHandleClose={() => {
          setIsShowModal(false)
        }}
      >
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
            <i className="ph-thin ph-sign-out"></i> 注销登录
          </Button>
        )}
      </ModalContainer>
    </>
  )
}
