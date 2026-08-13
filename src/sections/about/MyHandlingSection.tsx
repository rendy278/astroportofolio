import { handlingProject } from '@/i18n/handlingProject'
import { useLangStore } from '@/store/langStore'

export const MyHandlingSection = () => {
  const lang = useLangStore((state) => state.lang)
  const current = handlingProject[lang]

  return (
    <section className="mx-auto w-full lg:w-4xl py-6 md:py-10 px-0 md:px-6">
      <div className="mb-4 ">
        <h1 className="text-3xl font-bold uppercase tracking-wider">
          {lang === 'id' ? 'Saya menangani' : 'What I Handle'}
        </h1>

        <p className="mt-3 text-md tracking-tight text-muted-foreground">
          {lang === 'id'
            ? 'Bisa melihat peta besarnya secara jernih, tapi tetap nyaman kalau harus masuk ke seluk-beluk teknisnya.'
            : 'I can see the bigger picture clearly while remaining comfortable diving into the technical details when needed.'}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {current.map((item) => {
          const Icon = item.icon

          return (
            <article key={item.title} className="rounded-2xl border p-5">
              <div className="mb-4 flex size-8 items-center justify-center rounded-lg border">
                <Icon size={18} stroke={1.5} />
              </div>

              <h2 className="text-lg font-medium">{item.title}</h2>

              <p className="mt-2 leading-relaxed">{item.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
