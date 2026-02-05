import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#1a0f0f] text-white pt-16 pb-8 border-t-4 border-accent-gold">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="size-8 flex items-center justify-center bg-primary rounded text-white">
                                <span className="material-symbols-outlined text-[20px]">school</span>
                            </div>
                            <span className="text-xl font-bold">SMK Mudita</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Membangun generasi unggul, berkarakter, dan berbudi pekerti luhur sesuai ajaran Dharma untuk masa depan yang lebih baik.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <a className="text-gray-400 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">social_leaderboard</span></a>
                            <a className="text-gray-400 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">photo_camera</span></a>
                            <a className="text-gray-400 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">smart_display</span></a>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-accent-gold">Tautan Cepat</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-400">
                            <li><Link className="hover:text-primary transition-colors" href="/profil">Tentang Kami</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/jurusan">Program Keahlian</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Tenaga Pengajar</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Berita Sekolah</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/ppdb">PPDB</Link></li>
                        </ul>
                    </div>
                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-accent-gold">Hubungi Kami</h4>
                        <ul className="flex flex-col gap-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-0.5">location_on</span>
                                <span>Jl. P. Diponegoro No. 12, Singkawang Barat, Kalimantan Barat</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">call</span>
                                <span>(0562) 631234</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">mail</span>
                                <span>info@smkmudita-skw.sch.id</span>
                            </li>
                        </ul>
                    </div>
                    {/* Map */}
                    <div className="rounded-lg overflow-hidden h-48 w-full bg-gray-800 relative">
                        <div className="w-full h-full bg-cover bg-center opacity-60 hover:opacity-100 transition-opacity" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB65VFVMbHfTQwRa4butjsHB_p49BmzElMFeWWNpbCiMj0SDXxDpk3z0WmsvxE27VWE_1aooPW_sxFIVPKZ-jj7OBntlmwhDqPUXfxZq3zPuwrotbQITljHrMWMFU-u-ahu7yLwe6foqi31OW5Gma7VObg3jFSPcmA1FyIagRyaTvEbekN21wa5aRGqyOvlLWfeK6fJLo4T4Cf_9m-0fSMEtIqSGHm8TK9RN9y2-_jj8-aInPLck6JRNVSS7oCAgCq-GoYtJ2bLNspt')" }}>
                        </div>
                        <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-xs text-black font-bold pointer-events-none">Lokasi Kami</div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500 text-center md:text-left">© 2023 SMK Mudita Singkawang. All rights reserved.</p>
                    <div className="flex gap-6 text-xs text-gray-500">
                        <a className="hover:text-white" href="#">Privacy Policy</a>
                        <a className="hover:text-white" href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
