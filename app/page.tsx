import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <header className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkNolbtwX7Ne21SSYjXYNh5c6wE6ElEe-Q6P8z0JqrUjOMPaiKQe72bPXtCV9-hajOOGkf10vplAQciuVIqPsrPM3wMMZY960e99VSHiVys76Lfu4-hJ40dwnmU4LagmB6CJhHQ5fKH-jC3CYsER6-crZ_rL7FNKZYWLzq6iW_Pzz2SxyZw7Amvfzvlod-5wJ7pD74SQCt-FQqCCNX8iXqGUu5t1Dni248SvWVTjFsvUVQ0nh40gS3B-AH5Dr1TpOIAlk-LCTbGyya"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full pt-10">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="size-2 rounded-full bg-accent-gold"></span>
              <span className="text-white text-xs font-medium tracking-wider uppercase">Penerimaan Siswa Baru Telah Dibuka</span>
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight mb-6 drop-shadow-lg">
              Mencetak Generasi <span className="text-accent-gold">Kompeten</span> dan <span className="text-accent-gold">Berkarakter</span> di Singkawang
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
              Sekolah Menengah Kejuruan berbasis nilai luhur Buddhis dan profesionalisme modern. Siap kerja, cerdas, dan berbudi pekerti.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/ppdb" className="bg-primary hover:bg-primary-dark text-white text-base font-bold h-12 px-8 rounded-lg shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center gap-2 group">
                <span>Daftar Sekarang</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-base font-bold h-12 px-8 rounded-lg transition-all duration-300 flex items-center gap-2">
                <span className="material-symbols-outlined">play_circle</span>
                <span>Video Profil</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Principal Welcome Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-1 w-12 bg-primary rounded-full"></div>
                <span className="text-primary font-bold tracking-wider text-sm uppercase">Sambutan Kepala Sekolah</span>
              </div>
              <h2 className="text-[#181111] dark:text-white text-3xl md:text-4xl font-bold leading-tight">
                Pendidikan Berkualitas Berlandaskan <span className="text-primary">Moral & Etika</span>
              </h2>
              <blockquote className="border-l-4 border-accent-gold pl-6 italic text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {`"Selamat datang di SMK Mudita Singkawang. Kami berkomitmen untuk mendidik siswa dengan nilai-nilai luhur dan keterampilan profesional yang siap bersaing di dunia kerja modern."`}
              </blockquote>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Kami percaya bahwa kecerdasan intelektual harus sejalan dengan kematangan emosional dan spiritual. Melalui kurikulum yang terintegrasi, kami mempersiapkan lulusan yang tidak hanya ahli di bidangnya, tetapi juga memiliki integritas tinggi.
              </p>
              <div className="pt-4 flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-[#181111] dark:text-white font-bold text-lg">Bpk. Sutanto, S.Pd., M.M.</span>
                  <span className="text-accent-gold text-sm font-medium">Kepala Sekolah SMK Mudita</span>
                </div>
                <div className="relative h-12 w-48 hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw8XnnP_fIThEHJW5ur7Pqx6AJiT-q_fSu2F6oZUmzrZAsvGYqzbmjB7g34B82krM3Ppgmd1JyuoK0zdyQsEbAwof8yYbEvQo_ka2nUyQTOSQyRZ3VmBGOZi7qJP46ZTIaeYKwLc1OVMvxVd4We9lb2QrU5No0t3xsmcDmuA9EN3lwmlMqOKZPPf5st9vISHVui7siNpkHWgp4n2h4jkOOhhPLSyKllDRlncI2c56ZDWvYbi6H2FXsur9NKgPBIxO3jYq3eUrCEUS4"
                    alt="Signature"
                    fill
                    className="object-contain object-left opacity-50 grayscale"
                  />
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-gold/20 rounded-full blur-2xl z-0"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl group aspect-[4/5]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6ImOS67I0KE5TyKxD5Jkea9OEAS560aA8bzsM9eGHpCplh7rLjE7S9Auw3Jm2w63qG6pN7tbqnED8LCoCESB4X8KPJhgnSSPiqHhDT9VF2vQwUO5Q9f7zHMOoiexn8s8VRC3oSuzW6kkEh5deuYpHYSXhSpFax03TE1f9QDenVfmY5wK4ToTzY9LgKQT-Q4AGwh3sALvks68yyrWBtx3u7PU5yxC3V2ZftZ5OnEBDyx6WzVkwTzwK0Md-CJSCUed2QhRHdz-55IWx"
                  alt="Bpk. Sutanto, S.Pd., M.M."
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent-gold">verified</span>
                    <span className="text-sm font-medium">Terakreditasi A</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Majors / Program Keahlian Section */}
      <section className="py-20 bg-background-light dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-[#181111] dark:text-white text-3xl md:text-4xl font-bold leading-tight mb-4">Program Keahlian</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">Pilih jurusan yang sesuai dengan minat dan bakatmu. Kami menyediakan fasilitas praktik standar industri.</p>
            </div>
            <Link href="/jurusan" className="text-primary font-bold hover:text-primary-dark flex items-center gap-1 transition-colors">
              Lihat Semua Jurusan
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Akuntansi */}
            <div className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOFmGe9aAH84U6hQD6RdzpDBiQJlNdM2gaXEehIJ9us2a-YeVPpaOa5xurjG_ZVIgbUnI-kORqSErckEM9gdKkbO5v6k_g8hZliEAsg760SZ3l12nTNW2D5XIM9_z5j9omCQWmz3BUH5mbaRKHCmizd_7vEl3s8rnLbys6ZfbhoPMGVLrkz-hRsbluO4ThFUznb8WyyHVqtWCzTrWG0QYB3QIQG4YjthOcMLrtq0YELk_KMzp4P8y8ThhG7NnynlZtqwCrAzElOFKT"
                  alt="Akuntansi & Keuangan"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20 bg-white p-2 rounded-lg shadow-md">
                  <span className="material-symbols-outlined text-primary">calculate</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#181111] dark:text-white mb-2 group-hover:text-primary transition-colors">Akuntansi & Keuangan</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">Mempelajari pembukuan, perpajakan, dan sistem informasi keuangan digital.</p>
                <Link href="/jurusan" className="inline-flex items-center text-sm font-bold text-accent-gold hover:text-primary transition-colors">
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>
            {/* Card 2: TKJ */}
            <div className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7eY7SLGjbBmHW76e1cN3yXresT4iWWsONj2bTMWVb3BypehWyInr6FzfXBjRCvC-gqrwTXgeDgwH2akzGBvWSFt7QoQd8WYWV5iXjmQhbLDLZxFZbnCvbx5gWlvU5Tp4BQI0C-fUG94LSa6to6RR6Wq-wh1UJ2_uRouqJbGskP5zTMJzcpuCMb56pilKwhv9KJC-gkrmRHVNz5aJtF-vNvjtKkEIdIU1GCJSRR-_rMfnfwA85KrC3PwtRYpoQdr918pj_Uq6KxJ_E"
                  alt="Teknik Komputer & Jaringan"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20 bg-white p-2 rounded-lg shadow-md">
                  <span className="material-symbols-outlined text-primary">dns</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#181111] dark:text-white mb-2 group-hover:text-primary transition-colors">Teknik Komputer & Jaringan</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">Keahlian instalasi jaringan, server administration, dan troubleshooting perangkat keras.</p>
                <Link href="/jurusan" className="inline-flex items-center text-sm font-bold text-accent-gold hover:text-primary transition-colors">
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>
            {/* Card 3: Manajemen Perkantoran */}
            <div className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyNuamwMiME6T8elCossAwA2WHVq9cFZ2LOAYIXSW4EMTSGy_-wcAvbp4CRck0_UbeK24PeZrrJY9S0E4fcrUTfyuvAVlZC1306aK8IH0o52OKp9PMVdG5y_9zw-Ha8A3cXrvH_EuqSdwt5W_pIVrX1A6Z41HmC9pRSEjs5gLwnCvQCXUBabBKmAhzXSteOJQuQSnozrAH3qL4wSMYgSNA5zaHAPTT3IiuS1OOFTmhHdHWLqlXyz8rSg8YNnWMQIwdR2LeLxFrhBKz"
                  alt="Manajemen Perkantoran"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20 bg-white p-2 rounded-lg shadow-md">
                  <span className="material-symbols-outlined text-primary">domain</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#181111] dark:text-white mb-2 group-hover:text-primary transition-colors">Manajemen Perkantoran</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">Menyiapkan tenaga administrasi profesional dengan kemampuan komunikasi publik yang handal.</p>
                <Link href="/jurusan" className="inline-flex items-center text-sm font-bold text-accent-gold hover:text-primary transition-colors">
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Achievements Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-[#181111] dark:text-white text-3xl md:text-4xl font-bold leading-tight">Berita & Prestasi</h2>
            <div className="flex gap-2">
              <button className="size-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button className="size-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <article className="flex flex-col group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-4 relative aspect-video">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsmRXEHd3RT7d9wKEJPDeI6wsZXrQtx70gztzPCDWbQc7j-Hf0jqm9KALoWl-2d8SsHkENztD-0aB37NfqH5OJjztUz0drBiNPX_fVIUWEPJTp9xW9MuwOUXodovH5CaVBzpGuSqbRSjcGLapLQpSEFdY4K9-H_aKKMOKIPzsSgDAWJb7HP1AUFkU_E6E71tslGXbzo7iaJrGNL8BWFFN8g2o7U0sgA_RYImCyu3FXUGFIdHwhrijjJ_UdTLfGZDWJwjpga543wcAJ"
                  alt="Prestasi SMK Mudita"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                <span className="text-primary bg-primary/10 px-2 py-1 rounded">Prestasi</span>
                <span>12 Agustus 2023</span>
              </div>
              <h3 className="text-lg font-bold text-[#181111] dark:text-white leading-snug mb-2 group-hover:text-primary transition-colors">
                Juara 1 Lomba Kompetensi Siswa (LKS) Tingkat Provinsi Kalimantan Barat
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                Siswa SMK Mudita kembali menorehkan prestasi gemilang di ajang bergengsi tahunan...
              </p>
            </article>
            {/* News Item 2 */}
            <article className="flex flex-col group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-4 relative aspect-video">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKFfpynPyRedvavi0xiPJuu1nBq4LCYacNDF4PN60hA2tM2aIi79aKeV8EMNqX_q-XEObh8fhwX69RDrq6DJO_GH8e_46NERBhwpvFbS37FRKLU8HIAzal8DXI6hkXbHunlXbxozGbr-DoV5qzppLSd-xv7xN_Y0DiffOFVE668HJ90lCdojcgXaWt6Ed2VWKcSUTuvdYcTw9ybTclrgW2TWUahnL-EiMQgzSh-KG4qunGI_qJNXiqfKkeOScbu1BX9LSCdPf-DBrt"
                  alt="Kegiatan Waisak"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                <span className="text-accent-gold bg-accent-gold/10 px-2 py-1 rounded">Kegiatan</span>
                <span>10 Agustus 2023</span>
              </div>
              <h3 className="text-lg font-bold text-[#181111] dark:text-white leading-snug mb-2 group-hover:text-primary transition-colors">
                Perayaan Waisak Bersama: Menanamkan Nilai Kasih Sayang
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                Seluruh keluarga besar SMK Mudita merayakan hari suci Waisak dengan penuh khidmat...
              </p>
            </article>
            {/* News Item 3 */}
            <article className="flex flex-col group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-4 relative aspect-video">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIhfIWZkr8f_0ntRlDLlbaWXz-tOElfDnBtLOSoMsbdjw2k4X6ZJKR5UDukyTfsi0QtDoKuACrW_RJU3HuUg7TOCfn9A82y_gf_CD_KoiEW_2MriYFWDdlLlWUb-oxskcwG7ETaIO5lqV827bFgavXBlw-nvbbn0lCCt-C_OCvGoxlA2oKLF2rs9yDbfOb2a9og04XcVauIny-ZeGGc0LEZRZJAc8J9dLYyEjiFfHl72y-rCEuyQLUkll-xHhwZAswNNZisZifT5sX"
                  alt="Kerjasama Industri"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                <span className="text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">Kerjasama</span>
                <span>5 Agustus 2023</span>
              </div>
              <h3 className="text-lg font-bold text-[#181111] dark:text-white leading-snug mb-2 group-hover:text-primary transition-colors">
                Penandatanganan MoU dengan 10 Perusahaan Besar di Singkawang
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                Meningkatkan penyerapan lulusan, SMK Mudita memperluas jaringan industri...
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
        >
        </div>
        <div className="max-w-[960px] mx-auto px-4 relative z-10 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Siap Menjadi Bagian dari Kami?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Bergabunglah dengan SMK Mudita Singkawang dan mulailah perjalanan menuju karir yang cemerlang.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ppdb" className="bg-white text-primary text-base font-bold h-12 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
              Daftar PPDB Online
            </Link>
            <Link href="/kontak" className="bg-transparent border-2 border-white text-white text-base font-bold h-12 px-8 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
