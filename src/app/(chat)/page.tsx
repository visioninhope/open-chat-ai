// import { Button } from '@nextui-org/button'
// import { Input } from '@nextui-org/input'
// import Link from 'next/link'

import LogoTextBox from '@/components/animation/logo-text-box/index'
import Chat from '@/components/chat'
// import SignInOrOutModal from '@/components/signin-signout-modal'
// import { ThemeSwitch } from '@/components/theme-switch'

// import Image from 'next/image'

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return {
    message: 'switch theme!',
  }
}

export default async function Page() {
  const { message } = await getData()

  console.log(message)

  console.log('next-auth密钥', process.env.AUTH_SECRET)

  return (
    <main className="relative h-full w-full overflow-hidden">
      <header className="absolute left-[50%] top-0 translate-x-[-50%]">
        <LogoTextBox />
      </header>

      <Chat />

      {/* <h1>{message}</h1>
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
        <SignInOrOutModal redirectPath="/" />
      </div>
      <div>link标签跳转</div>
      <div className="flex justify-center">
        <Link href="/share/3123123">新建对话</Link>
      </div>
      <div className="flex w-full flex-wrap gap-4 md:flex-nowrap">
        <Input type="email" label="Email" />
        <Input type="email" label="Email" placeholder="Enter your email" />
      </div> */}
    </main>
  )
}
