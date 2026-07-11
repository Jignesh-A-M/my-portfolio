import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function Contact() {
  return (
    <section id="contact" className="relative py-[100px] md:py-[120px] border-t border-border text-center">
      <div className="max-w-4xl mx-auto px-6">
        
        <ScrollReveal delay={0}>
          <div className="w-8 h-px bg-accent/30 mx-auto mb-6" />
          <span className="eyebrow flex justify-center mb-6">06 — Contact</span>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <h2 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-10 text-foreground text-balance">
            Have a project in mind? Let's work together.
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="mb-12">
            <a 
              href="mailto:maharajwalajigar38@gmail.com" 
              className="inline-block text-xl sm:text-2xl md:text-3xl font-sans font-semibold tracking-wide text-foreground underline-fill"
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
              className="text-[13px] font-sans uppercase tracking-[0.15em] font-medium hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            
            <span className="w-px h-3 bg-border mx-2"></span>
            
            <a
              href="https://www.upwork.com/freelancers/~01ef752d80499b0e2e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-sans uppercase tracking-[0.15em] font-medium hover:text-accent transition-colors"
            >
              Upwork
            </a>

            <span className="w-px h-3 bg-border mx-2"></span>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-sans uppercase tracking-[0.15em] font-medium hover:text-accent transition-colors"
            >
              Resume
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mt-16 pt-8 border-t border-border flex justify-center">
            <p className="text-xs font-sans uppercase tracking-[0.1em] text-muted-foreground/60">
              © {new Date().getFullYear()} Jignesh A. Maharajwala. All rights reserved.
            </p>
          </div>
        </ScrollReveal>
        
      </div>
    </section>
  )
}
