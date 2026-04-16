"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    Award,
    ExternalLink,
    Search,
    Filter,
    X,
} from "lucide-react";
import { slugify } from "@/constants/styleUtils";
import AnimatedStars from "@/components/AnimatedStars";
import patentsData from "@/data/patents.json";

type Patent = {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    applications: string[];
    website: string;
};

// Helper function to check if patent has a valid website
const hasValidWebsite = (patent: Patent): boolean => {
    return typeof patent.website === 'string' && patent.website.trim() !== "";
};

// Helper function to get the appropriate link and button text
const getPatentLink = (patent: Patent) => {
    if (hasValidWebsite(patent)) {
        return {
            href: patent.website,
            isExternal: true,
            buttonText: "Visit Website"
        };
    } else {
        return {
            href: `/${slugify(patent.title)}`,
            isExternal: false,
            buttonText: "Learn More"
        };
    }
};

export default function PatentsPage() {
    // always present patents sorted alphabetically by title so new entries auto-position correctly
    const allPatents: Patent[] = [...patentsData].sort((a, b) => a.title.localeCompare(b.title));

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [selectedPatent, setSelectedPatent] = useState<Patent | null>(null);

    const openPatentModal = (patent: Patent) => {
        setSelectedPatent(patent);
    };

    const closePatentModal = () => {
        setSelectedPatent(null);
    };

    const categories = useMemo(
        () => ["All", ...Array.from(new Set(allPatents.map((p) => p.category)))],
        [allPatents]
    );

    const filteredPatents = useMemo(() => {
        const q = searchTerm.trim().toLowerCase();
        return allPatents.filter((p) => {
            const inCat = selectedCategory === "All" || p.category === selectedCategory;
            const inText = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
            return inCat && inText;
        });
    }, [allPatents, searchTerm, selectedCategory]);

    return (
        <div className="page-shell">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 theme-grid opacity-[0.18]" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <AnimatedStars count={300} />
            </div>

            <section className="relative z-10 pt-20 pb-12 px-4 text-center">
                <div className="max-w-7xl mx-auto">
                    <Link
                        href="/"
                        className="page-back-link mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm">Back to Home</span>
                    </Link>

                    <h1 className="theme-title text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Patent Portfolio
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-3">
                        77 Filed Patents Spanning Multiple Industries
                    </p>
                    <p className="text-sm md:text-base max-w-2xl mx-auto section-tech-subtitle">
                        From world-changing defense systems to life-saving medical breakthroughs, explore a comprehensive collection
                        of patents that represent the cutting edge of innovation across technology, healthcare, and beyond.
                    </p>

                    <div className="flex justify-center gap-6 mt-8 flex-wrap">
                        <Stat label="Patents Filed" value={allPatents.length.toString()} color="text-red-400" />
                        <Stat label="Categories" value={categories.length - 1} color="text-blue-400" />
                        <Stat label="Years Experience" value="26+" color="text-white" />
                    </div>

                    <div className="section-tech-rule mt-6" />
                </div>
            </section>

            <section className="relative z-10 px-4 mb-12">
                <div className="max-w-7xl mx-auto flex flex-col gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white w-4 h-4" />
                        <input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search patents..."
                            className="tech-input pl-10 pr-4 py-3 text-sm"
                        />
                    </div>

                    <button
                        onClick={() => setShowFilters((s) => !s)}
                        className="hero-cta-nav inline-flex self-center rounded-[999px] px-6 py-3 text-white"
                    >
                        <span className="hero-cta-nav-inner">
                            <span className="hero-cta-nav-label">{showFilters ? "Hide Filters" : "Show Filters"}</span>
                            <span className="home-cta-icon-badge">
                                <Filter className="w-4 h-4" />
                            </span>
                        </span>
                    </button>

                    {showFilters && (
                        <div className="flex flex-wrap gap-2 p-3 theme-panel-soft rounded-xl">
                            {categories.map((c) => (
                                <button
                                    key={c}
                                    onClick={() => setSelectedCategory(c)}
                                    className={`tech-filter-chip px-3 py-1.5 text-xs font-medium ${selectedCategory === c
                                            ? "tech-filter-chip-active"
                                            : ""
                                        }`}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <section className="relative z-10 px-4 pb-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPatents.map((patent) => (
                        <PatentCard key={patent.id} patent={patent} onImageClick={openPatentModal} />
                    ))}

                    {filteredPatents.length === 0 && (
                        <div className="col-span-full text-center text-gray-400">
                            No patents found matching your criteria.
                        </div>
                    )}
                </div>
            </section>

            <footer className="relative z-10 border-t border-[#243552]">
                <div className="max-w-4xl mx-auto px-4 py-12 text-center">
                    <Award className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">Interested in Licensing or Collaboration?</h2>
                    <p className="section-tech-subtitle mb-6 max-w-2xl mx-auto text-sm md:text-base">
                        These world-changing innovations represent breakthrough opportunities across defense, healthcare, energy,
                        and beyond. Explore partnership opportunities for technology transfer and commercial applications.
                    </p>

                    <div className="theme-panel-soft rounded-2xl p-4 mb-6 max-w-sm mx-auto">
                        <div className="text-white mb-2">
                            <strong>Nathan Reardon</strong>
                        </div>
                        <div className="text-[#c7d4e6] text-xs md:text-sm space-y-1">
                            <div>nathan@membershipauto.com</div>
                            <div>PO Box 52, Detroit, ME 04929</div>
                        </div>
                    </div>

                    <Link
                        href="/contact"
                        className="hero-cta-nav home-cta inline-flex"
                    >
                        <span className="hero-cta-nav-inner">
                            <span className="hero-cta-nav-label">Get in Touch</span>
                            <span className="home-cta-icon-badge">
                                <ExternalLink className="w-4 h-4" />
                            </span>
                        </span>
                    </Link>
                </div>
            </footer>

            {selectedPatent && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="theme-modal-shell relative max-w-5xl max-h-[90vh] w-full overflow-hidden">
                        <button
                            onClick={closePatentModal}
                            className="theme-modal-control absolute top-4 right-4 z-[80] h-11 w-11 text-white"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="flex flex-col lg:flex-row max-h-[90vh] overflow-y-auto">
                            <div className="relative lg:w-1/2 h-64 lg:h-96">
                                <Image
                                    src={selectedPatent.image}
                                    alt={selectedPatent.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                
                                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-blue-400 px-3 py-2 rounded-full text-sm">
                                    {selectedPatent.category}
                                </div>
                            </div>

                            <div className="lg:w-1/2 p-8">
                                <h2 className="theme-title text-3xl font-bold mb-4">
                                    {selectedPatent.title}
                                </h2>

                                <p className="text-[#c7d4e6] leading-relaxed text-lg mb-6">
                                    {selectedPatent.description}
                                </p>
                                
                                <div className="mb-8">
                                    <h3 className="text-white font-semibold text-lg mb-4">Key Applications</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {selectedPatent.applications.map((app, idx) => (
                                            <div
                                                key={idx}
                                                className="theme-panel-soft text-[#d6e0ef] px-4 py-3 rounded-lg text-sm"
                                            >
                                                {app}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {selectedPatent && hasValidWebsite(selectedPatent) && (
                                    <a
                                        href={getPatentLink(selectedPatent).href}
                                        {...(getPatentLink(selectedPatent).isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        className="hero-cta-nav home-cta inline-flex"
                                    >
                                        <span className="hero-cta-nav-inner">
                                            <span className="hero-cta-nav-label">{getPatentLink(selectedPatent).buttonText}</span>
                                            <span className="home-cta-icon-badge">
                                                <ExternalLink className="w-4 h-4" />
                                            </span>
                                        </span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

/* ---------- Small components ---------- */

function Stat({
    label,
    value,
    color,
}: {
    label: string;
    value: string | number;
    color: string;
}) {
    return (
        <div className="theme-panel-soft rounded-2xl px-5 py-4 text-center min-w-[120px]">
            <div className={`text-2xl md:text-3xl font-bold ${color}`}>{value}</div>
            <div className="text-white text-xs md:text-sm">{label}</div>
        </div>
    );
}

function PatentCard({ patent, onImageClick }: { patent: Patent; onImageClick: (patent: Patent) => void }) {
    const { href, isExternal, buttonText } = getPatentLink(patent);
    
    return (
        <div className="group relative theme-panel-soft rounded-2xl overflow-hidden hover:border-[#93c5fd]/34 transition-all duration-500 hover:scale-[1.02]">
            <div 
                className="relative h-48 overflow-hidden cursor-pointer group/image"
                onClick={() => onImageClick(patent)}
            >
                <Image
                    src={patent.image}
                    alt={patent.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-blue-400 px-2 py-1 rounded-full text-xs">
                    {patent.category}
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                        <span className="text-white text-sm font-medium">Click to expand</span>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <h3 className="text-lg font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[linear-gradient(90deg,#eef4ff_0%,#8ec7ff_58%,#d7647c_100%)] transition-all duration-300 line-clamp-2">
                    {patent.title}
                </h3>

                <p className="text-[#c7d4e6] text-xs mb-3 line-clamp-3">{patent.description}</p>

                <div className="space-y-2 mb-4">
                    <div className="text-[#8ea6c6] text-xs font-medium">Key Applications:</div>
                    <div className="flex flex-wrap gap-1">
                        {patent.applications.slice(0, 3).map((app, idx) => (
                            <span
                                key={idx}
                                className="theme-chip text-[#d6e0ef] px-2 py-1 rounded text-xs inline-block"
                                style={{ wordBreak: "break-word", maxWidth: "100%" }}
                            >
                                {app}
                            </span>
                        ))}
                    </div>
                </div>

                {hasValidWebsite(patent) && (
                    <a
                        href={href}
                        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="hero-cta-nav inline-flex rounded-[999px] px-4 py-2 text-sm text-white"
                    >
                        <span className="hero-cta-nav-inner">
                            <span className="hero-cta-nav-label">{buttonText}</span>
                            <span className="home-cta-icon-badge">
                                <ExternalLink className="w-3.5 h-3.5" />
                            </span>
                        </span>
                    </a>
                )}
            </div>
        </div>
    );
}
