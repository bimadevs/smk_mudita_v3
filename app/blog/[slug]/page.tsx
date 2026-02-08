import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getRelatedPosts } from '../data';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = getRelatedPosts(post.slug, post.category);

    return (
        <main className="bg-background-light dark:bg-background-dark min-h-screen pb-20">
            {/* Hero Image & Title */}
            <div className="relative w-full h-[50vh] min-h-[400px]">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12">
                    <div className="max-w-[1000px] mx-auto">
                        <span className="bg-primary text-white text-sm font-bold px-3 py-1.5 rounded-md uppercase tracking-wide mb-4 inline-block">
                            {post.category}
                        </span>
                        <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight mb-4">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-6 text-white/80 text-sm font-medium">
                            <span className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[20px]">person</span>
                                {post.author}
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                                {post.date}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-[1000px] mx-auto px-6 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
                <article className="prose dark:prose-invert prose-lg max-w-none">
                   <p className="lead text-xl text-gray-600 dark:text-gray-300 font-medium mb-8 border-l-4 border-primary pl-4 italic">
                       {post.excerpt}
                   </p>
                   <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>

                {/* Sidebar */}
                <aside className="space-y-8">
                    <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm sticky top-24">
                        <h3 className="text-lg font-bold text-[#181111] dark:text-white mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">
                            Bagikan
                        </h3>
                        <div className="flex gap-4">
                            <button className="flex items-center justify-center size-10 rounded-full bg-[#1877f2] text-white hover:opacity-90 transition-opacity">
                                <span className="material-symbols-outlined text-[20px]">share</span>
                            </button>
                            <button className="flex items-center justify-center size-10 rounded-full bg-[#1da1f2] text-white hover:opacity-90 transition-opacity">
                                <span className="material-symbols-outlined text-[20px]">send</span>
                            </button>
                            <button className="flex items-center justify-center size-10 rounded-full bg-[#25d366] text-white hover:opacity-90 transition-opacity">
                                <span className="material-symbols-outlined text-[20px]">chat</span>
                            </button>
                        </div>
                    </div>
                </aside>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="bg-white dark:bg-[#1e1e1e] py-16 border-t border-gray-100 dark:border-gray-800">
                    <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-[#181111] dark:text-white">Berita Terkait</h2>
                            <Link href="/blog" className="text-primary font-bold text-sm hover:underline">
                                Lihat Semua
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedPosts.map((related) => (
                                <Link key={related.id} href={`/blog/${related.slug}`} className="group">
                                    <div className="rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all">
                                        <div className="relative w-full aspect-video">
                                            <Image
                                                src={related.imageUrl}
                                                alt={related.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <span className="text-xs font-bold text-primary mb-2 block">{related.category}</span>
                                            <h3 className="text-base font-bold text-[#181111] dark:text-white line-clamp-2 group-hover:text-primary transition-colors">
                                                {related.title}
                                            </h3>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
