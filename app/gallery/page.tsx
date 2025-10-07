"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { GRADIENTS } from "@/constants/styles";
import AnimatedStars from "@/components/AnimatedStars";

export default function GalleryPage() {
    // All gallery images with corresponding names
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
        { src: "/gallery/family1.jpg", name: "Family" },
        { src: "/gallery/family2.jpg", name: "Family" },
        { src: "/gallery/family3.jpg", name: "Family" },
        { src: "/ford-mustang-shelbygt500.jpeg", name: "Ford Mustang Shelby GT500" },
        { src: "/mclarenf1.jpeg", name: "McLaren F1" }
    ];

    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        
        if (direction === 'prev') {
            setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
        } else {
            setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.15),transparent_50%)]"></div>
                <AnimatedStars count={300} />
            </div>

            {/* Header */}
            <div className="relative pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Back Button */}
                    <Link
                        href="/"
                        className="inline-flex items-center text-white hover:text-white mb-8 transition-colors duration-300 group"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
                        Back to Home
                    </Link>

                    {/* Page Title */}
                    <div className="text-center">
                        <h1 className={`text-6xl font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent mb-6`}>
                            Nathan at Work
                        </h1>
                        <p className="text-xl text-white max-w-3xl mx-auto mb-4">
                            Behind the scenes of innovation - where ideas become reality
                        </p>
                        <p className="text-white max-w-2xl mx-auto">
                            From automotive systems to cutting-edge technology, witness the hands-on process 
                            of turning bold concepts into breakthrough solutions.
                        </p>
                        
                        {/* Decorative line */}
                        <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mt-8 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="relative max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 hover:border-red-500/50"
                            onClick={() => openModal(index)}
                        >
                            <div className="relative aspect-square">
                                <Image
                                    src={image.src}
                                    alt={`Nathan with ${image.name}`}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                    loading={index < 4 ? "eager" : "lazy"}
                                    quality={85}
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Name label - Always visible at bottom (except for photo5.jpeg and family images) */}
                                {image.src !== "/gallery/photo5.jpeg" && !image.src.includes("family") && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 pt-8">
                                        <div className="text-center">
                                            <p className="text-white font-semibold text-sm leading-tight">
                                                Nathan & <span className="text-blue-400">{image.name}</span>
                                            </p>
                                        </div>
                                    </div>
                                )}
                                
                                {/* Hover content - Search icon */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 transform translate-y-[-20px]">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Corner accent */}
                                <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for full-size images */}
            {isModalOpen && selectedImage !== null && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[70] flex items-center justify-center p-4">
                    {/* Close button - Better positioning and higher z-index */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 md:top-6 md:right-6 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300 z-[80]"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Navigation buttons */}
                    <button
                        onClick={() => navigateImage('prev')}
                        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors duration-300 z-[75]"
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>
                    
                    <button
                        onClick={() => navigateImage('next')}
                        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors duration-300 z-[75]"
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>

                    {/* Image container */}
                    <div className="relative max-w-4xl max-h-[80vh] w-full h-full flex items-center justify-center">
                        <Image
                            src={galleryImages[selectedImage].src}
                            alt={`Nathan with ${galleryImages[selectedImage].name}`}
                            width={1200}
                            height={800}
                            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
                            priority
                            quality={90}
                            className="object-contain max-w-full max-h-full rounded-lg"
                        />
                        
                        {/* Name overlay - conditional for photo5.jpeg and family images */}
                        {galleryImages[selectedImage].src !== "/gallery/photo5.jpeg" && !galleryImages[selectedImage].src.includes("family") && (
                            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-semibold">
                                Nathan with {galleryImages[selectedImage].name}
                            </div>
                        )}
                    </div>

                    {/* Image counter */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                        {selectedImage + 1} / {galleryImages.length}
                    </div>
                </div>
            )}
        </div>
    );
}
