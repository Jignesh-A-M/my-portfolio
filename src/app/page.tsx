import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Hero } from "@/components/sections/Hero";
import { WhatIBring } from "@/components/sections/WhatIBring";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { ProjectsUnderNDA } from "@/components/sections/ProjectsUnderNDA";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const navLinks = [
    { name: "Value", href: "#what-i-bring" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between max-w-5xl">
          <div className="font-bold text-lg tracking-tight text-primary">JM.</div>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-primary text-muted-foreground"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 md:px-8 max-w-5xl">
        <Hero />
        <WhatIBring />
        <About />
        <Skills />
        <Experience />
        <ProjectsUnderNDA />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-6 md:px-8 md:py-0 border-t border-border/40">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row max-w-5xl">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by Jignesh A. Maharajwala.
          </p>
        </div>
      </footer>
    </div>
  );
}

