import { Code2, Cpu, Cloud, Smartphone } from "lucide-react"

export function About() {
  const highlights = [
    {
      title: "Mobile Development",
      description: "3+ years of experience building cross-platform apps for Android and iOS using Flutter and Dart.",
      icon: <Smartphone className="h-6 w-6 text-primary" />,
    },
    {
      title: "Real-Time Communication",
      description: "Integrating LiveKit, Twilio, WebRTC, and CallKit for seamless audio/video streaming.",
      icon: <Code2 className="h-6 w-6 text-primary" />,
    },
    {
      title: "IoT & Connectivity",
      description: "Working with BLE, ESP32, and Wi-Fi provisioning for connected smart devices.",
      icon: <Cpu className="h-6 w-6 text-primary" />,
    },
    {
      title: "Cloud & Architecture",
      description: "Deploying scalable backends with AWS, Firebase, and adhering to Clean Architecture principles.",
      icon: <Cloud className="h-6 w-6 text-primary" />,
    },
  ]

  return (
    <section id="about" className="py-24 border-t border-border/40 relative">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed font-light">
            Flutter Developer with 3+ years of experience building cross-platform mobile applications for Android and iOS. Experienced in LiveKit, Twilio, WebRTC, BLE, AWS, Firebase, REST APIs, Shopify API, CI/CD, and mobile performance optimization.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 pt-8">
          {highlights.map((item, index) => (
            <div key={index} className="flex gap-4 p-5 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm hover:bg-card hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="shrink-0 p-3 bg-primary/5 rounded-xl h-fit border border-primary/10">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
