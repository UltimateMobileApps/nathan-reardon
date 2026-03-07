"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { COMPONENT_STYLES } from "@/constants/styles";

const navItems = ["Home", "Patents", "Achievements", "Gallery", "Books", "Merchandise", "Contact"];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    return (
        <>
            <header
                ref={menuRef}
                className={`fixed w-full z-50 transition-colors duration-300 ${scrolled
                        ? "bg-gray-900/90 backdrop-blur-md shadow-sm"
                        : "bg-transparent"
                    }`}
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                    <Link
                        href="/"
                        className={COMPONENT_STYLES.logo}
                    >
                        Nathan Reardon
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex space-x-6 lg:space-x-8 text-gray-300">
                        {navItems.map((item) => (
                            <li key={item}>
                                <Link
                                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                                    className={COMPONENT_STYLES.navLink}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-300 hover:text-white transition-colors duration-300 z-60 relative"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </nav>

                {/* Mobile Menu Dropdown */}
                {menuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-br from-gray-900/95 via-gray-950/95 to-gray-900/95 backdrop-blur-md border-t border-gray-700/50 shadow-2xl">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6">
                            <ul className="flex flex-col space-y-1 py-6">
                                {navItems.map((item, index) => (
                                    <li key={item}>
                                        <Link
                                            href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                                            className="block px-4 py-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-red-500/10 hover:to-blue-500/10 rounded-xl transition-all duration-300 border border-transparent hover:border-gray-700/50"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            <span className="flex items-center space-x-3">
                                                <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-full opacity-70"></span>
                                                <span className="font-medium">{item}</span>
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </header>

            {/* Blurred Background Overlay */}
            {menuOpen && (
                <div 
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </>
    );
}
