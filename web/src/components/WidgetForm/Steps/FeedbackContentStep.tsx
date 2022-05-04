import { useState } from "react";
import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenShotButton } from "../ScreenShotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequest: () => void;
}

export function FeedbackContentStep(props: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[props.feedbackType]
  
  const [screenshot, setScreenshot] = useState<string | null>(null)

  return <>
    <header>
      <button
        onClick={props.onFeedbackRestartRequest}
        type="button"
        className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
      >
        <ArrowLeft weight="bold" className="w-4 h-4"/>
      </button>

      <span className="text-xl leading-6 flex items-center gap-2">
        <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"/>
        {feedbackTypeInfo.title}
      </span>

      <CloseButton/>
    </header>

    <form className="my-4 w-full">
      <textarea
        className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 p-2 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
        placeholder="Conte com detalhes o que está acontecendo..."
      ></textarea>

      <footer className="flex gap-2 mt-2">
        <ScreenShotButton
          screenshot={screenshot}
          onScreenshotTook={setScreenshot}
        />

        <button
          type="submit"
          className="p-2 bg-brand-500 hover:bg-brand-300 rounded-md border-transparent flex-1 justify-center items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
        >Enviar feedback</button>
      </footer>
    </form>
  </>
}