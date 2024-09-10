import { ReactNode } from 'react'

import { SideBarNav } from '@/components/sidebar-nav'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '当前页面标题',
}

export default function ProfileLaout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex h-svh w-full justify-start overflow-hidden">
      <SideBarNav />
      {/* <div className="flex h-full w-40 flex-shrink-0 items-center justify-center bg-primary-50 text-tiny shadow-lg shadow-default-300">
        <span>CHAT-AI 聊天记录</span>
      </div> */}
      <div className="h-full flex-1">{children}</div>
    </div>
  )
}
