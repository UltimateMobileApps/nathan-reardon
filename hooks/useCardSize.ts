"use client";

import { useState, useEffect } from 'react';

export type CardSize = 'small' | 'standard' | 'large';

export function useCardSize() {
  const [size, setSize] = useState<CardSize>('standard');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedSize = localStorage.getItem('card-size') as CardSize;
    if (savedSize && ['small', 'standard', 'large'].includes(savedSize)) {
      setSize(savedSize);
    }
    setMounted(true);
  }, []);

  const updateSize = (newSize: CardSize) => {
    setSize(newSize);
    localStorage.setItem('card-size', newSize);
  };

  return { size: mounted ? size : 'standard', updateSize, mounted };
}
