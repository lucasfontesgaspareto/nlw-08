import { useState } from "react";
import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas'
import { Loading } from "../Loading";

interface ScreenShotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenShotButton({
  screenshot,
  onScreenshotTook,
}: ScreenShotButtonProps) {
  const [isTakeingScreenshot, setIsTakeingScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    setIsTakeingScreenshot(true)

    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')

    setIsTakeingScreenshot(false)

    onScreenshotTook(base64image)
  }

  if (screenshot) {
    return <button
      onClick={() => onScreenshotTook(null)}
      type="button"
      className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
      style={{
        backgroundImage: `url(${screenshot})`,
        backgroundPosition: `right bottom`,
        backgroundSize: 90,
      }}
    >
      <Trash weight="fill"></Trash>
    </button>
  }
  
  return <button
    onClick={handleTakeScreenshot}
    type="button"
    className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
  >
    {isTakeingScreenshot ? <Loading /> :
    <Camera className="w-6 h-6 text-zinc-100"/>}
  </button>
}