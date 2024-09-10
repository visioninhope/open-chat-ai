'use client'

import { ReactNode, FC, useEffect, useRef } from 'react'

import clsx from 'clsx'

import { useSidebar } from '@/lib/hooks/use-sidebar'

interface SidebarContainerProps {
  children: ReactNode
}

const POSITIONSWITCHWIDTH = 760

const SidebarContainer: FC<SidebarContainerProps> = ({ children }) => {
  const { isSidebarOpen, closeSidebar, showSidebar } = useSidebar()

  const preInnerWidth = useRef<number>(0)

  // 移动端软键盘弹起也会触发resize从而导致触发adjustSidebar，关闭了侧边栏，恰巧，侧边栏内部有输入框
  // 由于软键盘弹起，不影响宽度，所以从这里判断
  const adjustSidebar = () => {
    const innerWidth = window.innerWidth
    // const innerHeight = window.innerHeight
    // 仅仅宽度改变触发
    if (preInnerWidth.current !== innerWidth) {
      if (innerWidth > POSITIONSWITCHWIDTH) {
        showSidebar()
      } else {
        setTimeout(() => {
          isSidebarOpen && closeSidebar()
        }, 100)
      }
    }
    preInnerWidth.current = innerWidth
  }

  useEffect(() => {
    adjustSidebar()
    window.addEventListener('resize', adjustSidebar)

    return () => {
      window.removeEventListener('resize', adjustSidebar)
    }
  }, [])

  return (
    <>
      {/* Overlay for small screens */}
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300',
          {
            'pointer-events-auto opacity-100': isSidebarOpen,
            'pointer-events-none opacity-0': !isSidebarOpen,
          },
          'sm:hidden', // Only show on small screens
        )}
        onClick={() => {
          // onClose && onClose()
          closeSidebar()
        }}
      />

      {/* SidebarContainer */}
      <div
        className={clsx(
          'fixed top-0 z-50 h-full w-[260px] transition-all duration-300',
          {
            'translate-x-0': isSidebarOpen,
            '-translate-x-full': !isSidebarOpen,
            'sm:w-[260px] sm:translate-x-0': isSidebarOpen,
            'sm:w-0 sm:-translate-x-full': !isSidebarOpen,
          },
          'sm:relative sm:flex-shrink-0', // Relative position on screens >= 760px
        )}
      >
        {children}
      </div>
    </>
  )
}

export default SidebarContainer
