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
    <header className="bg-zinc-100 dark:bg-zinc-800 py-4 mb-12">
      <div className="container mx-auto flex items-center justify-between">
        <div className="hidden sm:block bg-zinc-200 dark:bg-zinc-700 h-10 w-40 rounded-lg"></div>

        <div className="hidden sm:flex items-center justify-between gap-6">
          {[1,2,3,4].map(key => <div key={key} className="bg-zinc-200 dark:bg-zinc-700 h-4 w-24 rounded-full"></div>)}
        </div>

        <div className="ml-auto mr-4">
          <ThemeSwitcher/>
        </div>

        <div className="hidden sm:flex items-center justify-between gap-4">
          {[1,2,3].map(key => <div key={key} className="bg-zinc-200 dark:bg-zinc-700 h-9 w-9 rounded-lg"></div>)}
        </div>
      </div>
    </header>

    
    <main className="container mx-auto px-8">
      <div className="bg-zinc-100 dark:bg-zinc-800 p-12 rounded-lg mb-8">
        <div className="text-zinc-500 dark:text-zinc-400">
          Experimente enviar um feedback de um bug na aplicação 🐛 
        </div>
      </div>

      <div className="grid gap-8 grid-cols-2">
        {[1,2,3,4,5].map(key => <div key={key} className="bg-zinc-100 dark:bg-zinc-800 p-12 rounded-lg h-20 sm:h-72"></div>)}
      </div>
    </main>

    <Widget />
  </div>
}

export default App
