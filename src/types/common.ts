export enum ResultCode {
  SUCESS = 0,
  LOGINFAILE = 1,
  UNAUTHORIZED = 2,
  UNKNOW = -1,
}

export interface ResResult {
  code: ResultCode
  message: string
  data?: object
}
