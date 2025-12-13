"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail } from "lucide-react";
import { GRADIENTS, STYLES, ANIMATIONS } from "@/constants/styles";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Facebook, href: "https://www.facebook.com/share/1D1W2i79M6/?mibextid=wwXIfr", label: "Facebook" },
        { icon: Twitter, href: "https://x.com/nathanreardon", label: "Twitter" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/nathanreardon/", label: "LinkedIn" },
        { icon: Instagram, href: "https://www.instagram.com/thenathanreardon?igsh=MXBjZm44MWdhYmtsMw==&utm_source=ig_contact_invite", label: "Instagram" },
    ];

  const siteLinks = [
    { name: "Home", href: "/" },
    { name: "Achievements", href: "/achievements" },
    { name: "Patents", href: "/patents" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className={`text-2xl font-bold bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent`}>
                            NATHAN <span className="text-blue-400">REARDON</span>
                        </h3>
                        <p className="text-sm font-medium text-gray-300 tracking-wide">
                            FATHER - ENTREPRENEUR - AUTHOR - INVENTOR
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Innovating across automotive, property, and health sectors with a disciplined approach, 
                            Nathan combines technical mastery (<a href="/ASE.jpeg" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1">ASE Triple Master<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>) with personal discipline 
                            (2nd Degree Black Belt) 
                            to transform bold concepts into real-world impact.
                        </p>
                        <Link
                            href="/patents"
                            className={`inline-block ${GRADIENTS.primaryCTA} text-white hover:text-white px-6 py-2 rounded-lg font-medium ${ANIMATIONS.transition} hover:shadow-lg transform hover:-translate-y-0.5`}
                        >
                            View Patents
                        </Link>
                    </div>

                    {/* Site Links */}
                    <div className="space-y-4">
                        
                        <ul className="space-y-2">
                            {siteLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Image */}
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-gray-400">
                                <MapPin size={16} className="text-red-500 flex-shrink-0" />
                                <span className="text-sm">PO Box 52
                                    Detroit, Me. 04929
                                </span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Mail size={16} className="text-red-500 flex-shrink-0" />
                                <span className="text-sm">Info@nathanreardon.com</span>
                            </div>
                        </div>

                        {/* Profile Image */}
                        <div className="flex justify-center md:justify-start">
                            <div className="w-32 h-32 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src="/nathan-img.png"
                                    alt="Nathan Reardon"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-800">
                    <div className="flex justify-center space-x-6">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="p-2 text-gray-400 hover:text-white hover:bg-red-500 rounded-full transition-all duration-300 transform hover:scale-110"
                                    aria-label={social.label}
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-6 border-t border-gray-800 text-center">
                    <p className="text-gray-400 text-sm">
                        © 1999 - {currentYear} nathanreardon.com - All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
