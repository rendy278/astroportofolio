import { FlipWords } from '@/components/ui/flip-words'
import { socials } from '@/constants/socials'
import { Button } from '@/components/ui/stateful-button'
import { toast } from 'react-toastify'
import { IconDownload } from '@tabler/icons-react'
import { useLangStore } from '@/store/langStore'
import Photo from '@/components/Photo'

const CV = '/CV-RENDY.pdf'

const myIntroduction = {
  id: {
    greeting: 'Halo',
    greetingHighlight: 'Semuanya',
    im: 'Saya',
    name: 'Rendy',
    roles: ['Freelance', 'Web Developer'],
    description:
      'Saya adalah Full Stack Web Developer yang senang membangun aplikasi web yang indah dan fungsional, memberikan pengalaman pengguna yang mulus dari front-end hingga back-end.',
    downloadCv: 'Unduh CV',
    downloadSuccess: 'CV berhasil diunduh!',
  },
  en: {
    greeting: 'Hi',
    greetingHighlight: 'There',
    im: "I'm",
    name: 'Rendy',
    roles: ['Freelance', 'Web Developer'],
    description:
      'I am a Full Stack web developer who enjoys building beautiful and functional web applications that deliver a seamless user experience from front to back.',
    downloadCv: 'Download CV',
    downloadSuccess: 'Download CV Successfully!',
  },
}

export const HeroSection = () => {
  const lang = useLangStore((state) => state.lang)
  const t = myIntroduction[lang] || myIntroduction.en

  const handleDownloadCv = () => {
    toast.success(t.downloadSuccess, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })

    setTimeout(() => {
      const link = document.createElement('a')
      link.href = CV
      link.setAttribute('download', 'CV-RENDY.pdf')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }, 1000)
  }

  return (
    <section className="w-full overflow-hidden flex items-center justify-center relative">
      <div className="flex flex-col h-fit gap-6 w-full md:w-7xl p-4 py-6 lg:flex-row items-center justify-center lg:justify-between ">
        {/* Text Content */}
        <div className="w-full  flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-sky-500 mb-2 sm:mb-3">
            {t.greeting}{' '}
            <span className="text-info">{t.greetingHighlight}</span>
          </h1>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold flex flex-wrap text-muted-foreground items-center justify-center lg:justify-start gap-2">
            {t.im} <span className="text-yellow-400">{t.name}</span>
          </h2>

          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 items-center justify-center lg:justify-start text-2xl sm:text-3xl md:text-4xl">
            <h1 className="text-sky-500 text-3xl sm:text-4xl lg:text-5xl font-semibold">
              <FlipWords words={t.roles} />
            </h1>
          </div>

          <div className="my-5 sm:my-6 max-w-xl lg:max-w-none">
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed">
              {t.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5 w-full sm:w-auto">
            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4 items-center">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                        group relative
                        p-2.5 sm:p-3 rounded-2xl
                        bg-slate-200 dark:bg-white/10 backdrop-blur-md
                        border border-gray-800 dark:border-white/20
                        text-sky-500
                        transition-all duration-300
                        hover:scale-110
                        hover:bg-yellow-plate
                        hover:text-white
                        hover:shadow-lg hover:shadow-yellow-plate/30
                      "
                >
                  <span
                    className="
                          absolute inset-0 rounded-2xl
                          bg-gradient-to-tr from-yellow-plate/40 to-transparent
                          opacity-0 group-hover:opacity-100
                          transition-opacity duration-300
                        "
                  />
                  <social.icon
                    stroke={2}
                    className="relative z-10 size-5 sm:size-6 transition-transform duration-300 group-hover:rotate-6"
                  />
                </a>
              ))}
            </div>

            {/* Download Button */}
            <Button
              onClick={handleDownloadCv}
              className="bg-sky-500 flex items-center gap-2 border-yellow-plate w-full sm:w-auto justify-center"
            >
              {t.downloadCv} <IconDownload stroke={2} className="size-5" />
            </Button>
          </div>
        </div>

        {/* Right Side (kosong / untuk gambar nanti) */}
        <div className="w-full flex justify-center md:justify-end items-center order-1 lg:order-2 ">
          <Photo />
        </div>
      </div>
    </section>
  )
}
