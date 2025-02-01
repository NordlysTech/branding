interface SectionHeadingProps {
  title: string
  subtitle?: string
  gradient?: boolean
  center?: boolean
}

export function SectionHeading({ title, subtitle, gradient = true, center = true }: SectionHeadingProps) {
  return (
    <div className={`space-y-4 ${center ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-5xl font-light">
        {gradient ? <span className="gradient-text">{title}</span> : title}
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  )
}

