import { buttonVariants } from "@/components/ui/Button"
import { Download, Mail, ExternalLink } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border/40 relative">
      <div className="bg-card backdrop-blur-md border border-border/60 rounded-3xl p-8 md:p-14 text-center max-w-4xl mx-auto shadow-lg relative overflow-hidden">
        {/* Subtle background glow for contact card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
        
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 relative z-10">Let&apos;s Work Together</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto font-light relative z-10">
          I&apos;m currently open for new opportunities. Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <a href="mailto:maharajwalajigar38@gmail.com" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto shadow-md" })}>
            <Mail className="mr-2 h-5 w-5" />
            Email Me
          </a>
          <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto shadow-sm bg-card/50" })}>
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://linkedin.com/in/jignesh-a-maharajwala-a14b38267"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span className="font-medium">LinkedIn</span>
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01ef752d80499b0e2e"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            <ExternalLink className="h-6 w-6" />
            <span className="font-medium">Upwork</span>
          </a>
        </div>
      </div>
    </section>
  )
}
