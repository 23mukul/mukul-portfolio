"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import { 
  SiReact, SiJavascript, SiTailwindcss, SiPostgresql, SiGit, SiGithub, SiCplusplus, SiPython, SiC, SiGooglecolab, SiJupyter, SiNumpy, SiPandas, SiScikitlearn
} from "react-icons/si";
import { FaFileExcel, FaChartBar, FaChartLine, FaJava } from "react-icons/fa";
import { Code2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function SkillsSection() {
  const { lang } = useLanguage();
  const tr = t[lang].skills;
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "C", icon: SiC, color: "#A8B9CC" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Java", icon: FaJava, color: "#007396" },
        { name: "SQL", icon: SiPostgresql, color: "#4169E1" },
      ],
      color: "from-primary/20",
      borderColor: "group-hover:border-primary/50",
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
      color: "from-secondary/20",
      borderColor: "group-hover:border-secondary/50",
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#ffffff" },
        { name: "VS Code", icon: Code2, color: "#007ACC" },
        { name: "MS Excel", icon: FaFileExcel, color: "#217346" },
        { name: "Power BI", icon: FaChartBar, color: "#F2C811" },
        { name: "Google Colab", icon: SiGooglecolab, color: "#F9AB00" },
      ],
      color: "from-accent/20",
      borderColor: "group-hover:border-accent/50",
    },
    {
      title: "Data Analytics",
      skills: [
        { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
        { name: "NumPy", icon: SiNumpy, color: "#013243" },
        { name: "Pandas", icon: SiPandas, color: "#150458" },
        { name: "Seaborn", icon: FaChartLine, color: "#4C72B0" },
        { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      ],
      color: "from-success/20",
      borderColor: "group-hover:border-success/50",
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title={tr.title} 
          subtitle={tr.subtitle}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {skillCategories.map((category, index) => (
            <GlassCard 
              key={category.title} 
              delay={index * 0.1}
              className={`group border-white/5 transition-colors duration-300 ${category.borderColor}`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} to-transparent`} />
              
              <h3 className="text-2xl font-bold text-white mb-6 mt-2">{category.title}</h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg bg-white/5 text-text-main border border-white/10 cursor-default transition-all duration-300 shadow-md"
                  >
                    <skill.icon size={18} style={{ color: skill.color }} className="drop-shadow-[0_0_8px_currentColor]" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 -left-[10%] w-[30%] h-[40%] bg-secondary/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
    </section>
  );
}
