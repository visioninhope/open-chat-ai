import ChatHistoryNav from './chat-history-nav'
import SidebarContainer from './sidebar-container'
import ToggleSidebarButton from './toggle-sidebar-button'

import { auth } from '@/auth'

export async function SideBarNav() {
  const session = await auth()

  console.log('session', session)

  // todo:登录校验暂时去掉
  // if (!session?.user?.id) {
  //   return null
  // }

  return (
    <>
      <ToggleSidebarButton />
      <SidebarContainer>
        {/* 导入服务端组件：侧边栏具体面板内容 */}
        {/* todo:随便传传个模拟的userId */}
        <ChatHistoryNav userId="4324324" />
      </SidebarContainer>
    </>
  )
}
