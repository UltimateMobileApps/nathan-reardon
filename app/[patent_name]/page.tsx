"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Sparkles } from "lucide-react";
import { GRADIENTS } from "@/constants/styles";
import AnimatedStars from "@/components/AnimatedStars";

// Patent data (same as in patents page)
const allPatents = [
    {
        id: 1,
        title: "Apex Air™ with Swarm",
        status: "Pending",
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
        patentNumber: "Patent Pending",
        website: "https://apexair.com",
    },
    {
        id: 2,
        title: "Apex Alert™",
        status: "Pending",
        category: "Security Technology",
        image: "/patents/apex-alert.png",
        description:
            "AI-Powered Threat Detection and Early Warning system integrating advanced sensors and artificial intelligence to identify weapons, contraband, or suspicious behavior before danger escalates.",
        applications: ["Schools", "Airports", "Correctional facilities", "Public venues"],
        patentNumber: "Patent Pending",
        website: "https://apexalert.com",
    },
    {
        id: 3,
        title: "Apex Drone & Garage™",
        status: "Pending",
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
        patentNumber: "Patent Pending",
        website: "https://apexdrone.com",
    },
    {
        id: 4,
        title: "AutophaShield™",
        status: "Pending",
        category: "Health Technology",
        image: "/patents/auto-phashield.png",
        description:
            "Unlocking the Body's Repair Switch - safely triggers autophagy without fasting, mimicking the body's repair process on demand with potential to combat cancer, neurodegeneration, and metabolic disease.",
        applications: ["Anti-aging therapy", "Cancer treatment", "Neurodegeneration", "Metabolic health"],
        patentNumber: "Patent Pending",
        website: "https://autophashield.com",
    },
    {
        id: 5,
        title: "Core Volt™",
        status: "Pending",
        category: "Energy Technology",
        image: "/patents/core-volt.png",
        description:
            "Infinite, Clean, Earth-Powered Energy system that taps directly into near-magma heat, producing limitless clean electricity without solar farms or wind turbines.",
        applications: ["Clean energy generation", "Grid independence", "Industrial power", "Climate solutions"],
        patentNumber: "Patent Pending",
        website: "https://corevolt.com",
    },
    {
        id: 6,
        title: "Invisi Glass™",
        status: "Pending",
        category: "Automotive Technology",
        image: "/patents/invisi-shield.png",
        description:
            "Perfect Visibility, Zero Bugs or Rain Distortion system that prevents water distortion and keeps bugs from sticking to windshields and windows.",
        applications: ["Automotive safety", "Aviation", "Marine vessels", "Building windows"],
        patentNumber: "Patent Pending",
        website: "https://invisiglass.com",
    },
    {
        id: 7,
        title: "Invisi Shield™",
        status: "Pending",
        category: "Defense Technology",
        image: "/patents/invisi.png",
        description:
            "Affordable Vehicle & Building Armoring system offering retrofit bulletproof glass and doors for under $5,000 with minimal added weight.",
        applications: ["Police vehicles", "Civilian protection", "School security", "Emergency services"],
        patentNumber: "Patent Pending",
        website: "https://invisishield.com",
    },
    {
        id: 8,
        title: "Kirk Collar™",
        status: "Pending",
        category: "Medical Technology",
        image: "/patents/kirk-collar.png",
        description:
            "Instant Trauma Response for Neck Injuries designed to slow or stop catastrophic bleeding from neck wounds in seconds using rapid, targeted compression.",
        applications: ["Military medicine", "Emergency response", "Trauma care", "First aid"],
        patentNumber: "Patent Pending",
        website: "https://kirkcollar.com",
    },
    {
        id: 9,
        title: "Never Forget™",
        status: "Pending",
        category: "Safety Technology",
        image: "/patents/never-forget.png",
        description:
            "Ending Child & Pet Car Deaths Forever using seat sensors, smartphone alerts, and escalation to emergency services to ensure no child is ever left behind.",
        applications: ["Child safety", "Pet protection", "Vehicle safety", "Emergency alert systems"],
        patentNumber: "Patent Pending",
        website: "https://neverforget.com",
    },
    {
        id: 10,
        title: "No Sweat™",
        status: "Pending",
        category: "Consumer Technology",
        image: "/patents/no-sweat.png",
        description:
            "Ending Condensation Forever - a clear coating that prevents fogging and dripping on cups, pipes, windows, and vehicles.",
        applications: ["Food service", "HVAC systems", "Automotive", "Building materials"],
        patentNumber: "Patent Pending",
        website: "https://nosweat.com",
    },
    {
        id: 11,
        title: "Patch Worx™",
        status: "Pending",
        category: "Infrastructure",
        image: "/patents/patch-worx.png",
        description:
            "Pavement That Lasts 3× Longer using next-generation materials that repair potholes permanently and extend new pavement life by 3×.",
        applications: ["Road maintenance", "Infrastructure repair", "Municipal services", "Highway construction"],
        patentNumber: "Patent Pending",
        website: "https://patchworx.com",
    },
    {
        id: 12,
        title: "Poo Gone™",
        status: "Pending",
        category: "Sanitation Technology",
        image: "/patents/poo-gone.png",
        description:
            "Revolutionizing Waste Handling by chemically breaking down human and animal waste on contact, without hauling, odor, or traditional infrastructure.",
        applications: ["Disaster relief", "Developing nations", "Parks & recreation", "Agricultural waste"],
        patentNumber: "Patent Pending",
        website: "https://poogone.com",
    },
    {
        id: 13,
        title: "No Dry Starts® Oil Pump",
        status: "Pending",
        category: "Automotive Technology",
        image: "/patents/no-dry-starts.jpeg",
        description:
            "Engines That Last Half a Million Miles by priming the engine with oil before ignition, preventing most engine wear that happens in the first seconds after startup.",
        applications: ["Automotive engines", "Fleet vehicles", "Marine engines", "Industrial machinery"],
        patentNumber: "Patent Pending",
        website: "https://nodrystarts.com",
    },
    {
        id: 14,
        title: "Quantus™",
        status: "Pending",
        category: "Physics Technology",
        image: "/patents/quantus.png",
        description:
            "A New Law of Physics for Propulsion and Shielding representing what may be a fifth, undiscovered law of physics—an asymmetric thrust and shielding effect with no modern parallel.",
        applications: ["Aerospace", "Defense systems", "Space exploration", "Planetary protection"],
        patentNumber: "Patent Pending",
        website: "https://quantus.com",
    },
    {
        id: 15,
        title: "Radiamel™",
        status: "Pending",
        category: "Medical Technology",
        image: "/patents/radia-mel.png",
        description:
            "The First True Radiation Eater - the world's only solution that can metabolically neutralize radiation before it damages the body.",
        applications: ["Cancer treatment", "Nuclear cleanup", "Medical imaging", "Space travel"],
        patentNumber: "Patent Pending",
        website: "https://radiamel.com",
    },
    {
        id: 16,
        title: "Sani Spray™",
        status: "Pending",
        category: "Health Technology",
        image: "/patents/sani-spray.png",
        description:
            "Self-Sanitizing Surfaces Everywhere - automatically disinfects knobs and handles after each use, reducing spread of infections in hospitals, schools, transit hubs, and offices.",
        applications: ["Healthcare facilities", "Public transportation", "Schools", "Office buildings"],
        patentNumber: "Patent Pending",
        website: "https://sanispray.com",
    },
    {
        id: 17,
        title: "Scentinel™",
        status: "Pending",
        category: "Fire Safety",
        image: "/patents/scentinel.png",
        description:
            "Fires Stopped Before They Start - 'smells' hot wires and gases before combustion, preventing disasters with truly preventative fire detection.",
        applications: ["Aviation safety", "Data centers", "Residential homes", "Industrial facilities"],
        patentNumber: "Patent Pending",
        website: "https://scentinel.com",
    },
    {
        id: 18,
        title: "Solin™",
        status: "Pending",
        category: "Medical Technology",
        image: "/patents/solin.png",
        description:
            "Shelf-Stable Sublingual Insulin - for the first time, insulin can be taken like a breath strip under the tongue, no refrigeration needed, with a shelf life of 18+ months.",
        applications: ["Diabetes treatment", "Developing nations", "Emergency medicine", "Patient convenience"],
        patentNumber: "Patent Pending",
        website: "https://solin.com",
    },
    {
        id: 19,
        title: "Storm Defender™",
        status: "Pending",
        category: "Weather Technology",
        image: "/patents/storm-defender.png",
        description:
            "Stopping Hurricanes & Tornadoes by redistributing airflow and heat on a macro-scale to diffuse catastrophic storms before they destroy lives.",
        applications: ["Disaster prevention", "Climate protection", "Insurance", "Emergency management"],
        patentNumber: "Patent Pending",
        website: "https://stormdefender.com",
    },
    {
        id: 20,
        title: "The Reardon Cancer Protocol™",
        status: "Pending",
        category: "Medical Protocol",
        image: "/patents/reardon-cancer-protocol.png",
        description:
            "A Body Where Cancer Cannot Survive - combines immune modulation, natural compounds, and metabolic rebalancing to create an internal environment where cancer cannot thrive.",
        applications: ["Cancer treatment", "Immune therapy", "Preventive medicine", "Metabolic health"],
        patentNumber: "Patent Pending",
        website: "https://reardoncancerprotocol.com",
    },
    {
        id: 21,
        title: "The Reardon Diabetes Protocol™",
        status: "Pending",
        category: "Medical Protocol",
        image: "/patents/the-reardon-protocol.png",
        description:
            "The first credible path to a functional cure for both Type 2 and potentially Type 1 diabetes by restoring pancreatic and metabolic function.",
        applications: ["Type 1 diabetes", "Type 2 diabetes", "Metabolic restoration", "Chronic disease management"],
        patentNumber: "Patent Pending",
        website: "https://reardondiabetesprotocol.com",
    },
    {
        id: 22,
        title: "Vita Choice™",
        status: "Pending",
        category: "Health Technology",
        image: "/patents/vita-choice.png",
        description:
            "The World's First Customizable Liquid Multivitamin delivering a liquid base with 1,100 customizable nutrients. Every bottle can be built for the individual's exact needs.",
        applications: ["Personalized nutrition", "Health supplements", "Medical nutrition", "Wellness optimization"],
        patentNumber: "Patent Pending",
        website: "https://thevitachoice.com",
    },
];

