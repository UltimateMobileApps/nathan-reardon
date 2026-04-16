import Link from "next/link";

export default function Stats() {
    const stats = [
        { label: "Years Innovating", value: "26+", href: "/gallery" },
        { label: "Patents Filed", value: "77+", href: "/patents" },
        { label: "Books Authored", value: "6", href: "#books" },
        { label: "Awards Received", value: "9", href: "/achievements" },
    ];

    return (
        <section className="relative py-20 theme-shell overflow-hidden">
            <div className="absolute inset-0 theme-grid opacity-[0.18]"></div>
            <div className="absolute inset-0 opacity-20">
                <div className="absolute left-[10%] top-12 h-72 w-72 rounded-full bg-[#c23652]/18 blur-3xl"></div>
                <div className="absolute bottom-0 right-[8%] h-80 w-80 rounded-full bg-[#2f88ff]/18 blur-3xl"></div>
            </div>
            <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-75">
                <div className="absolute left-[9%] top-20 h-2 w-2 rounded-full bg-white/75 shadow-[0_0_16px_rgba(255,255,255,0.35)]"></div>
                <div className="absolute left-[26%] top-36 h-1.5 w-1.5 rounded-full bg-[#93c5fd]/80 shadow-[0_0_12px_rgba(147,197,253,0.4)]"></div>
                <div className="absolute right-[18%] top-24 h-2 w-2 rounded-full bg-white/70 shadow-[0_0_14px_rgba(255,255,255,0.3)]"></div>
                <div className="absolute right-[11%] top-44 h-1.5 w-1.5 rounded-full bg-[#f1c1cc]/80 shadow-[0_0_12px_rgba(241,193,204,0.3)]"></div>
                <div className="absolute bottom-16 left-[18%] h-1.5 w-1.5 rounded-full bg-[#93c5fd]/75 shadow-[0_0_12px_rgba(147,197,253,0.35)]"></div>
                <div className="absolute bottom-24 right-[28%] h-2 w-2 rounded-full bg-white/75 shadow-[0_0_16px_rgba(255,255,255,0.35)]"></div>
            </div>

            <div className="absolute top-0 left-0 w-full h-1 theme-divider"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 theme-divider opacity-70"></div>

            <div className="relative max-w-6xl mx-auto px-6 text-center">
                <div className="mb-14 space-y-5">
                    <div className="space-y-4">
                        <h2 className="theme-title text-4xl font-bold md:text-5xl">
                            By The Numbers
                        </h2>
                        <div className="section-tech-rule"></div>
                    </div>
                    <p className="section-tech-subtitle mx-auto max-w-2xl text-base md:text-lg">
                        The home page proof points now carry the same cinematic chrome treatment as the hero instead of feeling like a separate module.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <Link
                            key={stat.label}
                            href={stat.href}
                            className="theme-stat-tile group block p-6 md:p-7"
                        >
                            <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
                            <div className="relative flex h-full flex-col items-center justify-center">
                                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#93c5fd]/12 bg-white/[0.03] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#8ea6c6]">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#93c5fd] shadow-[0_0_10px_rgba(147,197,253,0.65)]"></span>
                                    {stat.label}
                                </div>
                                <h3 className="theme-stat-value font-display text-4xl md:text-5xl mb-3">
                                    {stat.value}
                                </h3>
                                <p className="text-sm text-[#dce9ff]">
                                    Explore details
                                </p>
                            </div>
                            <div className="theme-divider absolute bottom-4 left-1/2 h-[2px] w-24 -translate-x-1/2 scale-x-75 opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100"></div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
