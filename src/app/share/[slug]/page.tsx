import { Button } from '@nextui-org/button'
import { type Metadata } from 'next'
import Link from 'next/link'

interface SharePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: SharePageProps): Promise<Metadata> {
  return {
    title: `${params.slug}—分享对话页面`,
  }
  //   const session = await auth()

  //   if (!session?.user) {
  //     return {}
  //   }

  //   const chat = await getChat(params.id, session.user.id)

  //   if (!chat || 'error' in chat) {
  //     redirect('/')
  //   } else {
  //     return {
  //       title: chat?.title.toString().slice(0, 50) ?? 'Chat',
  //     }
  //   }
}

export default function Page({ params }: SharePageProps) {
  return (
    <div>
      分享对话页面: {params.slug}{' '}
      <Link href="/">
        <Button color="success" variant="ghost" radius="sm">
          前往体验OPEN-CHAT-AI~
        </Button>{' '}
      </Link>
    </div>
  )
}
