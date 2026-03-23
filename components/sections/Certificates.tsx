"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";
import { SiCoursera } from "react-icons/si";
import { FaAward, FaShieldAlt, FaCode, FaRobot, FaJava } from "react-icons/fa";

export default function CertificatesSection() {
  const [showAll, setShowAll] = useState(false);
  const { lang } = useLanguage();
  const tr = t[lang].certificates;

  const certificates = [
    {
      title: "Cloud Computing",
      issuer: "IIT Kharagpur / NPTEL",
      date: "August 2025",
      link: "#",
      color: "from-blue-500/20 to-transparent",
      Icon: FaAward,
      iconColor: "#4285F4",
    },
    {
      title: "ChatGPT Made Easy: AI Essentials",
      issuer: "Udemy",
      date: "August 2025",
      link: "/assets/certificates/ChatGPT Made Easy AI Essentials for Beginners Certificate.pdf",
      color: "from-purple-500/20 to-transparent",
      Icon: FaRobot,
      iconColor: "#A855F7",
    },
    {
      title: "Mastering in C: Basic to Beyond",
      issuer: "CSE Pathshala",
      date: "March 2024",
      link: "#",
      color: "from-yellow-500/20 to-transparent",
      Icon: FaCode,
      iconColor: "#F59E0B",
    },
    {
      title: "DSA Summer Training",
      issuer: "Lovely Professional University",
      date: "June 2025",
      link: "/assets/certificates/DSA cerificate Summer.pdf",
      color: "from-emerald-500/20 to-transparent",
      Icon: FaCode,
      iconColor: "#10B981",
    },
    {
      title: "HackWithVertos 1.0 Finalist",
      issuer: "CodeVertos",
      date: "March 2024",
      link: "/assets/certificates/CodeVertos Hackathon Certificate.jpg.jpeg",
      color: "from-red-500/20 to-transparent",
      Icon: FaAward,
      iconColor: "#EF4444",
    }
  ];

  const displayedCertificates = showAll ? certificates : certificates.slice(0, 6);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title={tr.title} 
          subtitle={tr.subtitle}
        />

        <motion.div layout className="grid md:grid-cols-3 gap-6 mt-16">
          <AnimatePresence>
            {displayedCertificates.map((cert, index) => (
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                layout
                key={cert.title + index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-bg-secondary/50 border border-white/5 overflow-hidden flex flex-col items-center text-center cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform">
                  <cert.Icon size={28} style={{ color: cert.iconColor }} />
                </div>
                
                <h3 className="text-base font-bold text-white mb-1 relative z-10 leading-tight">{cert.title}</h3>
                <p className="text-text-sub text-sm font-medium mb-4 relative z-10">{cert.issuer}</p>
                
                <div className="mt-auto flex items-center gap-2 text-xs text-text-sub w-full justify-between relative z-10 pt-3 border-t border-white/5 group-hover:border-white/10">
                  <span>{cert.date}</span>
                  <span className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    View <ExternalLink size={12} />
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {certificates.length > 6 && (
          <motion.div layout className="flex justify-center mt-12">
            <GlowButton variant="outline" onClick={() => setShowAll(!showAll)}>
               {showAll ? tr.show_less : tr.view_all} 
               {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </GlowButton>
          </motion.div>
        )}
      </div>
    </section>
  );
}
