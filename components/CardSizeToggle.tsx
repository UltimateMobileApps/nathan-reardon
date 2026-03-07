"use client";

import { useState, useRef, useEffect } from "react";
import { LayoutGrid, Grid, Maximize2, Settings2 } from "lucide-react";
import { CardSize } from "@/hooks/useCardSize";

interface CardSizeToggleProps {
  currentSize: CardSize;
  onSizeChange: (size: CardSize) => void;
}

export default function CardSizeToggle({
  currentSize,
  onSizeChange,
}: CardSizeToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options: { value: CardSize; label: string; icon: any }[] = [
    { value: "small", label: "Small", icon: LayoutGrid },
    { value: "standard", label: "Standard", icon: Grid },
    { value: "large", label: "Large", icon: Maximize2 },
  ];

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-gray-800/80 border border-gray-700/50 rounded-lg text-white hover:bg-gray-700/80 transition-all duration-300 backdrop-blur-sm"
        title="Change Card Size"
      >
        <Settings2 className="w-4 h-4" />
        <span className="text-sm font-medium capitalize">{currentSize} View</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-50 bg-gray-900/95 border border-gray-700/50 rounded-xl p-1 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center p-1 bg-gray-800/50 rounded-lg">
            {options.map((option) => {
              const Icon = option.icon;
              const isActive = currentSize === option.value;
              return (
                <button
                  key={option.value}
                  onClick={() => {
                    onSizeChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 min-w-[70px] ${
                    isActive
                      ? "bg-blue-500/20 border border-blue-500/50 text-blue-400"
                      : "text-gray-400 hover:text-white hover:bg-gray-700/50 border border-transparent"
                  }`}
                >
                  <Icon className="w-5 h-5 mb-1" />
                  <span className="text-[10px] uppercase font-bold tracking-wider">
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
