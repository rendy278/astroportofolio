import { useLangStore } from '@/store/langStore'
import { IconArrowRight, IconSparkles } from '@tabler/icons-react'

const introAbout = {
  id: {
    badge: 'Tentang Saya',
    tentang:
      'Dirancang demi keberlanjutan jangka panjang, bukan sekadar peluncuran sesaat.',
    deskripsi:
      'Berbeda dengan kebanyakan pengembang yang lepas tangan setelah proyek usai, saya berkomitmen memberikan pendampingan dan dukungan berkelanjutan.',
    kontak: 'Diskusikan Projek Anda',
    lihat: 'Lihat Cara Kerja Saya',
    pengalaman: 'Fokus',
    pengalamanValue: 'Web Development',
    pendekatan: 'Pendekatan',
    pendekatanValue: 'Long-Term Support',
  },
  en: {
    badge: 'About Me',
    tentang:
      'Designed for long-term sustainability, not just a one-time launch.',
    deskripsi:
      'Unlike most developers who step away after project completion, I am committed to providing ongoing guidance and support.',
    kontak: 'Discuss Your Project',
    lihat: 'See How I Work',
    pengalaman: 'Focus',
    pengalamanValue: 'Web Development',
    pendekatan: 'Approach',
    pendekatanValue: 'Long-Term Support',
  },
}

export const HeroSection = () => {
  const lang = useLangStore((state) => state.lang)
  const content = introAbout[lang]

  return (
    <section className="relative overflow-hidden py-8">
      <div className="mx-auto grid items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm  backdrop-blur">
            <IconSparkles className="h-4 w-4" />
            <span>{content.badge}</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {content.tentang}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {content.deskripsi}
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
            >
              {content.kontak}

              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#process"
              className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 font-medium transition hover:bg-muted"
            >
              {content.lihat}
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          {/* Decorative background */}
          <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-3xl" />

          <div className="relative rounded-3xl border border-slate-300 dark:border-slate-200 p-6 shadow-sm backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Card 1 */}
              <div className="rounded-2xl border border-slate-300 dark:border-slate-200 bg-muted/30 p-6">
                <p className="text-sm text-muted-foreground">
                  {content.pengalaman}
                </p>

                <p className="mt-2 text-xl font-semibold">
                  {content.pengalamanValue}
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl border border-slate-300 dark:border-slate-200 bg-muted/30 p-6">
                <p className="text-sm text-muted-foreground">
                  {content.pendekatan}
                </p>

                <p className="mt-2 text-xl font-semibold">
                  {content.pendekatanValue}
                </p>
              </div>

              {/* Main Card */}
              <div className="rounded-2xl border border-border bg-sky-500 p-6 text-primary-foreground sm:col-span-2">
                <p className="text-sm opacity-80">
                  {lang === 'id' ? 'Prinsip utama' : 'Core principle'}
                </p>

                <p className="mt-3 text-2xl font-semibold leading-tight">
                  {lang === 'id'
                    ? 'Website bukan hanya dibuat untuk diluncurkan, tetapi untuk terus berkembang.'
                    : 'A website is not only built to launch, but to continuously evolve.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
