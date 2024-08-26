export enum ResultCode {
  SUCESS = 0,
  LOGINFAILE = 1,
}

export interface ResResult {
  code: ResultCode
  message: string
}
