"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ShoppingCart, ExternalLink, Check } from "lucide-react";
import AnimatedStars from "@/components/AnimatedStars";

interface MerchandiseItem {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  price?: string;
  url?: string;
}

export default function MerchandisePage() {
  // Base URL for merchandise purchases - set this when ready
  const merchandiseBaseUrl = ""; // Leave empty to hide Shop buttons

  // Selected items state
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  // Toggle item selection
  const toggleItemSelection = (itemId: number) => {
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  // Book items - based on actual images in public/books
  const bookItems: MerchandiseItem[] = [
    {
      id: 1,
      name: "Both Sides",
      category: "Books",
      image: "/books/both-sides.jpeg",
      description: "Exploring perspectives from both sides of life's challenges and opportunities.",
      price: "",
      url: "both-sides",
    },
    {
      id: 2,
      name: "Get a Job",
      category: "Books",
      image: "/books/get-a-job.jpeg",
      description: "Practical guide to career development and professional success.",
      price: "",
      url: "get-a-job",
    },
    {
      id: 3,
      name: "Liberty",
      category: "Books",
      image: "/books/liberty.jpeg",
      description: "A comprehensive exploration of freedom, rights, and personal liberty.",
      price: "",
      url: "liberty",
    },
    {
      id: 4,
      name: "Never Saw It",
      category: "Books",
      image: "/books/never-saw-it.png",
      description: "Uncovering hidden truths and perspectives you never saw coming.",
      price: "",
      url: "never-saw-it",
    },
    {
      id: 5,
      name: "Overwhelming Force",
      category: "Books",
      image: "/books/overwhelming-force.jpeg",
      description: "Harnessing the power of overwhelming force for breakthrough results.",
      price: "",
      url: "overwhelming-force",
    },
    {
      id: 6,
      name: "Success Risk",
      category: "Books",
      image: "/books/success-risk.png",
      description: "Understanding the risks and rewards on the path to success.",
      price: "",
      url: "success-risk",
    },
  ];

  // Other merchandise items - based on actual images in public/merch
  const merchandiseItems: MerchandiseItem[] = [
    {
      id: 7,
      name: "Addicted to Assets",
      category: "Books",
      image: "/merch/addicted-to-assets.png",
      description: "A comprehensive guide to building and managing assets for long-term wealth and financial freedom.",
      price: "",
      url: "addicted-to-assets",
    },
    {
      id: 8,
      name: "Break the Ice Age Cycle",
      category: "Books",
      image: "/merch/break-the-ice-age-cycle.png",
      description: "Break free from limiting cycles and unlock your potential for breakthrough success.",
      price: "",
      url: "break-the-ice-age-cycle",
    },
    {
      id: 9,
      name: "God is Never Late",
      category: "Books",
      image: "/merch/god-is-never-late-front.png",
      description: "Inspiring stories and lessons about divine timing and perseverance in the face of challenges.",
      price: "",
      url: "god-is-never-late",
    },
    {
      id: 10,
      name: "I Was Built for This",
      category: "Motivational",
      image: "/merch/i-was-built for-this.png",
      description: "A powerful reminder that you were created for greatness and equipped for your purpose.",
      price: "",
      url: "i-was-built-for-this",
    },
    {
      id: 11,
      name: "Performance Energy Drink",
      category: "Beverages",
      image: "/merch/performance-energy-drink.png",
      description: "High-performance energy drink designed for peak mental and physical performance.",
      price: "",
      url: "performance-energy-drink",
    },
    {
      id: 12,
      name: "God is Never Late (Alternate Cover)",
      category: "Books",
      image: "/merch/god-is-never-late.png",
      description: "Alternative cover design for the inspiring book about divine timing and perseverance.",
      price: "",
      url: "god-is-never-late-alt",
    },
  ];

  const categories = Array.from(
    new Set(merchandiseItems.map((item) => item.category))
  );

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
            <h1 className="theme-title text-5xl md:text-6xl font-bold mb-6">
              Official Merchandise
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto mb-4">
              Celebrate innovation with exclusive Nathan Reardon branded products
            </p>
            <p className="section-tech-subtitle max-w-2xl mx-auto">
              From everyday essentials to collector's items, showcase your passion for
              entrepreneurship and breaking boundaries.
            </p>

            <div className="section-tech-rule mt-8"></div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pb-16">
        <div className="text-center mb-12">
          <h2 className="theme-title text-4xl font-bold mb-4">Merchandise</h2>
          <div className="section-tech-rule w-24"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {merchandiseItems.map((item) => {
            const isSelected = selectedItems.has(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleItemSelection(item.id)}
                className={`group relative theme-panel-soft rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer ${
                  isSelected
                    ? "border-[#93c5fd]/60 shadow-2xl shadow-[#2f88ff]/20 bg-[#12213b]/80"
                    : "hover:shadow-[#2f88ff]/10 hover:border-[#93c5fd]/30"
                }`}
              >
                {isSelected && (
                  <div className="absolute top-3 right-3 z-10 bg-[#3b82f6] rounded-full p-1 shadow-[0_0_16px_rgba(59,130,246,0.35)]">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}

                <div className="relative aspect-square bg-[#07101f] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-5">
                  <div className="mb-3">
                    <span className={`theme-chip inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                      isSelected
                        ? "text-blue-300"
                        : "text-red-300"
                    }`}>
                      {item.category}
                    </span>
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                      isSelected
                        ? "text-blue-400"
                        : "text-white group-hover:text-blue-400"
                    }`}>
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-[#aebcd1] text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center">
                    {item.price && item.price !== "" && item.price !== "0" && (
                      <span className="text-lg font-bold text-blue-400">
                        {item.price}
                      </span>
                    )}
                    {merchandiseBaseUrl && (
                      <a
                        href={`${merchandiseBaseUrl}${item.url}`}
                        className="hero-cta-nav inline-flex rounded-[999px] px-4 py-2 text-sm text-white"
                      >
                        <span className="hero-cta-nav-inner">
                          <span className="hero-cta-nav-label">Shop</span>
                          <span className="home-cta-icon-badge">
                            <ExternalLink className="w-3.5 h-3.5" />
                          </span>
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pb-16">
        <div className="text-center mb-12">
          <h2 className="theme-title text-4xl font-bold mb-4">Books</h2>
          <div className="section-tech-rule w-24"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookItems.map((item) => {
            const isSelected = selectedItems.has(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleItemSelection(item.id)}
                className={`group relative theme-panel-soft rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer ${
                  isSelected
                    ? "border-[#93c5fd]/60 shadow-2xl shadow-[#2f88ff]/20 bg-[#12213b]/80"
                    : "hover:shadow-[#2f88ff]/10 hover:border-[#93c5fd]/30"
                }`}
              >
                {isSelected && (
                  <div className="absolute top-3 right-3 z-10 bg-[#3b82f6] rounded-full p-1 shadow-[0_0_16px_rgba(59,130,246,0.35)]">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}

                <div className="relative aspect-square bg-[#07101f] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-5">
                  <div className="mb-3">
                    <span className={`theme-chip inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                      isSelected
                        ? "text-blue-300"
                        : "text-red-300"
                    }`}>
                      {item.category}
                    </span>
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                      isSelected
                        ? "text-blue-400"
                        : "text-white group-hover:text-blue-400"
                    }`}>
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-[#aebcd1] text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center">
                    {item.price && item.price !== "" && item.price !== "0" && (
                      <span className="text-lg font-bold text-blue-400">
                        {item.price}
                      </span>
                    )}
                    {merchandiseBaseUrl && (
                      <a
                        href={`${merchandiseBaseUrl}${item.url}`}
                        className="hero-cta-nav inline-flex rounded-[999px] px-4 py-2 text-sm text-white"
                      >
                        <span className="hero-cta-nav-inner">
                          <span className="hero-cta-nav-label">Shop</span>
                          <span className="home-cta-icon-badge">
                            <ExternalLink className="w-3.5 h-3.5" />
                          </span>
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            disabled={selectedItems.size === 0}
            className={`hero-cta-nav inline-flex rounded-[999px] px-8 py-4 text-white ${
              selectedItems.size === 0
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <span className="hero-cta-nav-inner">
              <span className="hero-cta-nav-label">Order Now ({selectedItems.size})</span>
              <span className="home-cta-icon-badge">
                <ShoppingCart className="w-4 h-4" />
              </span>
            </span>
          </button>
        </div>
      </div>

        <div className="mt-24 text-center px-6 pb-20">
          <div className="theme-panel rounded-2xl p-12 backdrop-blur-sm max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Custom Orders & Bulk Requests
            </h2>
            <p className="section-tech-subtitle max-w-2xl mx-auto mb-8">
              Looking for custom merchandise or bulk orders? We offer personalized
              options for corporate gifts and special events.
            </p>
            <Link
              href="/contact"
              className="hero-cta-nav home-cta inline-flex"
            >
              <span className="hero-cta-nav-inner">
                <span className="hero-cta-nav-label">Get in Touch</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
  );
}
