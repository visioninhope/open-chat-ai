import NextAuth from 'next-auth'
import Github from 'next-auth/providers/github'

import { authConfig } from './auth.config'

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  // 我这边的应用目前只使用github登录这一种注册登录方式
  providers: [Github],
})
