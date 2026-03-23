"use client";

import { motion } from "framer-motion";
import { User, Mail, Phone, Code2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function IDCard() {
  const { lang } = useLanguage();
  const tr = t[lang].idcard;
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: "spring", bounce: 0.4 }}
      className="relative w-[340px] h-[520px] mx-auto md:ml-auto md:mr-0 z-20 group"
      style={{ perspective: 1000 }}
    >
      {/* Lanyard Strap */}
      <div className="absolute -top-[140px] left-1/2 -translate-x-1/2 flex flex-col items-center z-0">
        <div className="w-10 h-28 bg-[#1a1a1a] shadow-xl relative z-0 origin-bottom flex justify-center border-x border-white/5">
            <div className="w-1 h-full bg-white/5" />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-800 shadow-inner" />
        </div>
        
        {/* Metal Clip */}
        <div className="w-14 h-12 border-4 border-zinc-500 rounded-b-3xl -mt-2 relative z-10 shadow-md flex items-end justify-center pb-1">
          <div className="w-4 h-8 bg-gradient-to-b from-zinc-300 to-zinc-500 border border-zinc-400 rounded-md shadow-sm translate-y-6 flex items-center justify-center">
             <div className="w-1 h-6 border-x border-zinc-500/50" />
          </div>
        </div>
      </div>

      {/* Actual ID Card */}
      <motion.div
        whileHover={{
          rotateY: 10,
          rotateX: 5,
          y: -10,
          scale: 1.02,
          boxShadow: "0 20px 50px -10px rgba(99,102,241,0.2)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full h-full bg-bg-secondary rounded-3xl overflow-hidden shadow-2xl mt-12 origin-top cursor-grab active:cursor-grabbing border border-white/10 relative preserve-3d"
      >
        {/* Sleek Dark Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg-secondary via-[#1a1a24] to-bg-primary opacity-100" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay" />
        
        {/* Decorative graphic rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-[2px] border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-secondary/5 rounded-full" />
        
        {/* Top Accent Gradient */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

        {/* Card Lanyard Hole */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-3 bg-white/5 border border-white/10 rounded-full shadow-inner flex items-center justify-center backdrop-blur-sm z-30">
            <div className="w-12 h-1.5 bg-black/60 rounded-full shadow-inner" />
        </div>

        {/* Content Container with translateZ for powerful 3D effect */}
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center p-6 text-center transform-gpu" style={{ transform: "translateZ(30px)" }}>
            
            {/* Logo or Indicator */}
            <div className="absolute top-4 right-4 text-primary flex items-center gap-1.5 opacity-80">
                <Code2 size={16} /> <span className="text-[10px] font-mono tracking-widest font-bold">DEV_NODE</span>
            </div>

            {/* Big Profile Picture */}
            <div className="w-40 h-40 rounded-2xl bg-[#111] border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden mt-2 relative group-hover:shadow-[0_15px_30px_rgba(99,102,241,0.2)] group-hover:border-primary/30 transition-all duration-300 transform-gpu" style={{ transform: "translateZ(50px)" }}>
                <img src="/assets/mukul_professional_image.png" alt="Mukul" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            </div>

            {/* Name and Role */}
            <div className="mt-8 transform-gpu" style={{ transform: "translateZ(40px)" }}>
                <h2 className="text-3xl font-heading font-black text-white tracking-widest uppercase">
                    Mukul
                </h2>
                <div className="inline-block mt-3 px-5 py-2 bg-primary/10 border border-primary/20 rounded-md text-primary font-mono tracking-widest text-xs uppercase shadow-sm">
                    {tr.role}
                </div>
            </div>

            {/* Simplified Contact Info */}
            <div className="mt-8 flex flex-col gap-3 w-full px-2 transform-gpu" style={{ transform: "translateZ(20px)" }}>
                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md rounded-xl p-3 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-black/50 border border-white/5 flex items-center justify-center shrink-0">
                        <Mail size={16} className="text-text-sub" />
                    </div>
                    <span className="text-text-main font-mono text-xs tracking-wider">mukulsheoran23@gmail.com</span>
                </div>
                
                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md rounded-xl p-3 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-black/50 border border-white/5 flex items-center justify-center shrink-0">
                        <Phone size={16} className="text-text-sub" />
                    </div>
                    <span className="text-text-main font-mono text-xs tracking-wider">+91-8708775970</span>
                </div>
            </div>

        </div>
      </motion.div>
      <style dangerouslySetInnerHTML={{__html: `
        .preserve-3d {
            transform-style: preserve-3d;
        }
      `}} />
    </motion.div>
  );
}
