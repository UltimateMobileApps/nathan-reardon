"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Sparkles } from "lucide-react";
import { GRADIENTS } from "@/constants/styles";
import AnimatedStars from "@/components/AnimatedStars";
import patentsData from "@/data/patents.json";
import { slugify } from "@/constants/styleUtils";

type Patent = {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    applications: string[];
    website: string;
};

// keep sorted for potential list usages or consistent lookups
const allPatents: Patent[] = [...patentsData].sort((a, b) => a.title.localeCompare(b.title));

export default function ComingSoonPage() {
    const params = useParams();
    const router = useRouter();
    const patentName = params.patent_name as string;

    // Find patent by slug
    const patent = allPatents.find(p => {
        const slug = slugify(p.title);
        return slug === patentName;
    });

    // Redirect to home if patent not found
    useEffect(() => {
        if (!patent) {
            router.push('/');
        }
    }, [patent, router]);

    // Return null while redirecting if patent not found
    if (!patent) {
        return null;
    }

    return (
        <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-white">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <AnimatedStars count={300} />
            </div>

            {/* Header */}
            <section className="relative z-10 pt-20 pb-12 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/patents"
                        className="inline-flex items-center text-white hover:text-white mb-6 transition-colors duration-300 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="text-sm">Back to Patents</span>
                    </Link>

                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Clock className="w-8 h-8 text-blue-400" />
                        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent`}>
                            Coming Soon
                        </h1>
                    </div>
                    <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-4">
                        This revolutionary patent is currently in development
                    </p>
                    <p className="text-sm md:text-base max-w-xl mx-auto text-gray-200">
                        We're working hard to bring this innovation to market. Stay tuned for updates!
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative z-10 py-24 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Patent Image */}
                    <div className="flex items-center justify-center">
                        <div className="relative w-full max-w-md">
                            <div className="relative aspect-square rounded-2xl overflow-hidden border border-gray-700">
                                <Image
                                    src={patent.image}
                                    alt={patent.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Patent Details */}
                    <div className="space-y-8">
                        <div>
                            <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                                {patent.category}
                            </div>
                            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${GRADIENTS.heroText} bg-clip-text text-transparent`}>
                                {patent.title}
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                {patent.description}
                            </p>
                        </div>

                        {/* Applications */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Key Applications</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {patent.applications.map((app, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-gray-800/40 border border-gray-700/50 rounded-lg p-4 hover:border-blue-500/50 transition-colors duration-300"
                                    >
                                        <p className="text-gray-300 flex items-start">
                                            <Sparkles className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                                            <span>{app}</span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-8">
                            <Link
                                href="/patents"
                                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                            >
                                <span>Back to Patents</span>
                                <ArrowLeft className="w-5 h-5 ml-3 transform rotate-180" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="relative z-10 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-t border-gray-700/50">
                <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in Innovation?</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Explore all of our patents and discoveries. Each represents a breakthrough in technology, science, or engineering.
                    </p>
                    <Link
                        href="/patents"
                        className="inline-flex items-center bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
                    >
                        View All Patents
                    </Link>
                </div>
            </section>
        </div>
    );
}
