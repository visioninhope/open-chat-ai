'use client'
import { Button, Card } from '@nextui-org/react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="justify-cente mx-auto flex min-h-screen w-fit items-center px-1">
      <Card className="p-10 text-center shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-red-500">
          404 - Not Found
        </h2>
        <p className="mb-8 text-gray-700">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button as={Link} href="/" color="primary">
          Return Home
        </Button>
      </Card>
    </div>
  )
}
