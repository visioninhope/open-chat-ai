declare namespace NodeJS {
  interface ProcessEnv {
    /** 基础路径 */
    PRIVATE_KEY: string
    NEXT_PUBLIC_BASEURL: string
    AUTH_SECRET: string
    AUTH_GITHUB_ID: string
    AUTH_GITHUB_SECRET: string
  }
}
