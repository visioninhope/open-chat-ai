import { Suspense } from 'react'

import { Skeleton } from '@nextui-org/skeleton'
import Link from 'next/link'

import ChatHistoryFooter from './chat-history-footer'
import ChatHistoryList from './chat-history-list'
import InsideToggleSidebar from './inside-toggle-sidebar'

interface ChatHistoryNavProps {
  userId: string
}

export default function ChatHistoryNav({ userId }: ChatHistoryNavProps) {
  return (
    <nav className="flex h-full w-full flex-shrink-0 flex-col items-center overflow-hidden bg-primary-50 pt-2 shadow-lg shadow-default-300">
      <div className="mb-2 flex w-[244px] justify-between">
        <Link
          href="/new"
          className="flex h-[2.75rem] w-[192px] cursor-pointer items-center rounded-md border-blue-900 bg-background p-[0.75rem] transition-all duration-200 ease-in-out hover:bg-default-200 hover:bg-opacity-50"
        >
          <i className="ph ph-plus text-[1.44rem]"></i>{' '}
          <span className="ml-3 text-sm">新建对话</span>
        </Link>

        <InsideToggleSidebar />
      </div>
      {/* 聊天记录展示区域-服务端组件+suspense */}
      <Suspense
        fallback={
          <div className="mt-2 flex w-full flex-1 flex-col items-center space-y-4 px-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <Skeleton key={i} className="w-[244px] rounded-lg">
                <div className="h-3 w-[244px] rounded-lg bg-default-200"></div>
              </Skeleton>
            ))}
          </div>
        }
      >
        <ChatHistoryList userId={userId} />
      </Suspense>
      {/* 底部操作区域，显示用户头像和名称，点击弹开设置popup */}
      <ChatHistoryFooter />
    </nav>
  )
}
