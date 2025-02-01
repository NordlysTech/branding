"use client"

import { motion } from "framer-motion"
import {
  AlertTriangle,
  Beaker,
  Activity,
  Gauge,
  Brain,
  Workflow,
  ChevronRight,
  FileText,
  Zap,
  BarChart,
} from "lucide-react"
import { LaserFrame } from "@/components/ui/laser-frame"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const useCases = [
  {
    title: "Process Optimization",
    description: "Optimize distillation column parameters for cost-effective purity achievement",
    icon: Beaker,
    color: "blue",
    example: "What is the most cost-effective way to achieve 99.5% product purity in this distillation column?",
  },
  {
    title: "Risk Assessment",
    description: "Generate comprehensive HAZOP studies and risk assessments for new reactor units",
    icon: AlertTriangle,
    color: "red",
    example: "Conduct a HAZOP analysis for our new reactor unit focusing on temperature deviations",
  },
  {
    title: "Process Control",
    description: "Implement robust control strategies for precise temperature maintenance",
    icon: Activity,
    color: "purple",
    example: "Design a cascade control system for maintaining reactor temperature within ±0.5°C",
  },
  {
    title: "Performance Analysis",
    description: "Monitor and optimize plant-wide performance, including equipment health",
    icon: Gauge,
    color: "emerald",
    example: "What is the projected downtime impact of running this pump beyond design conditions?",
  },
  {
    title: "Report Generation",
    description: "Automatically create professional documentation for engineering processes",
    icon: FileText,
    color: "orange",
    example: "Generate a detailed LOPA (Layer of Protection Analysis) report for our critical process units",
  },
  {
    title: "Reaction Engineering",
    description: "Optimize reactor design and reaction conditions for maximum yield",
    icon: Zap,
    color: "yellow",
    example: "What are the optimal reaction conditions to maximize the yield of our target product?",
  },
]

export function SolviShowcase() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Solvi <span className="gradient-text font-bold">MetaBrain</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect every element of your engineering workflow to build a dynamic knowledge ecosystem. Solvi AI
            transforms it into actionable insights — a second brain for your engineering team.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr mb-12"
        >
          {useCases.map((useCase, index) => (
            <motion.div key={index} variants={item}>
              <LaserFrame>
                <GlassCard className="h-full" glowColor={`rgba(var(--${useCase.color}-500), 0.1)`}>
                  <div className="p-6 h-full flex flex-col">
                    <div className={`inline-flex p-2 rounded-lg bg-${useCase.color}-500/10 mb-4`}>
                      <useCase.icon className={`w-6 h-6 text-${useCase.color}-400`} />
                    </div>
                    <h3 className="text-xl font-medium mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{useCase.description}</p>
                    <div className="bg-background/50 rounded-lg p-3 mt-auto">
                      <p className="text-sm italic text-muted-foreground">"{useCase.example}"</p>
                    </div>
                  </div>
                </GlassCard>
              </LaserFrame>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-3xl font-light mb-6">
            How It <span className="gradient-text font-bold">Works</span>
          </h3>
          <p className="text-muted-foreground mb-8">
            Transform complex engineering challenges into streamlined solutions with our intelligent workflow
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <motion.div variants={item} className="md:col-span-2">
            <LaserFrame>
              <GlassCard className="h-full" glowColor="rgba(var(--blue-500), 0.1)">
                <div className="p-6 h-full">
                  <div className="inline-flex p-2 rounded-lg bg-blue-500/10 mb-4">
                    <Brain className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Specialized AI Agents</h3>
                  <p className="text-muted-foreground mb-4">
                    Access a team of AI experts, each trained in specific engineering disciplines to provide accurate,
                    context-aware solutions.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-background/50 p-3">
                      <p className="text-sm font-medium">Reaction Engineering</p>
                    </div>
                    <div className="rounded-lg bg-background/50 p-3">
                      <p className="text-sm font-medium">Process Safety</p>
                    </div>
                    <div className="rounded-lg bg-background/50 p-3">
                      <p className="text-sm font-medium">Separation Technologies</p>
                    </div>
                    <div className="rounded-lg bg-background/50 p-3">
                      <p className="text-sm font-medium">Process Control</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </LaserFrame>
          </motion.div>
          <motion.div variants={item}>
            <LaserFrame>
              <GlassCard className="h-full" glowColor="rgba(var(--purple-500), 0.1)">
                <div className="p-6 h-full">
                  <div className="inline-flex p-2 rounded-lg bg-purple-500/10 mb-4">
                    <Workflow className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Intelligent Workflow</h3>
                  <p className="text-muted-foreground mb-4">
                    Seamlessly integrate AI-driven insights into your engineering processes for optimized
                    decision-making.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-400" />
                      <span className="text-sm">Tag relevant experts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-400" />
                      <span className="text-sm">Receive detailed analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-400" />
                      <span className="text-sm">Generate documentation</span>
                    </li>
                  </ul>
                </div>
              </GlassCard>
            </LaserFrame>
          </motion.div>
        </motion.div>

        <motion.div variants={item} className="text-center">
          <Button
            size="lg"
            className="group"
            onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
          >
            Experience Solvi Today
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

