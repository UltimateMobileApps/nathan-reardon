"use client";

import { Users, Award, Target, Zap, Heart, Globe } from "lucide-react";
import { GRADIENTS } from "@/constants/styles";
import Image from "next/image";

export default function About() {

    const personalValues = [
        {
            icon: Heart,
            title: "Father of Five",
            description: "Family values drive every business decision"
        },
        {
            icon: Users,
            title: "Global Network",
            description: "Collaborations with world-class executives"
        },
        {
            icon: Target,
            title: "Precision Focus",
            description: "Every solution reflects purpose and execution"
        }
    ];

    const expertise = [
        { area: "Automotive Systems", impact: "Revolutionary efficiency" },
        { area: "Property Development", impact: "Advanced solutions" },
        { area: "Health Technology", impact: "Next-generation care" },
        { area: "Consumer Innovation", impact: "Market-changing products" }
    ];

    return (
        <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent mb-4`}>
                        The Man Behind the Innovation
                    </h2>
                    <p className="text-xl text-white max-w-2xl mx-auto">
                        Where family values meet unrelenting innovation
                    </p>
                </div>

                {/* Personal Values Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {personalValues.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={index}
                                className="group"
                            >
                                <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-red-500/50 transition-all duration-300">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="p-3 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-xl group-hover:from-red-500/30 group-hover:to-blue-500/30 transition-colors">
                                            <Icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                                    </div>
                                    <p className="text-white leading-relaxed">{value.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Main Story Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    
                    {/* Left: Story Content */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div className="bg-gray-800/30 border-l-4 border-blue-500 pl-6 py-4 rounded-r-lg">
                                <p className="text-white leading-relaxed">
                                    <span className="text-white font-semibold">A lifelong problem solver</span> who balances family values with an unrelenting drive for innovation.
                                </p>
                            </div>

                            <div className="bg-gray-800/30 border-l-4 border-red-500 pl-6 py-4 rounded-r-lg">
                                <p className="text-white leading-relaxed">
                                    His professional network includes <span className="text-blue-400 font-medium">collaborations and relationships with some of the world's top business executives and entrepreneurs</span>—alliances that have accelerated his ability to commercialize new technologies.
                                </p>
                            </div>

                            <div className="bg-gray-800/30 border-l-4 border-white pl-6 py-4 rounded-r-lg">
                                <p className="text-white leading-relaxed">
                                    As an <span className="text-red-400 font-medium">ASE Triple Master</span> <a href="/ASE.jpeg" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a> and 2nd Degree Black Belt, he brings the same discipline to business that he does to life—turning bold ideas into lasting impact.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Global Reach, Personal Touch */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                            <div className="flex items-center space-x-3 mb-6">
                                <Globe className="w-8 h-8 text-blue-400" />
                                <h3 className="text-2xl font-bold text-white">Global Reach, Personal Touch</h3>
                            </div>
                            
                            <p className="text-white mb-6">
                                From automotive systems to health solutions, every innovation reflects the same principle: turning bold ideas into lasting impact.
                            </p>
                            
                            {/* Flag Images */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-600">
                                    <Image
                                        src="/flags/IMG-20251005-WA0017.jpg"
                                        alt="International recognition flag"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-600">
                                    <Image
                                        src="/flags/IMG-20251005-WA0018.jpg"
                                        alt="International recognition flag"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex justify-center space-x-4">
                                <div className="px-4 py-2 bg-red-500/20 rounded-full">
                                    <span className="text-red-400 font-medium">25 Patents Filed</span>
                                </div>
                                <div className="px-4 py-2 bg-blue-500/20 rounded-full">
                                    <span className="text-blue-400 font-medium">26+ Years in Business</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Industry Expertise Grid */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-center text-white mb-12">
                        Multi-Industry Innovation
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {expertise.map((item, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden"
                            >
                                <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full hover:border-blue-500/50 transition-all duration-300">
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-500/10 to-transparent rounded-bl-full"></div>
                                    
                                    <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                        {item.area}
                                    </h4>
                                    <p className="text-white text-sm group-hover:text-white transition-colors">
                                        {item.impact}
                                    </p>
                                    
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
