"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    Award,
    FileText,
    ExternalLink,
    Search,
    Filter,
    X,
} from "lucide-react";
import { GRADIENTS } from "@/constants/styles";
import { slugify } from "@/constants/styleUtils";
import AnimatedStars from "@/components/AnimatedStars";

type Patent = {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    applications: string[];
    website: string;
};

// Helper function to check if patent has live website
const hasLiveWebsite = (patent: Patent): boolean => {
    return patent.title === "Vita Choice™" || patent.title === "Radiamel™";
};

// Helper function to get the appropriate link and button text
const getPatentLink = (patent: Patent) => {
    if (hasLiveWebsite(patent)) {
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
    const allPatents: Patent[] = [
        {
            id: 1,
            title: "Apex Air™ with Swarm",
            category: "Defense Technology",
            image: "/patents/apex-air.png",
            description:
                "Autonomous Aerial Security Grid deploying fleets of coordinated drones operating as an intelligent swarm. These drones provide 360° surveillance, real-time threat analysis, and rapid response in urban, battlefield, or event settings.",
            applications: [
                "Crowd safety",
                "Border defense",
                "Critical infrastructure protection",
                "Law enforcement",
            ],
            website: "https://apexair.com",
        },
        {
            id: 2,
            title: "Apex Alert™",
            category: "Security Technology",
            image: "/patents/apex-alert.png",
            description:
                "AI-Powered Threat Detection and Early Warning system integrating advanced sensors and artificial intelligence to identify weapons, contraband, or suspicious behavior before danger escalates.",
            applications: ["Schools", "Airports", "Correctional facilities", "Public venues"],
            website: "https://theapexalert.com",
        },
        {
            id: 3,
            title: "Apex Drone & Garage™",
            category: "Security Technology",
            image: "/patents/apex-defender.png",
            description:
                "Autonomous Aerial Policing and Support System equipped with full-spectrum vision systems capable of seeing through tinted glass, detecting concealed weapons, and scanning for drugs or threats.",
            applications: [
                "Urban law enforcement",
                "Officer safety",
                "Threat assessment",
                "Non-lethal policing",
            ],
            website: "https://theapexdrone.com",
        },
        {
            id: 4,
            title: "AutophaShield™",
            category: "Health Technology",
            image: "/patents/auto-phashield.png",
            description:
                "Unlocking the Body's Repair Switch - safely triggers autophagy without fasting, mimicking the body's repair process on demand with potential to combat cancer, neurodegeneration, and metabolic disease.",
            applications: ["Anti-aging therapy", "Cancer treatment", "Neurodegeneration", "Metabolic health"],
            website: "https://autophashield.com",
        },
        {
            id: 5,
            title: "Core Volt™",
            category: "Energy Technology",
            image: "/patents/core-volt.png",
            description:
                "Infinite, Clean, Earth-Powered Energy system that taps directly into near-magma heat, producing limitless clean electricity without solar farms or wind turbines.",
            applications: ["Clean energy generation", "Grid independence", "Industrial power", "Climate solutions"],
            website: "https://corevoltglobal.com",
        },
        {
            id: 6,
            title: "Invisi Glass™",
            category: "Automotive Technology",
            image: "/patents/invisi-shield.png",
            description:
                "Perfect Visibility, Zero Bugs or Rain Distortion system that prevents water distortion and keeps bugs from sticking to windshields and windows.",
            applications: ["Automotive safety", "Aviation", "Marine vessels", "Building windows"],
            website: "https://invisishieldplus.com",
        },
        {
            id: 7,
            title: "Invisi Shield™",
            category: "Defense Technology",
            image: "/patents/invisi.png",
            description:
                "Affordable Vehicle & Building Armoring system offering retrofit bulletproof glass and doors for under $5,000 with minimal added weight.",
            applications: ["Police vehicles", "Civilian protection", "School security", "Emergency services"],
            website: "https://invisishieldfilm.com",
        },
        {
            id: 8,
            title: "Kirk Collar™",
            category: "Medical Technology",
            image: "/patents/kirk-collar.png",
            description:
                "Instant Trauma Response for Neck Injuries designed to slow or stop catastrophic bleeding from neck wounds in seconds using rapid, targeted compression.",
            applications: ["Military medicine", "Emergency response", "Trauma care", "First aid"],
            website: "https://kirkcollar.com",
        },
        {
            id: 9,
            title: "Never Forget™",
            category: "Safety Technology",
            image: "/patents/never-forget.png",
            description:
                "Ending Child & Pet Car Deaths Forever using seat sensors, smartphone alerts, and escalation to emergency services to ensure no child is ever left behind.",
            applications: ["Child safety", "Pet protection", "Vehicle safety", "Emergency alert systems"],
            website: "https://neverforgetbaby.com",
        },
        {
            id: 10,
            title: "No Sweat™",
            category: "Consumer Technology",
            image: "/patents/no-sweat.png",
            description:
                "Ending Condensation Forever - a clear coating that prevents fogging and dripping on cups, pipes, windows, and vehicles.",
            applications: ["Food service", "HVAC systems", "Automotive", "Building materials"],
            website: "https://nosweatsealer.com",
        },
        {
            id: 11,
            title: "Patch Worx™",
            category: "Infrastructure",
            image: "/patents/patch-worx.png",
            description:
                "Pavement That Lasts 3× Longer using next-generation materials that repair potholes permanently and extend new pavement life by 3×.",
            applications: ["Road maintenance", "Infrastructure repair", "Municipal services", "Highway construction"],
            website: "https://patchworxpavement.com",
        },
        {
            id: 12,
            title: "Poo Gone™",
            category: "Sanitation Technology",
            image: "/patents/poo-gone.png",
            description:
                "Revolutionizing Waste Handling by chemically breaking down human and animal waste on contact, without hauling, odor, or traditional infrastructure.",
            applications: ["Disaster relief", "Developing nations", "Parks & recreation", "Agricultural waste"],
            website: "https://poogone.net",
        },
        {
            id: 13,
            title: "No Dry Starts® Oil Pump",
            category: "Automotive Technology",
            image: "/patents/no-dry-starts.jpeg",
            description:
                "Engines That Last Half a Million Miles by priming the engine with oil before ignition, preventing most engine wear that happens in the first seconds after startup.",
            applications: ["Automotive engines", "Fleet vehicles", "Marine engines", "Industrial machinery"],
            website: "https://nodrystarts.com",
        },
        {
            id: 14,
            title: "Quantus™",
            category: "Physics Technology",
            image: "/patents/quantus.png",
            description:
                "A New Law of Physics for Propulsion and Shielding representing what may be a fifth, undiscovered law of physics—an asymmetric thrust and shielding effect with no modern parallel.",
            applications: ["Aerospace", "Defense systems", "Space exploration", "Planetary protection"],
            website: "https://quantus.com",
        },
        {
            id: 15,
            title: "Radiamel™",
            category: "Medical Technology",
            image: "/patents/radia-mel.png",
            description:
                "The First True Radiation Eater - the world's only solution that can metabolically neutralize radiation before it damages the body.",
            applications: ["Cancer treatment", "Nuclear cleanup", "Medical imaging", "Space travel"],
            website: "https://radiamel.com",
        },
        {
            id: 16,
            title: "Sani Spray™",
            category: "Health Technology",
            image: "/patents/sani-spray.png",
            description:
                "Self-Sanitizing Surfaces Everywhere - automatically disinfects knobs and handles after each use, reducing spread of infections in hospitals, schools, transit hubs, and offices.",
            applications: ["Healthcare facilities", "Public transportation", "Schools", "Office buildings"],
            website: "https://sanisprayauto.com",
        },
        {
            id: 17,
            title: "Scentinel™",
            category: "Fire Safety",
            image: "/patents/scentinel.png",
            description:
                "Fires Stopped Before They Start - 'smells' hot wires and gases before combustion, preventing disasters with truly preventative fire detection.",
            applications: ["Aviation safety", "Data centers", "Residential homes", "Industrial facilities"],
            website: "https://scentinelsmoke.com",
        },
        {
            id: 18,
            title: "Solin™",
            category: "Medical Technology",
            image: "/patents/solin.png",
            description:
                "Shelf-Stable Sublingual Insulin - for the first time, insulin can be taken like a breath strip under the tongue, no refrigeration needed, with a shelf life of 18+ months.",
            applications: ["Diabetes treatment", "Developing nations", "Emergency medicine", "Patient convenience"],
            website: "https://solinstrips.com",
        },
        {
            id: 19,
            title: "Storm Defender™",
            category: "Weather Technology",
            image: "/patents/storm-defender.png",
            description:
                "Stopping Hurricanes & Tornadoes by redistributing airflow and heat on a macro-scale to diffuse catastrophic storms before they destroy lives.",
            applications: ["Disaster prevention", "Climate protection", "Insurance", "Emergency management"],
            website: "https://storm-defender.com",
        },
        {
            id: 20,
            title: "The Reardon Cancer Protocol™",
            category: "Medical Protocol",
            image: "/patents/reardon-cancer-protocol.png",
            description:
                "A Body Where Cancer Cannot Survive - combines immune modulation, natural compounds, and metabolic rebalancing to create an internal environment where cancer cannot thrive.",
            applications: ["Cancer treatment", "Immune therapy", "Preventive medicine", "Metabolic health"],
            website: "https://reardonprotocol.com",
        },
        {
            id: 21,
            title: "The Reardon Diabetes Protocol™",
            category: "Medical Protocol",
            image: "/patents/the-reardon-protocol.png",
            description:
                "The first credible path to a functional cure for both Type 2 and potentially Type 1 diabetes by restoring pancreatic and metabolic function.",
            applications: ["Type 1 diabetes", "Type 2 diabetes", "Metabolic restoration", "Chronic disease management"],
            website: "https://reardonprotocol.com",
        },
        {
            id: 22,
            title: "Vita Choice™",
            category: "Health Technology",
            image: "/patents/vita-choice.png",
            description:
                "The World's First Customizable Liquid Multivitamin delivering a liquid base with 1,100 customizable nutrients. Every bottle can be built for the individual's exact needs.",
            applications: ["Personalized nutrition", "Health supplements", "Medical nutrition", "Wellness optimization"],
            website: "https://thevitachoice.com",
        },
        {
            id: 23,
            title: "Membership Auto™",
            category: "Automotive Technology",
            image: "/patents/membership-auto.jpeg",
            description:
                "Never Pay for Car Repairs Again. Join the world's first subscription-based vehicle service & repair club. One low monthly fee. Zero surprise bills.",
            applications: [
                "Vehicle maintenance",
                "Repair services",
                "Subscription services",
                "Automotive industry",
            ],
            website: "https://membershipauto.com",
        },
        {
            id: 24,
            title: "Liberty Social™",
            category: "Social Media Technology",
            image: "/patents/liberty-social.jpeg",
            description:
                "A revolutionary social media platform designed to empower users with true freedom of expression and community engagement.",
            applications: [
                "Social networking",
                "Community building",
                "Content sharing",
                "Digital communication",
            ],
            website: "https://mylibertysocial.com",
        },
        {
            id: 25,
            title: "Freedom Teck™",
            category: "Correctional Technology",
            image: "/patents/freedomTek.png",
            description:
                "Innovative technology solutions for correctional facilities and prisoner services, facilitating communication and improving facility operations.",
            applications: [
                "Correctional facilities",
                "Prisoner services",
                "Facility management",
                "Communication systems",
            ],
            website: "https://freedomteck.com",
        },
    ];

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
                <div className="max-w-7xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center text-white hover:text-white mb-6 transition-colors duration-300 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="text-sm">Back to Home</span>
                    </Link>

                    <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent mb-4`}>
                        Patent Portfolio
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-3">
                        25 Filed Patents Spanning Multiple Industries
                    </p>
                    <p className="text-sm md:text-base max-w-2xl mx-auto text-gray-200">
                        From world-changing defense systems to life-saving medical breakthroughs, explore a comprehensive collection
                        of patents that represent the cutting edge of innovation across technology, healthcare, and beyond.
                    </p>

                    <div className="flex justify-center gap-6 mt-6">
                        <Stat label="Patents Filed" value="25" color="text-red-400" />
                        <Stat label="Categories" value={categories.length - 1} color="text-blue-400" />
                        <Stat label="Years Experience" value="26+" color="text-white" />
                    </div>

                    <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mt-6 rounded-full" />
                </div>
            </section>

            {/* Search & Filter */}
            <section className="relative z-10 px-4 mb-12">
                <div className="max-w-7xl mx-auto flex flex-col gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white w-4 h-4" />
                        <input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search patents..."
                            className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 text-sm"
                        />
                    </div>

                    <button
                        onClick={() => setShowFilters((s) => !s)}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white hover:border-blue-500 transition-all duration-300"
                    >
                        <Filter className="w-4 h-4" />
                        <span className="text-sm font-medium">{showFilters ? "Hide Filters" : "Show Filters"}</span>
                    </button>

                    {showFilters && (
                        <div className="flex flex-wrap gap-2 p-3 bg-gray-800/30 rounded-xl border border-gray-700/50">
                            {categories.map((c) => (
                                <button
                                    key={c}
                                    onClick={() => setSelectedCategory(c)}
                                    className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${selectedCategory === c
                                            ? "bg-gradient-to-r from-red-500 to-blue-500 text-white"
                                            : "bg-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-600/50"
                                        }`}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Grid */}
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

            {/* Footer CTA */}
            <footer className="relative z-10 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-t border-gray-700/50">
                <div className="max-w-4xl mx-auto px-4 py-12 text-center">
                    <Award className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">Interested in Licensing or Collaboration?</h2>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm md:text-base">
                        These world-changing innovations represent breakthrough opportunities across defense, healthcare, energy,
                        and beyond. Explore partnership opportunities for technology transfer and commercial applications.
                    </p>

                    <div className="bg-gray-800/30 rounded-2xl p-4 mb-6 max-w-sm mx-auto">
                        <div className="text-white mb-2">
                            <strong>Nathan Reardon</strong>
                        </div>
                        <div className="text-gray-300 text-xs md:text-sm space-y-1">
                            <div>nathan@membershipauto.com</div>
                            <div>PO Box 52, Detroit, ME 04929</div>
                        </div>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white px-6 py-3 rounded-2xl font-bold text-base transition-all duration-300 shadow-lg hover:shadow-red-500/25 transform hover:-translate-y-1 hover:scale-105"
                    >
                        Get in Touch
                        <ExternalLink className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </footer>

            {/* Patent Modal */}
            {selectedPatent && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="relative max-w-5xl max-h-[90vh] w-full bg-gray-900 rounded-2xl overflow-hidden">
                        {/* Close button */}
                        <button
                            onClick={closePatentModal}
                            className="absolute top-4 right-4 z-[80] bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-300"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Modal Content */}
                        <div className="flex flex-col lg:flex-row max-h-[90vh] overflow-y-auto">
                            {/* Image Section */}
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

                            {/* Content Section */}
                            <div className="lg:w-1/2 p-8">
                                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                                    {selectedPatent.title}
                                </h2>

                                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                    {selectedPatent.description}
                                </p>
                                
                                {/* Applications */}
                                <div className="mb-8">
                                    <h3 className="text-white font-semibold text-lg mb-4">Key Applications</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {selectedPatent.applications.map((app, idx) => (
                                            <div
                                                key={idx}
                                                className="bg-gray-800/50 text-gray-300 px-4 py-3 rounded-lg text-sm border border-gray-700/50"
                                            >
                                                {app}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Button */}
                                {selectedPatent && (
                                    <a
                                        href={getPatentLink(selectedPatent).href}
                                        {...(getPatentLink(selectedPatent).isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        className="inline-flex items-center bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105"
                                    >
                                        <ExternalLink className="w-5 h-5 mr-2" />
                                        {getPatentLink(selectedPatent).buttonText}
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
        <div className="text-center">
            <div className={`text-2xl md:text-3xl font-bold ${color}`}>{value}</div>
            <div className="text-white text-xs md:text-sm">{label}</div>
        </div>
    );
}

function PatentCard({ patent, onImageClick }: { patent: Patent; onImageClick: (patent: Patent) => void }) {
    const { href, isExternal, buttonText } = getPatentLink(patent);
    
    return (
        <div className="group relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-500 hover:scale-105">
            {/* Image */}
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

                {/* Click indicator overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                        <span className="text-white text-sm font-medium">Click to expand</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="text-lg font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-red-500 transition-all duration-300 line-clamp-2">
                    {patent.title}
                </h3>

                <p className="text-gray-300 text-xs mb-3 line-clamp-3">{patent.description}</p>

                {/* Applications */}
                <div className="space-y-2 mb-4">
                    <div className="text-gray-400 text-xs font-medium">Key Applications:</div>
                    <div className="flex flex-wrap gap-1">
                        {patent.applications.slice(0, 3).map((app, idx) => (
                            <span
                                key={idx}
                                className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs inline-block"
                                style={{ wordBreak: "break-word", maxWidth: "100%" }}
                            >
                                {app}
                            </span>
                        ))}
                    </div>
                </div>

                {/* CTA (preserves gradient button design) */}
                <a
                    href={href}
                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105"
                >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {buttonText}
                </a>
            </div>
        </div>
    );
}
