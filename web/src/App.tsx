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
    <header className="bg-light-surface-secondary dark:bg-dark-surface-secondary py-4 mb-12 px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="hidden md:block bg-light-surface-secondary-hover dark:bg-dark-surface-secondary-hover h-10 w-40 rounded-lg"></div>

        <div className="hidden lg:flex items-center justify-between gap-6">
          {[1,2,3,4].map(key => <div key={key} className="bg-light-surface-secondary-hover dark:bg-dark-surface-secondary-hover h-4 w-24 rounded-full"></div>)}
        </div>

        <div className="flex items-center">
          <div className="mr-4 ml-auto">
            <ThemeSwitcher/>
          </div>
          <div className="hidden md:flex items-center justify-between gap-4">
            {[1,2].map(key => <div key={key} className="bg-light-surface-secondary-hover dark:bg-dark-surface-secondary-hover h-9 w-9 rounded-lg"></div>)}
            <div className="bg-light-surface-secondary-hover dark:bg-dark-surface-secondary-hover h-12 w-12 rounded-full"></div>
          </div>
        </div>
      </div>
    </header>

    <div className="px-8">
      <div className="container mx-auto">
        <div className="bg-light-surface-secondary dark:bg-dark-surface-secondary p-12 rounded-lg mb-8">
          <div className="text-light-text-secondary dark:text-dark-text-secondary">
            Experimente enviar um feedback de um bug na aplicação 🐛 
          </div>
        </div>

        <div className="grid gap-8 grid-cols-2"> 
          {[1,2,3,4,5].map(key => <div key={key} className="bg-light-surface-secondary dark:bg-dark-surface-secondary p-12 rounded-lg h-20 md:h-72"></div>)}
        </div>
      </div>
    </div>

    <Widget />
  </div>
}

export default App
