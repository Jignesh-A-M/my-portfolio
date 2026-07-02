import { buttonVariants } from "@/components/ui/Button"
import { ArrowRight, Download, Mail } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="py-24 md:py-32 flex flex-col justify-center min-h-[85vh]">
      <div className="space-y-8 max-w-4xl relative z-10">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
          Available for new opportunities
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground">
            Jignesh A. Maharajwala
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
            Flutter Developer <span className="text-primary mx-2">|</span> Real-Time Communication <span className="text-primary mx-2">|</span> IoT <span className="text-primary mx-2">|</span> Cloud Solutions
          </h2>
        </div>
        
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
          I build production-grade Flutter applications focused on real-time communication, IoT connectivity, cloud integration, and high-performance mobile experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg", className: "group shadow-md" })}>
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </a>
          <a href="#projects" className={buttonVariants({ variant: "outline", size: "lg", className: "bg-card/50" })}>
            View Projects
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#contact" className={buttonVariants({ variant: "outline", size: "lg", className: "bg-card/50" })}>
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Decorative background blur element */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-primary/5 blur-3xl rounded-full pointer-events-none -z-10" />
    </section>
  )
}
