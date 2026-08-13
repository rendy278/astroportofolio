import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconChevronRight, IconMenu2, IconX } from '@tabler/icons-react'
import { navLinks } from '../constants/navLinks'
import { getLocalizedPath, useTranslations } from '../i18n/utils'
import { useLangStore } from '../store/langStore'
import TranslateButton from './TranslateButton'
import { Logo } from './Logo'
import DarkModeToggle from './DarkModeToogle'

const detailTranslateButton = {
  id: {
    title: 'Bahasa',
    deskripsi: 'Ubah bahasa',
  },
  en: {
    title: 'Language',
    deskripsi: 'Switch language',
  },
}

type NavbarProps = { lang?: 'id' | 'en' }

export default function Navbar(props: NavbarProps) {
  const storeLang = useLangStore((state) => state.lang)
  const lang = props.lang ?? storeLang
  const t = useMemo(() => useTranslations(lang), [lang])
  const [isOpen, setIsOpen] = useState(false)
  const links = navLinks[lang]
  return (
    <header className="sticky top-0 z-50">
      <nav className="m-0 md:my-2 mx-auto flex max-w-7xl rounded-none lg:rounded-full bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shadow-sm backdrop-blur-xl backdrop-saturation-150 items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.key}
              href={getLocalizedPath(link.href, lang)}
              className="text-sm font-medium text-slate-700 dark:text-slate-100 transition hover:text-slate-950 dark:hover:text-white"
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <DarkModeToggle />

          <div className="hidden md:block">
            <TranslateButton />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 shadow-sm transition hover:bg-slate-50 dark:hover:bg-slate-700 lg:hidden"
          >
            {isOpen ? (
              <IconX size={20} className="text-slate-700 dark:text-slate-100" />
            ) : (
              <IconMenu2
                size={20}
                className="text-slate-700 dark:text-slate-100"
              />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-slate-200 dark:border-slate-700 bg-sky-50/95 dark:bg-slate-700 rounded-b-2xl lg:hidden"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: {
                    staggerChildren: 0.06,
                    delayChildren: 0.06,
                  },
                },
                closed: {
                  transition: {
                    staggerChildren: 0.04,
                    staggerDirection: -1,
                  },
                },
              }}
              className="space-y-2 px-4 pb-5 pt-4"
            >
              {links.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.key}
                    href={getLocalizedPath(link.href, lang)}
                    className="group flex w-full items-center gap-3 rounded-3xl border border-transparent bg-white dark:bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-100 shadow-sm shadow-slate-900/5 dark:shadow-black/20 transition hover:border-slate-200 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700"
                    variants={{
                      closed: { opacity: 0, y: 16 },
                      open: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Icon - fixed size */}
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                      <Icon size={18} />
                    </span>

                    {/* Text - ambil sisa ruang */}
                    <span className="flex-1 truncate">{t(link.key)}</span>

                    {/* Chevron - selalu di kanan */}
                    <IconChevronRight
                      size={18}
                      className="ml-auto shrink-0 text-slate-400 dark:text-slate-500"
                    />
                  </motion.a>
                )
              })}

              <motion.div
                variants={{
                  closed: { opacity: 0, y: 16 },
                  open: { opacity: 1, y: 0 },
                }}
                className="rounded-3xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-4 shadow-sm shadow-slate-900/5 dark:shadow-black/20"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                      {detailTranslateButton[lang].title}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {detailTranslateButton[lang].deskripsi}
                    </p>
                  </div>
                  <TranslateButton />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
