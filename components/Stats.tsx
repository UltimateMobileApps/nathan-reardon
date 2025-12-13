import Link from "next/link";
import { GRADIENTS } from "@/constants/styles";

export default function Stats() {
    const stats = [
        { label: "Years Innovating", value: "26+", href: "/gallery" },
        { label: "Patents Filed", value: "25", href: "/patents" },
        { label: "Books Authored", value: "6", href: "#books" },
        { label: "Awards Received", value: "9", href: "/achievements" },
    ];

    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            </div>
            
            {/* American Stars Pattern */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Top row of stars */}
                <div className="absolute top-12 left-16 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50 animate-pulse"></div>
                <div className="absolute top-20 left-32 w-1.5 h-1.5 bg-red-300 rounded-full shadow-md shadow-red-300/60 animate-pulse delay-1000"></div>
                <div className="absolute top-8 left-48 w-1 h-1 bg-blue-300 rounded-full shadow-sm shadow-blue-300/70 animate-pulse delay-500"></div>
                <div className="absolute top-16 left-64 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50 animate-pulse delay-1500"></div>
                <div className="absolute top-24 left-80 w-1.5 h-1.5 bg-red-400 rounded-full shadow-md shadow-red-400/60 animate-pulse delay-300"></div>
                <div className="absolute top-12 left-96 w-1 h-1 bg-blue-400 rounded-full shadow-sm shadow-blue-400/70 animate-pulse delay-800"></div>
                
                {/* Right side stars */}
                <div className="absolute top-16 right-20 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50 animate-pulse delay-200"></div>
                <div className="absolute top-32 right-12 w-1.5 h-1.5 bg-blue-300 rounded-full shadow-md shadow-blue-300/60 animate-pulse delay-1200"></div>
                <div className="absolute top-48 right-28 w-1 h-1 bg-red-300 rounded-full shadow-sm shadow-red-300/70 animate-pulse delay-600"></div>
                <div className="absolute top-64 right-16 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50 animate-pulse delay-1800"></div>
                <div className="absolute top-80 right-32 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-md shadow-blue-400/60 animate-pulse delay-400"></div>
                
                {/* Bottom scattered stars */}
                <div className="absolute bottom-20 left-20 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50 animate-pulse delay-700"></div>
                <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-red-400 rounded-full shadow-md shadow-red-400/60 animate-pulse delay-1400"></div>
                <div className="absolute bottom-16 left-72 w-1 h-1 bg-blue-300 rounded-full shadow-sm shadow-blue-300/70 animate-pulse delay-900"></div>
                <div className="absolute bottom-28 left-88 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50 animate-pulse delay-100"></div>
                <div className="absolute bottom-40 left-96 w-1.5 h-1.5 bg-red-300 rounded-full shadow-md shadow-red-300/60 animate-pulse delay-1600"></div>
                
                {/* Center area stars */}
                <div className="absolute top-32 left-1/3 w-1 h-1 bg-blue-400 rounded-full shadow-sm shadow-blue-400/70 animate-pulse delay-1100"></div>
                <div className="absolute top-56 left-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-md shadow-white/50 animate-pulse delay-300"></div>
                <div className="absolute top-72 left-2/3 w-1 h-1 bg-red-400 rounded-full shadow-sm shadow-red-400/70 animate-pulse delay-1300"></div>
                <div className="absolute bottom-48 right-1/3 w-2 h-2 bg-blue-300 rounded-full shadow-lg shadow-blue-300/60 animate-pulse delay-500"></div>
                <div className="absolute bottom-64 right-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-md shadow-white/50 animate-pulse delay-1700"></div>
                
                {/* Additional scattered stars for density */}
                <div className="absolute top-44 left-24 w-1 h-1 bg-red-200 rounded-full shadow-sm shadow-red-200/50 animate-pulse delay-2000"></div>
                <div className="absolute top-60 right-40 w-1 h-1 bg-blue-200 rounded-full shadow-sm shadow-blue-200/50 animate-pulse delay-800"></div>
                <div className="absolute bottom-52 left-56 w-1.5 h-1.5 bg-white/80 rounded-full shadow-md shadow-white/40 animate-pulse delay-1900"></div>
                <div className="absolute top-36 right-60 w-1 h-1 bg-red-200 rounded-full shadow-sm shadow-red-200/50 animate-pulse delay-1500"></div>
                <div className="absolute bottom-36 right-52 w-2 h-2 bg-blue-200 rounded-full shadow-lg shadow-blue-200/60 animate-pulse delay-600"></div>
            </div>
            
            {/* Animated border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            
            <div className="relative max-w-6xl mx-auto px-6 text-center">
                <h2 className={`text-4xl font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent mb-16`}>
                    By The Numbers
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <Link
                            key={stat.label}
                            href={stat.href}
                            className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500 transition-all duration-300 hover:scale-105 cursor-pointer block"
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                            
                            {/* Mobile tap indicator */}
                            <div className="absolute top-2 right-2 md:hidden">
                                <svg className="w-3 h-3 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                            
                            <div className="relative">
                                <h3 className={`text-4xl font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent mb-2`}>
                                    {stat.value}
                                </h3>
                                <p className="text-white text-sm font-medium">{stat.label}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
