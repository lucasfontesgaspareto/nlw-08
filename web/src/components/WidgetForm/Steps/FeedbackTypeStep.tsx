import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChange: (type: FeedbackType) => void;
}

export function FeedbackTypeStep(props: FeedbackTypeStepProps) {
  return <>
    <header>
      <span className="text-xl leading-6 mr-8 text-light-text-primary dark:text-dark-text-primary">Deixe seu feedback</span>

      <CloseButton/>
    </header>

    <div className="flex py-8 gap-2 w-full">
      {
        Object.entries(feedbackTypes).map(([key, value]) => {
          return <button
            key={key}
            className="bg-light-surface-secondary dark:bg-dark-surface-secondary text-light-text-primary dark:text-dark-text-primary rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand focus:border-brand focus:outline-none transition-colors"
            type="button"
            onClick={() => props.onFeedbackTypeChange(key as FeedbackType)}
          >
            <img src={value.image.source} alt={value.image.alt}/>
            <span>{value.title}</span>
          </button>
        })
      }
    </div>
  </>
}