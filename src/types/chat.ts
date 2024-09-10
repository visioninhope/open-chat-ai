import { OpenAIModelType, ModelTokenNum } from './enum'

export interface OpenAIModel {
  name: OpenAIModelType
  desc?: string // (描述信息)
  tokenNum: ModelTokenNum
}
