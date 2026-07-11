"use client";

import { useEffect, useState } from "react";
import { Magnetic } from "@/components/ui/Magnetic";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Value", href: "#what-i-bring" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-2 shadow-sm shadow-black/5" 
          : "bg-transparent border-b-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <div className="font-serif font-bold text-xl tracking-tight text-foreground flex items-center">
          J. Maharajwala
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-[0.1em] uppercase">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="underline-fill text-muted-foreground"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Magnetic distance={30}>
            <a href="#contact" className="hidden sm:inline-flex items-center justify-center border border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors h-10 px-6 py-2">
              Hire Me
            </a>
          </Magnetic>
        </div>
      </div>
    </header>
  );
}
