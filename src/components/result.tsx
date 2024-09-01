'use client'

import { Button } from '@nextui-org/button'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'

type ResStatus = 'success' | 'fail' | 'empty'

interface ResultProps {
  status: ResStatus
  tips: string
  isRefresh?: boolean
}

export default function Result({
  status,
  tips,
  isRefresh = false,
}: ResultProps) {
  const router = useRouter()

  const iconClass = {
    success: 'ph-check-circle text-green-500',
    fail: 'ph-x-circle text-red-500',
    empty: 'ph-info text-gray-500',
  }[status]

  const handleRefresh = () => {
    alert(0)
    router.refresh()
  }

  return (
    <div
      className={clsx(
        'flex w-full flex-col items-center justify-center space-y-4',
        status === 'fail' ? 'block' : 'hidden',
      )}
    >
      <div className="flex items-center space-x-1">
        <i className={clsx(iconClass, 'ph text-lg')}></i>
        <span className="text-sm font-medium">{tips}</span>
      </div>
      {isRefresh && (
        <Button color="primary" onPress={handleRefresh}>
          刷新页面
        </Button>
      )}
    </div>
  )
}
