import { buttonVariants } from "@/components/ui/Button"
import { ArrowRight, Download } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { HeroGlow } from "@/components/ui/HeroGlow"

export function Hero() {
  return (
    <section id="hero" className="relative flex flex-col justify-center min-h-[85vh] py-24 border-b border-border overflow-hidden">
      <HeroGlow />
      
      {/* Decorative element */}
      <ScrollReveal delay={500} className="absolute top-32 right-12 text-accent/20 font-serif text-[120px] leading-none select-none hidden md:block">
        *
      </ScrollReveal>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Animated Container */}
        <div>
          <ScrollReveal delay={0}>
            <span className="text-accent font-sans font-semibold tracking-[0.15em] text-[13px] uppercase mb-6 block">
              01 — Introduction
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100} className="space-y-4 mb-8">
            <h1 className="font-serif text-5xl md:text-[56px] lg:text-[72px] font-bold tracking-tight text-foreground leading-[1.1] text-balance">
              Jignesh A. Maharajwala.
            </h1>
            
            <h2 className="font-sans text-sm md:text-base font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Senior Flutter Developer &middot; Cloud Architect
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl font-sans mb-10 text-balance">
              I architect and build production-grade applications that bridge complex systems into seamless mobile experiences. Dedicated to delivering scalable solutions that drive measurable business value across real-time communication, IoT connectivity, and robust cloud platforms.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="h-px w-full max-w-2xl bg-border mb-10" />
            
            <div className="flex flex-col sm:flex-row gap-5 justify-start">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg", className: "rounded-none bg-foreground text-background hover:bg-foreground/90 transition-all font-semibold uppercase tracking-wider text-xs px-10 h-14" })}>
                <Download className="mr-3 h-4 w-4" />
                Download Resume
              </a>
              <a href="#projects" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-none bg-transparent border-foreground text-foreground hover:bg-muted transition-all font-semibold uppercase tracking-wider text-xs px-10 h-14 underline-fill" })}>
                View Case Studies
                <ArrowRight className="ml-3 h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}
