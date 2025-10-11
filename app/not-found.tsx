"use client";

import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";
import { GRADIENTS } from "@/constants/styles";
import AnimatedStars from "@/components/AnimatedStars";

export default function NotFound() {
    return (
        <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-white">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <AnimatedStars count={300} />
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
                <div className="max-w-2xl mx-auto text-center">
                    {/* 404 Number */}
                    <div className="mb-8">
                        <h1 className={`text-8xl md:text-9xl font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent mb-4`}>
                            404
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto rounded-full" />
                    </div>

                    {/* Message */}
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
                        The page you're looking for doesn't exist or has been moved.
                        Let's get you back on track with some innovation.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/"
                            className="inline-flex items-center bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-red-500/25 transform hover:-translate-y-1 hover:scale-105"
                        >
                            <Home className="w-5 h-5 mr-2" />
                            Back to Home
                        </Link>

                        <Link
                            href="/patents"
                            className="inline-flex items-center border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                        >
                            <Search className="w-5 h-5 mr-2" />
                            Explore Patents
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="mt-12 pt-8 border-t border-gray-700/50">
                        <p className="text-gray-400 mb-4">Explore More:</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/gallery" className="text-blue-400 hover:text-blue-300 transition-colors">
                                Gallery
                            </Link>
                            <Link href="/achievements" className="text-blue-400 hover:text-blue-300 transition-colors">
                                Achievements
                            </Link>
                            <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}