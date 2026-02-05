import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuAZTfV8440niHPEMaRMQqkNclWb77kNlPOUp_gB8L1jIeg_sfQR6bOKht9PVNdQZz8q4GXs_1_ge1j8OTyKe30ceHitd94q80emfVrE4jYD9gxmR53oDl2OTgUbFvBO1Vlusxe9IRXzSPFZpDHLtZX34BcOwEenfLHjZIqITsVL0geHxiHLgCLJMiwFnDqmG2NobSEb8YVfVaXnsvDv7wJYwAF3kDw4sz0_3_L6sao1C6Wzg81kwERvlGnXvag4yCQZApGeP57DWodh";

const PARTNERS = [
  { name: "Google", w: "w-32", h: "h-10", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAV4q3UIzjFiaDXGgNY7JNaQIibN6S2wEGLBzUkOpUsgcwvCLdgrE6JeW9qZZdUbrIrWp33KAKv3-jT1Xvk_FwqQGY3nRWWlmvGJiAVz21GG5GOYrzZrtzFXRX4Jt7s2wQwrCCOe6vU3AoIjrIMjVIExHwM4Kms1e7Voet-TdWt6oC3AEQfB8Oc7RL-Ry6wzddJSYeDNNK5-17NMSk_zMocXNDhV5OU2lAuCIZ3wX7t_7JhyWKr-v_wxFDHUNDVj65jjL68PJZgWQGN" },
  { name: "Microsoft", w: "w-32", h: "h-10", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2Zv0Us6cAzheIGrSRNoLm4Y3gpgdYnf562Pc-DKOvmkq3WjLVbcc8ncu2N-lETSXIyG-JI4AohnSMePPVBBJszsZ101O9S3YN0nYIPpXBVgfbTJl0FcWXoy2e_g9pUryeHJik29jenCeJLURbk61HVkn1JVZijMqTWRkiTpqWcBrTMZtOMf6NlcSxDgKP1n5KJUlvrIiIdtOWDJM7Jr8IfUCM0V-yEGveJjgWzXCGr8tsN8jg4STXNfpDk4evlwTB1ft500TZVmVB" },
  { name: "Cisco", w: "w-32", h: "h-12", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4Ox33J3UGRWhXS81zu25InOsRyJ5zCNMJdwbou8sWKNM1soWtAeQjSJS1YPL8F96tESLHvBAi6IHNdagVRb6U67bSnoEmuLfCb1iCCH38D1pAUbvarnV3zGwywYXZquTmsLupyuIVLLAfjz_BlPGFfOjh8qbmVlDNpstFb8jQeHVYej2U1JbGzYAr-2dY3t1KrfHr8m5HJAc_f7ZAC_70fXhh59fCaCph2yvug5UoDNsJGjBF8jTuckSADVHS-YklHM4j4zE1-AaL" },
  { name: "Amazon", w: "w-32", h: "h-8", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDh2VxB4HivnjwH2tCp_s1QrIWOBos1KoxZ-nTGSrJLPdvBUm1wB3LMQiXJ8QV-_BIxVK8v0tY0410QSsVceDzHoss4THjvhRxSN_BmncWlWoxggcxCb9XIhUp0wdL6zeNhxj8_8DkI67U2yrJQjxdMqXo2P9Cnmdkc7J_v7VDvG5DVf7HqiTyOZMuFQBSPR7UCm7rY3jDxIm-FHKKW9EHlIjUP8S7pgBYz9M4jecsVCoBMTwrJYzrd02qmgwsbMn6FIHD6DrDa3FuV" },
  { name: "Apple", w: "w-24", h: "h-10", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUvrZLsm-JSQU0jkq3Kefys7Nw8Zsm2s8b7VhynLtX9yArBXx9vl2n0KwfVKJG_ylDQ8q48wbmBK96cjco4xmumkGcYXUfmENUJxOcUCkdCjDRFyg4zwuIEo22WZqOwrroH9Ay4MbXJ9BbYVd2lE5_iQcArL5kPi3uPDMQ8pOY06rAuhnVtoP5PDFofhNvVpgWCH7Lg2Z6FbQoD_UEfVbYFD5OcSMdMOGI7Ygu8ht0o_H4cjmdyobTth6mI8ldnzgqSrN1d9joCByL" },
  { name: "Samsung", w: "w-32", h: "h-10", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFhtInskp_oIwxC_RBIj7FJMs_-zPVGhsPc5jsa58_NsqWznSVOADG680LPrx9HL0R1Xqtw6Ai1H6oVv4TV9LHpi3IJJcrjbO2SIlPSDbG4lLvcCCcUQKHrHdfiUALzd6oyofluE8V9g0KpfjgDLb3HGJRc9uz5dA04MqVH1Gi54-CFTByLv8dTXqvzVgrpZoRYrBfxlJ1aGefuCKN5Selm_Zyb9epTSt48Fod7RZqAOBd8frNETJoxh9qa75Kd9LyoumNIQSHlaXp" },
  { name: "Lenovo", w: "w-32", h: "h-8", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpUMn1rLGvQ-IDp37_6zz84o1PobaDKawXt8jhdmb_pCeSLhbJ7BwWwIg7JpvEKUMgG-W9qB9P1z-c7Xe-bhJ4JQwxamz0gWXbZgv5eCgktTPHFAELOlSdpumllx7Le2Fj0LGP4YqnpXJOZqmwmWCJ8ZnviNkj_rb53jsEQMw6ATiCVBB2KzFXcdoWRxRjn4c1QQV8wl8pq_KbmvHRhBGQ3ZqlBdlu4JM5CGR3vK0-qbAq53ssGG6hHyfuMYdp6tmWf2ACUvFED6B1" },
  { name: "IBM", w: "w-32", h: "h-12", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbp1yEGqFow5qRzRn6jljnZs7GYv4pBoFHv_yGZRdzf6F63QeL5c9vWzTeSovQtvkrXw2brgXNB9Iv6iOizIIRfRDkhKBHbJ_jYx2AGBVU5fh9FhHxontn1UNSPxdYst6R8MC9EJuG4LaO8gDr0xBsgVticvvjh6En1hKh-4HOMVrbq-_XfL5THom5_E7qA7GXkCwrFAvfe_GfoPNkPp__EGrPOOx_786w_k1TZgGxinx19s9zib5PEJkdaS8CRgUkA-NNmMLJI4i5" },
];

const GALLERY = [
  {
    title: "Praktik Merakit Komputer",
    alt: "Students working on computer hardware in a lab",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-aPOVzBwGsJMIW7TVI6URwkxVZ-Gv1iy_Oe5LKJVLCu8z2CKjjClcEMtHoqGDXKuIwl15rdnOq8kbGRWOfnsHsRkFokPnkyQU3IUsWJ4cu9mgRZkNeZZOs8yJDxnID7eMcnBkNfnQOaLK-aSVsjfKEgTx04qXCGo4fyVIgOn4pl1H23QLe1W-HCLkK6l7--YYHkiUw8w2aTZvWSG6cyTG40FckDheNE5zvjF_ZwNeo-W92g6oEoMMFHVnHkdQIT1xYevg76Vx3QuO",
    className: "",
  },
  {
    title: "Konfigurasi Server & Switch",
    alt: "Close up of network cables connected to a server switch",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSo0EM6k0r1DSmeUlWziDdrdFqANx_u0YYukRmY1YEkESG-iKO5dQ1I1AEjONjnwXkvaJw_UMxLId3J70Vaf_0O2EXDx-_sp5RPrNvlNp_UnYMUUnL5StV3guwedXSJGzB9Y_m1acvQ7Ml5JhCU1NX2sFugfO1wMoY9AUYCBCziyMnIKrsN6DsAZU56gtZYqQ1vKXh0vQEFCh49BR25s_ZVrw5ovWFXb0NtESUF7Jx__lvVRb52zsVvXBF7w8h10yKxV8VecEM7fl6",
    className: "",
  },
  {
    title: "Kolaborasi Project Based Learning",
    alt: "Students collaborating on a networking project",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ4m3Oa1dsqo10EOUR4vGkV3tsvXyMKPLqKXJT19ARcSxoJMMZrhvMtWStVZKFZzY2ZRWT6TEeo4yGOdQt9hdf8l3ts5dR5c24CQbZjL7t6QJUvhZiBVhLm5jsOdg8y2aHb-OzCQVzhdCXG2QaQRZa0smpk7OIIk2vJVQj1cjjmt-HJkUlQfQ_7UxXPjtY9hX5jJym8CSFCzlNuI8cQOwEQ4CDeTLAvX7SG-S3wUb7uTsRHUXjCl8yv4_eYzdoyjUc9UWWqPtF53_W",
    className: "sm:col-span-2",
  },
];

export default function JurusanPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-[320px] lg:h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Students studying together in a modern library or classroom setting"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 z-10" />
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <span className="inline-block py-1 px-3 rounded-full bg-accent-gold/20 text-accent-gold border border-accent-gold/30 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">
            Program Unggulan
          </span>
          <h1 className="text-white text-4xl lg:text-6xl font-black leading-tight tracking-tight mb-4">
            Kompetensi Keahlian
          </h1>
          <p className="text-gray-200 text-lg lg:text-xl font-light max-w-2xl mx-auto">
            Mempersiapkan generasi profesional yang siap kerja dengan keterampilan
            industri terkini dan karakter yang kuat.
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="p-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-neutral-800/50">
                  <h3 className="font-bold text-neutral-dark dark:text-white text-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      category
                    </span>
                    Daftar Jurusan
                  </h3>
                </div>
                <nav className="flex flex-col p-2 gap-1">
                  <Link
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 border-l-4 border-primary text-primary font-bold transition-all"
                  >
                    <span className="material-symbols-outlined">computer</span>
                    <span className="text-sm">Teknik Komputer & Jaringan</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-neutral-dark dark:text-gray-300 font-medium border-l-4 border-transparent hover:border-gray-300 transition-all group"
                  >
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-neutral-dark transition-colors">
                      calculate
                    </span>
                    <span className="text-sm">Akuntansi Keuangan</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-neutral-dark dark:text-gray-300 font-medium border-l-4 border-transparent hover:border-gray-300 transition-all group"
                  >
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-neutral-dark transition-colors">
                      storefront
                    </span>
                    <span className="text-sm">Bisnis Daring & Pemasaran</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-neutral-dark dark:text-gray-300 font-medium border-l-4 border-transparent hover:border-gray-300 transition-all group"
                  >
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-neutral-dark transition-colors">
                      apartment
                    </span>
                    <span className="text-sm">
                      Otomasisasi Tata Kelola Perkantoran
                    </span>
                  </Link>
                </nav>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 text-white shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-9xl">
                    campaign
                  </span>
                </div>
                <h4 className="font-bold text-xl mb-2 relative z-10">
                  Pendaftaran Dibuka!
                </h4>
                <p className="text-sm text-white/90 mb-4 relative z-10">
                  Bergabunglah dengan ribuan alumni sukses SMK Mudita.
                </p>
                <button className="w-full bg-white text-primary font-bold py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors relative z-10 shadow-sm cursor-pointer">
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            <div className="mb-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-accent-gold font-medium text-sm">
                  <span className="material-symbols-outlined text-lg">
                    verified
                  </span>
                  <span>Terakreditasi A</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark dark:text-white tracking-tight">
                  Teknik Komputer dan Jaringan
                </h2>
                <p className="text-lg text-neutral-dark/80 dark:text-gray-400 leading-relaxed mt-2">
                  Program keahlian yang fokus pada penguasaan keterampilan
                  instalasi, konfigurasi, dan maintenance jaringan komputer baik
                  lokal maupun luas, serta administrasi server.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                  <h3 className="text-xl font-bold text-neutral-dark dark:text-white mb-4 border-b pb-2 border-gray-100 dark:border-gray-700">
                    Deskripsi Kompetensi
                  </h3>
                  <div className="prose prose-red dark:prose-invert max-w-none text-neutral-dark/80 dark:text-gray-300">
                    <p className="mb-4">
                      Siswa jurusan TKJ dibekali dengan kemampuan merakit
                      personal computer (PC), instalasi sistem operasi dan
                      aplikasi, serta instalasi perangkat jaringan berbasis
                      lokal (LAN) dan luas (WAN).
                    </p>
                    <p>
                      Kurikulum kami dirancang selaras dengan kebutuhan industri
                      IT saat ini, memastikan setiap lulusan memiliki
                      sertifikasi kompetensi yang diakui secara nasional maupun
                      internasional melalui kerjasama dengan akademi jaringan
                      global.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-neutral-dark dark:text-white">
                      Galeri Pembelajaran
                    </h3>
                    <Link
                      href="#"
                      className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
                    >
                      Lihat Semua{" "}
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {GALLERY.map((item, index) => (
                      <div
                        key={index}
                        className={`group relative aspect-video overflow-hidden rounded-lg bg-gray-200 ${item.className}`}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <p className="text-white font-medium text-sm">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 h-fit">
                  <h3 className="text-lg font-bold text-neutral-dark dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      work
                    </span>
                    Prospek Karir
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Network Administrator",
                      "IT Support Specialist",
                      "Teknisi Komputer & Laptop",
                      "Server Administrator",
                      "Wirausaha Bidang IT",
                    ].map((career, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-neutral-dark/80 dark:text-gray-300"
                      >
                        <span className="material-symbols-outlined text-primary text-lg shrink-0">
                          check_circle
                        </span>
                        <span>{career}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-background-light dark:bg-neutral-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                  <h3 className="text-lg font-bold text-neutral-dark dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      menu_book
                    </span>
                    Mata Pelajaran Inti
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Sistem Komputer",
                      "Komputer dan Jaringan Dasar",
                      "Pemrograman Dasar",
                      "Teknologi WAN",
                      "Administrasi Infrastruktur Jaringan",
                    ].map((subject, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white dark:bg-black/20 text-neutral-dark dark:text-gray-300 rounded text-xs font-medium border border-gray-200 dark:border-gray-700"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-neutral-800 py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-dark dark:text-white">
            Mitra Industri (DUDI)
          </h2>
          <p className="text-neutral-dark/70 dark:text-gray-400 mt-2 text-sm">
            Kami bekerjasama dengan perusahaan terkemuka untuk program magang
            dan penyerapan tenaga kerja.
          </p>
        </div>
        <div className="relative w-full overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-neutral-800 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-neutral-800 to-transparent z-10" />
          <div className="flex w-max animate-marquee items-center">
            <div className="flex gap-16 px-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              {PARTNERS.map((partner, i) => (
                <div key={i} className={`relative ${partner.w} ${partner.h}`}>
                  <Image
                    src={partner.src}
                    alt={`${partner.name} Logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-16 px-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              {PARTNERS.map((partner, i) => (
                <div
                  key={`dup-${i}`}
                  className={`relative ${partner.w} ${partner.h}`}
                >
                  <Image
                    src={partner.src}
                    alt={`${partner.name} Logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
