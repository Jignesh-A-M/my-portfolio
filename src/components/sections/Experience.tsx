import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function Experience() {
  const experiences = [
    {
      role: "Flutter Developer",
      company: "DashStack Infotech",
      period: "Aug 2023 - Present",
      description: "Developing scalable and high-performance cross-platform mobile applications. Integrating real-time communication tools, IoT functionalities, and complex backend services.",
    },
    {
      role: "Junior Flutter Developer",
      company: "DUIUX Infotech",
      period: "Apr 2022 - May 2023",
      description: "Built foundational features for various Flutter applications. Worked closely with UI/UX teams to implement clean designs and optimized mobile performance.",
    },
  ]

  return (
    <section id="experience" className="relative scroll-mt-32 py-[100px] md:py-[120px] border-t border-border">
      <div className="grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-20">
        
        {/* Left Column: Title */}
        <div className="md:sticky md:top-32 h-fit">
          <ScrollReveal delay={0}>
            <span className="eyebrow">04 — Experience</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-6 text-foreground">
              Work History
            </h2>
          </ScrollReveal>
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col mt-2 lg:mt-0">
          <div className="border-t border-border" />
          
          {experiences.map((exp, index) => (
            <ScrollReveal delay={100 + index * 100} key={index}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-12 border-b border-border group cursor-default hover:surface-panel transition-all duration-300 px-4 -mx-4 sm:px-6 sm:-mx-6 rounded-sm">
                
                <div className="md:w-16 shrink-0 mt-2">
                  <span className="text-accent font-sans font-semibold tracking-[0.2em] text-[11px] uppercase">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <div className="space-y-4 flex-1">
                  <h3 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-foreground flex items-center gap-4">
                    <span className="underline-fill group-hover:after:origin-bottom-left group-hover:after:scale-x-100 group-hover:text-foreground">
                      {exp.company}
                    </span>
                    <ArrowRight className="w-5 h-5 text-accent opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </h3>
                  
                  <div className="text-xs text-foreground font-sans uppercase tracking-[0.25em] font-semibold">
                    {exp.role} <span className="mx-2 text-muted-foreground/40">|</span> {exp.period}
                  </div>
                  
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-sans max-w-prose">
                    {exp.description}
                  </p>
                </div>
                
              </div>
            </ScrollReveal>
          ))}
          
        </div>
      </div>
    </section>
  )
}
