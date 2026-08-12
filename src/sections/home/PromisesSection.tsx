import {
  IconHeartHandshake,
  IconShieldCheck,
  IconSparkles,
  IconSettings,
} from '@tabler/icons-react'

import { promises } from '../../i18n/promise'
import { useLangStore } from '../../store/langStore'

export default function PromisesSection() {
  const lang = useLangStore((s) => s.lang)
  const current = lang === 'en' ? promises.en : promises.id

  const icons = [
    IconHeartHandshake,
    IconSparkles,
    IconSettings,
    IconShieldCheck,
  ]

  return (
    <section className="relative overflow-hidden py-12 lg:py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-sm font-semibold text-sky-600 dark:border-sky-400/20 dark:bg-sky-500/10 dark:text-sky-400">
            {current.label}
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            {current.title}
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-400">
            {current.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {current.items.map((item, idx) => {
            const Icon = icons[idx] ?? IconSparkles

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-500/50 dark:hover:shadow-sky-950/20"
              >
                {/* Accent Line */}
                <div className="absolute left-0 top-0 h-1 w-full scale-x-0 bg-gradient-to-r from-sky-500 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />

                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-sky-500/0 transition-all duration-300 group-hover:ring-sky-500/10 dark:group-hover:ring-sky-400/10" />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition duration-300 group-hover:bg-sky-500 group-hover:text-white dark:bg-sky-500/10 dark:text-sky-400 dark:group-hover:bg-sky-500 dark:group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
