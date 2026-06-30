import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Video, Cpu, Cloud, Code } from "lucide-react"

export function WhatIBring() {
  const valueProps = [
    {
      title: "Real-Time Communication",
      description: "Audio/video calling, PiP, floating call overlays, call lifecycle handling, and network recovery.",
      icon: <Video className="h-6 w-6 text-primary mb-2" />,
    },
    {
      title: "IoT & BLE Connectivity",
      description: "Device provisioning, BLE communication, telemetry sync, ESP32, and NRF7002DK integration.",
      icon: <Cpu className="h-6 w-6 text-primary mb-2" />,
    },
    {
      title: "Cloud Integration",
      description: "AWS, Firebase, authentication, backend automation, database integration, and customer support systems.",
      icon: <Cloud className="h-6 w-6 text-primary mb-2" />,
    },
    {
      title: "Production Mobile Engineering",
      description: "Clean architecture, performance optimization, CI/CD, testing, app publishing, and scalable Flutter development.",
      icon: <Code className="h-6 w-6 text-primary mb-2" />,
    },
  ]

  return (
    <section id="what-i-bring" className="py-24 border-t border-border/40 relative">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What I Bring</h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-light">
            A quick overview of my core competencies and the value I deliver to engineering teams.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 pt-4">
          {valueProps.map((prop, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                {prop.icon}
                <CardTitle className="text-xl font-semibold">{prop.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed font-light">
                  {prop.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
