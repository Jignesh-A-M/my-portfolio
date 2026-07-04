import { Lock, Smartphone, Cloud, Cpu, Sparkles, ShoppingCart, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function ProjectsUnderNDA() {
  const projects = [
    {
      title: "Real-Time Voice & Video Communication Platform",
      description: "Developed a production-grade communication platform using Flutter, Twilio, LiveKit, and WebRTC for Android and iOS. Implemented audio/video calling, Picture-in-Picture, floating call overlays, AVAudioSession optimization, and reconnection handling during network changes.",
      tags: ["Flutter", "Dart", "LiveKit", "Twilio", "WebRTC", "CallKit", "AVAudioSession"],
      icon: <Smartphone className="h-4 w-4" />
    },
    {
      title: "AWS-Powered Communication & Customer Support System",
      description: "Built a scalable communication system using AWS Cognito, Lambda, DynamoDB, Chime SDK, and AWS Connect. Implemented secure authentication, audio/video communication, backend automation, and in-app customer support chat.",
      tags: ["Flutter", "AWS Cognito", "Lambda", "DynamoDB", "AWS Chime SDK", "AWS Connect"],
      icon: <Cloud className="h-4 w-4" />
    },
    {
      title: "IoT Device Management & Telemetry Platform",
      description: "Developed Flutter applications for provisioning and managing IoT devices using BLE and Wi-Fi. Integrated ESP32 and NRF7002DK devices with cloud services for telemetry monitoring, device communication, and secure data sync.",
      tags: ["Flutter", "BLE", "ESP32", "NRF7002DK", "Firebase", "REST APIs"],
      icon: <Cpu className="h-4 w-4" />
    },
    {
      title: "AI-Powered Communication & Automation Solution",
      description: "Integrated AI-based features to enable contextual responses, automated workflows, and intelligent user interactions using REST APIs.",
      tags: ["Flutter", "OpenAI API", "REST APIs", "Firebase"],
      icon: <Sparkles className="h-4 w-4" />
    },
    {
      title: "E-Commerce & Product Showcase Platform",
      description: "Developed and optimized Shopify-integrated mobile applications for product catalog management and customer engagement. Improved API consumption, caching, and app performance.",
      tags: ["Flutter", "Shopify API", "REST APIs", "Firebase", "Hive"],
      icon: <ShoppingCart className="h-4 w-4" />
    },
  ]

  return (
    <section id="projects" className="relative scroll-mt-32 py-24">
      <div className="grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-20">
        
        {/* Left Column: Title */}
        <div className="md:sticky md:top-32 h-fit">
          <ScrollReveal delay={0}>
            <span className="eyebrow">05 — Case Studies</span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6 text-foreground flex flex-col gap-4">
              Projects
              <span className="inline-flex items-center border border-accent/20 bg-accent/5 px-2.5 py-1 text-xs font-semibold text-accent w-fit uppercase tracking-wider font-sans">
                <Lock className="w-3 h-3 mr-1.5" /> NDA Protected
              </span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-lg text-muted-foreground font-normal">
              Project names are confidential due to company policy. The following summaries describe the architecture, features, and technologies of systems I have built.
            </p>
          </ScrollReveal>
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col mt-2 lg:mt-0">
          <div className="border-t border-border" />
          
          {projects.map((project, index) => (
            <ScrollReveal delay={100 + index * 100} key={index}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-12 border-b border-border group cursor-default hover:surface-panel transition-all duration-300 px-4 -mx-4 sm:px-6 sm:-mx-6 rounded-sm">
                
                <div className="md:w-16 shrink-0 mt-2">
                  <span className="text-accent font-sans font-semibold tracking-[0.2em] text-[11px] uppercase">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <div className="space-y-4 flex-1 overflow-hidden">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-foreground flex items-center gap-4 flex-wrap sm:flex-nowrap">
                    <span className="underline-fill group-hover:after:origin-bottom-left group-hover:after:scale-x-100 group-hover:text-foreground">
                      {project.title}
                    </span>
                    <ArrowRight className="w-5 h-5 text-accent opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 shrink-0" />
                  </h3>
                  
                  <div className="text-xs text-foreground font-sans uppercase tracking-[0.25em] font-semibold flex items-center gap-2">
                    <span className="text-accent">{project.icon}</span>
                    Architecture &amp; Features
                  </div>
                  
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-sans max-w-prose">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-x-3 gap-y-2 pt-4">
                    {project.tags.map((tag, tIndex) => (
                      <span 
                        key={tIndex} 
                        className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground border border-border/60 bg-muted/40 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
              </div>
            </ScrollReveal>
          ))}
          
        </div>
      </div>
    </section>
  )
}
