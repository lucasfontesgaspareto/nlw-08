import { CloseButton } from "../CloseButton";
import bugImgUrl from '../../assets/bug.svg'
import ideaImgUrl from '../../assets/idea.svg'
import thoughtImgUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImgUrl,
      alt: 'Icone de um inseto',
    },
  },
  IDEA: {
    title: 'Problema',
    image: {
      source: ideaImgUrl,
      alt: 'Icone de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Problema',
    image: {
      source: thoughtImgUrl,
      alt: 'Icone de um balão de pensamento',
    },
  },
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType|null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return <div
    className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"
  >
    {
      feedbackSent
      ? (
          <FeedbackSuccessStep onFeedbackRestartRequest={handleRestartFeedback}/>
        )
      : (
          <>
            {!feedbackType ? (
              <FeedbackTypeStep
                onFeedbackTypeChange={setFeedbackType}
              />
            ) : (
              <FeedbackContentStep
                feedbackType={feedbackType}
                onFeedbackRestartRequest={handleRestartFeedback}
                onFeedbackSent={() => setFeedbackSent(true)}
              />
            )}
          </>
        )
    }

    <footer className="text-xs text-neutral-400">
      <span>Feito com <span className="text-[#633bbc]">♥</span> por <a className="underline underline-offset-2" href="https://github.com/lucasfontesgaspareto/nlw-return-impulse" >devgaspa</a></span>
    </footer>
  </div>
}