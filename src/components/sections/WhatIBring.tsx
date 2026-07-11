import { Video, Cpu, Cloud, Code } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function WhatIBring() {
  const valueProps = [
    {
      title: "Real-Time Communication",
      description: "Audio/video calling, PiP, floating call overlays, call lifecycle handling, and network recovery.",
      icon: <Video className="h-5 w-5 text-accent" />,
    },
    {
      title: <>IoT <span className="simple-amp">&amp;</span> BLE Connectivity</>,
      description: "Device provisioning, BLE communication, telemetry sync, ESP32, and NRF7002DK integration.",
      icon: <Cpu className="h-5 w-5 text-accent" />,
    },
    {
      title: "Cloud Integration",
      description: "AWS, Firebase, authentication, backend automation, database integration, and customer support systems.",
      icon: <Cloud className="h-5 w-5 text-accent" />,
    },
    {
      title: "Production Mobile Eng.",
      description: "Clean architecture, performance optimization, CI/CD, testing, app publishing, and scalable Flutter development.",
      icon: <Code className="h-5 w-5 text-accent" />,
    },
  ]

  return (
    <section id="what-i-bring" className="relative scroll-mt-32 py-[100px] md:py-[120px]">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
        
        {/* Left Column: Title */}
        <div className="md:sticky md:top-32 h-fit">
          <ScrollReveal delay={0}>
            <span className="eyebrow">01 — Value</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-6 text-foreground">
              What I Bring
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-muted-foreground font-normal">
              A quick overview of my core competencies and the specialized value I deliver to engineering teams.
            </p>
          </ScrollReveal>
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col">
          <div className="border-t border-border" />
          {valueProps.map((prop, index) => (
            <ScrollReveal delay={100 + index * 100} key={index}>
              <div className="flex flex-col sm:flex-row gap-6 py-10 border-b border-border group hover:surface-panel transition-all duration-300 px-4 -mx-4 sm:px-6 sm:-mx-6 rounded-sm">
                <div className="shrink-0 mt-1">
                  {prop.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-serif font-semibold tracking-tight text-foreground">{prop.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed font-normal max-w-lg">
                    {prop.description}
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
