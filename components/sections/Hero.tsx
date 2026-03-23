"use client";

import { motion } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";
import { Download, ChevronRight, Mail } from "lucide-react";
import IDCard from "@/components/sections/IDCard";
import HeroFloatingIcons from "@/components/3d/HeroFloatingIcons";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { Github, Linkedin } from "lucide-react";

export default function HeroSection() {
  const { lang } = useLanguage();
  const tr = t[lang].hero;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      <HeroFloatingIcons />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 pointer-events-auto"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary w-fit text-sm font-medium mb-2 backdrop-blur-sm">
            {tr.badge}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight tracking-tighter">
            {tr.greeting} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Mukul
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-text-sub font-medium max-w-xl leading-relaxed">
            {tr.role}
          </h2>
          
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <GlowButton href="#projects" variant="primary">
              {tr.cta_projects} <ChevronRight size={18} />
            </GlowButton>
            
            <GlowButton href="/assets/mukul_resume.pdf" variant="outline" target="_blank">
              {tr.cta_resume} <Download size={18} />
            </GlowButton>
            
            <GlowButton href="#contact" variant="secondary" className="px-4">
              <Mail size={18} />
            </GlowButton>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center gap-6 mt-4 ml-2">
            <motion.a 
              href="http://www.linkedin.com/in/mukulsheoran23" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className="text-text-sub hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={22} />
            </motion.a>
            <motion.a 
              href="https://github.com/23mukul" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className="text-text-sub hover:text-white transition-colors duration-300"
            >
              <Github size={22} />
            </motion.a>
            <motion.a 
              href="https://leetcode.com/u/Mukul230205/" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className="text-text-sub hover:text-[#FFA116] transition-colors duration-300"
            >
              <SiLeetcode size={22} />
            </motion.a>
            <motion.a 
              href="https://www.hackerrank.com/profile/mukulsheoran23" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className="text-text-sub hover:text-[#00EA64] transition-colors duration-300"
            >
              <SiHackerrank size={22} />
            </motion.a>
          </div>
        </motion.div>
        
        <div className="hidden md:flex justify-end items-center h-full pointer-events-auto">
          <IDCard />
        </div>
      </div>
      
      {/* Scroll indicator */}
      {/* <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs text-text-sub uppercase tracking-widest">{tr.scroll}</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div> */}
    </section>
  );
}
