import React from "react"

export function Skills() {
  const skillCategories = [
    {
      category: "Mobile Development",
      skills: ["Flutter", "Dart", "Android", "iOS"],
    },
    {
      category: "Real-Time Communication",
      skills: ["LiveKit", "Twilio", "WebRTC", "CallKit", "AVAudioSession", "AWS Chime SDK"],
    },
    {
      category: <>IoT <span className="simple-amp">&amp;</span> Connectivity</>,
      skills: ["BLE", "ESP32", "NRF7002DK", "Wi-Fi Provisioning", "Telemetry"],
    },
    {
      category: <>Cloud <span className="simple-amp">&amp;</span> Backend</>,
      skills: ["Firebase", "AWS Cognito", "AWS Lambda", "DynamoDB", "S3", "AWS Connect"],
    },
    {
      category: <>APIs <span className="simple-amp">&amp;</span> Integrations</>,
      skills: ["REST APIs", "Shopify API", "Third-Party SDKs"],
    },
    {
      category: "Architecture",
      skills: ["BLoC", "GetX", "Clean Architecture", "Repository Pattern"],
    },
    {
      category: "DevOps",
      skills: ["Git", "GitHub", "GitLab", "CI/CD", "Firebase Test Lab"],
    },
    {
      category: "Monetization",
      skills: ["In-App Purchases", "IronSource Ads"],
    },
  ]

  return (
    <section id="skills" className="relative scroll-mt-32 py-16">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
        
        {/* Left Column: Title */}
        <div className="md:sticky md:top-32 h-fit">
          <span className="eyebrow">03 — Skills</span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-6 text-foreground">
            Capabilities
          </h2>
          <p className="text-lg text-muted-foreground font-normal">
            A comprehensive overview of my technical expertise and the tools I use to build scalable solutions.
          </p>
        </div>

        {/* Right Column: Content */}
        <div>
          <div className="border-t border-border mb-10" />
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {skillCategories.map((group, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h3 className="text-lg font-serif font-semibold tracking-tight text-foreground uppercase text-[13px] tracking-wider mb-1">
                  {group.category}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed font-normal">
                  {group.skills.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
