"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { LaserFrame } from "@/components/ui/laser-frame"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionHeading } from "@/components/ui/section-heading"

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

const teamMembers = [
  {
    name: "Ayoub Frikhat",
    role: "Process & Chemical Engineering Lead",
    image: "/images/ayoub.png",
    expertise: "Process Engineering, Chemical Engineering, Carbon Capture Technologies, Process Safety Management",
    background:
      "M.Sc. in Chemical Engineering, M.Sc. in Process Engineering. Young process engineer with specialized expertise in carbon capture technologies and sustainable process design. Active researcher in green technology solutions.",
    importance:
      "Ayoub brings deep domain expertise and cutting-edge knowledge of the chemical industry to our AI solutions, ensuring they are both practical and impactful. His focus on sustainable technologies drives our commitment to environmental responsibility.",
  },
  {
    name: "Jabran Anadi",
    role: "AI & Software Engineering Lead",
    image: "/images/jabran.jpg",
    expertise: "Web Development, Machine Learning, Software Engineering, Cloud Architecture",
    background:
      "Engineer's Degree in Software Engineering. Experienced consultant and software engineer, specializing in developing robust machine learning models and implementing comprehensive data governance solutions.",
    importance:
      "Jabran drives the technical development of our AI ecosystem, building intelligent and user-friendly tools for engineers. His expertise in cloud architecture ensures our solutions are scalable and reliable.",
  },
  {
    name: "Souraya Bellahcen",
    role: "Process & Chemical Engineering Lead",
    image: "/images/souraya.png",
    expertise: "Chemical Engineering, Process Engineering, Heat Integration, Energy Optimization",
    background:
      "M.Sc. in Chemical Engineering, M.Sc. in Process Engineering. Specialized in process optimization and energy efficiency. Experience in designing sustainable chemical processes.",
    importance:
      "Souraya brings a wealth of knowledge in process optimization and energy efficiency to our AI solutions, ensuring practical value and sustainable operations. Her expertise in heat integration drives our energy-efficient solutions.",
  },
  {
    name: "Salah-Eddine Alabouch",
    role: "AI & Data Engineering Lead",
    image: "/images/salah.png",
    expertise: "Data Science, Generative AI, Machine Learning, Data Engineering, MLOps",
    background:
      "M.Sc. in AI, Experienced consultant in Data/Generative AI. Specializes in leveraging AI to solve complex business challenges. Expert in developing and deploying production-grade ML systems.",
    importance:
      "Salah-Eddine is a driving force in our Generative AI and Data Engineering projects. His expertise in MLOps and production AI systems ensures our solutions are robust and scalable.",
  },
]

const advisor = {
  name: "Olav Grønås Gjerde",
  role: "Senior Advisor and Mentor",
  image: "/images/olav.jpeg",
  expertise: "Data Engineering, AI Strategy, Data Analytics",
  background:
    "Founder of IntelliStream AS, Co-Founder of boost.ai. A proven leader in AI with a deep background in data-driven solutions and a passion for knowledge sharing. With over 15 years of experience in the industry, Olav has successfully led multiple AI initiatives and mentored numerous tech startups.",
  importance:
    "Olav brings invaluable strategic guidance and mentorship, ensuring that our technology is both innovative and impactful. His experience in scaling AI companies and deep understanding of the Nordic tech ecosystem makes him an invaluable asset to our team.",
}

export function TeamSection() {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <div className="container px-4">
        <SectionHeading
          title="Meet the Team"
          subtitle="At Nordlys Tech, our strength lies in the diverse talents and deep expertise of our team. We're a passionate group of engineers and innovators, united by a mission to transform chemical and process engineering with AI."
        />

        <div className="mt-16">
          <h3 className="text-3xl md:text-4xl font-light mb-12 text-center">Our Cofounders</h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={item}>
                <LaserFrame>
                  <GlassCard className="h-full">
                    <div className="p-6 space-y-4">
                      <div className="aspect-square relative rounded-full overflow-hidden w-48 mb-4">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-medium">{member.name}</h4>
                        <p className="text-sm text-blue-400">{member.role}</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium mb-1">Expertise</h5>
                        <p className="text-sm text-muted-foreground">{member.expertise}</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium mb-1">Background</h5>
                        <p className="text-sm text-muted-foreground">{member.background}</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium mb-1">Impact</h5>
                        <p className="text-sm text-muted-foreground">{member.importance}</p>
                      </div>
                    </div>
                  </GlassCard>
                </LaserFrame>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-light mb-8 text-center">Our Senior Advisor</h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <motion.div variants={item}>
              <LaserFrame>
                <GlassCard>
                  <div className="p-6 space-y-4">
                    <div className="aspect-square relative rounded-full overflow-hidden w-48 mb-4">
                      <Image
                        src={advisor.image || "/placeholder.svg"}
                        alt={advisor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium">{advisor.name}</h4>
                      <p className="text-sm text-blue-400">{advisor.role}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium mb-1">Expertise</h5>
                      <p className="text-sm text-muted-foreground">{advisor.expertise}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium mb-1">Background</h5>
                      <p className="text-sm text-muted-foreground">{advisor.background}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium mb-1">Impact</h5>
                      <p className="text-sm text-muted-foreground">{advisor.importance}</p>
                    </div>
                  </div>
                </GlassCard>
              </LaserFrame>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-light mb-8 text-center">What Unites Us</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="feature-card">
              <h4 className="text-lg font-medium mb-2">Strong Foundation</h4>
              <p className="text-muted-foreground">
                We all share a strong foundation in theoretical mathematics and physics, which equips us to tackle
                complex engineering problems.
              </p>
            </div>
            <div className="feature-card">
              <h4 className="text-lg font-medium mb-2">Passion for Innovation</h4>
              <p className="text-muted-foreground">
                We're driven to create cutting-edge AI solutions that transform the way engineers work.
              </p>
            </div>
            <div className="feature-card">
              <h4 className="text-lg font-medium mb-2">Practical Focus</h4>
              <p className="text-muted-foreground">
                We focus on developing practical and safe AI solutions for real-world industrial applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

