'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#f4f0f0] shadow-sm">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="size-10 flex items-center justify-center bg-primary rounded-lg text-white">
                            <span className="material-symbols-outlined text-[28px]">school</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-[#181111] text-xl font-bold leading-none tracking-tight">SMK Mudita</h1>
                            <span className="text-xs text-[#896163] font-medium tracking-wide mt-0.5">SINGKAWANG</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link className="text-[#181111] hover:text-primary text-sm font-medium transition-colors" href="/">Beranda</Link>
                        <Link className="text-[#181111] hover:text-primary text-sm font-medium transition-colors" href="/profil">Profil</Link>
                        <Link className="text-[#181111] hover:text-primary text-sm font-medium transition-colors" href="/jurusan">Jurusan</Link>
                        <Link className="text-[#181111] hover:text-primary text-sm font-medium transition-colors" href="/student-life">Kesiswaan</Link>
                        <Link className="text-[#181111] hover:text-primary text-sm font-medium transition-colors" href="/kontak">Kontak</Link>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex">
                        <Link href="/ppdb" className="bg-primary hover:bg-primary-dark text-white text-sm font-bold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                            <span className="material-symbols-outlined text-[20px]">edit_document</span>
                            <span>Daftar PPDB</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="text-[#181111] p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 flex flex-col gap-4 shadow-lg">
                    <Link className="text-[#181111] hover:text-primary text-sm font-medium transition-colors" href="/" onClick={() => setIsMobileMenuOpen(false)}>Beranda</Link>
                    <Link className="text-[#181111] hover:text-primary text-sm font-medium transition-colors" href="/profil" onClick={() => setIsMobileMenuOpen(false)}>Profil</Link>
                    <Link className="text-[#181111] hover:text-primary text-sm font-medium transition-colors" href="/jurusan" onClick={() => setIsMobileMenuOpen(false)}>Jurusan</Link>
                    <Link className="text-[#181111] hover:text-primary text-sm font-medium transition-colors" href="/student-life" onClick={() => setIsMobileMenuOpen(false)}>Kesiswaan</Link>
                    <Link className="text-[#181111] hover:text-primary text-sm font-medium transition-colors" href="/kontak" onClick={() => setIsMobileMenuOpen(false)}>Kontak</Link>
                    <Link href="/ppdb" className="bg-primary hover:bg-primary-dark text-white text-sm font-bold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 w-fit" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="material-symbols-outlined text-[20px]">edit_document</span>
                        <span>Daftar PPDB</span>
                    </Link>
                </div>
            )}
        </nav>
    );
}
