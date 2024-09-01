'use client'

import { useState, createContext, ReactNode, useEffect } from 'react'

const SIDEBAR_STORAGE_KEY = 'chatai-sidebar'

interface ISidebarContextProps {
  isSidebarOpen: boolean
  toggleSidebar: () => void
  showSidebar: () => void
  closeSidebar: () => void
}

interface IProps {
  children: ReactNode
}

export const SidebarContext = createContext<ISidebarContextProps>(
  {} as ISidebarContextProps,
)

export const SidebarContextProvider = ({ children }: IProps): ReactNode => {
  const [isSidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    const value = localStorage.getItem(SIDEBAR_STORAGE_KEY)
    if (value) {
      setSidebarOpen(JSON.parse(value))
    }
  }, [])

  const toggleSidebar = () => {
    setSidebarOpen((value) => {
      const newState = !value
      localStorage.setItem(SIDEBAR_STORAGE_KEY, JSON.stringify(newState))
      return newState
    })
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  const showSidebar = () => {
    setSidebarOpen(true)
  }

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        closeSidebar,
        showSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
