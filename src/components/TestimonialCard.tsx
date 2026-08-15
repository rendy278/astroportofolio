import { IconStar, IconUser } from '@tabler/icons-react'
import { useThemeStore } from '@/store/themeStore'

import Vocasia from '../assets/clients/vocasia.png'
import VocasiaDark from '../assets/clients/vocasiadark.png'

type ClientTestimonial = {
  nama: string
  deskripsi: string
  rating: number
  image?: string | { src: string }
}

function getImageSrc(image?: string | { src: string }) {
  if (!image) return undefined

  return typeof image === 'string' ? image : image.src
}

export default function TestimonialCard({
  client,
}: {
  client: ClientTestimonial
}) {
  const theme = useThemeStore((state) => state.theme)

  const imageSrc =
    client.nama === 'Vocasia'
      ? theme === 'dark'
        ? getImageSrc(VocasiaDark)
        : getImageSrc(Vocasia)
      : getImageSrc(client.image)

  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-sky-200
        hover:shadow-xl

        dark:border-slate-700
        dark:bg-slate-900
        dark:shadow-black/10
        dark:hover:border-sky-500/50
        dark:hover:shadow-black/30
      "
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border-2
            border-slate-100
            bg-slate-200
            shadow-sm

            dark:border-slate-700
            dark:bg-slate-800
          "
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={client.nama}
              className="h-full w-full rounded-full object-contain"
            />
          ) : (
            <IconUser
              size={30}
              className="text-slate-400 dark:text-slate-500"
            />
          )}
        </div>

        <div className="flex-1">
          <h3
            className="
              text-lg
              font-semibold
              text-slate-900
              dark:text-white
            "
          >
            {client.nama}
          </h3>

          <div
            className="mt-1 flex items-center gap-1"
            aria-label={`${client.rating} dari 5 bintang`}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <IconStar
                key={index}
                size={18}
                className={
                  index < client.rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-slate-300 dark:text-slate-600'
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-5 h-px bg-slate-100 dark:bg-slate-700" />

      {/* Content */}
      <p
        className="
          flex-1
          overflow-y-auto
          line-clamp-6
          text-[15px]
          leading-7
          text-slate-600
          dark:text-slate-300
        "
      >
        "{client.deskripsi}"
      </p>
    </article>
  )
}
