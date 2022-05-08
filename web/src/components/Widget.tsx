import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'

interface WidgetProps {}

export function Widget(props: WidgetProps) {
  return <Popover className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
    <Popover.Panel>
      <WidgetForm />
    </Popover.Panel>

    <Popover.Button
      className="bg-brand text-on-brand rounded-full px-3 h-12 flex items-center group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-surface-primary focus:dark:ring-offset-dark-surface-primary focus:ring-brand transition-colors"
    >
      <ChatTeardropDots className="w-6 h-6" />

      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
        Feedback
      </span>
    </Popover.Button>
  </Popover>
}