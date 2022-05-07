import { useEffect } from "react"
import { ThemeSwitcher } from "./components/ThemeSwitcher"
import { Widget } from "./components/Widget"

function App() {

  useEffect(() => {
    if (!localStorage.theme) {
      localStorage.theme = 'light'
    }
    
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return <div className="bg-white dark:bg-[#121212] min-h-screen">
    <header className="bg-zinc-800 py-4 mb-12">
      <div className="container mx-auto flex items-center justify-between">
        <div className="bg-zinc-700 h-10 w-40 rounded-lg"></div>

        <div className="flex items-center justify-between gap-6">
          <div className="bg-zinc-700 h-4 w-24 rounded-full"></div>
          <div className="bg-zinc-700 h-4 w-24 rounded-full"></div>
          <div className="bg-zinc-700 h-4 w-24 rounded-full"></div>
          <div className="bg-zinc-700 h-4 w-24 rounded-full"></div>
        </div>

        <div>
          <ThemeSwitcher/>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="bg-zinc-700 h-9 w-9 rounded-lg"></div>
          <div className="bg-zinc-700 h-9 w-9 rounded-lg"></div>
          <div className="bg-zinc-700 h-12 w-12 rounded-full"></div>
        </div>
      </div>
    </header>

    
    <main className="container mx-auto">
      <div className="bg-zinc-800 p-12 rounded-lg mb-8">
        <div className="text-zinc-400">
          Experimente enviar um feedback de um bug na aplicação 🐛 
        </div>
      </div>

      <div className="grid gap-8 grid-cols-3">
        {[1,2,3,4,5].map(item => <div className="bg-zinc-800 p-12 rounded-lg h-72"></div>)}
      </div>
    </main>

    <Widget />
  </div>
}

export default App
