"use client";

import { Globe } from "lucide-react";
import Image from "next/image";

export default function About() {
    const expertise = [
        { area: "Automotive Systems", impact: "Revolutionary efficiency" },
        { area: "Property Development", impact: "Advanced solutions" },
        { area: "Health Technology", impact: "Next-generation care" },
        { area: "Consumer Innovation", impact: "Market-changing products" }
    ];

    return (
        <section className="relative overflow-hidden theme-shell pb-24 pt-10">
            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="mb-20 grid items-center gap-16 lg:grid-cols-2">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div className="theme-callout rounded-r-[1.4rem] border-l-4 border-[#5aa9ff] bg-[linear-gradient(180deg,rgba(13,22,41,0.92)_0%,rgba(9,16,31,0.98)_100%)] py-5 pl-8 pr-6">
                                <p className="text-[1.02rem] leading-relaxed text-white">
                                    <span className="font-semibold text-white">A lifelong problem solver</span> who balances family values with an unrelenting drive for innovation.
                                </p>
                            </div>

                            <div className="theme-callout rounded-r-[1.4rem] border-l-4 border-[#c23652] bg-[linear-gradient(180deg,rgba(13,22,41,0.92)_0%,rgba(9,16,31,0.98)_100%)] py-5 pl-8 pr-6">
                                <p className="text-[1.02rem] leading-relaxed text-white">
                                    His professional network includes <span className="font-medium text-[#8ec7ff]">collaborations and relationships with some of the world's top business executives and entrepreneurs</span>—alliances that have accelerated his ability to commercialize new technologies.
                                </p>
                            </div>

                            <div className="theme-callout rounded-r-[1.4rem] border-l-4 border-[#eef4ff] bg-[linear-gradient(180deg,rgba(13,22,41,0.92)_0%,rgba(9,16,31,0.98)_100%)] py-5 pl-8 pr-6">
                                <p className="text-[1.02rem] leading-relaxed text-white">
                                    As an <span className="font-medium text-[#f1c1cc]">ASE Triple Master</span> <a href="/ASE.jpeg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#8ec7ff] underline hover:text-[#dce9ff]"><svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a> and 2nd Degree Black Belt, he brings the same discipline to business that he does to life—turning bold ideas into lasting impact.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="theme-panel rounded-[1.7rem] border-[#7cb8ff]/25 p-10">
                            <div className="mb-7 flex items-center space-x-4">
                                <Globe className="h-9 w-9 text-[#8ec7ff]" />
                                <h3 className="text-[2rem] font-bold text-white">Global Reach, Personal Touch</h3>
                            </div>

                            <p className="mb-7 text-[1.02rem] leading-relaxed text-white">
                                From automotive systems to health solutions, every innovation reflects the same principle: turning bold ideas into lasting impact.
                            </p>

                            <div className="mb-8 grid grid-cols-2 gap-4">
                                <div className="relative aspect-video overflow-hidden rounded-[0.4rem]">
                                    <Image
                                        src="/flags/IMG-20251005-WA0017.jpg"
                                        alt="International recognition flag"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative aspect-video overflow-hidden rounded-[0.4rem]">
                                    <Image
                                        src="/flags/IMG-20251005-WA0018.jpg"
                                        alt="International recognition flag"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center gap-8 text-center">
                                <div className="text-xl font-semibold text-[#f1c1cc]">77+ Patents Filed</div>
                                <div className="text-xl font-semibold text-[#8ec7ff]">26+ Years in Business</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-12 grid items-start gap-12 md:grid-cols-2">
                    <div className="order-2 md:order-1">
                        <div className="theme-media-frame relative">
                            <Image
                                src="/progress-is-being-made.png"
                                alt="There's no such thing as self made - you need God and others"
                                width={800}
                                height={600}
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <h3 className="theme-title mb-8 text-[2.65rem] font-bold leading-tight">
                            Multi-Industry Innovation
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            {expertise.map((item, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden"
                                >
                                    <div className="theme-panel-soft h-full rounded-[1.15rem] border border-[#7cb8ff]/18 p-7 backdrop-blur-sm transition-all duration-300 hover:border-[#7cb8ff]/38">
                                        <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[linear-gradient(225deg,rgba(194,54,82,0.14)_0%,transparent_100%)]" />

                                        <h4 className="mb-4 text-[1.05rem] font-semibold text-white transition-colors group-hover:text-[#eef4ff]">
                                            {item.area}
                                        </h4>
                                        <p className="text-[0.98rem] text-[#e5eefb] transition-colors group-hover:text-white">
                                            {item.impact}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
