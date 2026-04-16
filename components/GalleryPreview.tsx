import Link from "next/link";
import Image from "next/image";
import { GRADIENTS } from "@/constants/styles";
import { ChevronRight } from "lucide-react";

export default function GalleryPreview() {
    // Featured images from the gallery with names
    const featuredImages = [
        { src: "/gallery/ben-carson.jpeg", name: "Ben Carson" },
        { src: "/gallery/ceeLo-green.jpeg", name: "CeeLo Green" },
        { src: "/gallery/john-maxwell.jpeg", name: "John Maxwell" },
        { src: "/gallery/kevin-harrington.jpeg", name: "Kevin Harrington" }
    ];

    return (
        <section className="relative py-24 theme-shell overflow-hidden">
            {/* Simplified background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(90,169,255,0.12),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(194,54,82,0.08),transparent_50%)]"></div>
            </div>
            
            <div className="relative max-w-6xl mx-auto px-6 text-center">
                <h2 className={`text-5xl font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent mb-6 hero-fade-in-up`}>
                    Nathan at Work
                </h2>
                <p className="text-[#d6e0ef] text-lg mb-16 max-w-2xl mx-auto hero-fade-in-up-delay-1">
                    Behind the scenes of innovation - where ideas become reality
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16">
                    {featuredImages.map((image, i) => (
                        <div
                            key={i}
                            className="group relative theme-panel-soft aspect-square rounded-2xl overflow-hidden efficient-hover gpu-accelerated"
                        >
                            {/* Simplified image container */}
                            <div className="relative w-full h-full">
                                <Image
                                    src={image.src}
                                    alt={image.name ? `Nathan with ${image.name}` : `Nathan's ${image.src.split('/').pop()?.split('.')[0]}`}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                    loading="lazy"
                                    quality={85}
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                
                                {/* Simplified hover overlay */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Name label - Always visible at bottom */}
                                {image.name && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 pt-6">
                                        <div className="text-center">
                                            <p className="text-white font-semibold text-xs leading-tight">
                                                Nathan & <span className="text-[#8ec7ff]">{image.name}</span>
                                            </p>
                                        </div>
                                    </div>
                                )}
                                
                                {/* Simplified corner accent */}
                                <div className="absolute top-2 right-2 w-3 h-3 bg-[#d7647c] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center hero-fade-in-up-delay-2">
                    <Link
                        href="/gallery"
                        className="hero-cta-nav home-cta home-cta-wide inline-flex items-center efficient-hover"
                    >
                        <span className="hero-cta-nav-inner">
                            <span className="hero-cta-nav-label">View Full Gallery</span>
                            <span className="home-cta-icon-badge">
                                <ChevronRight className="w-4 h-4" />
                            </span>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
