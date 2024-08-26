import { headers } from 'next/headers'

import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  secret: process.env.AUTH_SECRET,
  //   pages: {
  //     signIn: '/',
  //   },
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isRootPage = nextUrl.pathname === '/'
      const isOnSharePage = nextUrl.pathname.startsWith('/share')

      console.log('路由中间件，检测是否登录', nextUrl.pathname, isLoggedIn)

      if (!isLoggedIn && !isOnSharePage && !isRootPage) {
        return Response.redirect(new URL('/', nextUrl))
      }

      return true
    },
    async signIn(scopeUsrInfo) {
      const headerAll = headers()
      const userIp = headerAll.get('x-forwarded-for')
      console.log('github授权登录成功---------------', '开始检查和创建新用户')
      console.log('github授权成功后获取到的信息', '-----------------------')
      console.log(scopeUsrInfo)
      console.log('用户ip', userIp)

      //   await checkAndSaveUser(user.name, user.email, user.image, userIp)
      return true
    },
    async jwt({ token, user }) {
      if (user) {
        token = {
          ...token,
          id: user.id,
        }
      }

      return token
    },
    async session({ session, token }) {
      if (token) {
        const { id } = token as {
          id: string
        }
        const { user } = session

        session = {
          ...session,
          user: { ...user, id },
        }
      }

      return session
    },
  },
  providers: [],
} satisfies NextAuthConfig
