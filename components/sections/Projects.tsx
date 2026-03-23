"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronDown, ChevronUp } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import { SiNextdotjs, SiTypescript, SiNodedotjs, SiPostgresql, SiPrisma, SiSocketdotio, SiTailwindcss, SiExpress, SiVercel, SiReact, SiPython, SiFlask, SiHtml5, SiJavascript, SiOpenai } from "react-icons/si";
import { FaChartBar, FaFileExcel, FaCss3Alt } from "react-icons/fa";
import Link from "next/link";

const projects = [
  {
    id: "car-sales",
    title: "Car Sales Analysis Dashboard",
    summary: "Interactive Power BI dashboard to analyze car sales performance and trends.",
    challenge: "Converting raw, extensive sales data into actionable business insights with interactive visualizations and clear KPIs.",
    solution: "Designed and developed a comprehensive dashboard using Power BI, DAX, and advanced data modeling. Implemented interactive slicers to enable quick decision-making.",
    result: "Successfully visualized top-performing brands, and monthly/yearly trends, significantly improving deep-dive analysis capabilities.",
    image: "/screenshots/first.png",
    techStack: [
      { name: "Power BI", Icon: FaChartBar, color: "#F2C811" },
      { name: "DAX", Icon: FaFileExcel, color: "#217346" },
      { name: "Data Modeling", Icon: SiPostgresql, color: "#4169E1" }
    ],
    liveLink: "#",
    githubLink: "https://github.com/23mukul",
    color: "from-yellow-500/20 to-orange-500/20",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]",
  },
  {
    id: "process-monitor",
    title: "Process Monitoring Tool (Task Manager)",
    summary: "Web-based monitoring solution for real-time system processes and resource tracking.",
    challenge: "Providing live visibility into system-level data like CPU usage, memory consumption, and active task execution without overwhelming the interface.",
    solution: "Introduced a clean, user-centric intuitive dashboard using Python with Flask on the backend, and HTML/CSS/JavaScript on the frontend.",
    result: "Enabled users to view detailed process information, track resource utilization, and seamlessly manage running tasks.",
    image: "/screenshots/process.png",
    techStack: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "Flask", Icon: SiFlask, color: "#ffffff" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", Icon: FaCss3Alt, color: "#1572B6" }
    ],
    liveLink: "#",
    githubLink: "https://github.com/23mukul",
    color: "from-blue-500/20 to-cyan-500/20",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
  },
  {
    id: "startup-vision",
    title: "Startup Vision AI Validator",
    summary: "Intelligent conversational assistant that evaluates startup ideas using AI.",
    challenge: "Analyzing market trends, competition signals, and practical feasibility to generate a detailed, structured assessment for early-stage ventures.",
    solution: "Engineered a responsive, performance-optimized interface using React and TypeScript, integrating OpenAI API for delivering clear AI insights and recommendations.",
    result: "Built an effective assessment workflow that delivers smooth interactions across devices, helping users refine concepts before execution.",
    image: "/screenshots/third.png",
    techStack: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "OpenAI API", Icon: SiOpenai, color: "#412991" }
    ],
    liveLink: "#",
    githubLink: "https://github.com/23mukul",
    color: "from-purple-500/20 to-pink-500/20",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="Real-world applications built with scalability and user experience in focus."
        />

        <motion.div layout className="grid md:grid-cols-3 gap-8 mt-16">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
                className={`group relative rounded-3xl bg-bg-secondary/80 backdrop-blur-xl border border-white/10 overflow-hidden cursor-pointer shadow-2xl transition-all duration-300 ${project.glowColor} flex flex-col`}
              >
                {/* Premium Gradient Overlay */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`} />
                
                {/* Image Section */}
                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-t from-bg-secondary to-transparent z-10 opacity-80`} />
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  
                  {/* Floating Mock Link Icon */}
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={16} />
                  </div>
                </div>

                <div className="relative z-10 p-6 flex flex-col flex-grow bg-gradient-to-b from-transparent to-bg-secondary/50 -mt-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors drop-shadow-md">{project.title.split(' - ')[0]}</h3>
                  <p className="text-text-sub font-medium mb-6 flex-grow leading-relaxed text-sm">{project.summary}</p>
                  
                  {/* Technology Icons only */}
                  <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-white/10">
                    {project.techStack.map((tech, i) => (
                      <div key={i} className="transition-transform hover:scale-110 p-1.5 bg-white/5 rounded-md border border-white/5 shadow-sm" title={tech.name}>
                        <tech.Icon size={18} style={{ color: tech.color }} />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {projects.length > 3 && (
            <motion.div layout className="flex justify-center mt-16 relative z-20">
              <GlowButton variant="primary" onClick={() => setShowAll(!showAll)}>
                 {showAll ? "Show Less" : "Discover All Projects"} 
                 {showAll ? <ChevronUp size={20} className="ml-2" /> : <ChevronDown size={20} className="ml-2" />}
              </GlowButton>
            </motion.div>
        )}
      </div>

      {/* Modal / Dialog using Framer Motion */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-2xl z-10 p-8 md:p-12`}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-text-sub hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full"
              >
                <X size={20} />
              </button>

              <div className="mb-8 pr-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-3 mt-6">
                  {selectedProject.techStack.map((tech, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 shadow-sm hover:bg-white/10 transition-colors">
                      <tech.Icon size={18} style={{ color: tech.color }} />
                      <span className="text-sm font-semibold text-white/90">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8 text-text-main">
                <section>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-secondary rounded-full" /> Challenge
                  </h3>
                  <p className="leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">{selectedProject.challenge}</p>
                </section>
                
                <section>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-primary rounded-full" /> Solution
                  </h3>
                  <p className="leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">{selectedProject.solution}</p>
                </section>
                
                <section>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-success rounded-full" /> Result
                  </h3>
                  <p className="leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">{selectedProject.result}</p>
                </section>

                <div className="pt-6 border-t border-white/10 flex gap-4">
                <Link href={selectedProject.liveLink} target="blank" className="cursor-pointer">
                  <GlowButton variant="primary" className="flex-1 sm:flex-none">
                    <ExternalLink size={18} /> Live Demo
                  </GlowButton>
                  </Link>
                  <Link href={selectedProject.githubLink} target="blank" className="cursor-pointer">
                  <GlowButton variant="outline" className="flex-1 sm:flex-none">
                    <Github size={18} /> Source Code
                  </GlowButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="absolute top-[20%] right-[0%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
    </section>
  );
}
