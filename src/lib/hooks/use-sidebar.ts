import { useContext } from 'react'

import { SidebarContext } from '@/context/sidebar-context'

export function useSidebar() {
  const context = useContext(SidebarContext)
  return context
}
