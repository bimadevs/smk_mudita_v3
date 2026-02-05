
export default function StudentLife() {
    return (
        <main className="flex flex-col items-center w-full">
            <div className="w-full max-w-[1200px] px-6 lg:px-20 py-12">
                <div className="flex flex-col gap-3 mb-8 relative p-6">
                    <div className="absolute left-0 top-0 h-full w-1 bg-primary rounded-full"></div>
                    <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-[#181111] dark:text-white">
                        Life at SMK Mudita
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                        Celebrating our vibrant community, extracurricular activities, and student achievements in the heart of Singkawang.
                    </p>
                </div>

                <div className="mb-10 border-b border-[#e6dbdc] dark:border-gray-700">
                    <div className="flex gap-8 overflow-x-auto no-scrollbar pb-1">
                        <button className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-[#181111] dark:text-white pb-3 px-2">
                            <span className="text-sm font-bold">All</span>
                        </button>
                        <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white pb-3 px-2 transition-colors">
                            <span className="text-sm font-bold">Sports</span>
                        </button>
                        <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white pb-3 px-2 transition-colors">
                            <span className="text-sm font-bold">Arts</span>
                        </button>
                        <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white pb-3 px-2 transition-colors">
                            <span className="text-sm font-bold">Academic</span>
                        </button>
                        <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white pb-3 px-2 transition-colors">
                            <span className="text-sm font-bold">Community</span>
                        </button>
                    </div>
                </div>

                <div className="masonry-grid gap-4 w-full">
                    <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="relative w-full aspect-[4/5] bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8YtIBCisGvG8m_-MprFxgkH3kSQ9ZC7uBBzkxj6qMa3gB4XKrC_tNxixqhoer1CYD2fVIVNx1Eyqal96dd-TOm5mA6G2KylFEMErXLpOT-A4EobOZV1vroLobZgSeKjX3iq-4yj3Mkpzf_5ASEUUd6M9b92oM6wsUEWyRdswf0NzUXJropEVznK9fndbRGjOFQ4aD2W6AfRIwJDVsg22oTFKY_9HuZlRNy5p-20IertRHrhnT4dbKTmVFQ29FXg44879mI441u28T")' }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-5 text-white">
                                <span className="bg-primary text-xs font-bold px-2 py-1 rounded mb-2 inline-block">Cultural Arts</span>
                                <h3 className="text-xl font-bold">Dragon Dance Festival</h3>
                                <p className="text-sm opacity-90 mt-1">Preserving Singkawang's heritage.</p>
                            </div>
                        </div>
                    </div>
                    <div className="break-inside-avoid mb-4 group rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all">
                        <div className="w-full aspect-video bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdsn67YzJOeUyrkDZ5tc0KWJ1tpTQJjffe2aIAmHfWkGb2_8CARA8RxsCLIf-BCuvmA0z_RJRpVZev2shfRu0e_IR3sWQ8H6_5h5bvMjTkmUpRwbGP-jIkRPa7fs9WGZUL1tohwTz4F__JaU2F5cQj-U2lMAJRHTDZd1mgypv3-ThRASoISZzBHPOSJXJu2WESF2dV0Rxak1cr24xLl-TuiRKCPKKxN7m1_eUYEQjyE6fMHSreEorb55YjXmYEOeGl6tf45TlIFCmU")' }}>
                            <div className="w-full h-full bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="p-4 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-bold text-[#181111] dark:text-white">Cultural Dance Troupe</h3>
                                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">Arts</span>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Performing at the city hall.</p>
                        </div>
                    </div>
                    <div className="break-inside-avoid mb-4 group rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
                        <div className="w-full aspect-video bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCG0QOBu0bWOuvk7iQ3iDGQcPIbuMI67YLUCqXPxrBwipalgZ4U_tQCJYNgaGHgmZPybJRWL3MrxmYC3TAOAGxyuIHEnEPQkO09CdBnS3xORCSd7WI1DwKdjh2vrbQ6rfKCsNXujHCpLY-JLWhNcplm5HXGABrLPi3WBg1PRuMaSr9j5IuvRd9aAm1icQFIt62O8fF4szDJ2IUiBKIVkwpUUDHrwnJQA7WVKuVSaSnp0Qel60-HLmVJ66bJITdSp2U4OqfU8bgAIIb0")' }}>
                        </div>
                        <div className="p-4">
                            <h3 className="text-base font-bold text-[#181111] dark:text-white">Robotics Club Innovation</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Building the future, one circuit at a time.</p>
                        </div>
                    </div>
                    <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 shadow-sm">
                        <div className="relative w-full aspect-[3/4] bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBobPgfwjvu2lBqEk7uTclCJqTzTFyzTFtbOcsO_oCUyfopzOf0MMQmw87rO2jFxpaCE7Q_ap0ipCi2WuwUa6MBYl6q1y-5XKbf6QDtheiOJDIpJ_3w3Dd2BXC6lI9arYt7z6SsmuDfYbBs7iwejnm70D1vkvV3iLZcdUK0nUVAgoKfxCGnPHva2B1_zcLQ8E46Se9t8doh22-unSQsn5GhUZVaolzDpjtpsxycGC-PMgOXZA0G2fpZ2HRwalvYf1G91EAB-08kNb7X")' }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-5 text-white w-full">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <h3 className="text-lg font-bold">Basketball Finals</h3>
                                        <p className="text-xs font-medium uppercase tracking-wider text-gray-300">Sports</p>
                                    </div>
                                    <span className="material-symbols-outlined">sports_basketball</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="break-inside-avoid mb-4 group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 shadow-sm">
                        <div className="relative w-full aspect-square bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBobPgfwjvu2lBqEk7uTclCJqTzTFyzTFtbOcsO_oCUyfopzOf0MMQmw87rO2jFxpaCE7Q_ap0ipCi2WuwUa6MBYl6q1y-5XKbf6QDtheiOJDIpJ_3w3Dd2BXC6lI9arYt7z6SsmuDfYbBs7iwejnm70D1vkvV3iLZcdUK0nUVAgoKfxCGnPHva2B1_zcLQ8E46Se9t8doh22-unSQsn5GhUZVaolzDpjtpsxycGC-PMgOXZA0G2fpZ2HRwalvYf1G91EAB-08kNb7X")', filter: 'hue-rotate(150deg)' }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-5 text-white">
                                <span className="bg-white/20 backdrop-blur-sm text-xs font-bold px-2 py-1 rounded mb-2 inline-block">Community</span>
                                <h3 className="text-lg font-bold">Scouts Camp 2023</h3>
                                <p className="text-sm opacity-90 mt-1">Leadership and survival skills training weekend.</p>
                            </div>
                        </div>
                    </div>
                    <div className="break-inside-avoid mb-4 group rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
                        <div className="w-full aspect-square bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdsn67YzJOeUyrkDZ5tc0KWJ1tpTQJjffe2aIAmHfWkGb2_8CARA8RxsCLIf-BCuvmA0z_RJRpVZev2shfRu0e_IR3sWQ8H6_5h5bvMjTkmUpRwbGP-jIkRPa7fs9WGZUL1tohwTz4F__JaU2F5cQj-U2lMAJRHTDZd1mgypv3-ThRASoISZzBHPOSJXJu2WESF2dV0Rxak1cr24xLl-TuiRKCPKKxN7m1_eUYEQjyE6fMHSreEorb55YjXmYEOeGl6tf45TlIFCmU")' }}>
                        </div>
                        <div className="p-4 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-bold text-[#181111] dark:text-white">Annual Choir Concert</h3>
                                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">Arts</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <button className="flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors">
                        Load More Activities
                        <span className="material-symbols-outlined text-sm">arrow_downward</span>
                    </button>
                </div>
            </div>

            <div className="w-full flex justify-center items-center py-6">
                <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
                <div className="mx-4 size-3 rotate-45 border-2 border-primary bg-white dark:bg-background-dark"></div>
                <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
            </div>

            <div className="w-full max-w-[1200px] px-6 lg:px-20 py-12 mb-12">
                <div className="flex flex-col items-center mb-12 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#181111] dark:text-white mb-4">Celebrating Excellence</h2>
                    <div className="w-24 h-1 bg-primary rounded-full"></div>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                        Our students consistently demonstrate dedication and talent, bringing pride to SMK Mudita through various competitions and academic milestones.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="relative p-8 bg-white dark:bg-[#2a1d1e] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm group hover:-translate-y-2 transition-transform duration-300">
                        <div className="corner-motif corner-top-left"></div>
                        <div className="corner-motif corner-bottom-right"></div>
                        <div className="size-16 rounded-full bg-yellow-50 dark:bg-yellow-900/20 text-accent-gold flex items-center justify-center mb-6 shadow-sm">
                            <span className="material-symbols-outlined text-3xl">emoji_events</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#181111] dark:text-white mb-2">1st Place Math Olympiad</h3>
                        <p className="text-sm font-semibold text-primary mb-3">Provincial Level 2023</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Awarded to the Grade 11 representative team for outstanding problem-solving skills and teamwork.</p>
                    </div>
                    <div className="relative p-8 bg-white dark:bg-[#2a1d1e] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm group hover:-translate-y-2 transition-transform duration-300">
                        <div className="corner-motif corner-top-left"></div>
                        <div className="corner-motif corner-bottom-right"></div>
                        <div className="size-16 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500 flex items-center justify-center mb-6 shadow-sm">
                            <span className="material-symbols-outlined text-3xl">military_tech</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#181111] dark:text-white mb-2">2nd Place Debate</h3>
                        <p className="text-sm font-semibold text-primary mb-3">National Schools Championship</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Our English debate team secured the runner-up position in Jakarta against 50+ schools.</p>
                    </div>
                    <div className="relative p-8 bg-white dark:bg-[#2a1d1e] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm group hover:-translate-y-2 transition-transform duration-300">
                        <div className="corner-motif corner-top-left"></div>
                        <div className="corner-motif corner-bottom-right"></div>
                        <div className="size-16 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center mb-6 shadow-sm">
                            <span className="material-symbols-outlined text-3xl">lightbulb</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#181111] dark:text-white mb-2">Best Innovation Award</h3>
                        <p className="text-sm font-semibold text-primary mb-3">Young Inventors Fair</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">For the "Smart Waste Management" project developed by the Robotics Club students.</p>
                    </div>
                </div>

                <div className="bg-primary text-white rounded-2xl p-8 lg:p-16 relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
                        <span className="material-symbols-outlined text-[200px]">format_quote</span>
                    </div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <h3 className="text-2xl font-bold mb-10 relative z-10 flex items-center gap-3">
                        <span className="material-symbols-outlined">forum</span>
                        Student Voices
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-1 text-accent-gold mb-1">
                                <span className="material-symbols-outlined text-base fill-current">star</span>
                                <span className="material-symbols-outlined text-base fill-current">star</span>
                                <span className="material-symbols-outlined text-base fill-current">star</span>
                                <span className="material-symbols-outlined text-base fill-current">star</span>
                                <span className="material-symbols-outlined text-base fill-current">star</span>
                            </div>
                            <p className="text-lg font-medium italic leading-relaxed text-white/90">"SMK Mudita has given me the confidence to pursue my dreams in engineering. The facilities and teacher support are unmatched in Singkawang."</p>
                            <div className="flex items-center gap-4 mt-2 border-t border-white/20 pt-4">
                                <div className="size-12 rounded-full bg-white/20 bg-cover bg-center border-2 border-accent-gold" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBobPgfwjvu2lBqEk7uTclCJqTzTFyzTFtbOcsO_oCUyfopzOf0MMQmw87rO2jFxpaCE7Q_ap0ipCi2WuwUa6MBYl6q1y-5XKbf6QDtheiOJDIpJ_3w3Dd2BXC6lI9arYt7z6SsmuDfYbBs7iwejnm70D1vkvV3iLZcdUK0nUVAgoKfxCGnPHva2B1_zcLQ8E46Se9t8doh22-unSQsn5GhUZVaolzDpjtpsxycGC-PMgOXZA0G2fpZ2HRwalvYf1G91EAB-08kNb7X")' }}></div>
                                <div>
                                    <p className="font-bold text-base">Andi Wijaya</p>
                                    <p className="text-xs text-white/70 uppercase tracking-wide">Class of 2023 - Engineering</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-1 text-accent-gold mb-1">
                                <span className="material-symbols-outlined text-base fill-current">star</span>
                                <span className="material-symbols-outlined text-base fill-current">star</span>
                                <span className="material-symbols-outlined text-base fill-current">star</span>
                                <span className="material-symbols-outlined text-base fill-current">star</span>
                                <span className="material-symbols-outlined text-base fill-current">star</span>
                            </div>
                            <p className="text-lg font-medium italic leading-relaxed text-white/90">"The extracurricular activities here are amazing. Being part of the Dragon Dance troupe taught me discipline, culture, and the importance of teamwork."</p>
                            <div className="flex items-center gap-4 mt-2 border-t border-white/20 pt-4">
                                <div className="size-12 rounded-full bg-white/20 bg-cover bg-center border-2 border-accent-gold" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8YtIBCisGvG8m_-MprFxgkH3kSQ9ZC7uBBzkxj6qMa3gB4XKrC_tNxixqhoer1CYD2fVIVNx1Eyqal96dd-TOm5mA6G2KylFEMErXLpOT-A4EobOZV1vroLobZgSeKjX3iq-4yj3Mkpzf_5ASEUUd6M9b92oM6wsUEWyRdswf0NzUXJropEVznK9fndbRGjOFQ4aD2W6AfRIwJDVsg22oTFKY_9HuZlRNy5p-20IertRHrhnT4dbKTmVFQ29FXg44879mI441u28T")' }}></div>
                                <div>
                                    <p className="font-bold text-base">Mei Ling</p>
                                    <p className="text-xs text-white/70 uppercase tracking-wide">Grade 12 - Arts & Culture</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
