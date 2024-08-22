'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

import { Button, Card } from '@nextui-org/react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('accident error', error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-2">
      <Card className="max-w-lg space-y-6 bg-white p-8 shadow-md">
        <h2 className="text-2xl font-bold text-red-600">
          Something went wrong!
        </h2>
        <p className="text-gray-700">
          We encountered an unexpected error. Please try again or contact
          support if the issue persists.
        </p>
        <Button onClick={() => reset()} color="danger" className="w-full">
          Try again
        </Button>
      </Card>
    </div>
  )
}
