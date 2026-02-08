'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-[#f4f0f0] dark:border-gray-800 shadow-sm transition-colors duration-300">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="size-10 flex items-center justify-center bg-primary rounded-lg text-white">
                            <span className="material-symbols-outlined text-[28px]">school</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-[#181111] dark:text-white text-xl font-bold leading-none tracking-tight">SMK Mudita</h1>
                            <span className="text-xs text-[#896163] dark:text-gray-400 font-medium tracking-wide mt-0.5">SINGKAWANG</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link className="text-[#181111] dark:text-gray-200 hover:text-primary text-sm font-medium transition-colors" href="/">Beranda</Link>
                        <Link className="text-[#181111] dark:text-gray-200 hover:text-primary text-sm font-medium transition-colors" href="/profil">Profil</Link>
                        <Link className="text-[#181111] dark:text-gray-200 hover:text-primary text-sm font-medium transition-colors" href="/jurusan">Jurusan</Link>
                        <Link className="text-[#181111] dark:text-gray-200 hover:text-primary text-sm font-medium transition-colors" href="/blog">Berita</Link>
                        <Link className="text-[#181111] dark:text-gray-200 hover:text-primary text-sm font-medium transition-colors" href="/kontak">Kontak</Link>
                    </div>

                    {/* CTA Button & Theme Toggle */}
                    <div className="hidden md:flex items-center gap-3">
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-[#181111] dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle theme"
                        >
                            <span className="material-symbols-outlined text-[20px]">
                                {theme === 'light' ? 'dark_mode' : 'light_mode'}
                            </span>
                        </button>

                        <Link href="/ppdb" className="bg-primary hover:bg-primary-dark text-white text-sm font-bold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                            <span className="material-symbols-outlined text-[20px]">edit_document</span>
                            <span>Daftar PPDB</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button & Theme Toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-[#181111] dark:text-gray-200"
                            aria-label="Toggle theme"
                        >
                            <span className="material-symbols-outlined text-[20px]">
                                {theme === 'light' ? 'dark_mode' : 'light_mode'}
                            </span>
                        </button>
                        <button
                            className="text-[#181111] dark:text-white p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-4 px-4 flex flex-col gap-4 shadow-lg">
                    <Link className="text-[#181111] dark:text-gray-200 hover:text-primary text-sm font-medium transition-colors" href="/" onClick={() => setIsMobileMenuOpen(false)}>Beranda</Link>
                    <Link className="text-[#181111] dark:text-gray-200 hover:text-primary text-sm font-medium transition-colors" href="/profil" onClick={() => setIsMobileMenuOpen(false)}>Profil</Link>
                    <Link className="text-[#181111] dark:text-gray-200 hover:text-primary text-sm font-medium transition-colors" href="/jurusan" onClick={() => setIsMobileMenuOpen(false)}>Jurusan</Link>
                    <Link className="text-[#181111] dark:text-gray-200 hover:text-primary text-sm font-medium transition-colors" href="/blog" onClick={() => setIsMobileMenuOpen(false)}>Berita</Link>
                    <Link className="text-[#181111] dark:text-gray-200 hover:text-primary text-sm font-medium transition-colors" href="/kontak" onClick={() => setIsMobileMenuOpen(false)}>Kontak</Link>
                    <Link href="/ppdb" className="bg-primary hover:bg-primary-dark text-white text-sm font-bold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 w-fit" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="material-symbols-outlined text-[20px]">edit_document</span>
                        <span>Daftar PPDB</span>
                    </Link>
                </div>
            )}
        </nav>
    );
}

