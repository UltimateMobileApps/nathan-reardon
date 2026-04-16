"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

export default function ASEStatement() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const certImages = [
    { src: "/ase-certs/IMG_1016.JPG", alt: "ASE Certificate 1" },
    { src: "/ase-certs/IMG_1017.JPG", alt: "ASE Certificate 2" },
    { src: "/ase-certs/IMG_1018.JPG", alt: "ASE Certificate 3" },
    { src: "/ase-certs/IMG_1019.JPG", alt: "ASE Certificate 4" },
    { src: "/ase-certs/IMG_1020.JPG", alt: "ASE Certificate 5" },
    { src: "/ase-certs/IMG_1021.JPG", alt: "ASE Certificate 6" },
  ];

  return (
    <section className="flex flex-col gap-8 py-16 px-4 theme-panel rounded-2xl my-12 max-w-6xl mx-auto">
      {/* PDF and ASE Logo */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <a
            href="/Status%20Letter.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-nav home-cta home-cta-wide"
          >
            <span className="hero-cta-nav-inner">
              <span className="hero-cta-nav-label">View Status Letter</span>
              <span className="home-cta-icon-badge">
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </span>
          </a>
          <p className="text-[#8c9ab2] text-sm mt-2">Click to view the ASE Statement Letter</p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/ASE.jpeg"
            alt="ASE Logo"
            width={220}
            height={220}
            className="object-contain rounded-lg shadow-md bg-white p-2"
          />
        </div>
      </div>

      {/* Certificates Gallery */}
      <div className="w-full">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">ASE Certificates</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certImages.map((image, index) => (
            <div
              key={index}
            className="relative h-64 rounded-lg overflow-hidden border border-[#31415e] shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 bg-[#101a2e]"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:opacity-75 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-96 w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={certImages[selectedImage].src}
              alt={certImages[selectedImage].alt}
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-[#8b223f] hover:bg-[#c23652] text-white rounded-full p-2 transition-colors"
            >
              ✕
            </button>
            <button
              onClick={() => setSelectedImage((selectedImage - 1 + certImages.length) % certImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-colors"
            >
              ←
            </button>
            <button
              onClick={() => setSelectedImage((selectedImage + 1) % certImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-colors"
            >
              →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
