"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GRADIENTS } from "@/constants/styles";

const goals = [
    {
        id: 1,
        title: "End Hunger",
        description: "Working to ensure no person goes without food, developing solutions for global food security and sustainable agriculture.",
        image: "/goals/hunger-goal.png",
        color: "from-green-500 to-emerald-600",
        textColor: "text-green-400"
    },
    {
        id: 2,
        title: "End Homelessness", 
        description: "Creating innovative housing solutions and support systems to provide shelter and stability for everyone.",
        image: "/goals/homeless-goal.jpeg",
        color: "from-blue-500 to-cyan-600",
        textColor: "text-blue-400"
    },
    {
        id: 3,
        title: "Bring Clean Water to the Entire World",
        description: "Developing breakthrough technologies to purify water and deliver clean, safe drinking water to every corner of the globe.",
        image: "/goals/water-goal.jpeg",
        color: "from-cyan-500 to-blue-600",
        textColor: "text-cyan-400"
    }
];

export default function MajorGoals() {
    const [selectedGoal, setSelectedGoal] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (goalIndex: number) => {
        setSelectedGoal(goalIndex);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedGoal(null);
        setIsModalOpen(false);
    };

    const navigateGoal = (direction: 'prev' | 'next') => {
        if (selectedGoal === null) return;
        
        if (direction === 'prev') {
            setSelectedGoal(selectedGoal === 0 ? goals.length - 1 : selectedGoal - 1);
        } else {
            setSelectedGoal(selectedGoal === goals.length - 1 ? 0 : selectedGoal + 1);
        }
    };

    return (
        <>
            <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-cyan-500/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16 hero-fade-in-up">
                        <h2 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${GRADIENTS.heroText} bg-clip-text text-transparent`}>
                            My Three Major Life Goals
                        </h2>
                        <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
                            Beyond innovation and invention, I'm committed to solving humanity's greatest challenges. 
                            These are the missions that drive my passion for creating meaningful change in the world.
                        </p>
                    </div>

                    {/* Goals Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {goals.map((goal, index) => (
                            <div
                                key={goal.id}
                                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-500/50 transition-all duration-300 cursor-pointer"
                                onClick={() => openModal(goal.id - 1)}
                            >
                                {/* Goal Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-20`}></div>
                                    <Image
                                        src={goal.image}
                                        alt={goal.title}
                                        fill
                                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    
                                    {/* Goal Number */}
                                    <div className="absolute top-4 right-4">
                                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${goal.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                                            {goal.id}
                                        </div>
                                    </div>

                                    {/* Click indicator */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-colors duration-300">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                                            <span className="text-white text-sm font-medium">Click to expand</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Goal Content */}
                                <div className="p-8">
                                    <h3 className={`text-2xl font-bold mb-4 ${goal.textColor} group-hover:text-white transition-colors duration-300`}>
                                        {goal.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                                        {goal.description}
                                    </p>
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && selectedGoal !== null && (
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
                        onClick={() => navigateGoal('prev')}
                        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors duration-300 z-10"
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>
                    
                    <button
                        onClick={() => navigateGoal('next')}
                        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors duration-300 z-10"
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>

                    {/* Goal container */}
                    <div className="relative max-w-4xl w-full flex flex-col md:flex-row items-center">
                        {/* Image Section */}
                        <div className="relative md:w-1/2 h-64 md:h-96 mb-6 md:mb-0">
                            <div className={`absolute inset-0 bg-gradient-to-br ${goals[selectedGoal].color} opacity-30 rounded-lg`}></div>
                            <Image
                                src={goals[selectedGoal].image}
                                alt={goals[selectedGoal].title}
                                fill
                                className="object-contain rounded-lg shadow-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                            
                            {/* Goal Number in modal */}
                            <div className="absolute top-4 left-4">
                                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${goals[selectedGoal].color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                                    {goals[selectedGoal].id}
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="md:w-1/2 md:pl-8 text-center md:text-left">
                            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${goals[selectedGoal].textColor}`}>
                                {goals[selectedGoal].title}
                            </h2>
                            <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                {goals[selectedGoal].description}
                            </p>
                            
                            {/* Additional details */}
                            <div className="p-4 bg-gray-800/50 rounded-xl">
                                <h3 className="text-white font-semibold mb-2">Mission Focus</h3>
                                <p className="text-gray-400 text-sm">
                                    This goal represents one of three critical challenges I'm committed to solving through innovation, technology, and collaborative effort.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Goal counter */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                        {selectedGoal + 1} / {goals.length}
                    </div>
                </div>
            )}
        </>
    );
}
