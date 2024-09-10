import React, { useEffect, useState } from 'react'

import { Divider } from '@nextui-org/divider'
import { ScrollShadow } from '@nextui-org/scroll-shadow'
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from '@nextui-org/table'
import { Tabs, Tab } from '@nextui-org/tabs'

import { OpenAIModel } from '@/types/chat'
import { ModelTokenNum, OpenAIModelType } from '@/types/enum'

type modalDataType = {
  key: React.Key
} & OpenAIModel

interface ModelPanelProps {
  onSelect?: (curModel: OpenAIModelType) => void
  onClosePanel: () => void
  curSelectKey?: OpenAIModelType
}

const modelList = [
  {
    label: 'GPT-3.5',
    value: 'GPT-3.5',
  },
  {
    label: 'GPT-4o mini',
    value: 'GPT-4o mini',
  },
  {
    label: 'GPT-4',
    value: 'GPT-4',
    disabled: true,
  },
]

const gpt4MiniData: modalDataType[] = [
  {
    key: OpenAIModelType.GPT_4_O_mini,
    name: OpenAIModelType.GPT_4_O_mini,
    desc: '用于快速处理轻量级任务的智能小模型，比GPT-3.5 Turbo更智能、速度更快',
    tokenNum: ModelTokenNum.GPT_4_O_mini,
  },
  {
    key: OpenAIModelType.GPT_4_O_mini_2024_07_18,
    name: OpenAIModelType.GPT_4_O_mini_2024_07_18,
    desc: '当前gpt-4o-mini指向此版本',
    tokenNum: ModelTokenNum.GPT_4_O_mini_2024_07_18,
  },
]

const gpt3Data: modalDataType[] = [
  {
    key: OpenAIModelType.GPT_3_5,
    name: OpenAIModelType.GPT_3_5,
    desc: '最具实力的GPT-3.5模型，专为聊天优化',
    tokenNum: ModelTokenNum.GPT_3_5,
  },
  {
    key: OpenAIModelType.GPT_3_5_0125,
    name: OpenAIModelType.GPT_3_5_0125,
    desc: '最新的GPT-3.5模型，在响应请求的格式方面具有更高的准确性',
    tokenNum: ModelTokenNum.GPT_3_5_0125,
  },
  {
    key: OpenAIModelType.GPT_3_5_16,
    name: OpenAIModelType.GPT_3_5_16,
    desc: '一次可以发送更多消息，上下文长度增加了4倍。长达 20 页上下文',
    tokenNum: ModelTokenNum.GPT_3_5_16,
  },
  {
    key: OpenAIModelType.GPT_3_5_1106,
    name: OpenAIModelType.GPT_3_5_1106,
    desc: '一次可以发送更多消息，上下文长度增加了4倍。长达 20 页上下文同时针对输出接口和内容进行了优化',
    tokenNum: ModelTokenNum.GPT_3_5_1106,
  },
  // {
  //   key: OpenAIModelType.GPT_3_5_instruct,
  //   name: OpenAIModelType.GPT_3_5_instruct,
  //   desc: t(
  //     '与GPT-3时代型号类似的功能。与旧版完成端点兼容，但不与聊天完成兼容',
  //   ),
  //   tokenNum: ModelTokenNum.GPT_3_5_instruct,
  // },
  // {
  //   key: OpenAIModelType.GPT_3_5_CODE,
  //   name: OpenAIModelType.GPT_3_5_CODE,
  //   desc: t('针对代码补全任务进行了优化'),
  // tokenNum:ModelTokenNum.GPT_3_5_CODE
  // },
]

export default function ModelPanel({
  onSelect,
  onClosePanel,
  curSelectKey = OpenAIModelType.GPT_4_O_mini,
}: ModelPanelProps) {
  const [curModelData, setCurModelData] = useState(gpt4MiniData)

  const [curModelType, setCurModelType] = useState(modelList[1].value)

  const handleModelTypeChange = (key: React.Key) => {
    console.log(key)

    setCurModelType(key as string)
    if (key === 'GPT-3.5') {
      setCurModelData(gpt3Data)
    } else if (key === 'GPT-4o mini') {
      setCurModelData(gpt4MiniData)
    }
  }

  useEffect(() => {
    if (curSelectKey.indexOf('3') !== -1) {
      setCurModelData(gpt3Data)
    } else if (curSelectKey.indexOf('4o') !== -1) {
      setCurModelData(gpt4MiniData)
    }
  }, [curSelectKey])

  return (
    <div className="shadow-top-box relative h-fit w-full overflow-x-hidden overflow-y-hidden rounded-xl bg-background ring-1 ring-default-300">
      <ScrollShadow hideScrollBar className="max-h-[50vh] w-full scroll-p-5">
        <div className="flex justify-between p-3">
          <div className="text-[1rem] font-semibold">模型列表</div>
          <div
            className="cursor-pointer transition-all duration-300 ease-in-out hover:rotate-180"
            onClick={onClosePanel}
          >
            <i className="ph ph-x text-[1rem]"></i>
          </div>
        </div>
        <Divider className="w-full" />
        <div className="ml-[14px] mt-[14px]">
          <Tabs
            disabledKeys={[modelList[2].value]}
            aria-label="Options"
            size="md"
            radius="full"
            color="success"
            selectedKey={curModelType}
            onSelectionChange={handleModelTypeChange}
          >
            {modelList.map((item) => {
              return (
                <Tab key={item.value} title={item.label}>
                  <div className="w-full p-2">
                    <Table
                      color="success"
                      selectionMode="single"
                      defaultSelectedKeys={[curSelectKey]}
                      onSelectionChange={(keys) => {
                        ;(keys as Set<OpenAIModelType>).forEach((key) => {
                          onSelect && onSelect(key)
                        })
                      }}
                      aria-label="Example static collection table"
                    >
                      <TableHeader>
                        <TableColumn>模型名称</TableColumn>
                        <TableColumn>模型简介</TableColumn>
                      </TableHeader>
                      <TableBody>
                        {curModelData.map((item) => {
                          return (
                            <TableRow key={item.key}>
                              <TableCell>{item.name}</TableCell>
                              <TableCell>{item.desc}</TableCell>
                            </TableRow>
                          )
                        })}
                      </TableBody>
                    </Table>
                  </div>
                </Tab>
              )
            })}
          </Tabs>
        </div>
      </ScrollShadow>
    </div>
  )
}
