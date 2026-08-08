import { ui, defaultLang } from './ui'

export function getLangFromUrl(url: URL | string) {
  const pathname = typeof url === 'string' ? url : url.pathname
  const [lang] = pathname.split('/').filter(Boolean)
  if (lang && lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export function getPathWithoutLang(pathname: string) {
  const segments = pathname.split('/').filter(Boolean)

  if (segments[0] && segments[0] in ui) {
    const pathWithoutLang = `/${segments.slice(1).join('/')}`
    return pathWithoutLang === '/' ? '/' : pathWithoutLang
  }

  return pathname === '/' ? '/' : pathname
}

export function getLocalizedPath(
  path: string,
  lang: keyof typeof ui = defaultLang,
) {
  const normalizedPath = path === '/' ? '' : path.replace(/^\/+|\/+$/g, '')
  const prefix = `/${lang}`

  return normalizedPath ? `${prefix}/${normalizedPath}` : prefix
}

export function useTranslations(lang: keyof typeof ui) {
  const localizedUI: Record<string, string> = ui[lang]
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return key in localizedUI ? localizedUI[key] : ui[defaultLang][key]
  }
}
