import { useLangStore } from '@/store/langStore'

const myInfoDeskripsi = {
  id: {
    paragraph1:
      'Saya membantu bisnis membangun, memperbaiki, dan mengembangkan website yang cepat, meyakinkan, serta rapi untuk dikelola dalam jangka panjang. Bagi saya, peran seorang praktisi web tidak berhenti begitu situs dinyatakan resmi meluncur. Pendampingan berkelanjutan tetap diperlukan untuk memastikan seluruh sistem di dalamnya berjalan optimal dan siap mendukung pertumbuhan usaha.',

    paragraph2:
      'Berdasarkan pengalaman menangani berbagai proyek, masalah utama yang sering ditemui adalah tampilan luar yang bagus namun performanya lambat, sulit diperbarui oleh tim internal, terlalu bergantung pada plugin, atau gagal mengarahkan pengunjung menjadi pelanggan. Oleh karena itu, saya memandang website bukan sekadar aset visual, melainkan alat kerja teknis yang harus memberikan dampak nyata bagi kelancaran bisnis.',

    paragraph3:
      'Pendekatan kerja saya selalu mengutamakan penyederhanaan dan keputusan teknis yang masuk akal. Saya selalu menyampaikan kondisi website apa adanya—mulai dari kebutuhan optimasi performa tinggi hingga saran apabila sebuah situs sebenarnya belum memerlukan perombakan total. Kejujuran teknis ini menjaga agar proses pengembangan tetap efisien dan relevan dengan skala kebutuhan klien.',

    paragraph4:
      'Sistem kolaborasi yang saya tawarkan bersifat langsung tanpa perantara account manager atau tim pihak ketiga. Klien berdiskusi dan mengeksekusi strategi bersama praktisi yang merancang serta membangun proyeknya secara langsung. Pola kerja ini menghadirkan komunikasi yang lebih jernih, pengerjaan yang lebih cepat, serta hasil akhir yang jauh lebih konsisten.',
  },

  en: {
    paragraph1:
      'I help businesses build, improve, and grow websites that are fast, convincing, and well-structured for long-term management. For me, the role of a web practitioner does not end once a website is officially launched. Ongoing support is still essential to ensure that every system within it continues to perform optimally and remains ready to support business growth.',

    paragraph2:
      'Based on my experience handling various projects, one of the most common problems is a website that looks good on the outside but performs poorly, is difficult for internal teams to update, relies too heavily on plugins, or fails to turn visitors into customers. That is why I see a website not merely as a visual asset, but as a technical business tool that should deliver a real impact on day-to-day operations.',

    paragraph3:
      'My approach always prioritizes simplicity and practical technical decisions. I communicate the actual condition of a website honestly—from identifying the need for significant performance optimization to recommending against a complete rebuild when it is not truly necessary. This technical honesty helps keep the development process efficient and aligned with the actual scale of the client’s needs.',

    paragraph4:
      'The collaboration system I offer is direct, without an account manager or third-party team acting as an intermediary. Clients communicate and execute strategies directly with the practitioner who designs and builds their project. This approach creates clearer communication, faster execution, and a much more consistent final result.',
  },
}

export const MyInfo = () => {
  const lang = useLangStore((state) => state.lang)
  const content = myInfoDeskripsi[lang]

  const paragraphs = [
    content.paragraph1,
    content.paragraph2,
    content.paragraph3,
    content.paragraph4,
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-10">
          <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {lang === 'id' ? 'Tentang Saya' : 'About Me'}
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {lang === 'id'
              ? 'Membangun website dengan tujuan yang jelas.'
              : 'Building websites with a clear purpose.'}
          </h2>
        </div>

        {/* Paragraphs */}
        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-8 text-muted-foreground md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
