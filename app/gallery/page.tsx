"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedStars from "@/components/AnimatedStars";

export default function GalleryPage() {
    // Celebrities gallery
    const galleryImages = [
        { src: "/gallery/ben-carson.jpeg", name: "Ben Carson" },
        { src: "/gallery/ceeLo-green.jpeg", name: "CeeLo Green" },
        { src: "/gallery/evander-holyfield.jpeg", name: "Evander Holyfield" },
        { src: "/gallery/fat-joe.jpeg", name: "Fat Joe" },
        { src: "/gallery/jack-welsh.jpeg", name: "Jack Welsh" },
        { src: "/gallery/john-maxwell.jpeg", name: "John Maxwell" },
        { src: "/gallery/kevin-harrington.jpeg", name: "Kevin Harrington" },
        { src: "/gallery/master-p-(percy-miller).jpeg", name: "Master P (Percy Miller)" },
        { src: "/gallery/photo5.jpeg", name: "Industry Leader" },
        { src: "/gallery/vanilla-ice.jpeg", name: "Vanilla Ice" },
        { src: "/gallery/wayde-king-(tv-show-tanked).jpeg", name: "Wayde King (TV Show Tanked)" },
        { src: "/gallery/wayne-huizenga-jr.jpeg", name: "Wayne Huizenga Jr." },
        { src: "/gallery/daymond-john.jpeg", name: "Daymond John" },
        { src: "/gallery/jay-conrad-levinson.jpeg", name: "Jay Conrad Levinson" },
        { src: "/gallery/ken-blanchard.jpeg", name: "Ken Blanchard" },
        { src: "/gallery/michael-reagan.jpeg", name: "Michael Reagan" },
        { src: "/gallery/michelle-bachman.jpeg", name: "Michelle Bachman" },
        { src: "/gallery/rick-perry.jpeg", name: "Rick Perry" },
        { src: "/gallery/nathan-at-walmart-home-office.jpeg", name: "his board of advisors at Walmart Home Office" }
    ];

    // Family & Pets gallery
    const familyImages = [
        { src: "/family/me-and-my-father-mike.jpg", name: "Nathan and his father, Mike" },
        { src: "/family/my-mother-and-her-mother.jpg", name: "Nathan's mother and her mother" },
        { src: "/family/grandmother-in-greece-Ekaterina.jpg", name: "Grandmother in Greece, Ekaterina" },
        { src: "/pets/nathans-5-amazing-children.jpeg", name: "Nathan's 5 Amazing Children" },
        { src: "/pets/ryker-and-athena.jpeg", name: "Ryker and Athena" },
        { src: "/pets/diesel.jpg", name: "Diesel" }
    ];

    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeGallery, setActiveGallery] = useState<'celebrities' | 'family'>('celebrities');

    const openModal = (index: number) => {
        setSelectedImage(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    const navigateImage = (direction: 'prev' | 'next') => {
        if (selectedImage === null) return;
        
        let galleryLength = 0;
        if (activeGallery === 'celebrities') {
            galleryLength = galleryImages.length;
        } else if (activeGallery === 'family') {
            galleryLength = familyImages.length;
        }
        
        if (direction === 'prev') {
            setSelectedImage(selectedImage === 0 ? galleryLength - 1 : selectedImage - 1);
        } else {
            setSelectedImage(selectedImage === galleryLength - 1 ? 0 : selectedImage + 1);
        }
    };

    const getCurrentGallery = () => {
        if (activeGallery === 'celebrities') return galleryImages;
        if (activeGallery === 'family') return familyImages;
        return galleryImages;
    };

    return (
        <div className="page-shell">
            <div className="absolute inset-0 opacity-[0.2]">
                <div className="absolute inset-0 theme-grid"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.14),transparent_40%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.14),transparent_40%)]"></div>
                <AnimatedStars count={300} />
            </div>

            <div className="relative pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    <Link
                        href="/"
                        className="page-back-link mb-8"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </Link>

                    <div className="text-center">
                        <h1 className="theme-title text-5xl font-bold mb-6 md:text-6xl">
                            Nathan at Work
                        </h1>
                        <p className="text-xl text-white max-w-3xl mx-auto mb-4">
                            Behind the scenes of innovation - where ideas become reality
                        </p>
                        <p className="section-tech-subtitle max-w-2xl mx-auto">
                            From automotive systems to cutting-edge technology, witness the hands-on process 
                            of turning bold concepts into breakthrough solutions.
                        </p>
                        
                        <div className="section-tech-rule mt-8"></div>
                    </div>

                    <div className="flex justify-center gap-4 mt-16">
                        <button
                            onClick={() => {
                                setActiveGallery('celebrities');
                                setSelectedImage(null);
                                setIsModalOpen(false);
                            }}
                            className={`hero-cta-nav home-cta inline-flex px-8 ${
                                activeGallery === 'celebrities'
                                    ? 'hero-cta-nav-active'
                                    : ''
                            }`}
                        >
                            <span className="hero-cta-nav-inner">
                                <span className="hero-cta-nav-label">With Celebrities</span>
                            </span>
                        </button>
                        <button
                            onClick={() => {
                                setActiveGallery('family');
                                setSelectedImage(null);
                                setIsModalOpen(false);
                            }}
                            className={`hero-cta-nav home-cta inline-flex px-8 ${
                                activeGallery === 'family'
                                    ? 'hero-cta-nav-active'
                                    : ''
                            }`}
                        >
                            <span className="hero-cta-nav-inner">
                                <span className="hero-cta-nav-label">Family & Pets</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {getCurrentGallery().map((image, index) => (
                        <div
                            key={index}
                            className="group relative theme-panel-soft rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.03] hover:border-[#93c5fd]/34 hover:shadow-2xl hover:shadow-[#2f88ff]/10"
                            onClick={() => openModal(index)}
                        >
                            <div className="relative aspect-square">
                                <Image
                                    src={image.src}
                                    alt={image.name || "Gallery image"}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                    loading={index < 4 ? "eager" : "lazy"}
                                    quality={85}
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Name label - Show for celebrities and cars, not for family */}
                                {activeGallery === 'celebrities' && image.src !== "/gallery/photo5.jpeg" && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 pt-8">
                                        <div className="text-center">
                                            <p className="text-white font-semibold text-sm leading-tight">
                                                Nathan & <span className="text-blue-400">{image.name}</span>
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {activeGallery === 'family' && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 pt-8">
                                        <div className="text-center">
                                            <p className="text-white font-semibold text-xs italic opacity-80">
                                                {image.name}
                                            </p>
                                        </div>
                                    </div>
                                )}
                                
                                {/* Hover content - Search icon */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-full border border-white/10 p-3 transform translate-y-[-20px]">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-[#d7647c] to-[#93c5fd] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && selectedImage !== null && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[70] flex items-center justify-center p-4">
                    <button
                        onClick={closeModal}
                        className="theme-modal-control absolute top-4 right-4 md:top-6 md:right-6 h-11 w-11 text-white z-[80]"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <button
                        onClick={() => navigateImage('prev')}
                        className="theme-modal-control absolute left-6 top-1/2 transform -translate-y-1/2 h-14 w-14 text-white z-[75]"
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>
                    
                    <button
                        onClick={() => navigateImage('next')}
                        className="theme-modal-control absolute right-6 top-1/2 transform -translate-y-1/2 h-14 w-14 text-white z-[75]"
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>

                    <div className="theme-modal-shell relative max-w-4xl max-h-[80vh] w-full h-full flex items-center justify-center p-4">
                        <Image
                            src={getCurrentGallery()[selectedImage].src}
                            alt={getCurrentGallery()[selectedImage].name || "Gallery image"}
                            width={1200}
                            height={800}
                            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
                            priority
                            quality={90}
                            className="object-contain max-w-full max-h-full rounded-lg"
                        />
                        
                        {/* Name overlay - Show for celebrities with specific names */}
                        {activeGallery === 'celebrities' && getCurrentGallery()[selectedImage].src !== "/gallery/photo5.jpeg" && (
                            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm border border-white/10 text-white px-6 py-3 rounded-full text-lg font-semibold">
                                Nathan with {getCurrentGallery()[selectedImage].name}
                            </div>
                        )}

                        {/* Name overlay for family */}
                        {activeGallery === 'family' && (
                            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm border border-white/10 text-white px-6 py-3 rounded-full text-lg font-semibold italic">
                                {getCurrentGallery()[selectedImage].name}
                            </div>
                        )}
                    </div>

                    <div className="theme-modal-control absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 text-white">
                        {selectedImage + 1} / {getCurrentGallery().length}
                    </div>
                </div>
            )}
        </div>
    );
}
