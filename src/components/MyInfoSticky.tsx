import { useLangStore } from '@/store/langStore'
import ProfileMe from '../../public/rendy2.jpeg'

const info = {
  id: {
    image: ProfileMe,
    name: 'Rendy',
    title: 'Siapa yang Mengerjakan?',
    stats: [
      {
        experience: '2+ Tahun',
        label: 'pengalaman di website dan SEO',
      },
      {
        number: 'Puluhan',
        label: 'website dan masalah teknis sudah ditangani',
      },
      {
        number: '50+',
        label: 'proyek website selesai',
      },
      {
        direct: 'Langsung',
        label: 'Komunikasi langsung dengan pelaksana proyek',
      },
      {
        proses: 'End To End',
        label: 'dari audit, build, deploy, sampai maintenance',
      },
    ],
  },

  en: {
    image: ProfileMe,
    name: 'Rendy',
    title: "Who's Behind the Work?",
    stats: [
      {
        experience: '2+ Years',
        label: 'of experience in websites and SEO',
      },
      {
        number: 'Dozens',
        label: 'of websites and technical issues handled',
      },
      {
        number: '50+',
        label: 'completed website projects',
      },
      {
        direct: 'Direct',
        label: 'Direct communication with the project executor',
      },
      {
        proses: 'End-to-End',
        label: 'from audit, build, deploy, to maintenance',
      },
    ],
  },
}

export const MyInfoSticky = () => {
  const lang = useLangStore((state) => state.lang)
  const content = info[lang]

  return (
    <aside className="block lg:sticky lg:top-24 lg:self-start">
      <div className="overflow-hidden block md:flex lg:block rounded-3xl border border-border shadow-sm">
        {/* Profile */}
        <div className="relative">
          <img
            src={content.image.src}
            alt={content.name}
            className="lg:h-60 h-full w-full md:w-60 lg:w-full object-cover object-center"
          />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20">
            <h2 className="text-2xl font-bold text-white">{content.name}</h2>

            <p className="mt-1 text-sm text-white/80">{content.title}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="divide-y divide-border">
          {content.stats.map((stat, index) => {
            const value =
              stat.experience ?? stat.number ?? stat.direct ?? stat.proses

            return (
              <div
                key={index}
                className="group px-6 py-5 transition-colors hover:bg-muted/40"
              >
                <p className="text-xl font-bold tracking-tight">{value}</p>

                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
