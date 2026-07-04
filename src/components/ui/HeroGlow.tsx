"use client";

import { useEffect, useState } from "react";

export function HeroGlow() {
  const [scrollY, setScrollY] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(motionQuery.matches);
    
    const updateMotion = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    motionQuery.addEventListener("change", updateMotion);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    if (!motionQuery.matches) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      motionQuery.removeEventListener("change", updateMotion);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const transform = reduceMotion ? "none" : `translateY(${scrollY * 0.15}px)`;

  return (
    <div 
      className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none -z-10"
      style={{
        background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        opacity: 0.07,
        filter: "blur(120px)",
        transform,
        transition: "opacity 1s ease-in-out",
        willChange: "transform",
      }}
    />
  );
}
