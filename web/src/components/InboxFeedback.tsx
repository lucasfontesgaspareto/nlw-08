import { Detective } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "./WidgetForm";

interface InboxFeedbackProps {
  feedback: {
    id: string;
    type: FeedbackType,
    comment: string;
    screenshot?: string;
  }
}

export function InboxFeedback({ feedback }: InboxFeedbackProps) {
  const feedbackTypeInfo = feedbackTypes[feedback.type]

  function handleViewScreenshot() {
    const image = new Image()
    image.src = feedback.screenshot || ''
    const w: any = window.open("")
    w.document.write(image.outerHTML)
  }

  return <div className="border-t p-2 my-2 flex justify-between items-center">
    <div>
      <span className="text-xl leading-6 flex items-center gap-2 text-light-text-primary dark:text-dark-text-primary">
        <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"/>
        {feedbackTypeInfo.title}
      </span>
      <div className="ml-2">
        <p>{feedback.comment}</p>
      </div>
    </div>
    <button
      onClick={handleViewScreenshot}
      className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-light-text-secondary hover:text-light-text-primary dark:text-dark-text-secondary dark:hover:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-surface-primary focus:dark:ring-offset-dark-surface-primary focus:ring-brand transition-colors"
      style={{
        backgroundImage: `url(${feedback.screenshot})`,
        backgroundPosition: `right bottom`,
        backgroundSize: 90,
      }}
    ></button>
  </div>
}