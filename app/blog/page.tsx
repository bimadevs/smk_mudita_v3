'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS, CATEGORIES } from './data';

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = BLOG_POSTS.filter((post) => {
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
    const remainingPosts = filteredPosts.length > 0 ? filteredPosts.slice(1) : [];

    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark pb-20">
            {/* Header Section */}
            <div className="bg-white dark:bg-[#1e1e1e] border-b border-gray-100 dark:border-gray-800">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                    <div className="flex flex-col gap-4 relative">
                        <div className="absolute left-0 top-2 h-16 w-1 bg-primary rounded-full hidden md:block"></div>
                        <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-[#181111] dark:text-white md:pl-6">
                            Berita & Kegiatan
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl md:pl-6">
                            Informasi terbaru seputar prestasi, kegiatan siswa, dan pengumuman resmi SMK Mudita Singkawang.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Search & Filter */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
                    <div className="flex gap-2 overflow-x-auto no-scrollbar w-full lg:w-auto pb-2">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                                    selectedCategory === category
                                        ? 'bg-primary text-white shadow-md'
                                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                            >
                                {category === 'All' ? 'Semua' : category}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full lg:w-80">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400">
                            search
                        </span>
                        <input
                            type="text"
                            placeholder="Cari berita..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#181111] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                    </div>
                </div>

                {filteredPosts.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center size-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                            <span className="material-symbols-outlined text-3xl text-gray-400">search_off</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#181111] dark:text-white">Tidak ada berita ditemukan</h3>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">Coba kata kunci lain atau ubah filter kategori.</p>
                    </div>
                ) : (
                    <>
                        {/* Featured Post */}
                        {featuredPost && (
                            <div className="mb-12 group">
                                <Link href={`/blog/${featuredPost.slug}`} className="block">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white dark:bg-[#1e1e1e] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
                                        <div className="relative w-full h-64 lg:h-full min-h-[300px] overflow-hidden">
                                            <Image
                                                src={featuredPost.imageUrl}
                                                alt={featuredPost.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                                                    {featuredPost.category}
                                                </span>
                                                <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                                                    {featuredPost.date}
                                                </span>
                                            </div>
                                            <h2 className="text-2xl lg:text-3xl font-bold text-[#181111] dark:text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                                                {featuredPost.title}
                                            </h2>
                                            <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                                                {featuredPost.excerpt}
                                            </p>
                                            <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                                Baca Selengkapnya
                                                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}

                        {/* Recent Posts Grid */}
                        {remainingPosts.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {remainingPosts.map((post) => (
                                    <Link key={post.id} href={`/blog/${post.slug}`} className="group h-full">
                                        <div className="bg-white dark:bg-[#1e1e1e] rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                                            <div className="relative w-full aspect-video overflow-hidden">
                                                <Image
                                                    src={post.imageUrl}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute top-4 left-4">
                                                    <span className="bg-white/90 dark:bg-black/80 backdrop-blur-sm text-[#181111] dark:text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                                                        {post.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="flex items-center gap-2 mb-3 text-xs text-gray-500 dark:text-gray-400">
                                                    <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                                                    {post.date}
                                                    <span className="mx-1">•</span>
                                                    <span>{post.author}</span>
                                                </div>
                                                <h3 className="text-xl font-bold text-[#181111] dark:text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                                    {post.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 flex-grow">
                                                    {post.excerpt}
                                                </p>
                                                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 mt-auto">
                                                    <span className="text-sm font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                                                        Baca Artikel
                                                        <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </main>
    );
}
