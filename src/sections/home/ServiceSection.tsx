import { IconArrowRight, IconCheck } from '@tabler/icons-react'
import { useLangStore } from '@/store/langStore'
import { service } from '@/i18n/service'

const intro = {
  id: {
    service: 'Layanan Kami',
    title: 'Solusi untuk Digitalisasi Bisnis Anda',
    description:
      'Layanan digitalisasi lengkap untuk membantu bisnis berkembang, mulai dari pembuatan website, pengembangan aplikasi, hingga pemeliharaan dan dukungan berkelanjutan.',
  },

  en: {
    service: 'Our Service',
    title: 'Digital Solutions for Your Business',
    description:
      'Comprehensive digital services to help your business grow, from website development and application development to ongoing maintenance and support.',
  },
}

export const ServiceSection = () => {
  const lang = useLangStore((state) => state.lang)

  const current = lang === 'en' ? intro.en : intro.id
  const services = lang === 'en' ? service.en : service.id

  const getServicePath = (title: string) =>
    `/jasa/${title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')}`

  // Short mono tag derived from the service title, e.g. "Web Development" -> "WEB"
  const getServiceCode = (title: string) => {
    const clean = title.replace(/[^a-zA-Z ]/g, '').trim()
    const firstWord = clean.split(' ')[0] || clean
    return firstWord.slice(0, 4).toUpperCase()
  }

  return (
    <section
      className="
        w-full
        bg-white
        py-20
        lg:py-28

        dark:bg-slate-950
      "
    >
      <div className="container mx-auto px-5">
        {/* Heading */}
        <div className="max-w-2xl">
          <div
            className="
              flex
              items-center
              gap-2
              font-mono
              text-xs
              tracking-widest
              text-sky-500
              underline
              dark:text-sky-600
            "
          >
            <span className="h-1.5 w-1.5 rounded-sm bg-yellow-400 dark:bg-yellow-500  " />
            {current.service.toUpperCase()}
          </div>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              tracking-tight
              text-yellow-400
              md:text-5xl
              dark:text-yellow-500
            "
          >
            {current.title}
          </h2>

          <div className="mt-3 h-px w-full bg-sky-500 " />

          <p
            className="
              mt-5
              max-w-xl
              text-base
              leading-7
              text-slate-600

              dark:text-slate-400
            "
          >
            {current.description}
          </p>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-sky-200 dark:bg-white/10" />

        {/* Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.title}
                className="
                  group
                  relative
                  border-b
                  border-sky-200
                  p-8
                  sm:border-r
                  sm:odd:border-r
                  xl:[&:nth-child(3n)]:border-r-0
                  sm:[&:nth-child(2n)]:xl:border-r

                  dark:border-white/10
                "
              >
                {/* Corner brackets — appear on hover */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    top-0
                    h-4
                    w-4
                    border-l-2
                    border-t-2
                    border-yellow-500
                    opacity-0
                    transition-opacity
                    duration-200
                    group-hover:opacity-100

                    dark:border-sky-600
                  "
                />
                <span
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    right-0
                    h-4
                    w-4
                    border-b-2
                    border-r-2
                    border-yellow-500
                    opacity-0
                    transition-opacity
                    duration-200
                    group-hover:opacity-100

                    dark:border-sky-500
                  "
                />
                .{/* Icon */}
                <div
                  className="
                    mt-6
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    text-[#0E1116]
                    transition-colors
                    duration-200
                    group-hover:border-yellow-400
                    group-hover:text-sky-500
                    dark:border-white/10
                    dark:text-white
                    dark:group-hover:border-yellow-500
                    dark:group-hover:text-sky-600
                  "
                >
                  <Icon size={20} stroke={1.75} />
                </div>
                {/* Title */}
                <h3
                  className="
                    mt-5
                    text-xl
                    font-semibold
                    tracking-tight
                  "
                >
                  {service.title}
                </h3>
                {/* Description */}
                <p
                  className="
                    mt-2.5
                    text-sm
                    leading-6
                    text-slate-600

                    dark:text-slate-400
                  "
                >
                  {service.description}
                </p>
                {/* Feature list */}
                <ul className="mt-5 space-y-2.5">
                  {service.list.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <IconCheck
                        size={14}
                        stroke={2.5}
                        className="
                          mt-1
                          shrink-0
                          text-sky-500

                          dark:text-sky-600
                        "
                      />
                      <span
                        className="
                          text-sm
                          text-slate-700

                          dark:text-slate-300
                        "
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                {/* Button */}
                <a
                  href={getServicePath(service.title)}
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-1.5
                    text-sm
                    font-semibold
                    text-[#0E1116]  
                    transition-all
                    hover:gap-2.5
                    hover:text-sky-500

                    dark:text-white
                    dark:hover:text-yellow-500
                  "
                >
                  {lang === 'en' ? 'Learn more' : 'Pelajari lebih lanjut'}
                  <IconArrowRight size={16} />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
