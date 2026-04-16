"use client";

import Image from "next/image";
import Link from "next/link";
import { GRADIENTS } from "@/constants/styles";

export default function Patents() {
    const patents = [
        {
            id: 1,
            title: "Radiation Remediation",
            year: 2024,
            image: "/patents/radia-mel.png",
            website: "https://radiamel.com"
        },
        {
            id: 2,
            title: "Vita Choice",
            year: 2023,
            image: "/patents/vita-choice.png",
            website: "https://thevitachoice.com"
        },
        {
            id: 3,
            title: "Patch Worx",
            year: 2022,
            image: "/patents/patch-worx.png",
            website: "https://patchworx.nathanreardon.com"
        },
        {
            id: 4,
            title: "Quantum-Linked Communication Protocol",
            year: 2021,
            image: "/patents/quantum-comm.jpg",
            website: "https://quantus.nathanreardon.com"
        },
    ];

    return (
        <section className="relative py-24 bg-[#040814] overflow-hidden">
            {/* Dynamic background grid */}
            <div className="absolute inset-0 theme-grid"></div>
            
            {/* Floating orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#c23652]/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#2f88ff]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            
            {/* Section border */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 theme-divider rounded-full"></div>
            
            <div className="relative max-w-7xl mx-auto px-6 text-center">
                <div>
                    <h2 className={`text-5xl font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent mb-6`}>
                        Patents & Innovations
                    </h2>
                    <div className="w-24 h-1 theme-divider mx-auto mb-16 rounded-full"></div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {patents.slice(0, 3).map((patent, index) => (
                        <a
                            key={patent.id}
                            href={patent.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative theme-panel-soft backdrop-blur-sm rounded-2xl overflow-hidden hover:border-[#7cb8ff] transition-all duration-300 efficient-hover hero-fade-in-up-delay-${index + 1} cursor-pointer block`}
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(194,54,82,0.12)_0%,rgba(90,169,255,0.18)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <div className="relative w-full h-64 overflow-hidden">
                                <Image
                                    src={patent.image}
                                    alt={patent.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                
                                {/* External link indicator */}
                                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="relative p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[linear-gradient(90deg,#eef4ff_0%,#8ec7ff_58%,#d7647c_100%)] transition-all duration-300">
                                    {patent.title}
                                </h3>
                                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#365072] to-transparent group-hover:via-[#8ec7ff] transition-colors duration-300"></div>
                                
                                {/* Visit website text */}
                                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-[#8ec7ff] text-sm font-medium">Visit Website →</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="hero-fade-in-up-delay-4">
                    <Link
                        href="/patents"
                        className="hero-cta-nav home-cta home-cta-wide efficient-hover"
                    >
                        <span className="hero-cta-nav-inner">
                            <span className="hero-cta-nav-label">View All Patents</span>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
