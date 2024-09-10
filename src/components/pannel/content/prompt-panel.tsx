import { Divider } from '@nextui-org/divider'

interface PromptPanelProps {
  onClosePanel: () => void
}

export default function PromptPanel({ onClosePanel }: PromptPanelProps) {
  return (
    <div className="shadow-top-box relative h-fit max-h-[50vh] w-full scroll-p-5 overflow-y-auto overflow-x-hidden rounded-xl bg-background ring-1 ring-default-300">
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
        <h2>promp列表</h2>
      </div>
    </div>
  )
}
