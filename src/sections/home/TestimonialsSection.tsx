import { useMemo, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { useLangStore } from '../../store/langStore'
import { clients } from '../../i18n/clients'
import TestimonialCard from '../../components/TestimonialCard'

const sectionText = {
  id: {
    label: 'Testimoni Klien',
    title: 'Apa kata klien kami',
  },
  en: {
    label: 'Client testimonials',
    title: 'What our clients say',
  },
} as const

export default function TestimonialsSection() {
  const lang = useLangStore((state) => state.lang)

  const clientTestimonials = useMemo(
    () => (lang === 'en' ? clients.en : clients.id),
    [lang],
  )

  const currentSection = sectionText[lang]

  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 5000,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    [],
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      containScroll: 'trimSnaps',
    },
    [autoplay],
  )

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    emblaApi?.reInit()
  }, [lang, emblaApi])

  return (
    <section className="py-14 bg-white dark:bg-slate-950">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500 dark:text-sky-400">
            {currentSection.label}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            {currentSection.title}
          </h2>
        </div>

        <div className="relative">
          {/* Desktop Navigation */}
          <button
            type="button"
            onClick={scrollPrev}
            aria-label={
              lang === 'en' ? 'Previous testimonials' : 'Testimoni sebelumnya'
            }
            className="
              absolute
              left-0
              top-1/2
              z-20
              hidden
              h-11
              w-11
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-slate-600
              shadow-lg
              transition-all
              duration-300
              hover:border-sky-500
              hover:bg-sky-500
              hover:text-white
              dark:border-slate-700
              dark:bg-slate-900
              dark:text-slate-300
              dark:shadow-black/20
              dark:hover:border-sky-500
              dark:hover:bg-sky-500
              dark:hover:text-white
              lg:flex
            "
          >
            <IconChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            aria-label={
              lang === 'en' ? 'Next testimonials' : 'Testimoni berikutnya'
            }
            className="
              absolute
              right-0
              top-1/2
              z-20
              hidden
              h-11
              w-11
              translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-slate-600
              shadow-lg
              transition-all
              duration-300
              hover:border-sky-500
              hover:bg-sky-500
              hover:text-white
              dark:border-slate-700
              dark:bg-slate-900
              dark:text-slate-300
              dark:shadow-black/20
              dark:hover:border-sky-500
              dark:hover:bg-sky-500
              dark:hover:text-white
              lg:flex
            "
          >
            <IconChevronRight size={22} />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden py-4" ref={emblaRef}>
            <div className="flex">
              {clientTestimonials.map((client, index) => (
                <div
                  key={`${client.nama}-${index}`}
                  className="
                    min-w-0
                    flex-[0_0_100%]
                    px-3
                    md:flex-[0_0_50%]
                    xl:flex-[0_0_25%]
                  "
                >
                  <TestimonialCard client={client} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Navigation */}
        <div className="mt-8 flex items-center justify-center gap-4 lg:hidden">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label={
              lang === 'en' ? 'Previous testimonials' : 'Testimoni sebelumnya'
            }
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-slate-600
              shadow-md
              transition-all
              duration-300
              hover:border-sky-500
              hover:bg-sky-500
              hover:text-white
              dark:border-slate-700
              dark:bg-slate-900
              dark:text-slate-300
              dark:shadow-black/20
              dark:hover:border-sky-500
              dark:hover:bg-sky-500
              dark:hover:text-white
            "
          >
            <IconChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            aria-label={
              lang === 'en' ? 'Next testimonials' : 'Testimoni berikutnya'
            }
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-slate-200
              bg-white
              text-slate-600
              shadow-md
              transition-all
              duration-300
              hover:border-sky-500
              hover:bg-sky-500
              hover:text-white
              dark:border-slate-700
              dark:bg-slate-900
              dark:text-slate-300
              dark:shadow-black/20
              dark:hover:border-sky-500
              dark:hover:bg-sky-500
              dark:hover:text-white
            "
          >
            <IconChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  )
}
