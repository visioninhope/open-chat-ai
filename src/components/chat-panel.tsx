import { useState } from 'react'

import clsx from 'clsx'

import Pannel from './pannel/container'
import ModelPanel from './pannel/content/model-panel'
import PromptTextarea from './prompt-textarea'

import { OpenAIModelType } from '@/types/enum'

interface RecommendQue {
  title: string
  content: string
}

interface ChatPanelProps {
  topicQues?: RecommendQue[]
}

const topics: RecommendQue[] = [
  {
    title: '设计一个数据库模式',
    content: '设计一个数据库模式，用于在线商品商店的数据库模式设计',
  },
  {
    title: ' 模拟编程社区来回答你的问题，并输出解决代码。',
    content:
      '我想让你充当 Stackoverflow 的帖子。我将提出与编程有关的问题，你将回答答案是什么。我希望你只回答给定的答案，在没有足够的细节时写出解释。当我需要用英语告诉你一些事情时，我会把文字放在中文括号里（像这样）。',
  },
  {
    title: '提交信息生成器',
    content:
      '我想让你充当一个提交信息生成器。我将为你提供任务的信息和任务代码的前缀，我希望你能用常规的提交格式生成一条合适的提交信息。不要写任何解释或其他文字，只需回复提交信息。',
  },
  {
    title: '输入产品描述、项目目标和受众群体，输出界面设计建议，提高用户体验',
    content:
      '我希望你能作为一个 UX/UI 开发者。我将提供一些关于应用程序、网站或其他数字产品的设计细节，而你的工作将是想出创造性的方法来改善其用户体验。这可能涉及到创建原型，测试不同的设计，并对什么是最有效的提供反馈。',
  },
]

export default function ChatPanel({ topicQues = topics }: ChatPanelProps) {
  const [propmtTextAreaValue, setPropmtTextAreaValue] = useState('')
  const [isShowPanel, setIsShowPanel] = useState(false)

  const ShowSettingPanel = () => {
    setIsShowPanel(true)
  }

  const closePanel = () => {
    setIsShowPanel(false)
  }

  const handleTextAreaChange = (value: string) => {
    setPropmtTextAreaValue(value)
    if (value === '/') {
      console.log('show prompt')
    } else {
      console.log('hide pormpt')
    }
  }

  /**
   * @description 首页行为 ：创建对话后跳转到对话详情
   * @returns
   */
  const beginConversation = () => {
    if (propmtTextAreaValue.length === 0) {
      return
    }
    console.log('prompt', propmtTextAreaValue)

    // 判断是首页是还是详情页，首页是创建新的对话后跳转详情页接收回复
  }

  return (
    <div className="w-full space-y-6 sm:w-[80%] md:w-[75%] lg:w-[60%]">
      {/* 内置话题 */}
      {topicQues.length > 0 ? (
        <div className="grid w-full grid-cols-1 grid-rows-4 gap-4 sm:grid-cols-2 sm:grid-rows-2">
          {topicQues.map((item, index) => {
            return (
              <div
                key={index}
                className="group relative flex animate-enter-move cursor-pointer justify-between rounded-xl border border-solid border-[#4d4d4f] border-opacity-10 px-3 py-2 opacity-0 shadow-md shadow-default-300 transition-all duration-200 ease-in-out hover:bg-default-200 hover:bg-opacity-50"
                style={{ animationDelay: `${index * 0.22}s` }}
              >
                <div className="w-full space-y-1">
                  <div className="truncate text-sm font-semibold">
                    {item.title}
                  </div>
                  <div className="truncate text-sm text-default-500">
                    {item.content}
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-[linear-gradient(to_left,_hsl(var(--nextui-default-200))_60%,_rgba(230,236,241,0))] pl-6 pr-3 opacity-0 group-hover:opacity-100">
                  <i className="ph ph-paper-plane-right text-lg"></i>
                </div>
              </div>
            )
          })}
        </div>
      ) : null}

      <div className="relative w-full">
        {/* action-area */}
        <div className="flex w-full justify-between px-2 py-[0.375rem]">
          <div className="flex">
            <div
              onClick={ShowSettingPanel}
              className="group mr-[0.325rem] flex h-[25.6px] w-[37.6px] cursor-pointer items-center justify-center overflow-hidden rounded-[25.6px] border border-foreground-500 border-opacity-70 transition-all duration-300 ease-in-out hover:w-fit hover:bg-default-200 hover:bg-opacity-50 hover:px-[0.3rem] hover:py-0"
            >
              <i className="ph ph-robot text-[1.1rem]"></i>
              <span className="ml-[0.1rem] inline-block w-0 translate-x-[-10px] overflow-hidden whitespace-nowrap text-[0.8125rem] opacity-100 transition-all duration-300 ease-in-out group-hover:w-auto group-hover:translate-x-0 group-hover:opacity-100">
                gpt-4o-mini
              </span>
            </div>
          </div>
          <div>
            <div className="flex h-[25.6px] w-fit cursor-pointer items-center justify-center rounded-[25.6px] border border-foreground-500 border-opacity-70 px-[0.3rem] py-0 hover:bg-default-200 hover:bg-opacity-50">
              <i className="ph ph-arrows-counter-clockwise text-[1rem]"></i>
              <span className="ml-[0.1rem] inline-block w-auto whitespace-nowrap text-[0.8125rem] transition-all duration-300 ease-in-out">
                重新提问
              </span>
            </div>
          </div>
        </div>

        {/* intpuarea */}
        <div className="relative rounded-xl p-3 pr-0 ring-1 ring-default-300">
          {/* poup-panel-area mt-[2.85rem] */}
          <div className="absolute bottom-full left-0 right-0 mb-[2.75rem]">
            <Pannel visible={isShowPanel}>
              <ModelPanel
                onClosePanel={closePanel}
                curSelectKey={OpenAIModelType.GPT_4_O_mini}
              />
            </Pannel>
          </div>

          <PromptTextarea
            value={propmtTextAreaValue}
            placeholder="回车发送消息，键入 / 触发prompt列表"
            minRows={1}
            maxRows={5}
            className="pr-12"
            onClick={closePanel}
            onChange={(e) => {
              handleTextAreaChange(e.target.value)
            }}
            onEnterPress={beginConversation}
          />
          <div
            className={clsx(
              'absolute right-3 top-[50%] flex h-8 w-8 translate-y-[-50%] cursor-pointer items-center justify-center rounded-md opacity-40',
              propmtTextAreaValue.length > 0 &&
                'bg-[#19c37d] text-[#fff] !opacity-100',
            )}
            onClick={beginConversation}
          >
            <i className="ph ph-paper-plane-right text-[1.1rem]"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
