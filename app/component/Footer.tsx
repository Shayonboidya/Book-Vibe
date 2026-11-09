
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaGithub,
    FaLinkedinIn,
    FaBookOpen,
    FaArrowUp,
    FaPaperPlane,
    FaEnvelope,
    FaHeart,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email.trim()) return;

        // Connect your newsletter API here.
        toast.error(`Thank you for subscribing with ${email}!`);
        setEmail("");
    };

    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative mt-20 overflow-hidden bg-neutral text-neutral-content">

            {/* Decorative Background */}
            <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-success/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 pt-16 sm:px-8 lg:px-10">

                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

                    {/* Brand Section */}
                    <div className="sm:col-span-2 lg:col-span-1">

                        <Link href="/" className="group inline-flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success text-2xl text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                                <FaBookOpen />
                            </div>

                            <span className="text-2xl font-extrabold tracking-tight">
                                Book<span className="text-success">Vibe</span>
                            </span>
                        </Link>

                        <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-content/65">
                            Discover amazing stories, explore new ideas, and
                            build your own reading journey. Your next favorite
                            book is just one click away!
                        </p>

                        {/* Social Links */}
                        <div className="mt-7 flex items-center gap-3">

                            {[
                                {
                                    icon: <FaFacebookF />,
                                    href: "https://www.facebook.com/shayon.boidya/",
                                    label: "Facebook",
                                },
                                {
                                    icon: <FaInstagram />,
                                    href: "https://www.instagram.com/shayon_boidya/",
                                    label: "Instagram",
                                },
                                {
                                    icon: <FaGithub />,
                                    href: "https://github.com/Shayonboidya",
                                    label: "GitHub",
                                },
                                {
                                    icon: <FaLinkedinIn />,
                                    href: "https://www.linkedin.com/in/shayon-boidya-108b812a3/",
                                    label: "LinkedIn",
                                },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-content/15 text-neutral-content/70 transition-all duration-300 hover:-translate-y-1 hover:border-success hover:bg-success hover:text-white"
                                >
                                    {social.icon}
                                </a>
                            ))}

                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-lg font-bold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-4 text-sm text-neutral-content/65">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Listed Books", href: "/listed-books" },
                                { name: "Pages To Read", href: "/page-to-read" },
                                { name: "About Us", href: "/about" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="inline-flex items-center transition-all duration-300 hover:translate-x-1 hover:text-success"
                                    >
                                        <span className="mr-2 text-success">›</span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="mb-6 text-lg font-bold text-white">
                            Explore
                        </h3>

                        <ul className="space-y-4 text-sm text-neutral-content/65">
                            {[
                                "Fiction",
                                "Science",
                                "Technology",
                                "History",
                                "Adventure",
                            ].map((category) => (
                                <li key={category}>
                                    <Link
                                        href="/"
                                        className="inline-flex items-center transition-all duration-300 hover:translate-x-1 hover:text-success"
                                    >
                                        <span className="mr-2 text-success">›</span>
                                        {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="sm:col-span-2 lg:col-span-1">

                        <h3 className="mb-6 text-lg font-bold text-white">
                            Stay Connected
                        </h3>

                        <p className="mb-5 text-sm leading-6 text-neutral-content/65">
                            Subscribe to our newsletter and get updates about
                            new books, reading tips, and special collections.
                        </p>

                        <form onSubmit={handleSubscribe} className="space-y-3">

                            <div className="relative">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-content/40" />

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="input w-full border-neutral-content/15 bg-neutral-content/10 pl-11 text-white placeholder:text-neutral-content/40 focus:border-success focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-success w-full rounded-lg text-white transition-all duration-300 hover:scale-[1.02]"
                            >
                                Subscribe Now
                                <FaPaperPlane />
                            </button>

                        </form>

                        <p className="mt-3 text-xs text-neutral-content/40">
                            No spam. Just books and good vibes!
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-neutral-content/10" />

                {/* Bottom Footer */}
                <div className="flex flex-col items-center justify-between gap-5 py-7 text-center sm:flex-row sm:text-left">

                    <p className="text-sm text-neutral-content/50">
                        © 2026 BookVibe. All rights reserved.
                    </p>

                    <p className="flex items-center gap-1.5 text-sm text-neutral-content/50">
                        Made by
                        <FaHeart className="text-error" />
                        Shayon Boidya
                    </p>

                    {/* Back To Top */}
                    <button
                        onClick={handleBackToTop}
                        aria-label="Back to top"
                        className="group flex items-center gap-2 rounded-full border border-neutral-content/15 px-4 py-2 text-sm transition-all duration-300 hover:border-success hover:bg-success hover:text-white"
                    >
                        Back to Top
                        <FaArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
                    </button>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
