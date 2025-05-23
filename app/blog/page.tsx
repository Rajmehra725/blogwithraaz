'use client';

import { useEffect, useState, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import Head from 'next/head';
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
} from 'react-share';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { estimateReadTime } from './utils';

// BlogPost type
interface BlogPost {
    Title: string;
    Content: string;
    ImageURL: string;
    Date: string;
    Description: string;
    Tags?: string;
}

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [visibleCount, setVisibleCount] = useState(6);
    const loader = useRef(null);

    const sanitizeKeys = (obj: Record<string, any>): Record<string, any> => {
        const sanitized: Record<string, any> = {};
        Object.keys(obj).forEach((key) => {
            const trimmedKey = key.trim();
            sanitized[trimmedKey] = obj[key]?.trim?.() || obj[key];
        });
        return sanitized;
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('https://sheetdb.io/api/v1/k14x8acn4vm3a');
                const rawData = await res.json();

                const cleanedData = rawData.map((post: any) => {
                    const cleanPost = sanitizeKeys(post);
                    return {
                        Title: cleanPost.Title || '',
                        Content: cleanPost.Content || '',
                        ImageURL: cleanPost.ImageURL || '',
                        Date: cleanPost.Date || '',
                        Description: cleanPost.Description || '',
                        Tags: cleanPost.Tags || '',
                    };
                });

                setPosts(cleanedData);
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setVisibleCount((prev) => prev + 3);
            }
        });
        if (loader.current) {
            observer.observe(loader.current);
        }
        return () => {
            if (loader.current) observer.unobserve(loader.current);
        };
    }, []);

    const filteredPosts = posts.filter((post) =>
        post.Title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.Description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.Content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <Head>
                <title>Raaz's Blog</title>
                <meta name="description" content="Read Raaz's latest blog posts, tutorials and updates." />
                <meta property="og:title" content="Raaz's Blog" />
                <meta property="og:description" content="Read Raaz's latest blog posts, tutorials and updates." />
            </Head>

            <motion.section
                className="max-w-7xl mx-auto px-4 py-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    📘 Raaz's Blog
                </motion.h1>

                <motion.input
                    type="text"
                    placeholder="🔍 Search posts..."
                    className="mb-8 w-full max-w-md mx-auto block px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                />

                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="animate-pulse bg-gray-200 h-72 rounded-xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                            />
                        ))}
                    </div>
                ) : filteredPosts.length === 0 ? (
                    <p className="text-center text-red-500 animate-pulse">No posts found.</p>
                ) : (
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredPosts.slice(0, visibleCount).map((post, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform border border-gray-200 overflow-hidden flex flex-col"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                            >
                                <LazyLoadImage
                                    src={post.ImageURL}
                                    alt={post.Title}
                                    effect="blur"
                                    className="h-48 w-full object-cover"
                                />
                                <div className="p-5 flex flex-col flex-grow">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-1">
                                        {post.Title}
                                    </h2>
                                    <p className="text-xs text-gray-500 mb-1">
                                        {post.Date} · ⏱️ {estimateReadTime(post.Content)} min read
                                    </p>
                                    <p className="text-sm text-blue-600 italic mb-2">
                                        {post.Description}
                                    </p>
                                    <div className="prose prose-sm text-gray-700 line-clamp-5">
                                        <ReactMarkdown>{post.Content}</ReactMarkdown>
                                    </div>

                                    {post.Tags && (
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {post.Tags.split(',').map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded-full animate-fadeIn"
                                                >
                                                    #{tag.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex gap-3 mt-4 items-center">
                                        <FacebookShareButton url={typeof window !== 'undefined' ? window.location.href : ''}>
                                            <div className="bg-blue-600 p-2 rounded-full text-white hover:scale-110 transition-transform">
                                                <FaFacebookF className="w-4 h-4" />
                                            </div>
                                        </FacebookShareButton>
                                        <TwitterShareButton url={typeof window !== 'undefined' ? window.location.href : ''}>
                                            <div className="bg-sky-500 p-2 rounded-full text-white hover:scale-110 transition-transform">
                                                <FaTwitter className="w-4 h-4" />
                                            </div>
                                        </TwitterShareButton>
                                        <LinkedinShareButton url={typeof window !== 'undefined' ? window.location.href : ''}>
                                            <div className="bg-blue-800 p-2 rounded-full text-white hover:scale-110 transition-transform">
                                                <FaLinkedinIn className="w-4 h-4" />
                                            </div>
                                        </LinkedinShareButton>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                <div ref={loader} className="h-10"></div>
            </motion.section>
        </>
    );
}
