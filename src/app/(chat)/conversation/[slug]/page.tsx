import { Button } from '@nextui-org/button'
import { type Metadata } from 'next'
import Link from 'next/link'

interface ConversationPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: ConversationPageProps): Promise<Metadata> {
  return {
    title: `${params.slug}—对话详情页面`,
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

export default function Page({ params }: ConversationPageProps) {
  return (
    <div>
      对话详情页面: {params.slug}{' '}
      <Link href="/new">
        <Button color="success" variant="ghost" radius="sm">
          <i className="ph-thin ph-plus"></i> 新建对话
        </Button>{' '}
      </Link>
    </div>
  )
}
