'use client'

import { useState, KeyboardEvent, useRef } from 'react'

import { Input } from '@nextui-org/react'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'

import { handleKeyBoardInWeChat } from '@/utils/common'

import styles from './styles/animation.module.scss'

import { useConfirm } from '@/lib/hooks/use-confrim'
import { Conversation } from '@/types/user'

interface ConversationMenuProps {
  conversations: Conversation[]
}

export default function ConversationMenu({
  conversations,
}: ConversationMenuProps) {
  const router = useRouter()
  const { showConfirmDialog } = useConfirm()

  const isClickingConfirm = useRef(false)

  const [isEdit, setisEdit] = useState(false)
  const [selectConId, setselectConId] = useState('-1')
  const [curConName, setcurConName] = useState('')

  const handleConversationItemClick = (conversation: Conversation) => {
    setselectConId(conversation.id)
    setcurConName(conversation.name)
    router.push(`/conversationDetail/${conversation.id}`)
    // TODO:根据对话id，进入对象详情动态页面
  }

  const confirmNameChange = (originName: string, id: string) => {
    if (curConName && curConName !== originName) {
      console.log('确认修改名称', curConName, id)
    }
    setisEdit(false)
  }

  const confirmDelete = (conversation: Conversation) => {
    showConfirmDialog({
      content: `删除后不可恢复，确认要删除对话“${conversation.name}”吗？`,
      onConfirm: () => {
        alert('确认删除')
      },
    })
  }

  return (
    <>
      {conversations.map((item, index) => {
        return (
          <div
            onClick={() => {
              handleConversationItemClick(item)
            }}
            className={clsx(
              'flex h-11 w-full flex-shrink-0 cursor-pointer items-center justify-between rounded-md p-3',
              item.id !== selectConId &&
                'hover:bg-default-200 hover:bg-opacity-50',
              item.id === selectConId && 'bg-background',
            )}
            key={index}
          >
            <div className="flex items-center justify-start overflow-hidden pr-[0.35rem]">
              <i className="ph ph-chat-centered-text"></i>
              {isEdit && selectConId === item.id ? (
                <div className="ml-2 whitespace-nowrap" title={item.name}>
                  <Input
                    defaultValue={item.name}
                    placeholder="输入对话名称"
                    size="sm"
                    variant="underlined"
                    autoFocus
                    onValueChange={(value: string) => {
                      setcurConName(value)
                    }}
                    onBlur={() => {
                      if (!isClickingConfirm.current) {
                        handleKeyBoardInWeChat('text')
                        setisEdit(false)
                      }
                    }}
                    onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
                      if (event.key === 'Enter') {
                        // 在此处调用确认修改名称的函数
                        confirmNameChange(item.name, item.id)
                      }
                    }}
                  />
                </div>
              ) : (
                <div
                  className={clsx(
                    'ml-2 whitespace-nowrap',
                    item.is_new_create ? styles['first-create-active'] : '',
                  )}
                  title={item.name}
                  onAnimationEnd={
                    item.is_new_create
                      ? () => {
                          // todo:更新状态
                        }
                      : undefined
                  }
                >
                  {item.name}
                </div>
              )}
            </div>
            {/* 编辑按钮区域 */}
            {selectConId === item.id && !isEdit && (
              <div className="flex-shrink-0">
                <i
                  onClick={() => {
                    setisEdit(true)
                  }}
                  className="ph ph-pencil-line inline-block cursor-pointer pr-1 text-[1.1rem] opacity-80 hover:opacity-100"
                ></i>
                <i className="ph ph-export inline-block cursor-pointer pr-1 text-[1.1rem] opacity-80 hover:opacity-100"></i>
                <i
                  onClick={() => {
                    confirmDelete(item)
                  }}
                  className="ph ph-trash-simple inline-block cursor-pointer pr-1 text-[1.1rem] opacity-80 hover:opacity-100"
                ></i>
              </div>
            )}
            {/* 更改对话名称相关图标 */}
            {selectConId === item.id && isEdit && (
              <div className="flex-shrink-0">
                <i
                  onMouseDown={() => {
                    isClickingConfirm.current = true
                  }}
                  onClick={() => {
                    confirmNameChange(item.name, item.id)
                    isClickingConfirm.current = false
                  }}
                  className="ph ph-check inline-block cursor-pointer pr-1 text-[1.1rem] opacity-80 hover:opacity-100"
                ></i>
                <i className="ph ph-x inline-block cursor-pointer pr-1 text-[1.1rem] opacity-80 hover:opacity-100"></i>
              </div>
            )}
          </div>
        )
      })}
    </>
  )
}
