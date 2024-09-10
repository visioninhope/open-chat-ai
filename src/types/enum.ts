export enum OpenAIModelType {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_3_5_16 = 'gpt-3.5-turbo-16k',
  GPT_3_5_0125 = 'gpt-3.5-turbo-0125',
  GPT_3_5_1106 = 'gpt-3.5-turbo-1106',
  GPT_3_5_instruct = 'gpt-3.5-turbo-instruct',
  GPT_4_O_mini = 'gpt-4o-mini',
  GPT_4_O_mini_2024_07_18 = 'gpt-4o-mini-2024-07-18',
  GPT_3_5_CODE = 'code-davinci-002',
}

export enum ModelTokenNum {
  GPT_3_5 = 4096,
  GPT_3_5_16 = 16385,
  GPT_3_5_0125 = 4096,
  GPT_3_5_1106 = 16385,
  GPT_3_5_instruct = 4096,
  GPT_4_O_mini = 128000,
  GPT_4_O_mini_2024_07_18 = 128000,
  GPT_3_5_CODE = 8001,
}

export enum PanelType {
  none = 'none',
  prompt = 'prompt',
  model = 'model',
  setting = 'setting',
  attitude = 'attitude',
  token = 'token',
}

export enum FetchReqStatus {
  loading = 'loading',
  error = 'error',
  timeOut = 'timeOut',
  sucess = 'sucess',
}

export enum AskStatus {
  init = 'init',
  end = 'end',
  asking = 'asking',
  answering = 'answering',
  error = 'error',
  ratelimit = 'ratelimit',
}
