import { create } from 'zustand'
import { defaultLang, ui } from '../i18n/ui'
import {
  getLangFromUrl,
  getLocalizedPath,
  getPathWithoutLang,
} from '../i18n/utils'
import { navLinks } from '../constants/navLinks'

export type LangKey = keyof typeof ui

interface LangState {
  lang: LangKey
  setLang: (lang: LangKey) => void
  toggleLang: () => void
}

const SCROLL_STORAGE_KEY = 'lang-scroll-y'

const normalizePath = (path: string) => {
  return path.replace(/^\/+/g, '').replace(/\/+$/g, '')
}

const saveScrollPosition = () => {
  if (typeof window === 'undefined') return

  sessionStorage.setItem(SCROLL_STORAGE_KEY, String(window.scrollY))
}

const restoreScrollPosition = () => {
  if (typeof window === 'undefined') return

  const savedScrollY = sessionStorage.getItem(SCROLL_STORAGE_KEY)

  if (savedScrollY === null) return

  const scrollY = Number(savedScrollY)

  if (Number.isNaN(scrollY)) {
    sessionStorage.removeItem(SCROLL_STORAGE_KEY)
    return
  }

  const restore = () => {
    window.scrollTo({
      top: scrollY,
      behavior: 'instant',
    })

    sessionStorage.removeItem(SCROLL_STORAGE_KEY)
  }

  // Tunggu sampai layout halaman selesai dirender.
  requestAnimationFrame(() => {
    requestAnimationFrame(restore)
  })
}

const getInitialLang = (): LangKey => {
  if (typeof window === 'undefined') {
    return defaultLang
  }

  const urlLang = getLangFromUrl(window.location.pathname)

  if (urlLang && urlLang in ui) {
    return urlLang as LangKey
  }

  const storedLang = window.localStorage.getItem('lang')

  if (storedLang && storedLang in ui) {
    return storedLang as LangKey
  }

  return defaultLang
}

const getTranslatedPath = (
  pathWithoutLang: string,
  fromLang: LangKey,
  toLang: LangKey,
) => {
  const needle = normalizePath(pathWithoutLang)

  const fromList = navLinks[fromLang]
  const toList = navLinks[toLang]

  const index = fromList.findIndex(
    (item) => normalizePath(item.href) === needle,
  )

  if (index >= 0 || toList[index]) {
    return toList[index].href
  }

  return pathWithoutLang
}

const navigateToLanguage = (currentLang: LangKey, targetLang: LangKey) => {
  if (typeof window === 'undefined') return

  const currentPath = window.location.pathname
  const currentWithoutLang = getPathWithoutLang(currentPath)

  const targetSegment = getTranslatedPath(
    currentWithoutLang,
    currentLang,
    targetLang,
  )

  const nextPath = getLocalizedPath(targetSegment, targetLang)

  window.localStorage.setItem('lang', targetLang)

  if (currentPath === nextPath) {
    return
  }

  // Simpan posisi scroll sebelum berpindah halaman.
  saveScrollPosition()

  window.location.assign(nextPath)
}

export const useLangStore = create<LangState>((set) => {
  const initialLang = getInitialLang()

  if (typeof window !== 'undefined') {
    const currentPath = window.location.pathname

    const normalizedPath = getLocalizedPath(
      getPathWithoutLang(currentPath),
      initialLang,
    )

    /*
     * Jika URL belum mempunyai prefix bahasa,
     * tambahkan prefix tanpa melakukan full reload.
     */
    if (currentPath !== normalizedPath) {
      window.history.replaceState({}, '', normalizedPath)
    }

    /*
     * Restore posisi scroll setelah halaman baru selesai dimuat.
     */
    if (sessionStorage.getItem(SCROLL_STORAGE_KEY) !== null) {
      if (document.readyState === 'complete') {
        restoreScrollPosition()
      } else {
        window.addEventListener('load', restoreScrollPosition, { once: true })
      }
    }
  }

  return {
    lang: initialLang,

    setLang: (lang) => {
      if (!(lang in ui)) return

      if (typeof window !== 'undefined') {
        const currentLang =
          getLangFromUrl(window.location.pathname) || initialLang

        navigateToLanguage(currentLang as LangKey, lang)
      }

      set({ lang })
    },

    toggleLang: () => {
      set((state) => {
        const nextLang: LangKey = state.lang === 'en' ? 'id' : 'en'

        if (typeof window !== 'undefined') {
          const currentLang =
            getLangFromUrl(window.location.pathname) || state.lang

          navigateToLanguage(currentLang as LangKey, nextLang)
        }

        return {
          lang: nextLang,
        }
      })
    },
  }
})
