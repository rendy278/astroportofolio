import { IconCheck, IconMinus } from '@tabler/icons-react'
import { useLangStore } from '@/store/langStore'
import { suitableCollab } from '@/i18n/suitableCollab'

export const SuitableCollab = () => {
  const lang = useLangStore((state) => state.lang)
  const content = suitableCollab[lang]

  return (
    <section className="mx-auto w-full lg:w-4xl py-6 md:py-10  px-0 md:px-6">
      {/* Heading */}
      <h1 className="text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl">
        {content.title}
      </h1>

      {/* Cards */}
      <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-9 lg:grid-cols-2">
        {/* Suitable */}
        <div className="rounded-2xl border bg-emerald-500/70 p-5 dark:bg-emerald-950/20 sm:p-6">
          <h2 className="text-base font-medium sm:text-lg">
            {content.suitableTitle}
          </h2>

          <ul className="mt-4 space-y-3">
            {content.suitable.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 text-sm leading-6 sm:text-base sm:leading-7"
              >
                <IconCheck size={18} stroke={1.5} className="mt-1 shrink-0" />

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Not suitable */}
        <div className="rounded-2xl border bg-red-500/70 p-5 sm:p-6">
          <h2 className="text-base font-medium sm:text-lg">
            {content.notSuitableTitle}
          </h2>

          <ul className="mt-4 space-y-3">
            {content.notSuitable.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 text-sm leading-6  sm:text-base sm:leading-7"
              >
                <IconMinus size={18} stroke={1.5} className="mt-1 shrink-0" />

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
