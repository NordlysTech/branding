"use client"

import { useState, useRef, useEffect } from "react"
import { SectionHeading } from "@/components/ui/section-heading"
import { ChevronRight, FileText, Brain, Zap, BarChart, Cog, Target, ShieldCheck, Lightbulb, Gauge } from "lucide-react"
import { LaserFrame } from "@/components/ui/laser-frame"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { SolviShowcase } from "@/components/sections/solvi-showcase"
import { TeamSection } from "@/components/sections/team-section"

const navItems = ["Features", "About", "Get Demo"]

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState(null)
  const [hoverStyle, setHoverStyle] = useState({})
  const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" })
  const navRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (hoveredIndex !== null) {
      const hoveredElement = navRefs.current[hoveredIndex]
      if (hoveredElement) {
        const { offsetLeft, offsetWidth } = hoveredElement
        setHoverStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        })
      }
    }
  }, [hoveredIndex])

  useEffect(() => {
    if (activeIndex !== null) {
      const activeElement = navRefs.current[activeIndex]
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement
        setActiveStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        })
      }
    }
  }, [activeIndex])

  return (
    <div className="min-h-screen flex flex-col">
      <div className="aurora-background">
        <div className="aurora aurora-1"></div>
        <div className="aurora aurora-2"></div>
        <div className="aurora aurora-3"></div>
        <div className="aurora aurora-4"></div>
        <div className="aurora aurora-5"></div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="text-lg font-light tracking-wider">NORDLYS TECH</div>
          <nav className="hidden md:flex items-center relative">
            {/* Hover Highlight */}
            <div
              className="absolute h-[30px] transition-all duration-300 ease-out bg-[#ffffff1a] rounded-[6px] flex items-center"
              style={{
                ...hoverStyle,
                opacity: hoveredIndex !== null ? 1 : 0,
              }}
            />

            {/* Active Indicator */}
            <div
              className="absolute bottom-[-6px] h-[2px] bg-white transition-all duration-300 ease-out"
              style={activeStyle}
            />

            {/* Nav Items */}
            <div className="relative flex space-x-[6px] items-center">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (navRefs.current[index] = el)}
                  className={`px-3 py-2 cursor-pointer transition-colors duration-300 h-[30px] ${
                    index === activeIndex ? "text-white" : "text-[#ffffff99]"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => {
                    setActiveIndex(index)
                    if (item === "Get Demo") {
                      document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })
                    } else {
                      document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  <div className="text-sm leading-5 whitespace-nowrap flex items-center justify-center h-full">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
          <div className="container px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8 animate-float">
              Developing <span className="gradient-text font-bold">Solvi</span>,
              <br className="hidden sm:inline" />
              An <span className="gradient-text font-bold">AI-Driven</span> Eco System
              <br className="hidden sm:inline" />
              For <span className="gradient-text font-bold">Chemical</span> &{" "}
              <span className="gradient-text font-bold">Process </span>Engineers
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-20 animate-fade-in">
              Transforming the Chemical and Process Engineering Industry through Advanced Artificial Intelligence
              Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <ShimmerButton
                onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
                className="relative z-10 overflow-hidden group hover:scale-105 transition-transform duration-300"
                background="radial-gradient(ellipse 80% 50% at 50% 120%, #3e8bff, #6600ff)"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm font-medium text-white">
                  Early Access
                </span>
              </ShimmerButton>
              <ShimmerButton
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="group hover-glow"
                background="radial-gradient(ellipse 80% 50% at 50% 120%, #4b5563, #1f2937)"
                showShimmer={false}
              >
                <span className="flex items-center justify-center text-sm font-medium text-white">Learn More</span>
              </ShimmerButton>
            </div>
          </div>
        </section>

        <SolviShowcase />

        <section id="features" className="py-24 relative animated-bg">
          <div className="container px-4">
            <SectionHeading
              title="Powered by Safe, Advanced, and Reliable AI"
              subtitle="Experience the next generation of chemical process engineering with our AI-driven ecosystem"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-card hover-glow"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <feature.icon className="h-12 w-12 mb-4 animate-glow" style={{ color: feature.iconColor }} />
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24 relative overflow-hidden">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
              <SectionHeading title="About Solvi" />
              <div className="prose prose-invert mx-auto">
                <p className="text-lg text-muted-foreground text-justify">
                  At Nordlys Tech, we are developing Solvi, an advanced AI-driven eco-system that is redefining the
                  future of chemical and process engineering. Our platform revolutionizes how engineers access and apply
                  specialized knowledge.
                </p>
                <p className="text-lg text-muted-foreground text-justify">
                  We are a diverse Oslo-based startup, comprised of four young engineers, including two AI and Software
                  Engineers, and two Process and Chemical Engineers. Notably, all of our team members have completed
                  undergraduate programs in theoretical mathematics and physics, providing a strong foundation for our
                  work. By leveraging specialized AI agents that offer expertise in different areas of the industry, we
                  empower engineers to solve problems faster, more accurately, and with greater efficiency.
                </p>
                <p className="text-lg text-muted-foreground text-justify">
                  We are focused on developing safe, explainable AI solutions for industrial applications based on high
                  quality domain-specific data with the goal of augmenting chemical & process engineers workflow. Our
                  journey is guided by Mr. Olav Grønås Gjerde, one of the Co-Founders of boost.ai, a trailblazer in
                  practical AI applications in Scandinavia, who serves as our senior advisor and mentor.
                </p>
              </div>
              <div className="flex justify-center">
                <ShimmerButton
                  onClick={() => document.getElementById("value")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:scale-105 transition-transform duration-300"
                  background="radial-gradient(ellipse 80% 50% at 50% 120%, #3e8bff, #6600ff)"
                >
                  <span className="flex items-center text-sm font-medium text-white">
                    See How It Works
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </span>
                </ShimmerButton>
              </div>
            </div>
          </div>
        </section>

        <section id="value" className="py-24 relative animated-bg">
          <div className="container px-4">
            <SectionHeading
              title="Create Value, Clear the Clutter"
              subtitle="Transform your engineering workflow with our advanced AI solutions"
            />

            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {valueCards.map((card, index) => (
                <LaserFrame key={index} className="group">
                  <div className="relative overflow-hidden rounded-xl bg-background/50 backdrop-blur-xl p-6 h-full transition-all duration-300 hover:bg-background/70">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <div className="inline-block p-2 rounded-lg bg-blue-500/10">
                          <card.icon className="w-6 h-6 text-blue-400" />
                        </div>
                      </div>
                      <h3 className="text-xl font-medium mb-2 text-foreground">{card.title}</h3>
                      <p className="text-muted-foreground">{card.description}</p>
                    </div>
                  </div>
                </LaserFrame>
              ))}
            </div>
          </div>
        </section>

        <TeamSection />

        <section id="cta" className="py-24 relative">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <LaserFrame className="overflow-hidden">
                <div className="bg-background/95 backdrop-blur-xl p-8 md:p-12 rounded-xl">
                  <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <h2 className="text-4xl md:text-5xl font-bold">Ready to Transform Your Engineering Workflow?</h2>
                      <p className="text-lg text-muted-foreground">
                        Join the waitlist for early access to Solvi and be among the first to experience the future of
                        engineering.
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 bg-background/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          placeholder="Organization name"
                          className="w-full px-4 py-3 bg-background/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                          placeholder="Leave a comment (optional)"
                          rows={4}
                          className="w-full px-4 py-3 bg-background/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                      </div>
                      <ShimmerButton
                        className="w-full hover:scale-105 transition-transform duration-300"
                        background="radial-gradient(ellipse 80% 50% at 50% 120%, #3e8bff, #6600ff)"
                      >
                        <span className="text-sm font-medium text-white">Join Waitlist</span>
                      </ShimmerButton>
                    </div>
                  </div>
                </div>
              </LaserFrame>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="animate-fade-in">
              <div className="text-lg font-light tracking-wider mb-4 gradient-text">NORDLYS TECH</div>
              <p className="text-muted-foreground">
                Transforming engineering through advanced AI solutions and innovative technology.
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
              <nav className="space-y-2">
                <a href="#features" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
                <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </nav>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-sm font-semibold mb-4">Contact</h3>
              <address className="text-muted-foreground not-italic">
                <p>Sollerudveien</p>
                <p>Lysaker, 0283 Norway</p>
                <p>contact@nordlystech.com</p>
              </address>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Nordlys Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    title: "Knowledge AI Agents",
    description: "AI-powered systems designed to comprehend and analyze complex engineering principles.",
    icon: Brain,
    iconColor: "#60A5FA",
    glowColor: "rgba(59, 130, 246, 0.1)",
  },
  {
    title: "Action AI Agents",
    description: "Task-oriented AI models that execute domain-specific engineering tasks with precision.",
    icon: Zap,
    iconColor: "#34D399",
    glowColor: "rgba(52, 211, 153, 0.1)",
  },
  {
    title: "Advanced Dynamic AI Solvers",
    description: "Real-time, numerical and analytical adaptive solutions for complex engineering challenges.",
    icon: BarChart,
    iconColor: "#818CF8",
    glowColor: "rgba(129, 140, 248, 0.1)",
  },
  {
    title: "Tailored Report Generation",
    description:
      "AI agents that transform data into actionable insights for engineers, operators, and decision makers.",
    icon: FileText,
    iconColor: "#F472B6",
    glowColor: "rgba(244, 114, 182, 0.1)",
  },
]

const valueCards = [
  {
    icon: Cog,
    title: "Domain-Specific AI",
    description:
      "Leverage specialized AI engineers, each trained to address critical engineering disciplines like reaction engineering, separation, dynamics, and process safety.",
  },
  {
    icon: Target,
    title: "Surgical Accuracy",
    description:
      "Generate HAZID and HAZOP reports with surgical precision and receive advanced mathematical & numerical solutions, ensuring unparalleled safety and accuracy.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Explainable AI",
    description:
      "Our AI systems are designed with robust guardrails, ensuring reliable, accurate outputs through safe and explainable reasoning.",
  },
  {
    icon: Brain,
    title: "Embedded Expertise",
    description:
      "Solvi understands the nuanced context of complex engineering challenges, providing insights that exceed traditional computational tools.",
  },
  {
    icon: Gauge,
    title: "Process Optimization",
    description:
      "Accelerate innovation and optimize processes, transforming complex problems into streamlined, intelligent solutions.",
  },
  {
    icon: Lightbulb,
    title: "Maximize Value",
    description:
      "Our AI agents synthesize specialized knowledge to provide actionable recommendations that empower engineering teams to achieve unprecedented productivity.",
  },
]

