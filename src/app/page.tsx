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

      {/* Hero is full-bleed, so it sits outside the constrained container */}
      <Hero />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 md:px-12 max-w-6xl">
        <WhatIBring />
        <About />
        <Experience />
        <ProjectsUnderNDA />
        <Contact />
      </main>

    </div>
  );
}

