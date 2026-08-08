import { getLocalizedPath } from '@/i18n/utils'
import { useLangStore } from '@/store/langStore'
import LogoWeb from '../../public/logo.png'

const intro = {
  id: {
    description: 'Partner Solusi Digital',
  },
  en: {
    description: 'Digital Solutions Partner',
  },
}

export const Logo = () => {
  const lang = useLangStore((state) => state.lang)

  return (
    <a
      href={getLocalizedPath('/', lang)}
      className="group flex items-center gap-3"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-3xl border border-sky-500 bg-slate-50 dark:bg-slate-500 text-white shadow-xl shadow-slate-900/10 transition group-hover:-translate-y-0.5">
        <img src={LogoWeb.src} alt="Rendev Logo" className="h-8 w-8" />
      </div>

      <div className="flex flex-col items-start">
        <p className="m-0 text-sm font-bold text-sky-500">
          Rendev <span className="text-yellow-500">Studio</span>
        </p>
        <p className="m-0 text-xs text-slate-500 dark:text-slate-300">
          {intro[lang].description}
        </p>
      </div>
    </a>
  )
}
