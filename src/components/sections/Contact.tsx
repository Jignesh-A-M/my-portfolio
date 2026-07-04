import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function Contact() {
  return (
    <section id="contact" className="relative py-24 border-t border-border mt-12 text-center">
      <div className="max-w-4xl mx-auto px-6">
        
        <ScrollReveal delay={0}>
          <span className="eyebrow flex justify-center mb-8">06 — Contact</span>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-12 text-foreground text-balance">
            Have a project in mind? Let's work together.
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="mb-20">
            <a 
              href="mailto:maharajwalajigar38@gmail.com" 
              className="inline-block text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground underline-fill"
            >
              maharajwalajigar38@gmail.com
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <a
              href="https://linkedin.com/in/jignesh-a-maharajwala-a14b38267"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-sans uppercase tracking-[0.2em] font-bold hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            
            <span className="w-px h-3 bg-border"></span>
            
            <a
              href="https://www.upwork.com/freelancers/~01ef752d80499b0e2e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-sans uppercase tracking-[0.2em] font-bold hover:text-accent transition-colors"
            >
              Upwork
            </a>

            <span className="w-px h-3 bg-border"></span>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-sans uppercase tracking-[0.2em] font-bold hover:text-accent transition-colors"
            >
              Resume
            </a>
          </div>
        </ScrollReveal>
        
      </div>
    </section>
  )
}
