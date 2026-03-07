"use client";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ButtonStyles, TextStyles, CardStyles } from "@/constants/styleUtils";
import { GRADIENTS } from "@/constants/styles";

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

    const books = [
        { title: "There Is No Such Thing As Self-Made", year: 2025, cover: "/books/there-is-no-such-thing-as-self-made.png" },
        { title: "The Risk of Success", year: 2019, cover: "/books/success-risk.png" },
        { title: "Both Sides of POOR and RICH", year: 2024, cover: "/books/both-sides.jpeg" },
        { title: "How To Get A Job And Keep It", year: 2023, cover: "/books/get-a-job.jpeg" },
        { title: "Why Liberty Is so Important", year: 2022, cover: "/books/liberty.jpeg" },
        { title: "They Never Saw It Coming", year: 2021, cover: "/books/never-saw-it.png" },
        { title: "Overwhelming Force", year: 2020, cover: "/books/overwhelming-force.jpeg" },
    ];

    return (
        <section id="books" className="relative py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
            {/* Optimized background particles */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-red-300 rounded-full animate-pulse delay-500"></div>
                <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-1500"></div>
            </div>
            
            {/* Diagonal accent lines */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-red-500/5 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-blue-500/5 to-transparent"></div>
            
            <div className="relative text-center">
                <h2 className={`text-5xl font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent mb-4`}>
                    Books
                </h2>
                <p className="text-white text-lg mb-16 max-w-2xl mx-auto">
                    A collection of thought-provoking works that challenge conventional wisdom and inspire innovation
                </p>
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Enhanced Left Arrow */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-red-500/20 to-blue-500/20 backdrop-blur-md border border-gray-600 p-4 rounded-full hover:from-red-500/40 hover:to-blue-500/40 hover:border-red-500 transition-all duration-300 transform hover:scale-110 hidden md:flex group"
                >
                    <ChevronLeft className="text-white w-6 h-6 group-hover:text-red-300 transition-colors" />
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
                            className="group flex-shrink-0 snap-center w-[85%] sm:w-[60%] md:w-[30%] relative bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm border border-gray-700 p-1 rounded-2xl hover:border-red-500 transition-all duration-300 will-change-transform cursor-pointer"
                            onClick={() => openModal(index)}
                        >
                            {/* Simplified hover effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={book.cover}
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
                                    <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enhanced Right Arrow */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-blue-500/20 to-red-500/20 backdrop-blur-md border border-gray-600 p-4 rounded-full hover:from-blue-500/40 hover:to-red-500/40 hover:border-blue-500 transition-all duration-300 transform hover:scale-110 hidden md:flex group"
                >
                    <ChevronRight className="text-white w-6 h-6 group-hover:text-blue-300 transition-colors" />
                </button>

                {/* Enhanced gradient fade edges */}
                <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent pointer-events-none z-10" />
                <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-950 via-gray-950/80 to-transparent pointer-events-none z-10" />
            </div>

            {/* CTA Button */}
            <div className="mt-16 text-center">
                <a
                    href="/books"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-blue-600 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1 transition-all duration-300 group"
                >
                    Browse All Books
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors duration-300 z-10"
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>
                    
                    <button
                        onClick={() => navigateBook('next')}
                        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors duration-300 z-10"
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>

                    {/* Book cover container */}
                    <div className="relative max-w-2xl w-full flex flex-col items-center">
                        <img
                            src={books[selectedBook].cover}
                            alt={books[selectedBook].title}
                            className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                        />
                        
                        {/* Book info */}
                        <div className="mt-6 text-center">
                            <h3 className={`text-2xl md:text-3xl font-bold ${GRADIENTS.heroText} bg-clip-text text-transparent mb-2`}>
                                {books[selectedBook].title}
                            </h3>
                            <p className="text-white text-lg">
                                Published {books[selectedBook].year}
                            </p>
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
