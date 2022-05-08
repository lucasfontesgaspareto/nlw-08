import { useEffect, useState } from "react";
import App from "../App";
import { FeedbackProps, InboxFeedback } from "../components/InboxFeedback";
import { api } from "../lib/api";

export function InboxPage() {
  const [feedbacks, setFeedbacks] = useState<FeedbackProps[]>([])
  const [isFetchingFeedbacks, setIsFetchingFeedbacks] = useState(false)
  
  async function handleFetchFeedbacks() {
    if (isFetchingFeedbacks) return false;

    setIsFetchingFeedbacks(true)

    try {
      const { data } = await api.get('/feedbacks')
      const feedbacks = data.data as FeedbackProps[]
      setFeedbacks(feedbacks)
    } catch (error) {
      
    } finally {
      setIsFetchingFeedbacks(false)
    }
  }

  useEffect(() => {
    setInterval(() => {
      handleFetchFeedbacks()
    }, 1000)
  }, [])

  return <div className="flex flex-col md:flex-row w-full">
    <div className="flex-1 md:flex-auto md:w-1/3 mx-8 md:mx-20">
      <div className="w-full mx-auto my-10 border rounded-lg shadow-xl p-4">
        <div>Inbox feedbacks</div>
        {
          feedbacks.map(feedback => {
            return <InboxFeedback feedback={feedback} />
          })
        }
      </div>
    </div>
    <div className="flex-1 md:flex-auto md:w-2/3 mx-8 md:mx-20">
      <div className="max-w-4xl mx-auto my-10 border rounded-lg shadow-xl">
        <div className="w-full h-11 relative rounded-t-lg bg-light-surface-secondary flex overflow-hidden justify-start items-center space-x-1.5 px-2">
          <div className="absolute w-full h-full inset-0 "></div>
          <span className="relative w-3 h-3 border-2 rounded-full border-red-400"></span>
          <span className="relative w-3 h-3 border-2 rounded-full border-yellow-400"></span>
          <span className="relative w-3 h-3 border-2 rounded-full border-green-400"></span>
        </div>
        <div className="relative bg-light-surface-primary w-full h-[80vh] border-t border-light-surface-stroke rounded-b-lg overflow-hidden">
          <iframe src="/" className="absolute w-full h-full overflow-x-hidden inset-0"></iframe>
        </div>
      </div>
    </div>
  </div>
}