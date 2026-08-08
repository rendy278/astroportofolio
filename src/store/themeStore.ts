import { create } from 'zustand'

export type ThemeMode = 'light' | 'dark'

interface ThemeState {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',

  setTheme: (theme) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme)

      document.documentElement.classList.toggle('dark', theme === 'dark')
    }

    set({ theme })
  },

  toggleTheme: () =>
    set((state) => {
      const nextTheme = state.theme === 'dark' ? 'light' : 'dark'

      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', nextTheme)

        document.documentElement.classList.toggle('dark', nextTheme === 'dark')
      }

      return {
        theme: nextTheme,
      }
    }),
}))

export function initializeTheme() {
  if (typeof window === 'undefined') return

  const savedTheme = localStorage.getItem('theme')

  const theme: ThemeMode =
    savedTheme === 'dark' || savedTheme === 'light'
      ? savedTheme
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'

  document.documentElement.classList.toggle('dark', theme === 'dark')

  useThemeStore.setState({ theme })
}
