import { Button } from '@nextui-org/button'

import GithubLoginButton from '@/components/github-login-button'
import { ThemeSwitch } from '@/components/theme-switch'

// import Image from 'next/image'

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return {
    message: 'Hello, loading-test!',
  }
}

export default async function Page() {
  const { message } = await getData()

  console.log('next-auth密钥', process.env.AUTH_SECRET)

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
      <h1>Phosphor Icons图标集成</h1>
      <div className="flex justify-center">
        <i className="ph-fill ph-smiley text-lg"></i>
        <i className="ph-bold ph-smiley"></i>
        <i className="ph-light ph-smiley"></i>
      </div>
      <h1>github授权登录和注销按钮</h1>
      <div className="flex justify-center">
        <GithubLoginButton redirectPath="/" />
      </div>
    </div>
  )
}
