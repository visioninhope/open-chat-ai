'use client'
import { Avatar } from '@nextui-org/avatar'
import { Divider } from '@nextui-org/divider'
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/popover'

import { ThemeSwitch } from '@/components/theme-switch'

import { useConfirm } from '@/lib/hooks/use-confrim'

export default function ChatHistoryFooter() {
  const { showConfirmDialog } = useConfirm()

  const handleClearAllHistory = () => {
    showConfirmDialog({
      content: '清除后所有聊天记录都将消失，不可恢复，是否确认清除？',
      onConfirm: () => {
        alert('确认清除')
      },
    })
  }

  return (
    <div className="flex w-[244px] flex-col items-center pt-2">
      <Divider className="mb-2 w-full" />
      <Popover placement="top-start" radius="sm">
        <PopoverTrigger>
          <div className="flex h-[3.25rem] w-full cursor-pointer items-center justify-between px-3 text-sm transition-all duration-200 ease-in-out hover:bg-default-200 hover:bg-opacity-50">
            <div className="flex items-center justify-between">
              {/* 头像 */}
              <Avatar
                isBordered
                size="sm"
                src="https://avatars.githubusercontent.com/u/30461603?v=4"
              />
              {/* 用户名称 */}
              <div className="ml-3 w-[156px] flex-shrink-0 truncate">
                <span>lxw-bfw</span>
              </div>
            </div>
            <div>
              <i className="ph ph-dots-three text-lg font-bold"></i>
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="w-[220px] py-1">
            {/* item */}
            <div className="flex h-11 w-full cursor-pointer items-center px-2 transition-all duration-200 ease-in-out hover:rounded-sm hover:bg-default-200 hover:bg-opacity-50">
              <i className="ph ph-share-network"></i>
              <span className="ml-[0.525rem]">我的分享对话</span>
            </div>
            <div className="flex h-11 w-full cursor-pointer items-center px-2 transition-all duration-200 ease-in-out hover:rounded-sm hover:bg-default-200 hover:bg-opacity-50">
              <i className="ph ph-export"></i>
              <span className="ml-[0.525rem]">导出数据</span>
            </div>
            <Divider className="my-1 w-full" />
            <div className="flex h-11 w-full cursor-pointer items-center px-2 transition-all duration-200 ease-in-out hover:rounded-sm hover:bg-default-200 hover:bg-opacity-50">
              <i className="ph ph-sign-out"></i>
              <span className="ml-[0.525rem]">退出</span>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <div className="flex h-[3.25rem] w-full cursor-pointer items-center justify-between px-3 text-sm transition-all duration-200 ease-in-out hover:bg-default-200 hover:bg-opacity-50">
        <div className="hover:opacity-80" onClick={handleClearAllHistory}>
          清除所有聊天
        </div>
        <div className="flex items-center justify-between">
          <ThemeSwitch />
        </div>
      </div>
    </div>
  )
}
