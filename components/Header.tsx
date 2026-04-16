"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Patents", "Achievements", "Gallery", "Books", "Merchandise", "Contact"];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const hrefForItem = (item: string) =>
        `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [menuOpen]);

    return (
        <>
            <header
                ref={menuRef}
                className="fixed inset-x-0 top-0 z-50 px-3 pt-2 md:px-5"
            >
                <div className={`site-nav-shell mx-auto max-w-[1320px] overflow-hidden rounded-[18px] transition-all duration-300 ${scrolled ? "shadow-[0_20px_56px_rgba(0,0,0,0.45)]" : ""}`}>
                    <div className="browser-chrome" />
                    <nav className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 md:px-10">
                        <div className="hidden w-14 md:block" />

                        <ul className="mx-auto hidden items-center justify-center gap-5 md:flex lg:gap-9">
                            {navItems.map((item) => {
                                const href = hrefForItem(item);
                                const isActive = pathname === href;

                                return (
                                    <li key={item}>
                                        <Link
                                            href={href}
                                            className={`font-display nav-link-tech ${isActive ? "nav-link-tech-active" : ""}`}
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <Link
                            href="/"
                            className="font-display text-sm tracking-[0.12em] text-[#dce9ff] md:hidden"
                        >
                            NATHAN REARDON
                        </Link>

                        <button
                            className="relative text-[#dce9ff] transition-colors duration-300 hover:text-white md:hidden"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {menuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>

                        <div className="hidden w-14 md:block" />
                    </nav>
                </div>

                {menuOpen && (
                    <div className="site-nav-shell mx-auto mt-2 max-w-[1320px] overflow-hidden rounded-[18px] md:hidden">
                        <div className="px-4 sm:px-6">
                            <ul className="flex flex-col space-y-1 py-5">
                                {navItems.map((item) => {
                                    const href = hrefForItem(item);
                                    const isActive = pathname === href;

                                    return (
                                        <li key={item}>
                                            <Link
                                                href={href}
                                                className={`flex items-center justify-between rounded-xl px-4 py-4 font-display text-sm tracking-[0.08em] transition-all duration-300 ${
                                                    isActive
                                                        ? "bg-[linear-gradient(90deg,rgba(59,130,246,0.16)_0%,rgba(255,255,255,0.04)_55%,rgba(59,130,246,0.06)_100%)] text-white"
                                                        : "text-[#c8d8f0] hover:bg-[linear-gradient(90deg,rgba(59,130,246,0.12)_0%,rgba(192,57,43,0.06)_100%)] hover:text-white"
                                                }`}
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                <span>{item}</span>
                                                <span className={`h-px w-10 rounded-full ${isActive ? "bg-[linear-gradient(90deg,rgba(59,130,246,0)_0%,rgba(147,197,253,1)_50%,rgba(59,130,246,0)_100%)]" : "bg-white/10"}`} />
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                )}
            </header>

            {menuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </>
    );
}
