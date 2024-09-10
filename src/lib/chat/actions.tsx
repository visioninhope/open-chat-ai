'use server'

// import { auth } from '@/auth'
import { ResultCode } from '@/types/common'
import { Conversation } from '@/types/user'

const curCons: Conversation[] = [
  {
    id: '1',
    name: '这是一条很长很长的对话哦！',
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
  // 新增的记录
  {
    id: '4',
    name: '对话4',
    is_new_create: true,
    visit_time: Date.now() - 600000, // 10分钟前
    user_id: 104,
    model: 'Model D',
    status: 1,
    created_time: new Date().toISOString(),
  },
  {
    id: '5',
    name: '对话5',
    is_new_create: false,
    visit_time: Date.now() - 1200000, // 20分钟前
    user_id: 105,
    model: 'Model E',
    status: 1,
    created_time: new Date().toISOString(),
  },
  // {
  //   id: '6',
  //   name: '对话6',
  //   is_new_create: true,
  //   visit_time: Date.now() - 1800000, // 30分钟前
  //   user_id: 106,
  //   model: 'Model F',
  //   status: 1,
  //   created_time: new Date().toISOString(),
  // },
  // {
  //   id: '7',
  //   name: '对话7',
  //   is_new_create: false,
  //   visit_time: Date.now() - 3600000, // 1小时前
  //   user_id: 107,
  //   model: 'Model G',
  //   status: 1,
  //   created_time: new Date().toISOString(),
  // },
  // {
  //   id: '8',
  //   name: '对话8',
  //   is_new_create: false,
  //   visit_time: Date.now() - 7200000, // 2小时前
  //   user_id: 108,
  //   model: 'Model H',
  //   status: 0, // 冻结状态
  //   created_time: new Date().toISOString(),
  // },
  // {
  //   id: '9',
  //   name: '对话9',
  //   is_new_create: true,
  //   visit_time: Date.now() - 10800000, // 3小时前
  //   user_id: 109,
  //   model: 'Model I',
  //   status: 1,
  //   created_time: new Date().toISOString(),
  // },
  // {
  //   id: '10',
  //   name: '对话10',
  //   is_new_create: false,
  //   visit_time: Date.now() - 21600000, // 6小时前
  //   user_id: 110,
  //   model: 'Model J',
  //   status: 1,
  //   created_time: new Date().toISOString(),
  // },
  // {
  //   id: '11',
  //   name: '对话11',
  //   is_new_create: false,
  //   visit_time: Date.now() - 43200000, // 12小时前
  //   user_id: 111,
  //   model: 'Model K',
  //   status: 1,
  //   created_time: new Date().toISOString(),
  // },
  // {
  //   id: '12',
  //   name: '对话12',
  //   is_new_create: true,
  //   visit_time: Date.now() - 86400000, // 1天前
  //   user_id: 112,
  //   model: 'Model L',
  //   status: 0, // 冻结状态
  //   created_time: new Date().toISOString(),
  // },
  // {
  //   id: '13',
  //   name: '对话13',
  //   is_new_create: false,
  //   visit_time: Date.now() - 86400000, // 1天前
  //   user_id: 113,
  //   model: 'Model L',
  //   status: 0, // 冻结状态
  //   created_time: new Date().toISOString(),
  // },
  // {
  //   id: '14',
  //   name: '对话14',
  //   is_new_create: false,
  //   visit_time: Date.now() - 86400000, // 1天前
  //   user_id: 114,
  //   model: 'Model L',
  //   status: 0, // 冻结状态
  //   created_time: new Date().toISOString(),
  // },
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
