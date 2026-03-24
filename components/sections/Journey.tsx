"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Trophy, Code2, GraduationCap, Calendar, Star, Briefcase, ChevronDown, ChevronUp, Award, ExternalLink } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";
import { SiLeetcode, SiHackerrank, SiCplusplus, SiC, SiPython } from "react-icons/si";

const AnimatedCounter = ({ value, label }: { value: number; label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-6 border border-white/5 rounded-2xl bg-bg-secondary/40 backdrop-blur-sm">
      <div className="text-4xl md:text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
        {count}+
      </div>
      <div className="text-text-sub font-medium">{label}</div>
    </div>
  );
};

export default function JourneySection() {
  const { lang } = useLanguage();
  const tr = t[lang].journey;
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      role: "Summer Training Program",
      company: "Lovely Professional University - Data Structures & Algorithms",
      period: "June 2025",
      details: [
        "Completed an intensive live 6-week training program focused on Data Structures and Algorithms.",
        "Enhanced problem-solving skills and algorithmic thinking through hands-on practice."
      ],
      tech: ["C++", "DSA", "Algorithms", "Problem Solving"]
    }
  ];

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  const education = [
    {
      degree: "B.Tech Computer Science Engineering",
      institution: "Lovely Professional University (LPU)",
      period: "2023 - Present",
      details: "CGPA 6.89",
      icon: <GraduationCap className="text-primary" size={24} />
    },
    {
      degree: "Intermediate (12th)",
      institution: "RPS SR. SEC. School",
      period: "2022 - 2023",
      details: "Percentage: 90%",
      icon: <Award className="text-primary" size={24} />
    },
    {
      degree: "Matriculation (10th)",
      institution: "S.E.D SR. SEC. School",
      period: "2020 - 2021",
      details: "Percentage: 80%",
      icon: <Award className="text-primary" size={24} />
    }
  ];

  const achievements = [
    {
      title: "Technical Achievements",
      desc: "Successfully solved 250+ problems on LeetCode, strengthening problem-solving and coding skills.",
      icon: <SiLeetcode className="text-[#FFA116]" size={24} />,
      link: "https://leetcode.com/u/Mukul230205/",
    },
    {
      title: "Hackathon Finalist",
      desc: "Finalist at 'HackWithVertos' 1.0 (24-Hour Hackathon), qualifying through multiple competitive rounds.",
      icon: <Award className="text-yellow-400" size={24} />,
      link: "#",
    }
  ];

  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title={tr.title} 
          subtitle={tr.subtitle}
        />

        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-20 mt-16 max-w-2xl mx-auto">
          <AnimatedCounter value={250} label={tr.leetcode} />
          <AnimatedCounter value={3} label={tr.projects_built} />
        </div>

          <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Briefcase className="text-secondary" /> {tr.work_experience}
          </h3>
          <div className="space-y-6">
            <AnimatePresence>
              {displayedExperiences.map((exp, index) => (
                <motion.div
                  layout
                  key={exp.role + index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 rounded-2xl bg-bg-secondary/40 border border-white/5 backdrop-blur-sm group hover:border-secondary/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">{exp.role}</h4>
                      <p className="text-text-main font-medium mt-1">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-secondary text-sm font-medium whitespace-nowrap bg-secondary/10 px-3 py-1.5 rounded-full w-fit">
                      <Calendar size={16} /> {exp.period}
                    </div>
                  </div>
                  
                  <ul className="list-none space-y-3 mb-6 text-text-sub text-sm">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.tech.map(t => (
                      <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-text-main">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {experiences.length > 3 && (
              <motion.div layout className="flex justify-center mt-12">
                <GlowButton variant="outline" onClick={() => setShowAll(!showAll)}>
                   {showAll ? tr.view_less : tr.view_all} 
                   {showAll ? <ChevronUp size={18} className="ml-2" /> : <ChevronDown size={18} className="ml-2" />}
                </GlowButton>
              </motion.div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" /> {tr.education}
            </h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:to-transparent">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-bg-primary bg-primary/20 text-primary z-10">
                    {item.icon}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-bg-secondary/40 border border-white/5 backdrop-blur-sm group-hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                       {item.period}
                    </div>
                    <h4 className="text-lg font-bold text-white">{item.degree}</h4>
                    <p className="text-text-main font-medium mb-2">{item.institution}</p>
                    <p className="text-text-sub text-sm">{item.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Trophy className="text-yellow-400" /> {tr.achievements}
            </h3>
            <div className="space-y-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-6 rounded-2xl bg-bg-secondary/40 border border-white/5 backdrop-blur-sm hover:translate-x-2 transition-transform cursor-default"
                >
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white/5 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-text-sub text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
