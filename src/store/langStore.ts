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

export const useLangStore = create<LangState>((set) => {
  const storedLang =
    typeof window !== 'undefined' ? window.localStorage.getItem('lang') : null
  const urlLang =
    typeof window !== 'undefined'
      ? getLangFromUrl(window.location.pathname)
      : null

  const initialLang = ((): LangKey => {
    if (urlLang && urlLang in ui) return urlLang as LangKey
    if (storedLang && storedLang in ui) return storedLang as LangKey
    return defaultLang
  })()

  if (typeof window !== 'undefined') {
    const currentPath = window.location.pathname
    const normalizedPath = getLocalizedPath(
      getPathWithoutLang(currentPath),
      initialLang,
    )

    // If the URL has no language prefix, add it without full reload so the
    // initial page reflects the chosen language. If the URL already contains
    // a language (from navigation), keep it as-is.
    if (currentPath !== normalizedPath) {
      window.history.replaceState({}, '', normalizedPath)
    }
  }

  return {
    lang: initialLang,
    setLang: (lang) => {
      if (!(lang in ui)) return

      if (typeof window !== 'undefined') {
        const fromLang = getLangFromUrl(window.location.pathname) || initialLang
        const currentWithout = getPathWithoutLang(window.location.pathname)

        // Map the current page to the corresponding href in the target language
        const mapPathBetweenLangs = (
          pathWithoutLang: string,
          fromL: keyof typeof navLinks,
          toL: keyof typeof navLinks,
        ) => {
          const normalize = (p: string) =>
            p.replace(/^\/+/g, '').replace(/\/+$/g, '')
          const needle = normalize(pathWithoutLang)
          const fromList = navLinks[fromL]
          const toList = navLinks[toL]

          // find matching index by href (normalized)
          const idx = fromList.findIndex((it) => normalize(it.href) === needle)
          if (idx >= 0 && toList[idx]) return toList[idx].href

          // fallback: try to use same path segment
          return pathWithoutLang
        }

        const targetSegment = mapPathBetweenLangs(
          currentWithout,
          fromLang as any,
          lang as any,
        )
        const nextPath = getLocalizedPath(targetSegment, lang)

        window.localStorage.setItem('lang', lang)

        if (window.location.pathname !== nextPath) {
          window.location.assign(nextPath)
          return
        }
      }

      set({ lang })
    },
    toggleLang: () => {
      set((state) => {
        const nextLang: LangKey = state.lang === 'en' ? 'id' : 'en'

        if (typeof window !== 'undefined') {
          const fromLang =
            getLangFromUrl(window.location.pathname) || state.lang
          const currentWithout = getPathWithoutLang(window.location.pathname)

          const normalize = (p: string) =>
            p.replace(/^\/+/g, '').replace(/\/+$/g, '')
          const needle = normalize(currentWithout)
          const fromList = navLinks[fromLang as keyof typeof navLinks]
          const toList = navLinks[nextLang as keyof typeof navLinks]
          const idx = fromList.findIndex((it) => normalize(it.href) === needle)

          const targetSegment =
            idx >= 0 && toList[idx] ? toList[idx].href : currentWithout
          const nextPath = getLocalizedPath(targetSegment, nextLang)

          window.localStorage.setItem('lang', nextLang)

          if (window.location.pathname !== nextPath) {
            window.location.assign(nextPath)
            return { lang: nextLang }
          }
        }

        return { lang: nextLang }
      })
    },
  }
})
