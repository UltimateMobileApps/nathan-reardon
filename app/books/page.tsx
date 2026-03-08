"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ShoppingCart, Check } from "lucide-react";
import { GRADIENTS } from "@/constants/styles";
import AnimatedStars from "@/components/AnimatedStars";

interface BookItem {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  price?: string;
  url?: string;
}

export default function BooksPage() {
  // Base URL for book purchases - set this when ready
  const booksBaseUrl = ""; // Leave empty to hide Order Now buttons

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
  const bookItems: BookItem[] = [
    {
      id: 1,
      name: "Both Sides of Poor and Rich",
      category: "Books",
      image: "/books/both-sides.jpeg",
      description: "Exploring perspectives from both sides of life's challenges and opportunities.",
      price: "",
      url: "both-sides",
    },
    {
      id: 2,
      name: "How to Get a Job and Keep It",
      category: "Books",
      image: "/books/get-a-job.jpeg",
      description: "Practical guide to career development and professional success.",
      price: "",
      url: "get-a-job",
    },
    {
      id: 3,
      name: "Why Liberty Is So Important",
      category: "Books",
      image: "/books/liberty.jpeg",
      description: "A comprehensive exploration of freedom, rights, and personal liberty.",
      price: "",
      url: "liberty",
    },
    {
      id: 4,
      name: "They Never Saw It Coming",
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
      name: "The Risk of Success",
      category: "Books",
      image: "/books/success-risk.png",
      description: "Understanding the risks and rewards on the path to success.",
      price: "",
      url: "success-risk",
    },
  ];

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
            <h1
              className={`text-6xl font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent mb-6`}
            >
              Books
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto mb-4">
              Explore Nathan Reardon's collection of books on innovation and entrepreneurship
            </p>
            <p className="text-white max-w-2xl mx-auto">
              From practical guides to inspirational stories, discover the wisdom and insights
              that drive breakthrough innovation and personal success.
            </p>

            {/* Decorative line */}
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mt-8 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Books Grid */}
      <div className="relative max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookItems.map((item) => {
            const isSelected = selectedItems.has(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleItemSelection(item.id)}
                className={`group relative bg-gray-800/50 backdrop-blur-sm border rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  isSelected
                    ? "border-blue-500/70 shadow-2xl shadow-blue-500/30 bg-blue-900/20"
                    : "border-gray-700/50 hover:shadow-red-500/20 hover:border-red-500/50"
                }`}
              >
                {/* Selection indicator */}
                {isSelected && (
                  <div className="absolute top-3 right-3 z-10 bg-blue-500 rounded-full p-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}

                {/* Image Container */}
                <div className="relative aspect-square bg-gray-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 border rounded-full text-xs font-semibold mb-2 ${
                      isSelected
                        ? "bg-blue-500/20 border-blue-500/30 text-blue-400"
                        : "bg-red-500/20 border-red-500/30 text-red-400"
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

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Price and CTA */}
                  <div className="flex justify-between items-center">
                    {item.price && item.price !== "" && item.price !== "0" && (
                      <span className="text-lg font-bold text-blue-400">
                        {item.price}
                      </span>
                    )}
                    {booksBaseUrl && (
                      <a
                        href={`${booksBaseUrl}${item.url}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      >
                        Order Now
                        <ShoppingCart className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Now Icon */}
        <div className="text-center mt-12">
          <button
            disabled={selectedItems.size === 0}
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold transform transition-all duration-300 ${
              selectedItems.size === 0
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-red-500 to-blue-600 text-white hover:shadow-lg hover:scale-105"
            }`}
          >
            <ShoppingCart className="w-6 h-6" />
            Order Now ({selectedItems.size})
          </button>
        </div>
      </div>
    </div>
  );
}