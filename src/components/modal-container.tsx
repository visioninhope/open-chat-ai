'use client'

import { ReactNode, useEffect } from 'react'

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react'

type BackDropType = 'opaque' | 'blur' | 'transparent' | undefined

interface ModalContainerProps {
  children?: ReactNode
  btnRender?: ReactNode
  title?: string
  isVisible?: boolean
  isDismissable?: boolean
  isHideOpenBtn?: boolean
  isHideFooter?: boolean
  backdrop?: BackDropType
  onHandleClose?: () => void
}

export default function ModalContainer({
  children = null,
  btnRender = null,
  title = 'Modal Title',
  isHideOpenBtn = false,
  isDismissable = false,
  isHideFooter = false,
  isVisible = false,
  backdrop = 'blur',
  onHandleClose,
}: ModalContainerProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        onOpen()
      }, 100)
    } else if (isOpen) {
      onClose()
      onHandleClose && onHandleClose()
    }
  }, [isVisible])

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {isHideOpenBtn ? null : btnRender ? (
          <div className="inline-block h-fit w-fit">{btnRender}</div>
        ) : (
          <Button
            variant="flat"
            color="warning"
            onPress={onOpen}
            className="capitalize"
          >
            打开
          </Button>
        )}
      </div>
      <Modal
        backdrop={backdrop}
        isOpen={isOpen}
        isDismissable={isDismissable}
        placement="center"
        onClose={() => {
          onClose()
          onHandleClose && onHandleClose()
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                {children ? (
                  children
                ) : (
                  <p>默认模态内容。可以通过children属性替换为您自己的内容！</p>
                )}
              </ModalBody>
              {!isHideFooter && (
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    关闭
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    确定
                  </Button>
                </ModalFooter>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
