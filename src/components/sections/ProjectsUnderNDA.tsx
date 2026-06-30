import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Lock, Smartphone, Cloud, Cpu, Sparkles, ShoppingCart } from "lucide-react"

export function ProjectsUnderNDA() {
  const projects = [
    {
      title: "Real-Time Voice & Video Communication Platform",
      description: "Developed a production-grade communication platform using Flutter, Twilio, LiveKit, and WebRTC for Android and iOS. Implemented audio/video calling, Picture-in-Picture, floating call overlays, AVAudioSession optimization, and reconnection handling during network changes.",
      tags: ["Flutter", "Dart", "LiveKit", "Twilio", "WebRTC", "CallKit", "AVAudioSession"],
      icon: <Smartphone className="h-6 w-6 text-primary mb-3" />
    },
    {
      title: "AWS-Powered Communication & Customer Support System",
      description: "Built a scalable communication system using AWS Cognito, Lambda, DynamoDB, Chime SDK, and AWS Connect. Implemented secure authentication, audio/video communication, backend automation, and in-app customer support chat.",
      tags: ["Flutter", "AWS Cognito", "Lambda", "DynamoDB", "AWS Chime SDK", "AWS Connect"],
      icon: <Cloud className="h-6 w-6 text-primary mb-3" />
    },
    {
      title: "IoT Device Management & Telemetry Platform",
      description: "Developed Flutter applications for provisioning and managing IoT devices using BLE and Wi-Fi. Integrated ESP32 and NRF7002DK devices with cloud services for telemetry monitoring, device communication, and secure data sync.",
      tags: ["Flutter", "BLE", "ESP32", "NRF7002DK", "Firebase", "REST APIs"],
      icon: <Cpu className="h-6 w-6 text-primary mb-3" />
    },
    {
      title: "AI-Powered Communication & Automation Solution",
      description: "Integrated AI-based features to enable contextual responses, automated workflows, and intelligent user interactions using REST APIs.",
      tags: ["Flutter", "OpenAI API", "REST APIs", "Firebase"],
      icon: <Sparkles className="h-6 w-6 text-primary mb-3" />
    },
    {
      title: "E-Commerce & Product Showcase Platform",
      description: "Developed and optimized Shopify-integrated mobile applications for product catalog management and customer engagement. Improved API consumption, caching, and app performance.",
      tags: ["Flutter", "Shopify API", "REST APIs", "Firebase", "Hive"],
      icon: <ShoppingCart className="h-6 w-6 text-primary mb-3" />
    },
  ]

  return (
    <section id="projects" className="py-24 border-t border-border/40 relative">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-3">
            Projects Under NDA 
            <Badge variant="outline" className="text-sm font-normal"><Lock className="w-3 h-3 mr-1 inline" /> Confidential</Badge>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Project names are confidential due to company policy. The following summaries describe the type of systems, features, and technologies I worked on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 pt-4">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full bg-card/50">
              <CardHeader>
                {project.icon}
                <CardTitle className="text-xl leading-relaxed font-semibold">{project.title}</CardTitle>
                <CardDescription className="pt-3 text-base text-muted-foreground leading-relaxed font-light">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIndex) => (
                    <Badge key={tIndex} variant="secondary" className="bg-muted/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
