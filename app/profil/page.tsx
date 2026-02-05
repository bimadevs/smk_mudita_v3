
export default function Profile() {
    return (
        <main className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative">
                <div
                    className="w-full h-[480px] md:h-[560px] bg-gray-900 bg-cover bg-center flex items-center justify-center relative"
                    style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0MYsPSptePvwS15VriXgD7Zz7IuxkoRgVCgckGaJ9AwjwiUroOgMYlJuDnfCn1vD6e8LqBh163TCgI007YosUemZGsVU6RQQqF4kKR-82IxT_cWVl8fz6SUGXslXQHaOPFGdE91GXktvK3gLt0zUwq5_e5f25UHtkP3xYjyu4wrjRBN43FLB4q_In2NRto2PPPmLq8p4dg2_qWd0RwMZ2QbXuqV4cXJCK5hashI2lS3A7lPtowiKAaXDMwyhp0EkzHeuGV9yye2tk")' }}
                >
                    <div className="text-center px-4 max-w-4xl relative z-10">
                        <div className="inline-block mb-4 px-3 py-1 bg-primary/90 text-white text-xs font-bold rounded-full uppercase tracking-wider">Vocational High School</div>
                        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] mb-4">
                            Character, Competence, & Compassion
                        </h1>
                        <h2 className="text-gray-200 text-lg md:text-xl font-normal max-w-2xl mx-auto mb-8">
                            SMK Mudita combines modern vocational training with timeless Buddhist values to shape the leaders of tomorrow.
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="h-12 px-8 bg-primary hover:bg-primary-dark text-white text-base font-bold rounded-lg transition-all shadow-lg shadow-primary/30">
                                Explore Facilities
                            </button>
                            <button className="h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-base font-bold rounded-lg transition-all">
                                Virtual Tour
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro & Accreditation Badge */}
            <section className="py-16 px-4 md:px-10 bg-white dark:bg-background-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-lattice pointer-events-none"></div>
                <div className="max-w-[960px] mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark dark:text-gray-100 leading-tight">
                                Excellence Recognized Nationally
                            </h2>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                We are committed to maintaining high standards of education. Our institution is proud to be recognized with an <strong className="text-primary">&apos;A&apos; Accreditation</strong>, reflecting our dedication to quality vocational training, character development, and spiritual growth based on Buddhist principles.
                            </p>
                            <div className="flex items-center gap-2 text-primary font-bold cursor-pointer hover:underline">
                                <span>View Official Certificate</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </div>
                        </div>
                        {/* Badge Component */}
                        <div className="shrink-0 relative group">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-500"></div>
                            <div className="relative size-48 md:size-56 bg-gradient-to-br from-white to-gray-50 dark:from-background-dark dark:to-black border-[6px] border-primary rounded-full flex flex-col items-center justify-center shadow-2xl text-center p-4">
                                <span className="material-symbols-outlined text-4xl text-primary mb-1">verified</span>
                                <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold">National Board</span>
                                <span className="text-6xl font-black text-neutral-dark dark:text-gray-100 leading-none my-1">A</span>
                                <span className="text-sm font-bold text-primary uppercase">Excellent</span>
                                <div className="mt-2 w-16 h-1 bg-primary rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 px-4 md:px-10 bg-background-light dark:bg-background-dark">
                <div className="max-w-[1080px] mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <div className="bg-white dark:bg-surface-dark p-10 rounded-2xl shadow-sm border-t-4 border-primary flex flex-col items-start gap-4 hover:shadow-md transition-shadow">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <span className="material-symbols-outlined text-3xl">visibility</span>
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-dark dark:text-gray-100">Our Vision</h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                To become a leading vocational high school that produces graduates who are competent, innovative, and possess noble character based on universal spiritual values, ready to compete in the global era.
                            </p>
                        </div>
                        {/* Mission Card */}
                        <div className="bg-white dark:bg-surface-dark p-10 rounded-2xl shadow-sm border-t-4 border-neutral-dark dark:border-gray-500 flex flex-col items-start gap-4 hover:shadow-md transition-shadow">
                            <div className="p-3 bg-neutral-dark/5 dark:bg-white/10 rounded-lg text-neutral-dark dark:text-gray-100">
                                <span className="material-symbols-outlined text-3xl">flag</span>
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-dark dark:text-gray-100">Our Mission</h3>
                            <ul className="text-gray-700 dark:text-gray-300 space-y-3 list-none">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                    <span>Implement rigorous vocational training aligned with industry standards.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                    <span>Cultivate moral integrity and compassion through Buddhist teachings.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                    <span>Foster an environment of creativity and technological adaptability.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* History Timeline */}
            <section className="py-16 px-4 md:px-10 bg-white dark:bg-surface-dark">
                <div className="max-w-[960px] mx-auto flex flex-col">
                    <h2 className="text-neutral-dark dark:text-gray-100 text-3xl font-bold leading-tight tracking-[-0.015em] pb-10 text-center">Our Journey</h2>
                    <div className="grid grid-cols-[40px_1fr] gap-x-4 md:gap-x-8 px-4">
                        {/* Item 1 */}
                        <div className="flex flex-col items-center gap-1 pt-3">
                            <div className="text-primary bg-primary/10 p-2 rounded-full">
                                <span className="material-symbols-outlined">local_florist</span>
                            </div>
                            <div className="w-[2px] bg-[#e6dbdc] dark:bg-gray-700 h-full grow my-2"></div>
                        </div>
                        <div className="flex flex-1 flex-col py-3 pb-12">
                            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-1">1995</span>
                            <h3 className="text-neutral-dark dark:text-gray-100 text-xl font-bold leading-normal">Foundation Established</h3>
                            <p className="text-gray-700 dark:text-gray-400 mt-2">
                                The Mudita Foundation was established with the goal of providing quality education and spiritual guidance to the youth of Singkawang.
                            </p>
                        </div>
                        {/* Item 2 */}
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-[2px] bg-[#e6dbdc] dark:bg-gray-700 h-2"></div>
                            <div className="text-primary bg-primary/10 p-2 rounded-full">
                                <span className="material-symbols-outlined">school</span>
                            </div>
                            <div className="w-[2px] bg-[#e6dbdc] dark:bg-gray-700 h-full grow my-2"></div>
                        </div>
                        <div className="flex flex-1 flex-col py-3 pb-12">
                            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-1">2000</span>
                            <h3 className="text-neutral-dark dark:text-gray-100 text-xl font-bold leading-normal">First Vocational Class</h3>
                            <p className="text-gray-700 dark:text-gray-400 mt-2">
                                SMK Mudita officially opened its doors with its first batch of students in Business and Management.
                            </p>
                        </div>
                        {/* Item 3 */}
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-[2px] bg-[#e6dbdc] dark:bg-gray-700 h-2"></div>
                            <div className="text-primary bg-primary/10 p-2 rounded-full">
                                <span className="material-symbols-outlined">apartment</span>
                            </div>
                            <div className="w-[2px] bg-[#e6dbdc] dark:bg-gray-700 h-full grow my-2"></div>
                        </div>
                        <div className="flex flex-1 flex-col py-3 pb-12">
                            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-1">2010</span>
                            <h3 className="text-neutral-dark dark:text-gray-100 text-xl font-bold leading-normal">New Campus Opening</h3>
                            <p className="text-gray-700 dark:text-gray-400 mt-2">
                                Expansion to the current modern campus facility to accommodate growing student numbers and new technical workshops.
                            </p>
                        </div>
                        {/* Item 4 */}
                        <div className="flex flex-col items-center gap-1 pb-3">
                            <div className="w-[2px] bg-[#e6dbdc] dark:bg-gray-700 h-2"></div>
                            <div className="text-primary bg-primary/10 p-2 rounded-full">
                                <span className="material-symbols-outlined">emoji_events</span>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col py-3">
                            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-1">2022</span>
                            <h3 className="text-neutral-dark dark:text-gray-100 text-xl font-bold leading-normal">National Accreditation A</h3>
                            <p className="text-gray-700 dark:text-gray-400 mt-2">
                                Achieved the highest level of national accreditation, confirming our status as a premier vocational institution in West Kalimantan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Structure */}
            <section className="py-20 px-4 md:px-10 bg-background-light dark:bg-background-dark">
                <div className="max-w-[1280px] mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-neutral-dark dark:text-gray-100 mb-4">Organizational Structure</h2>
                        <p className="text-gray-700 dark:text-gray-400">Meet the dedicated leadership team guiding SMK Mudita towards educational excellence.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Principal */}
                        <div className="group relative bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="aspect-[4/5] overflow-hidden bg-gray-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVspJxdBPqMCWUsy_ohmolV2YEoar6c_HnXnujSEMVLgQVYgfefkUABebk2X1mSTVyV4kM4jbdAplvUvQWHMQVISA2YHWiEj_L0R4IVs60M27h8PL2w9BKxFp3w0Us51kZImP3mGHpM56PmRUt9yrwpQnx6j9onEjqBVij5S6nnCCD5K065WI3iTUM2knUCd4hGLa566WFuk0UyRq_oyAaKV8Rw7DbRY0GlCLSKCE6VfFoWDMzzm_XWw3_VBZUbaUHuSqHJ6gbWY_X")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                                <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">Principal</p>
                                <h3 className="text-lg font-bold">Budi Santoso, M.Pd.</h3>
                            </div>
                        </div>
                        {/* Vice Principal */}
                        <div className="group relative bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="aspect-[4/5] overflow-hidden bg-gray-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjLVqmxVhdHWjF0txDSUdfS7Ntd_BoyrqD9g71dW0AVL0oQr5CHih9pfHyeVmTlqOP5OiDrFvU1ux5fv-ooSDDAVgxmvH2wc__Q9nqZb8Ix55dCCc8UdcTLCAUT0jsQHrbQhSzSXqBwBEPeUJMkzmjStehacokrkcyBr5elFVuRxDb1-mckU0Z8pzLBlW8X_BL6_R76VnSKda_H_mHRzT-JX3UrLP27BZmDWg1UuWaV0aDpBYYGeDikog1hm9X4prVKkWzWWoF-TjW")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                                <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">VP Curriculum</p>
                                <h3 className="text-lg font-bold">Siti Aminah, S.Pd.</h3>
                            </div>
                        </div>
                        {/* Head of Student Affairs */}
                        <div className="group relative bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="aspect-[4/5] overflow-hidden bg-gray-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCt3UpGBsxUCxQSNG2PvWiUlWDb6uWcSHagKeKGkQAYVQV8wD3WqMtZKpYjJ843e_XvBng76koXfaKd-Z52NUXXJ0V_-rKH_-Z3JDfJKNayUcQV_GUQjgasRmZeBJ2mGNIr5gmzlaKWRv01k0AWEXS_Qu-xDLkKYCLdfZXFNGReEhDBos6LqvKjpwJMCRdIutLBK-OB6aKMJaGsp5_ewTgzZFmj51kq_HbcOAIePgn76S6cCw2J2g8Bj-XvLcPs99wmdoyHIOk5d0WM")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                                <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">Student Affairs</p>
                                <h3 className="text-lg font-bold">Hendra Wijaya, S.Kom.</h3>
                            </div>
                        </div>
                        {/* Head of Facilities */}
                        <div className="group relative bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="aspect-[4/5] overflow-hidden bg-gray-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZSO2vk0tDrdU6UcwTZfxoF9N21aUeFzTIPkHfYZiIknsw1-AorfRoBnO07Y4iVD_k43TqEzkncqTLTVhvXIp9J1E36UMlpDZgwvd5ej8EMNriEa-oak-r6NXOp2gofmil8VPrqCpgxkKVT5yjPBRJE_2uCNY0RiXJUXdcl70JHE8tjOt2u5bgDYxBM5zPvWagI75eJsz7r4H1gEALaI0POKY3Rzhdm_f_pU87Pjbwi4z5JKVKBll_qVRUuBTu9qg_i4YRa-bUdQDI")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                                <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">Head of Facilities</p>
                                <h3 className="text-lg font-bold">Liem Tjun Hiang</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facilities Gallery */}
            <section className="py-20 px-4 md:px-10 bg-white dark:bg-surface-dark relative">
                {/* Decorative Oriental border top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                <div className="max-w-[1280px] mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold text-neutral-dark dark:text-gray-100 mb-2">Campus Facilities</h2>
                            <p className="text-gray-700 dark:text-gray-400 max-w-xl">
                                Modern laboratories, comfortable learning spaces, and a spiritual center designed to support holistic student development.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium">All</button>
                            <button className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">Academic</button>
                            <button className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">Spiritual</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
                        {/* Item 1: Temple (Large) */}
                        <div className="md:col-span-2 row-span-2 relative group rounded-2xl overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2P7APXNMl2WxrjORPNTrdMXkQFoXLGuXK-1VANdMAeHmp7HebFJ_vFogsDfKZjYNbAE1Dc0aRWQKdT0QoYJCm5k14utzBDBeUozYNZxxj7muCEm1CRAHec4o8lPXevjftk0bxh9wr4Mm-aTDja_8I_3isfQ3uU1CUUMp6WrDpWTrpwUvo_jpP8D2ZjLpZxjzbh2UAKj9Zz59RzFKZJ48vLLHAey2-nbsWPSFN3_YacgzywjKMEzjhcWS2sQ1jibmKehxxok_clwKm")' }}>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-white text-2xl font-bold mb-1">Dhammasala (Prayer Hall)</h3>
                                <p className="text-gray-200 text-sm">A serene space for meditation and spiritual activities.</p>
                            </div>
                        </div>
                        {/* Item 2: Computer Lab */}
                        <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkkxdVg-CETNcVNERRt2iBmjAovv0A1CB6UyNZNFCTiT5L-TssBMwiCl0-D8x3P-s9rSg79tGfjBsG91wEjjwSk9HK352F83OEGMqEapXfmRgAyKplIkkaERjP7weSGu7PzNIUaVGYVimWFCP2Oi9jhDguqZzVqSMp8qMCIWkkj06RzXmiMtrOxLzKKlnBeZ_NTVvvFVkRKhkqT3JUrtPoNdD22pxTsuOfcx7gPFgweDJj6OZDrF4TFf_eptqSKU-c_VJbXhJSAwn8")' }}>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-white text-lg font-bold">Multimedia Lab</h3>
                            </div>
                        </div>
                        {/* Item 3: Workshop */}
                        <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBrQE0hD9HISHpWAH-iQBgsN-LLQkhc5X_Zgz9YS7eNYKtYvzg2UsiSdUNRSbMEjgzLPwTPIIgdiaqI0Ftjhgg5whkKKW1ikETSR5mKnFpX1c_W17WB42Nc0DTPv9NNA7aoigWQXsnBJawnwKwWRuzKcv5q-wd4H6f4iohquin996uI70NGaEA_WwvPeB-g9SIhi1cBkv0zPTvnTKsw7Mp-vK_pQtcxgeg0ZYrRH8eJcmoWvMWsvgqGYG8tnGGcgKQCxO6iT2NLClYF")' }}>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-white text-lg font-bold">Engineering Workshop</h3>
                            </div>
                        </div>
                        {/* Item 4: Library */}
                        <div className="md:col-span-3 relative group rounded-2xl overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvwbq6_N_7xULv4UsHY3nwgnzbF2GKwyn856H7FjEJlIoXgwHWfWqiOI5DQ2OqOzoghBeq3bVtSkxn-WoJ3k5ig8qSAg_mNM84SqvQTBgsydVPap8hKaN4Gi2KOMfO7oZFyydwsdcdLLG9uejmq-4hcRk2l_40fgGv_on8oOwf3zcneSU4amrDjYpMs0tFYNniycJT2zHa2S8OkiyAE8T0q0S9Ch98kNM6wVOtcdIDo-JA7K8ZTTyyreLTgdktt4uZe6asGY12TrN8")' }}>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-white text-lg font-bold">Digital Library</h3>
                                <p className="text-gray-200 text-sm">Access to thousands of books and digital resources.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
