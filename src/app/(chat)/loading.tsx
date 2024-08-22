'use client'

import { Skeleton } from '@nextui-org/react'

export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-between overflow-hidden pb-2">
      {/* 顶部区域骨架屏 */}
      <div className="col-x-center mt-5 w-full">
        <div className="w-4/5 space-y-3">
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </div>
      {/* 底部容区域骨架屏容器 */}

      <div className="col-x-center relative bottom-1 w-full">
        {/* 底部四个内容区域骨架屏容器 */}
        <div className="grid w-4/5 grid-cols-2 grid-rows-2 gap-4">
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
        {/* inptu area */}
        <div className="mt-3 w-4/5 space-y-3">
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </div>
    </div>
  )
}
