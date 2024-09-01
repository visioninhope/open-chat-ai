'use server'

// import { auth } from '@/auth'
import { ResultCode } from '@/types/common'
import { Conversation } from '@/types/user'

const curCons: Conversation[] = [
  {
    id: '1',
    name: '发生的纠纷是犯得上反对法士大夫',
    is_new_create: true,
    visit_time: Date.now(),
    user_id: 101,
    model: 'Model A',
    status: 1,
    created_time: new Date().toISOString(),
  },
  {
    id: '2',
    name: '对话2',
    is_new_create: false,
    visit_time: Date.now() - 10000, // 10秒前
    user_id: 102,
    model: 'Model B',
    status: 1,
    created_time: new Date().toISOString(),
  },
  {
    id: '3',
    name: '对话3',
    is_new_create: false,
    visit_time: Date.now() - 50000, // 50秒前
    user_id: 103,
    model: 'Model C',
    status: 0, // 冻结状态
    created_time: new Date().toISOString(),
  },
]

export async function getConversations(userId?: string | null) {
  console.log('userId', userId)

  //   const session = await auth()

  //   if (!userId) {
  //     return []
  //   }

  //   if (userId !== session?.user?.id) {
  //     return {
  //       code: ResultCode.UNAUTHORIZED,
  //       message: '登录异常，请重新登录试试~',
  //     }
  //   }

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      code: ResultCode.SUCESS,
      message: 'success',
      data: curCons,
    }
  } catch (error) {
    console.error('getConversations unknown error ', error)
    return {
      code: ResultCode.UNKNOW,
      message: '服务器出了一点意外，请稍后再试试~',
    }
  }
}
