"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/book.ico";

const NavBer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Books", href: "/books" },
        { name: "Listed Books", href: "/listed-books" },
        { name: "Pages to Read", href: "/page-to-read" },
    ];

    return (
        <nav className="sticky top-0 z-50 border-b border-base-200 bg-base-100/90 shadow-sm backdrop-blur-md">
            <div className="navbar container mx-auto min-h-20 px-4">

                {/* Navbar Start */}
                <div className="navbar-start gap-2">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="btn btn-ghost btn-circle lg:hidden"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image
                            src={logo}
                            alt="Book Vibe logo"
                            width={36}
                            height={36}
                            className="transition-transform duration-300 group-hover:rotate-12"
                        />
                        <span className="text-xl font-bold tracking-tight text-base-content sm:text-2xl">
                            Book <span className="text-success">Vibe</span>
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2 px-1 font-medium">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link   
                                    href={link.href}
                                    className="rounded-lg transition-all duration-200 hover:bg-success/10 hover:text-success"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end gap-2 sm:gap-3">
                    <Link
                        href="/login"
                        className="btn btn-ghost btn-sm sm:btn-md transition-all duration-300 hover:text-success"
                    >
                        Sign In
                    </Link>

                    <Link
                        href="/register"
                        className="btn btn-success btn-sm sm:btn-md rounded-lg px-4 text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`grid transition-all duration-300 ease-in-out lg:hidden ${isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <ul className="menu w-full gap-1 px-5 pb-4 pt-2">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-lg font-medium hover:bg-success/10 hover:text-success"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBer;
