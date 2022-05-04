import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'

interface WidgetProps {}

export function Widget(props: WidgetProps) {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false)

  function toggleWidgetVisibility() {
    setIsWidgetOpen(!isWidgetOpen)
  }

  return <div className="absolute bottom-4 right-4">
    {isWidgetOpen && <p>Hello World</p>}

    <button
      onClick={toggleWidgetVisibility}
      className="bg-brand-500 text-white rounded-full px-3 h-12 flex items-center group"
    >
      <ChatTeardropDots className="w-6 h-6" />

      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
        Feedback
      </span>
    </button>
  </div>
}