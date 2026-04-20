import Image from "next/image";
import Link from "next/link";
import { Heart, Users, Target } from "lucide-react";
import AnimatedStars from "@/components/AnimatedStars";
import FallingMoney from "@/components/FallingMoney";


export default function Hero() {
    const previewCards = [
        {
            icon: Heart,
            iconClass: "hero-icon-blue",
            title: "Father of Five",
            body: "Family values drive every business decision.",
        },
        {
            icon: Users,
            iconClass: "hero-icon-purple",
            title: "Global Network",
            body: "Collaborations with world-class executives and operators.",
        },
        {
            icon: Target,
            iconClass: "hero-icon-red",
            title: "Precision Focus",
            body: "Every solution reflects purpose and disciplined execution.",
        },
    ];

    return (
        <section className="hero-cosmos relative min-h-[100svh] overflow-hidden pb-14 pt-24 md:pb-20 md:pt-28">
            <div className="pointer-events-none absolute inset-0 opacity-70">
                <AnimatedStars count={260} />
                <FallingMoney count={12} />
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-[116px] px-6">
                <div className="hero-frame-line mx-auto max-w-[1200px]" />
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-[156px] hidden px-8 md:block">
                <div className="hero-frame-line mx-auto max-w-[860px] opacity-75" />
            </div>

            <div className="relative z-10 mx-auto max-w-[1180px] px-4 md:px-8">
                <div className="mx-auto mb-8 flex w-full max-w-[360px] flex-col items-center md:hidden">
                    <div className="relative w-full">
                        <div className="chrome-nameplate w-full overflow-hidden rounded-[22px] px-3 py-3">
                            <div className="relative mx-auto h-[270px] w-full max-w-[278px]">
                                <Image
                                    src="/new-nathan.png"
                                    alt="Nathan Reardon"
                                    fill
                                    priority
                                    className="object-contain brightness-110 contrast-105"
                                />
                            </div>
                        </div>

                        <div className="pointer-events-none absolute -bottom-4 left-6 h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                        <div className="pointer-events-none absolute bottom-1 left-14 h-3 w-3 rounded-full bg-[#8ec7ff] shadow-[0_0_14px_rgba(147,197,253,0.9)]" />
                        <div className="pointer-events-none absolute -bottom-3 left-24 h-2 w-2 rounded-full bg-[#d7647c] shadow-[0_0_12px_rgba(215,100,124,0.8)]" />
                        <div className="pointer-events-none absolute -bottom-5 right-10 h-3 w-3 rounded-full bg-white/95 shadow-[0_0_12px_rgba(255,255,255,0.75)]" />
                        <div className="pointer-events-none absolute -bottom-1 right-20 h-2.5 w-2.5 rounded-full bg-[#5aa9ff] shadow-[0_0_12px_rgba(90,169,255,0.85)]" />
                        <div className="pointer-events-none absolute top-8 -right-2 h-2 w-2 rounded-full bg-[#8ec7ff] shadow-[0_0_10px_rgba(147,197,253,0.8)]" />
                    </div>

                    <div className="relative -mt-1 h-[62px] w-full">
                        <Image
                            src="/moving-with-sense-of-urgency.png"
                            alt="Moving With A Sense Of Urgency"
                            fill
                            className="object-contain drop-shadow-[0_0_18px_rgba(147,197,253,0.18)]"
                        />
                    </div>
                </div>

                <div className="pt-10 md:pt-14">
                    <div className="chrome-nameplate nameplate-sweep mx-auto max-w-[980px] px-4 py-5 md:px-7 md:py-6">
                        <div className="relative flex items-center justify-center gap-3 md:gap-5">
                            <div className="chrome-emblem shrink-0">
                                <span className="chrome-emblem-ring chrome-emblem-ring-1" />
                                <span className="chrome-emblem-ring chrome-emblem-ring-2" />
                                <span className="chrome-emblem-ring chrome-emblem-ring-3" />
                                <span className="chrome-emblem-core" />
                                <span className="chrome-emblem-axis chrome-emblem-axis-x" />
                                <span className="chrome-emblem-axis chrome-emblem-axis-y" />
                                <span className="chrome-emblem-spark chrome-emblem-spark-a" />
                                <span className="chrome-emblem-spark chrome-emblem-spark-b" />
                            </div>
                            <h1 className="hero-name-text whitespace-nowrap text-[clamp(1.6rem,5vw,4.05rem)] leading-none">
                                NATHAN REARDON
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid items-center gap-10 md:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] md:gap-14">
                    <div className="space-y-6 text-center md:text-left">
                        <p className="font-display text-[0.82rem] tracking-[0.32em] text-[#dce9ff] md:text-[0.92rem]">
                            FATHER • ENTREPRENEUR • AUTHOR • INVENTOR
                        </p>

                        <p className="mx-auto max-w-[680px] text-base leading-8 text-[#d9e3f1] md:mx-0 md:text-[1.08rem]">
                            Nathan Reardon is a prolific American inventor, entrepreneur,
                            and strategist with 80+ patents filed and over 200 patents in development spanning 14 industries including technology, healthcare, automotive, energy, aerospace, real estate, manufacturing, and consumer products.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                            <Link
                                href="/patents"
                                className="hero-cta-nav hero-cta-nav-active font-display inline-flex min-h-11 items-center justify-center rounded-[999px] px-6 text-white"
                            >
                                <span className="hero-cta-nav-inner">
                                    <span className="hero-cta-nav-label">Explore Patents</span>
                                </span>
                            </Link>
                            <Link
                                href="/achievements"
                                className="hero-cta-nav font-display inline-flex min-h-11 items-center justify-center rounded-[999px] px-6 text-white"
                            >
                                <span className="hero-cta-nav-inner">
                                    <span className="hero-cta-nav-label">View Achievements</span>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="mx-auto hidden w-full max-w-[380px] flex-col items-center md:flex">
                        <div className="relative w-full">
                            <div className="chrome-nameplate w-full overflow-hidden rounded-[22px] px-4 py-4">
                                <div className="relative mx-auto h-[300px] w-full max-w-[290px] md:h-[330px] md:max-w-[318px]">
                                    <Image
                                        src="/new-nathan.png"
                                        alt="Nathan Reardon"
                                        fill
                                        priority
                                        className="object-contain brightness-110 contrast-105"
                                    />
                                </div>
                            </div>

                            <div className="pointer-events-none absolute -bottom-4 left-8 h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                            <div className="pointer-events-none absolute bottom-0 left-16 h-3 w-3 rounded-full bg-[#8ec7ff] shadow-[0_0_14px_rgba(147,197,253,0.9)]" />
                            <div className="pointer-events-none absolute -bottom-3 left-28 h-2 w-2 rounded-full bg-[#d7647c] shadow-[0_0_12px_rgba(215,100,124,0.8)]" />
                            <div className="pointer-events-none absolute -bottom-5 right-12 h-3 w-3 rounded-full bg-white/95 shadow-[0_0_12px_rgba(255,255,255,0.75)]" />
                            <div className="pointer-events-none absolute -bottom-1 right-24 h-2.5 w-2.5 rounded-full bg-[#5aa9ff] shadow-[0_0_12px_rgba(90,169,255,0.85)]" />
                            <div className="pointer-events-none absolute bottom-3 right-5 h-2 w-2 rounded-full bg-[#d7647c] shadow-[0_0_10px_rgba(215,100,124,0.72)]" />
                            <div className="pointer-events-none absolute top-10 -left-2 h-2 w-2 rounded-full bg-[#8ec7ff] shadow-[0_0_10px_rgba(147,197,253,0.8)]" />
                        </div>

                        <div className="relative -mt-1 h-[72px] w-full md:h-[78px]">
                            <Image
                                src="/moving-with-sense-of-urgency.png"
                                alt="Moving With A Sense Of Urgency"
                                fill
                                className="object-contain drop-shadow-[0_0_18px_rgba(147,197,253,0.18)]"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-14 md:mt-16">
                    <div className="text-center">
                        <h2 className="theme-title text-[2.1rem] font-semibold leading-tight md:text-[3.35rem]">
                            The Man Behind the Innovation
                        </h2>
                        <p className="mt-3 text-[0.96rem] text-white md:text-[1.08rem]">
                            Where family values meet unrelenting innovation
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        {previewCards.map((card) => {
                            const Icon = card.icon;

                            return (
                                <div key={card.title} className="hero-preview-card px-5 py-5 md:px-6">
                                    <div className="flex items-start gap-4">
                                        <div className={`hero-icon-tile ${card.iconClass}`}>
                                            <Icon className="h-[18px] w-[18px]" />
                                        </div>
                                        <div>
                                            <h3 className="font-display text-[1rem] text-white md:text-[1.1rem]">
                                                {card.title}
                                            </h3>
                                            <p className="mt-3 text-[0.82rem] leading-6 text-[#94a3b8] md:text-[0.88rem]">
                                                {card.body}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
