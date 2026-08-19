import { useLangStore } from '@/store/langStore'
import { howImWork } from '@/i18n/howImWork'

const content = {
  id: {
    title: 'Cara Kerja Saya',
    description:
      'Saya berusaha membuat proyek website terasa jelas sejak awal. Banyak proyek justru bermasalah bukan karena teknologinya terlalu sulit, tetapi karena arahnya kabur, komunikasinya tidak rapi, dan keputusan dibuat tanpa konteks yang cukup.',
  },
  en: {
    title: 'How I Work',
    description:
      'I try to make website projects feel clear from the start. A lot of projects become messy not because the technology is too difficult, but because the direction is vague, communication is loose, and decisions are made without enough context.',
  },
}

export const MyMethodWork = () => {
  const lang = useLangStore((state) => state.lang)
  const { title, description } = content[lang]

  return (
    <section className="mx-auto w-full lg:w-4xl py-6 md:py-10  px-0 md:px-6">
      {/* Header */}
      <div className="mb-10 ">
        <h1 className="text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl">
          {title}
        </h1>

        <p className="mt-3 text-sm leading-6 text-muted-foreground sm:mt-4 sm:text-base sm:leading-7">
          {description}
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-3 sm:gap-4">
        {howImWork[lang].map((item) => (
          <article
            key={item.number}
            className="rounded-2xl border p-4 sm:p-5 lg:p-6"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              {/* Number */}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-xs text-muted-foreground sm:h-9 sm:w-9 sm:text-sm">
                {item.number}
              </span>

              {/* Content */}
              <div className="min-w-0">
                <h2 className="text-sm font-medium sm:text-base lg:text-lg">
                  {item.title}
                </h2>

                <p className="mt-1.5 text-sm leading-6 text-muted-foreground sm:mt-2 sm:text-base sm:leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
