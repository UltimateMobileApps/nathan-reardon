"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, X, Linkedin, Instagram, MapPin, Mail, Phone, Youtube, LucideIcon } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks: Array<{
        icon?: LucideIcon;
        image?: string;
        href: string;
        label: string;
    }> = [
        { icon: Facebook, href: "https://www.facebook.com/share/1D1W2i79M6/?mibextid=wwXIfr", label: "Facebook" },
        { icon: X, href: "https://x.com/nathanreardon", label: "X" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/nathanreardon/", label: "LinkedIn" },
        { icon: Instagram, href: "https://www.instagram.com/thenathanreardon?igsh=MXBjZm44MWdhYmtsMw==&utm_source=ig_contact_invite", label: "Instagram" },
        { icon: Youtube, href: "https://youtube.com/@nathan.reardon?si=rn5YC7deGGAQXeZ0", label: "YouTube" },
        { image: "/liberty-social-icon.png", href: "https://www.mylibertysocial.com/app/users/nathan-reardon", label: "Liberty Social" },
    ];

  const siteLinks = [
    { name: "Home", href: "/" },
    { name: "Achievements", href: "/achievements" },
    { name: "Patents", href: "/patents" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

    return (
        <footer className="theme-shell relative overflow-hidden border-t border-[#243552]">
            <div className="absolute inset-0 theme-grid opacity-[0.14]"></div>
            <div className="absolute inset-0 opacity-25">
                <div className="absolute left-[8%] top-0 h-72 w-72 rounded-full bg-[#c23652]/18 blur-3xl"></div>
                <div className="absolute bottom-0 right-[10%] h-80 w-80 rounded-full bg-[#2f88ff]/18 blur-3xl"></div>
            </div>
            <div className="absolute top-0 left-0 h-px w-full theme-divider"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold theme-title">
                            NATHAN <span className="text-[#8ec7ff]">REARDON</span>
                        </h3>
                        <p className="text-sm font-medium text-[#cbd5e1] tracking-[0.24em]">
                            FATHER - ENTREPRENEUR - AUTHOR - INVENTOR
                        </p>
                        <p className="text-[#9fb0c9] leading-relaxed">
                            Innovating across automotive, property, and health sectors with a disciplined approach, 
                            Nathan combines technical mastery (<a href="/ASE.jpeg" target="_blank" rel="noopener noreferrer" className="text-[#8ec7ff] hover:text-[#dce9ff] underline inline-flex items-center gap-1">ASE Triple Master<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>) with personal discipline 
                            (2nd Degree Black Belt) 
                            to transform bold concepts into real-world impact.
                        </p>
                        <Link
                            href="/patents"
                            className="hero-cta-nav home-cta inline-flex"
                        >
                            <span className="hero-cta-nav-inner">
                                <span className="hero-cta-nav-label">View Patents</span>
                            </span>
                        </Link>
                    </div>

                    <div className="space-y-4">
                        <ul className="space-y-2">
                            {siteLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-[#9fb0c9] hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-[#9fb0c9]">
                                <MapPin size={16} className="text-[#d7647c] flex-shrink-0" />
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=PO+Box+52+Detroit,+Me.+04929"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm hover:underline"
                                >
                                    PO Box 52, Detroit, Me. 04929
                                </a>
                            </div>
                            <div className="flex items-center space-x-3 text-[#9fb0c9]">
                                <Mail size={16} className="text-[#d7647c] flex-shrink-0" />
                                <a href="mailto:Info@nathanreardon.com" className="text-sm hover:underline">
                                    Info@nathanreardon.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-3 text-[#9fb0c9]">
                                <Phone size={16} className="text-[#d7647c] flex-shrink-0" />
                                <a href="tel:207-947-1999" className="text-sm hover:underline">
                                    207-947-1999
                                </a>
                            </div>
                        </div>

                        <div className="flex justify-center md:justify-start">
                            <div className="theme-media-frame h-32 w-32 rounded-lg">
                                <Image
                                    src="/new-nathan.png"
                                    alt="Nathan Reardon"
                                    width={128}
                                    height={128}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[#243552]">
                    <div className="flex justify-center flex-wrap gap-4">
                        {socialLinks.map((social) => {
                            if (social.image) {
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-social-orb"
                                        aria-label={social.label}
                                    >
                                        <img src={social.image} alt={social.label} className="w-5 h-5" />
                                    </a>
                                );
                            }
                            if (social.icon) {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-social-orb"
                                        aria-label={social.label}
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#243552] text-center">
                    <p className="text-[#8c9ab2] text-sm">
                        © 1999 - {currentYear} nathanreardon.com - All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
