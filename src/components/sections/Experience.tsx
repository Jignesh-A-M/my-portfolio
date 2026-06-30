import { Briefcase } from "lucide-react"

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
    <section id="experience" className="py-24 border-t border-border/40 relative">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground font-light">
            My professional journey in mobile application development.
          </p>
        </div>

        <div className="space-y-12 pt-4 border-l-2 border-primary/20 ml-3 pl-8 relative">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[43px] top-1 bg-background border-2 border-primary/50 shadow-sm rounded-full p-1.5">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-xl font-bold tracking-tight">{exp.role}</h3>
                  <span className="text-sm font-medium text-muted-foreground bg-card border border-border/50 px-3 py-1 rounded-full w-fit shadow-sm">
                    {exp.period}
                  </span>
                </div>
                <div className="text-lg text-primary font-semibold">
                  {exp.company}
                </div>
                <p className="text-muted-foreground leading-relaxed pt-2 font-light">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
