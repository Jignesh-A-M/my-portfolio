import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function About() {
  const allSkills = [
    "Flutter", "Dart", "Android", "iOS", 
    "LiveKit", "Twilio", "WebRTC", "CallKit", "AVAudioSession", "AWS Chime SDK",
    "BLE", "ESP32", "NRF7002DK", "Wi-Fi Provisioning", "Telemetry",
    "Firebase", "AWS Cognito", "AWS Lambda", "DynamoDB", "S3", "AWS Connect",
    "REST APIs", "Shopify API", "BLoC", "GetX", "Clean Architecture",
    "Git", "CI/CD", "Firebase Test Lab"
  ];

  return (
    <section id="about" className="relative scroll-mt-32 py-24 border-t border-border">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-0">
        
        {/* Left Column: Intro Text */}
        <div className="lg:pr-16 flex flex-col justify-start h-full">
          <ScrollReveal delay={0}>
            <span className="eyebrow">02 — About</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-8 text-foreground">
              Background
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="prose prose-lg prose-p:font-sans prose-p:text-foreground prose-p:leading-relaxed prose-p:max-w-prose">
              <p>
                I am a Flutter Developer with over three years of experience building cross-platform mobile applications for Android and iOS. 
              </p>
              <p className="mt-4">
                My technical expertise spans across real-time communication protocols like LiveKit and WebRTC, hardware connectivity via BLE and ESP32, and robust cloud architectures using AWS and Firebase. I focus on creating seamless, high-performance user experiences powered by clean architecture principles.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Skills */}
        <div id="skills" className="lg:pl-16 border-t lg:border-t-0 lg:border-l border-border flex flex-col justify-start h-full scroll-mt-32 mt-12 pt-12 lg:mt-0 lg:pt-0">
          <ScrollReveal delay={100}>
            <span className="eyebrow">03 — Toolkit</span>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-8 text-foreground">
              Skills &amp; Technologies
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <div className="flex flex-wrap gap-x-4 gap-y-3 leading-loose text-lg font-sans font-medium text-muted-foreground">
              {allSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="underline-fill text-foreground cursor-default transition-colors hover:text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}
