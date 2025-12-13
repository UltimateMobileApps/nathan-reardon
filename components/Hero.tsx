"use client";

import Image from "next/image";
import { COMPONENT_STYLES, GRADIENTS } from "@/constants/styles";
import Link from 'next/link';
import AnimatedStars from "@/components/AnimatedStars";

export default function Hero() {
    return (
        <section className="min-h-[95vh] mb-0 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 relative overflow-hidden">
            {/* Background Blobs - Static for better performance */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-red-600/10 rounded-full blur-3xl"></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-gray-950/30 pointer-events-none" />

            {/* Animated Stars Background */}
            <div className="absolute inset-0 opacity-10">
                <AnimatedStars count={200} />
            </div>

            {/* Left Content */}
            <div className="z-10 w-full md:flex-1 text-center md:text-left space-y-6">
                {/* Global/Innovation Logo */}
                <div className="flex justify-center md:justify-start hero-fade-in-up-delay-2">
                    <div className="h-32" />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight hero-fade-in-up-delay-1">
                    <span className={`text-transparent bg-clip-text ${GRADIENTS.heroText}`}>
                        NATHAN REARDON</span>
                </h1>

                <p className="text-sm font-medium text-white tracking-widest hero-fade-in-up-delay-2">
                    FATHER • ENTREPRENEUR • AUTHOR • INVENTOR
                </p>

                <p className="text-white text-lg max-w-xl mx-auto md:mx-0 leading-relaxed hero-fade-in-up-delay-3">
                   Nathan Reardon is a prolific American inventor, entrepreneur,
                   and strategist with 25 patents filed and over 120 patents in development spanning 14 industries including technology, healthcare, automotive, energy, aerospace, real estate, manufacturing, and consumer products.
                </p>

                {/* Video Section */}
                <div className="my-8 hero-fade-in-up-delay-4">
                    <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 shadow-2xl max-w-2xl mx-auto">
                        <div className="relative w-full aspect-[3/1] rounded-xl overflow-hidden bg-black">
                            <iframe
                                className="w-full h-full rounded-lg"
                                src="https://streamable.com/e/3wwweq?muted=1&autoplay=1"
                                title="Meet Nathan Reardon - Introduction Video"
                                frameBorder="0"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2 hero-fade-in-up-delay-5">
                    <Link
                        href="/patents"
                        className={`${COMPONENT_STYLES.heroButton} efficient-hover`}>
                        <span>Explore Patents</span>
                    </Link>
                    <Link
                        href="/achievements"
                        className="inline-block border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white efficient-hover font-semibold px-6 py-3 rounded-lg shadow-sm transition-colors duration-200 text-base md:text-lg bg-transparent"
                    >
                        <span>View Achievements</span>
                    </Link>
                </div>
            </div>

            {/* Right Image with Stars at Bottom */}
            <div className="z-10 flex-1 justify-center mt-12 md:mt-0 hidden md:flex hero-image-enter">
                <div className="relative hero-float">
                    {/* Stars at the bottom of the image */}
                    <div className="absolute bottom-0 left-0 right-0 translate-y-8 flex justify-center">
                        {/* Central star cluster */}
                        <div className="relative w-full max-w-sm">
                            {/* Center star - White */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 text-white star-pulse">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-lg">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>

                            {/* Left side stars */}
                            <div className="absolute bottom-2 left-1/3 w-3 h-3 text-red-400 star-pulse-2">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-md">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <div className="absolute bottom-4 left-1/4 w-2.5 h-2.5 text-white/80 star-pulse-3">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-sm">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <div className="absolute bottom-6 left-1/5 w-3 h-3 text-blue-400 star-pulse-4">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-md">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>

                            {/* Right side stars */}
                            <div className="absolute bottom-2 right-1/3 w-3 h-3 text-blue-500 star-pulse-5">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-md">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <div className="absolute bottom-4 right-1/4 w-2.5 h-2.5 text-red-400 star-pulse-6">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-sm">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <div className="absolute bottom-6 right-1/5 w-3 h-3 text-white star-pulse-7">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-md">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    {/* Main Image Container */}
                    <div className="relative w-80 h-80 md:w-[24rem] md:h-[24rem] rounded-2xl overflow-hidden backdrop-blur-sm border border-red-700/20 shadow-2xl shadow-red-900/30">
                        <Image
                            src="/nathan-img.png"
                            alt="Nathan Reardon - Automotive Industry Leader & Innovator"
                            fill
                            className="object-contain brightness-110 contrast-105"
                            priority
                        />

                        {/* Subtle overlay glow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-red-900/5 pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
