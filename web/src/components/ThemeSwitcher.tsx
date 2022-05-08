import { Moon, Sun } from "phosphor-react";
import { Switch } from '@headlessui/react'
import { useState } from "react";

export function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.theme === 'dark')

  function handleSwitchTheme() {
    setIsDarkMode(!isDarkMode)
    localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark'

    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  
  return <div>
    <Switch
      checked={isDarkMode}
      onChange={handleSwitchTheme}
      className={`${isDarkMode ? 'bg-zinc-700' : 'bg-zinc-200'}
        relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Habilitar tema dark</span>
      <span
        aria-hidden="true"
        className={`${isDarkMode ? 'translate-x-9 bg-zinc-900' : 'translate-x-0   bg-white'}
          pointer-events-none h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out flex items-center justify-center`}
      >
        {isDarkMode ? <Moon size={24} className="text-white"/> : <Sun size={24} className="text-zinc-900"/>}
      </span>
    </Switch>
  </div>
}