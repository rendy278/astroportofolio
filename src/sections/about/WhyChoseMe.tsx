import { useLangStore } from '@/store/langStore'
import { whyChoseMe } from '@/i18n/whyChoseMe'

export const WhyChoseMe = () => {
  const lang = useLangStore((state) => state.lang)

  const content = {
    id: {
      title: 'Bukan cuma launching lalu pergi',
      description:
        'Saya dampingi langsung dari pembuatan hingga pemeliharaan agar konteks proyek tak pernah hilang.',
    },
    en: {
      title: 'Not just launching and leaving',
      description:
        'I work with you from development to maintenance so your project context never gets lost.',
    },
  }

  const { title, description } = content[lang]

  return (
    <section className="mx-auto w-full lg:w-4xl py-6 md:py-10  px-0 md:px-6">
      {/* Heading */}
      <div className="mb-4  ">
        <h1 className="text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl">
          {title}
        </h1>

        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
          {description}
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {whyChoseMe[lang].map((item, index) => {
          const Icon = item.icon

          return (
            <article key={index} className="rounded-2xl border p-5  sm:p-6">
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg border ">
                <Icon size={17} stroke={1.5} className="text-foreground" />
              </div>

              <h2 className="text-base font-medium sm:text-lg">{item.title}</h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                {item.description}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
