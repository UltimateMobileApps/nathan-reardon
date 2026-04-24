"use client";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GRADIENTS } from "@/constants/styles";
import { booksData } from "@/data/books";

export default function Books() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [selectedBook, setSelectedBook] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const { scrollLeft, clientWidth } = scrollRef.current;
        const scrollAmount = direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8;
        
        // Use requestAnimationFrame for smoother scrolling
        requestAnimationFrame(() => {
            scrollRef.current?.scrollTo({ 
                left: scrollLeft + scrollAmount, 
                behavior: "smooth" 
            });
        });
    };

    const openModal = (index: number) => {
        setSelectedBook(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedBook(null);
        setIsModalOpen(false);
    };

    const navigateBook = (direction: 'prev' | 'next') => {
        if (selectedBook === null) return;
        
        if (direction === 'prev') {
            setSelectedBook(selectedBook === 0 ? books.length - 1 : selectedBook - 1);
        } else {
            setSelectedBook(selectedBook === books.length - 1 ? 0 : selectedBook + 1);
        }
    };

    const books = booksData;

    return (
        <section id="books" className="relative py-24 theme-shell overflow-hidden">
            {/* Optimized background particles */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-2 h-2 bg-[#d7647c] rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-[#5aa9ff] rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-[#f1c1cc] rounded-full animate-pulse delay-500"></div>
                <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-[#8ec7ff] rounded-full animate-pulse delay-1500"></div>
            </div>
            
            {/* Diagonal accent lines */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[linear-gradient(225deg,rgba(194,54,82,0.06)_0%,transparent_70%)]"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[linear-gradient(45deg,rgba(90,169,255,0.08)_0%,transparent_70%)]"></div>
            
            <div className="relative text-center">
                <h2 className={`text-5xl font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent mb-4`}>
                    Books
                </h2>
                <p className="text-[#d6e0ef] text-lg mb-16 max-w-2xl mx-auto">
                    A collection of thought-provoking works that challenge conventional wisdom and inspire innovation
                </p>
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Enhanced Left Arrow */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[linear-gradient(135deg,rgba(194,54,82,0.14)_0%,rgba(90,169,255,0.2)_100%)] backdrop-blur-md border border-[#365072] p-4 rounded-full hover:border-[#8ec7ff] transition-all duration-300 transform hover:scale-110 hidden md:flex group"
                >
                    <ChevronLeft className="text-white w-6 h-6 group-hover:text-[#f1c1cc] transition-colors" />
                </button>

                {/* Scrollable container with optimized styling */}
                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto px-1 pb-6 snap-x snap-mandatory scrollbar-hide"
                    style={{ 
                        scrollBehavior: 'smooth',
                        contain: 'layout style paint'
                    }}
                >
                    {books.map((book, index) => (
                        <div
                            key={book.title}
                            className="group flex-shrink-0 snap-center w-[85%] sm:w-[60%] md:w-[30%] relative theme-panel-soft backdrop-blur-sm p-1 rounded-2xl hover:border-[#7cb8ff] transition-all duration-300 will-change-transform cursor-pointer"
                            onClick={() => openModal(index)}
                        >
                            {/* Simplified hover effect */}
                            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(194,54,82,0.08)_0%,rgba(90,169,255,0.14)_100%)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative bg-[linear-gradient(145deg,rgba(23,33,52,0.96)_0%,rgba(9,18,37,0.98)_100%)] rounded-2xl overflow-hidden">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    {/* Click indicator */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-4 text-center">
                                    <h3 className={`text-lg font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-105`}>
                                        {book.title}
                                    </h3>
                                    <div className="w-12 h-0.5 theme-divider mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enhanced Right Arrow */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[linear-gradient(135deg,rgba(90,169,255,0.2)_0%,rgba(194,54,82,0.14)_100%)] backdrop-blur-md border border-[#365072] p-4 rounded-full hover:border-[#8ec7ff] transition-all duration-300 transform hover:scale-110 hidden md:flex group"
                >
                    <ChevronRight className="text-white w-6 h-6 group-hover:text-[#8ec7ff] transition-colors" />
                </button>

                {/* Enhanced gradient fade edges */}
                <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#040814] via-[#040814]/80 to-transparent pointer-events-none z-10" />
                <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#040814] via-[#040814]/80 to-transparent pointer-events-none z-10" />
            </div>

            {/* CTA Button */}
            <div className="mt-16 text-center">
                <a
                    href="/books"
                    className="hero-cta-nav home-cta home-cta-wide group"
                >
                    <span className="hero-cta-nav-inner">
                        <span className="hero-cta-nav-label">Browse All Books</span>
                        <span className="home-cta-icon-badge">
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                    </span>
                </a>
            </div>

            {/* Modal for full-size book covers */}
            {isModalOpen && selectedBook !== null && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    {/* Close button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 text-white hover:text-white transition-colors duration-300 z-10"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {/* Navigation buttons */}
                    <button
                        onClick={() => navigateBook('prev')}
                        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-[#8ec7ff] transition-colors duration-300 z-10"
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>
                    
                    <button
                        onClick={() => navigateBook('next')}
                        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-[#8ec7ff] transition-colors duration-300 z-10"
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>

                    {/* Book cover container */}
                    <div className="relative max-w-2xl w-full flex flex-col items-center">
                        <img
                            src={books[selectedBook].image}
                            alt={books[selectedBook].title}
                            className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                        />
                        
                        {/* Book info */}
                        <div className="mt-6 text-center">
                            <h3 className={`text-2xl md:text-3xl font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent mb-2`}>
                                {books[selectedBook].title}
                            </h3>
                            {books[selectedBook].year && (
                                <p className="text-white text-lg">
                                    Published {books[selectedBook].year}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Book counter */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                        {selectedBook + 1} / {books.length}
                    </div>
                </div>
            )}
        </section>
    );
}
