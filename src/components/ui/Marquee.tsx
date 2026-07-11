"use client";

import React, { useEffect, useState } from 'react';

export function Marquee({ items }: { items: string[] }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const displayItems = prefersReducedMotion ? items : [...items, ...items];
  
  return (
    <div className="overflow-hidden whitespace-nowrap w-full flex items-center select-none relative group mask-edges py-4">
      <div className={`flex ${prefersReducedMotion ? 'flex-wrap justify-center' : 'animate-marquee group-hover:[animation-play-state:paused] w-max'}`}>
        {displayItems.map((item, i) => (
          <span 
            key={i} 
            className="text-4xl md:text-6xl font-serif text-muted-foreground/20 px-8 transition-colors duration-500 hover:text-accent"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
