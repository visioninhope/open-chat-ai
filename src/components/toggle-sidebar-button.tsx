'use client'

import { Button } from '@nextui-org/button'

import { useSidebar } from '@/lib/hooks/use-sidebar'

export default function ToggleSidebarButton() {
  const { isSidebarOpen, toggleSidebar } = useSidebar()
  return isSidebarOpen ? null : (
    <div className="fixed left-1 top-1 z-10">
      <Button
        onClick={() => {
          toggleSidebar()
        }}
        isIconOnly
        variant="light"
        aria-label="toggle"
      >
        <i className="ph ph-text-indent text-[1.44rem]"></i>
      </Button>
    </div>
  )
}
