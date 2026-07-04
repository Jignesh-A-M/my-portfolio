import { Hero } from "@/components/sections/Hero";
import { WhatIBring } from "@/components/sections/WhatIBring";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { ProjectsUnderNDA } from "@/components/sections/ProjectsUnderNDA";
import { Contact } from "@/components/sections/Contact";
import { Header } from "@/components/layout/Header";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen relative selection:bg-accent/20 selection:text-accent">
      {/* Editorial Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 md:px-12 max-w-6xl pt-16">
        <Hero />
        <WhatIBring />
        <About />
        <Experience />
        <ProjectsUnderNDA />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 bg-background">
        <div className="container mx-auto flex items-center justify-center max-w-6xl px-6">
          <p className="text-center text-[11px] font-bold tracking-[0.2em] text-muted-foreground/60 uppercase">
            © {new Date().getFullYear()} Jignesh A. Maharajwala. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

