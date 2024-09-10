'use client'

import ChatPanel from './chat-panel'
import Footer from './footer'

export default function Chat() {
  return (
    <div className="relative h-full w-full overflow-y-auto pt-12">
      <div className="absolute bottom-3 left-0 right-0">
        <div className="flex w-full justify-center px-2">
          <ChatPanel />
        </div>
        <Footer />
      </div>
    </div>
  )
}
