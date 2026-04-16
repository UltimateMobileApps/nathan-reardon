"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const goals = [
    {
        id: 1,
        title: "End Hunger",
        description: "Working to ensure no person goes without food, developing solutions for global food security and sustainable agriculture.",
        image: "/goals/hunger-goal.png",
        color: "from-[#4ca98a] to-[#7fcfb0]",
        textColor: "text-[#8de0be]"
    },
    {
        id: 2,
        title: "End Homelessness", 
        description: "Creating innovative housing solutions and support systems to provide shelter and stability for everyone.",
        image: "/goals/homeless-goal.jpeg",
        color: "from-[#2f88ff] to-[#8ec7ff]",
        textColor: "text-[#8ec7ff]"
    },
    {
        id: 3,
        title: "Bring Clean Water to the Entire World",
        description: "Developing breakthrough technologies to purify water and deliver clean, safe drinking water to every corner of the globe.",
        image: "/goals/water-goal.jpeg",
        color: "from-[#63c6d9] to-[#5aa9ff]",
        textColor: "text-[#8bddf0]"
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
            <section className="relative py-20 theme-shell overflow-hidden">
                <div className="absolute inset-0 theme-grid opacity-[0.14]"></div>
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-[#2f88ff]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4ca98a]/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-[#63c6d9]/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 hero-fade-in-up">
                        <div className="mb-5">
                            <div className="section-tech-kicker">Mission Focus</div>
                        </div>
                        <h2 className="theme-title text-4xl md:text-6xl font-bold mb-5">
                            My Three Major Life Goals
                        </h2>
                        <div className="section-tech-rule mb-6"></div>
                        <p className="section-tech-subtitle text-xl max-w-4xl mx-auto leading-relaxed">
                            Beyond innovation and invention, I'm committed to solving humanity's greatest challenges. 
                            These are the missions that drive my passion for creating meaningful change in the world.
                        </p>

                        <div className="mt-12 flex flex-col md:flex-row gap-8 justify-center items-center max-w-5xl mx-auto">
                            <div className="theme-media-frame w-full md:w-1/2 max-w-md transform hover:scale-[1.02] transition-all duration-500">
                                <Image
                                    src="/he-gave-his-life-for-us.png"
                                    alt="He gave his life for us"
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="theme-media-frame w-full md:w-1/2 max-w-md transform hover:scale-[1.02] transition-all duration-500">
                                <Image
                                    src="/ministry.png"
                                    alt="I was called to fund ministry - Nathan Reardon quote"
                                    width={400}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {goals.map((goal) => (
                            <div
                                key={goal.id}
                                className="group relative theme-panel rounded-[1.6rem] overflow-hidden hover:border-[#7cb8ff]/45 transition-all duration-300 cursor-pointer"
                                onClick={() => openModal(goal.id - 1)}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-10"></div>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-20`}></div>
                                    <Image
                                        src={goal.image}
                                        alt={goal.title}
                                        fill
                                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                    <div className="absolute left-5 top-5">
                                        <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#dce9ff] backdrop-blur-md">
                                            Goal 0{goal.id}
                                        </div>
                                    </div>

                                    <div className="absolute top-4 right-4">
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br ${goal.color} text-white font-bold text-lg shadow-lg shadow-black/35`}>
                                            {goal.id}
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-colors duration-300">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/12 backdrop-blur-md rounded-full border border-white/10 px-4 py-2">
                                            <span className="text-white text-sm font-medium">Click to expand</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <h3 className={`text-2xl font-bold mb-4 ${goal.textColor} group-hover:text-white transition-colors duration-300`}>
                                        {goal.title}
                                    </h3>
                                    <p className="text-[#cbd5e1] leading-relaxed group-hover:text-white transition-colors duration-300">
                                        {goal.description}
                                    </p>
                                    <div className="mt-6 flex items-center justify-between">
                                        <span className="text-[0.72rem] uppercase tracking-[0.24em] text-[#8ea6c6]">Open mission brief</span>
                                        <span className="h-px w-14 bg-gradient-to-r from-[#93c5fd] via-white/70 to-transparent transition-all duration-300 group-hover:w-20"></span>
                                    </div>
                                </div>

                                <div className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && selectedGoal !== null && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <button
                        onClick={closeModal}
                        className="theme-modal-control absolute top-6 right-6 h-12 w-12 text-[#dce9ff] z-10"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <button
                        onClick={() => navigateGoal('prev')}
                        className="theme-modal-control absolute left-6 top-1/2 transform -translate-y-1/2 h-14 w-14 text-[#dce9ff] z-10"
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>
                    
                    <button
                        onClick={() => navigateGoal('next')}
                        className="theme-modal-control absolute right-6 top-1/2 transform -translate-y-1/2 h-14 w-14 text-[#dce9ff] z-10"
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>

                    <div className="theme-modal-shell relative max-w-4xl w-full flex flex-col md:flex-row items-center p-5 md:p-6">
                        <div className="theme-media-frame relative w-full md:w-1/2 h-64 md:h-96 mb-6 md:mb-0">
                            <div className={`absolute inset-0 bg-gradient-to-br ${goals[selectedGoal].color} opacity-30 rounded-lg`}></div>
                            <Image
                                src={goals[selectedGoal].image}
                                alt={goals[selectedGoal].title}
                                fill
                                className="object-contain rounded-lg shadow-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>

                            <div className="absolute top-4 left-4">
                                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${goals[selectedGoal].color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                                    {goals[selectedGoal].id}
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 md:pl-8 text-center md:text-left">
                            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${goals[selectedGoal].textColor}`}>
                                {goals[selectedGoal].title}
                            </h2>
                            <p className="text-[#cbd5e1] leading-relaxed text-lg mb-6">
                                {goals[selectedGoal].description}
                            </p>

                            <div className="p-4 theme-panel-soft rounded-xl">
                                <h3 className="text-white font-semibold mb-2">Mission Focus</h3>
                                <p className="text-[#8c9ab2] text-sm">
                                    This goal represents one of three critical challenges I'm committed to solving through innovation, technology, and collaborative effort.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="theme-modal-control absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 text-white">
                        {selectedGoal + 1} / {goals.length}
                    </div>
                </div>
            )}
        </>
    );
}
