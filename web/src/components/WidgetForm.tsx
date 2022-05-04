import { CloseButton } from "./CloseButton";
import bugImgUrl from '../assets/bug.svg'
import ideaImgUrl from '../assets/idea.svg'
import thoughtImgUrl from '../assets/thought.svg'
import { useState } from "react";

const feedbackTypes = {
  BUG: {
    title: 'Problema',
    icon: {
      source: bugImgUrl,
      alt: 'Icone de um inseto',
    },
  },
  IDEA: {
    title: 'Problema',
    icon: {
      source: ideaImgUrl,
      alt: 'Icone de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Problema',
    icon: {
      source: thoughtImgUrl,
      alt: 'Icone de um balão de pensamento',
    },
  },
}

type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType|null>(null)

  function selectFeedbackType(key: FeedbackType) {
    setFeedbackType(key)
  }

  return <div
    className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"
  >
    <header>
      <span className="text-xl leading-6 mr-8">Deixe seu feedback</span>
 
      <CloseButton/>
    </header>

    {!feedbackType ? (
      <section className="flex py-8 gap-2 w-full">
        {
          Object.entries(feedbackTypes).map(([key, value]) => {
            return <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none transition-colors"
              type="button"
              onClick={() => selectFeedbackType(key as FeedbackType)}
            >
              <img src={value.icon.source} alt={value.icon.alt}/>
              <span>{value.title}</span>
            </button>
          })
        }
      </section>
    ) : (
      <div>Hello World</div>
    )}

    <footer className="text-xs text-neutral-400">
      <span>Feito com <span className="text-[#633bbc]">♥</span> pela <a className="underline underline-offset-2" href="https://www.rocketseat.com.br/" >Rocketseat</a></span>
    </footer>
  </div>
}