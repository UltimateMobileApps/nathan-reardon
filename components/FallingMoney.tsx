"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

interface FallingMoneyProps {
    count?: number;
}

export default function FallingMoney({ count = 18 }: FallingMoneyProps) {
    const bills = useMemo(
        () =>
            Array.from({ length: count }, (_, i) => ({
                id: i,
                startX: Math.random() * 100,
                delay: Math.random() * 20,
                duration: 12 + Math.random() * 15,
                size: 80 + Math.random() * 100,
                initialRotation: Math.random() * 360,
                swayAmount: 50 + Math.random() * 100,
                opacity: 0.15 + Math.random() * 0.25,
            })),
        [count]
    );

    return (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
            {bills.map((bill) => (
                <motion.div
                    key={bill.id}
                    className="absolute"
                    initial={{ 
                        y: "-20vh", 
                        x: `${bill.startX}vw`, 
                        rotate: bill.initialRotation,
                        opacity: 0 
                    }}
                    animate={{ 
                        y: "120vh",
                        x: [
                            `${bill.startX}vw`, 
                            `${bill.startX + (bill.id % 2 === 0 ? 10 : -10)}vw`, 
                            `${bill.startX}vw`
                        ],
                        rotate: [bill.initialRotation, bill.initialRotation + 180, bill.initialRotation + 360],
                        opacity: [0, bill.opacity, bill.opacity, 0]
                    }}
                    transition={{
                        duration: bill.duration,
                        repeat: Infinity,
                        delay: bill.delay,
                        ease: "linear",
                    }}
                    style={{ 
                        width: `${bill.size}px`,
                        filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.2))",
                    }}
                >
                    {/* Using standard img for background decoration to avoid Next.js Image overhead for many svgs */}
                    <img
                        src="/100-dollar-bill.svg"
                        alt=""
                        className="w-full h-auto block"
                        aria-hidden="true"
                    />
                </motion.div>
            ))}
        </div>
    );
}
