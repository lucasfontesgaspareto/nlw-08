import { FormEvent, useState } from "react";
import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenShotButton } from "../ScreenShotButton";
import { api } from "../../../lib/api";
import { Loading } from "../../Loading";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequest: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequest,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]
  
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)

  async function handleSubmitFeedback(event: FormEvent) {
    if (isSendingFeedback) return false;

    setIsSendingFeedback(true)

    event.preventDefault()

    await api.post('/feedbacks',{
      type: feedbackType,
      comment,
      screenshot,
    })

    setIsSendingFeedback(false)

    onFeedbackSent()
  }

  return <>
    <header>
      <button
        onClick={onFeedbackRestartRequest}
        type="button"
        className="top-5 left-5 absolute text-light-text-secondary hover:text-light-text-primary dark:text-dark-text-secondary dark:hover:text-dark-text-primary"
      >
        <ArrowLeft weight="bold" className="w-4 h-4"/>
      </button>

      <span className="text-xl leading-6 flex items-center gap-2 text-light-text-primary dark:text-dark-text-primary">
        <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"/>
        {feedbackTypeInfo.title}
      </span>

      <CloseButton/>
    </header>

    <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
      <textarea
        onChange={event => setComment(event.target.value)}
        className="w-full min-h-[112px] text-sm placeholder-light-text-secondary dark:placeholder-dark-text-secondary text-light-text-primary dark:text-dark-text-primary p-2 border-light-surface-stroke dark:border-dark-surface-stroke bg-transparent rounded-md focus:border-brand focus:ring-brand focus:ring-1 resize-none focus:outline-none scrollbar-thumb-surface-stroke dark:scrollbar-thumb-zinc-600 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded"
        placeholder="Conte com detalhes o que está acontecendo..."
      ></textarea>

      <footer className="flex gap-2 mt-2">
        <ScreenShotButton
          screenshot={screenshot}
          onScreenshotTook={setScreenshot}
        />

        <button
          disabled={!comment || isSendingFeedback}
          type="submit"
          className="p-2 bg-brand hover:bg-brand-hover text-on-brand rounded-md border-transparent flex-1 flex justify-center items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-surface-primary focus:dark:ring-offset-dark-surface-primary focus:ring-brand transition-colors disabled:opacity-50 disabled:hover:bg-brand"
        >
          {isSendingFeedback ? <Loading/> : 'Enviar feedback'}
        </button>
      </footer>
    </form>
  </>
}