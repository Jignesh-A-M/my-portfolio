import { Badge } from "@/components/ui/Badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"

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
      category: "IoT & Connectivity",
      skills: ["BLE", "ESP32", "NRF7002DK", "Wi-Fi Provisioning", "Telemetry"],
    },
    {
      category: "Cloud & Backend",
      skills: ["Firebase", "AWS Cognito", "AWS Lambda", "DynamoDB", "S3", "AWS Connect"],
    },
    {
      category: "APIs & Integrations",
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
    <section id="skills" className="py-24 border-t border-border/40 relative">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground font-light">
            A comprehensive overview of my technical expertise and tools I use daily.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 pt-4">
          {skillCategories.map((group, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold">{group.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIndex) => (
                    <Badge key={sIndex} variant="secondary">
                      {skill}
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
