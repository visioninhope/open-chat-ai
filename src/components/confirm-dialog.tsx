'use client'

// 确认对话框封装，入口全局引入，这里不使用ModalContainer容器，它用于更多的特定更复杂的弹窗场景
import { useEffect } from 'react'

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react'

import { useConfirm } from '@/lib/hooks/use-confrim'

export interface ConfirmDialogProps {
  title?: string
  content?: string
  onConfirm?: () => void
}

export default function ConfirmDialog() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isShowConfirm, confirmInfo, closeConfirmDialog } = useConfirm()

  useEffect(() => {
    if (isShowConfirm) {
      onOpen()
    }
  }, [isShowConfirm])

  return (
    <Modal
      backdrop={'blur'}
      size="sm"
      shadow="sm"
      placement="top"
      isOpen={isOpen}
      onClose={onClose}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          closeConfirmDialog()
          onClose()
        }
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex items-center">
              <i className="ph ph-info mr-1 text-lg text-[#f5a524]"></i>{' '}
              {confirmInfo?.title || '删除提示！'}
            </ModalHeader>
            <ModalBody>
              <h3>
                {confirmInfo?.content || '删除后不可恢复，确认要删除此内容吗？'}{' '}
              </h3>
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={() => {
                  closeConfirmDialog()
                  onClose()
                }}
              >
                取消
              </Button>
              <Button
                color="primary"
                onPress={() => {
                  closeConfirmDialog()
                  onClose()
                  confirmInfo?.onConfirm && confirmInfo?.onConfirm()
                }}
              >
                确认
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