export default function ComingSoonPage() {
    const params = useParams();
    const patentName = params.patent_name as string;

    // Find patent by slug
    const patent = allPatents.find(p => {
        const slug = p.title
            .toLowerCase()
            .replace(/™/g, '')
            .replace(/®/g, '')
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
        return slug === patentName;
    });

    if (!patent) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Patent Not Found</h1>
                    <Link href="/patents" className="text-blue-400 hover:text-blue-300">
                        Back to Patents
                    </Link>
                </div>
            </div>
        );
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

                    <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mt-6 rounded-full" />
                </div>
            </section>

            {/* Patent Preview */}
            <section className="relative z-10 px-4 pb-20">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
                        {/* Image */}
                        <div className="relative h-64 md:h-80 overflow-hidden">
                            <Image
                                src={patent.image}
                                alt={patent.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute top-4 left-4 bg-green-500/90 text-white px-3 py-2 rounded-full text-sm font-medium">
                                {patent.status}
                            </div>
                            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-blue-400 px-3 py-2 rounded-full text-sm">
                                {patent.category}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                                {patent.title}
                            </h2>

                            <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                {patent.description}
                            </p>

                            {/* Applications */}
                            <div className="mb-8">
                                <h3 className="text-white font-semibold text-lg mb-4">Key Applications</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {patent.applications.map((app, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-gray-800/50 text-gray-300 px-4 py-3 rounded-lg text-sm border border-gray-700/50"
                                        >
                                            {app}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Coming Soon Message */}
                            <div className="bg-gradient-to-r from-blue-500/10 to-red-500/10 border border-blue-500/20 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Sparkles className="w-6 h-6 text-blue-400" />
                                    <h3 className="text-xl font-semibold text-white">Exciting Developments Ahead</h3>
                                </div>
                                <p className="text-gray-300 mb-4">
                                    This groundbreaking technology is currently in the patent process and active development.
                                    We're building partnerships and preparing for market launch.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105"
                                    >
                                        Get Notified
                                    </Link>
                                    <Link
                                        href="/patents"
                                        className="inline-flex items-center border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300"
                                    >
                                        View All Patents
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}