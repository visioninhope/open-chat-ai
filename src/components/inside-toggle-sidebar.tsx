'use client'

import { useSidebar } from '@/lib/hooks/use-sidebar'

export default function InsideToggleSidebar() {
  const { toggleSidebar } = useSidebar()
  return (
    <div
      onClick={() => {
        toggleSidebar()
      }}
      className="flex h-[2.75rem] cursor-pointer items-center rounded-md border-blue-900 bg-background p-[0.75rem] transition-all duration-200 ease-in-out hover:bg-default-200 hover:bg-opacity-50"
    >
      <i className="ph ph-text-indent text-[1.44rem]"></i>
    </div>
  )
}
