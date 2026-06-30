import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "border-transparent bg-primary text-primary-foreground shadow-sm": variant === "default",
          "border-border/50 bg-muted/80 backdrop-blur-sm text-foreground shadow-sm": variant === "secondary",
          "text-foreground": variant === "outline",
        },
        className
      )}
      {...props}
    />
  )
}




export { Badge }
