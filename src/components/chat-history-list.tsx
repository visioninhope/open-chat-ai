import { cache } from 'react'

import ConversationMenu from './conversation-menu'
import Result from './result'

import { getConversations } from '@/lib/chat/actions'
import { Conversation } from '@/types/user'

interface ChatHistoryListProps {
  userId: string
  children?: React.ReactNode
}

const loadConversations = cache(async (userId: string) => {
  return await getConversations(userId)
})

export default async function ChatHistoryList({
  userId,
}: ChatHistoryListProps) {
  const conversationsRes = await loadConversations(userId)

  return (
    <div className="mr-[-0.5rem] w-[252px] flex-1 flex-shrink-0 overflow-y-auto">
      <div className="w-[244px]">
        {conversationsRes.code !== 0 ? (
          <div className="mt-12 flex w-full justify-center">
            <Result status="fail" tips="发生错误，请重试" isRefresh={true} />
          </div>
        ) : conversationsRes.data?.length === 0 ? (
          <div className="mt-12 flex w-full justify-center">
            <Result status="empty" tips="暂无聊天记录" />
          </div>
        ) : (
          <ConversationMenu
            conversations={conversationsRes.data as Conversation[]}
          />
        )}
      </div>
    </div>
  )
}
