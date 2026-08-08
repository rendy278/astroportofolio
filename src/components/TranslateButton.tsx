import { useLangStore } from '../store/langStore'

export default function TranslateButton() {
  const lang = useLangStore((state) => state.lang)
  const toggleLang = useLangStore((state) => state.toggleLang)
  const isIndonesian = lang === 'id'

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label="Toggle language"
      className="inline-flex h-10 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-900 shadow-sm transition focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
    >
      <span
        className={`inline-flex h-10 items-center justify-center rounded-l-full px-3 ${
          isIndonesian
            ? 'bg-sky-500 text-white'
            : 'text-slate-700 dark:text-slate-200'
        }`}
      >
        ID
      </span>
      <span
        className={`inline-flex h-10 items-center justify-center rounded-r-full px-3 ${
          !isIndonesian
            ? 'bg-sky-500 text-white'
            : 'text-slate-700 dark:text-slate-200'
        }`}
      >
        EN
      </span>
    </button>
  )
}
