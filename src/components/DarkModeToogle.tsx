import { IconMoon, IconSun } from '@tabler/icons-react'
import { useEffect } from 'react'
import { initializeTheme, useThemeStore } from '../store/themeStore'

export default function DarkModeToggle() {
  const theme = useThemeStore((state) => state.theme)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  useEffect(() => {
    initializeTheme()
  }, [])

  const darkMode = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-9 items-center cursor-pointer rounded-full border border-slate-200 bg-white px-1 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full text-yellow-600 shadow-sm">
        {darkMode ? <IconMoon size={18} /> : <IconSun size={18} />}
      </span>
    </button>
  )
}
