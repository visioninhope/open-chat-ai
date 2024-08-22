'use client'

import { useEffect } from 'react'

// app/global-error.js
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('accident error', error)
  }, [])

  return (
    <html suppressHydrationWarning lang="en" className="h-full bg-gray-100">
      <body className="flex h-full flex-col items-center justify-center bg-white p-6 text-center">
        <h2 className="mb-4 text-2xl font-bold text-red-600">
          遇到了一些问题!
        </h2>
        <p className="mb-6 text-gray-600">发生意外错误。请再试一次。</p>
        <button
          onClick={() => reset()}
          className="rounded-md bg-blue-600 px-4 py-2 text-white transition duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          再试一次
        </button>
      </body>
    </html>
  )
}
