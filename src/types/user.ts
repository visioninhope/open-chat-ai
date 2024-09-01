export interface User {
  id: string
  username: string
  name: string
  email: string
  avatar_url: string
  bio: string
  limit_num: number
  created_at: Date
}

export interface Session {
  user: {
    id: string
    name: string
    email: string
    image: string
  }
}

export interface Conversation {
  id: string // 主键，自增ID
  name: string // 对话名称，可选字段
  is_new_create: boolean // 是否是最新创建的对话，默认值为true
  visit_time: number // 最新访问时间，时间戳（毫秒）
  user_id: number // 关联的用户ID
  model: string // 当前对话使用的模型名称，可选字段
  status: number // 状态，1-代表启用，0-代表冻结
  created_time: string // 创建时间，默认当前时间，使用 ISO 字符串
}
