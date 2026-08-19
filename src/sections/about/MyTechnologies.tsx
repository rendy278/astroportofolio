import { useLangStore } from '@/store/langStore'
import { technologies } from '@/i18n/technologies'

export const MyTechnologies = () => {
  const lang = useLangStore((state) => state.lang)
  const content = technologies[lang]

  return (
    <section className="mx-auto w-full lg:w-4xl py-6 md:py-10 px-0 md:px-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl">
          {content.title}
        </h1>

        <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
          {content.description}
        </p>
      </div>

      {/* Technology Cards */}
      <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-9 md:grid-cols-2 ">
        {content.items.map((item) => {
          const Icon = item.icon

          return (
            <article key={item.name} className="rounded-2xl border p-4  sm:p-5">
              <div className="flex items-center gap-2.5">
                <Icon size={20} className="text-sky-500" />

                <h2 className="text-base font-medium sm:text-lg">
                  {item.name}
                </h2>
              </div>

              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                {item.description}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
