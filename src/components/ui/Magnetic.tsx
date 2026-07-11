"use client";

import React, { useRef, useState, useEffect } from "react";

interface MagneticProps {
  children: React.ReactNode;
  distance?: number;
}

export function Magnetic({ children, distance = 40 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      const currentDistance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      const threshold = Math.max(rect.width, rect.height) / 2 + distance;
      
      if (currentDistance < threshold) {
        const shiftX = (distanceX / threshold) * 12;
        const shiftY = (distanceY / threshold) * 12;
        setPosition({ x: shiftX, y: shiftY });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [distance]);

  return (
    <div 
      ref={ref}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 && position.y === 0 
          ? "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)" 
          : "transform 0.1s cubic-bezier(0.2, 0.8, 0.2, 1)", 
        display: "inline-block"
      }}
    >
      {children}
    </div>
  );
}
