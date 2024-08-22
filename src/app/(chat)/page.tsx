import { Button } from '@nextui-org/button'

import { ThemeSwitch } from '@/components/theme-switch'
// import Image from 'next/image'

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 30000))
  return {
    message: 'Hello, loading-test!',
  }
}

export default async function Page() {
  console.log('服务端环境访问的环境变量', process.env.NEXT_PUBLIC_BASEURL)
  const { message } = await getData()

  return (
    <div className="min-h-screen w-full">
      <h1 className="text-center">{message}</h1>
      <div className="flex justify-center">
        {' '}
        <Button color="default">Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </div>
      <h1>switch theme!</h1>
      <div className="flex justify-center">
        <ThemeSwitch />
      </div>
    </div>
  )
}
