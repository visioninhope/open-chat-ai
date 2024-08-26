'use server'
// import { AuthError } from 'next-auth'

import { signIn } from '@/auth'
import { ResResult, ResultCode } from '@/types/common'

// 凭证登录——表单action
export async function authenticate(
  _prevState: ResResult | undefined,
  formData: FormData,
): Promise<ResResult | undefined> {
  try {
    const email = formData.get('email')
    const password = formData.get('password')
    console.log('credentials', email)
    console.log('credentials', password)
    // ...
    await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    // await signIn('github', { redirectTo: redirectPath })

    return {
      code: ResultCode.SUCESS,
      message: '登录成功',
    }
  } catch (error) {
    console.error('github授权登录失败', error)
    return {
      code: ResultCode.LOGINFAILE,
      message: '登录失败了，请重新试试~',
    }
  }
}

export async function signInByGithub(
  redirectPath: string,
): Promise<ResResult | undefined> {
  try {
    await signIn('github', { redirectTo: redirectPath })
    return {
      code: ResultCode.SUCESS,
      message: '登录成功',
    }
  } catch (error) {
    console.error('github授权登录失败', error)
    return {
      code: ResultCode.LOGINFAILE,
      message: '登录失败了，请重新试试~',
    }
  }
}
