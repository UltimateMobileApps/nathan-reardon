"use client";

import { useMemo } from "react";
import { motion } from 'framer-motion';

interface AnimatedStarsProps {
    count?: number;
}

export default function AnimatedStars({ count = 300 }: AnimatedStarsProps) {
    const stars = useMemo(
        () =>
            Array.from({ length: count }, (_, i) => {
                const tintRoll = Math.random();
                const color =
                    tintRoll > 0.94 ? "red" : tintRoll > 0.85 ? "blue" : "white";

                return {
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 1.8 + 0.6,
                    color,
                    delay: Math.random() * 3.5,
                    duration: 2.8 + Math.random() * 4,
                    baseOpacity: 0.18 + Math.random() * 0.45,
                };
            }),
        [count]
    );

    return (
        <>
            {stars.map(star => (
                <motion.div
                    key={star.id}
                    className={`absolute rounded-full ${
                        star.color === 'red' ? 'bg-[#f18ea4]' :
                        star.color === 'blue' ? 'bg-[#93c5fd]' :
                        'bg-white'
                    }`}
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.baseOpacity,
                        boxShadow:
                            star.color === "white"
                                ? "0 0 8px rgba(255,255,255,0.35)"
                                : star.color === "blue"
                                  ? "0 0 10px rgba(147,197,253,0.4)"
                                  : "0 0 10px rgba(241,142,164,0.34)",
                    }}
                    animate={{
                        opacity: [star.baseOpacity * 0.55, star.baseOpacity, star.baseOpacity * 0.5],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </>
    );
}
