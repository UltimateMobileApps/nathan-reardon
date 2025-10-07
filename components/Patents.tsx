"use client";

import Image from "next/image";
import Link from "next/link";
import { COMPONENT_STYLES, GRADIENTS } from "@/constants/styles";

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
        <section className="relative py-24 bg-black overflow-hidden">
            {/* Dynamic background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            
            {/* Floating orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            
            {/* Section border */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"></div>
            
            <div className="relative max-w-7xl mx-auto px-6 text-center">
                <div>
                    <h2 className={`text-5xl font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent mb-6`}>
                        Patents & Innovations
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-red-500 mx-auto mb-16 rounded-full"></div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {patents.slice(0, 3).map((patent, index) => (
                        <a
                            key={patent.id}
                            href={patent.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-red-500 transition-all duration-300 efficient-hover hero-fade-in-up-delay-${index + 1} cursor-pointer block`}
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
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
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-red-500 transition-all duration-300">
                                    {patent.title}
                                </h3>
                                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent group-hover:via-red-500 transition-colors duration-300"></div>
                                
                                {/* Visit website text */}
                                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-blue-400 text-sm font-medium">Visit Website →</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="hero-fade-in-up-delay-4">
                    <Link
                        href="/patents"
                        className={`${COMPONENT_STYLES.heroButton} efficient-hover`}
                    >
                        <span className="relative z-10">View All Patents</span>
                        <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
