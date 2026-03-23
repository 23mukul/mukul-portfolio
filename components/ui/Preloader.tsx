"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

const texts = [
  "INITIALIZING NEURAL LINK...",
  "LOADING 3D ASSETS...",
  "ESTABLISHING SECURE CONNECTION...",
  "ACCESS GRANTED: MUKUL SHEORAN"
];

export default function Preloader() {
  const { lang } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const lines = t[lang].preloader.lines;
  const tagline = t[lang].preloader.tagline;

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev < texts.length - 1 ? prev + 1 : prev));
    }, 600);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5; // random jump
      });
    }, 200);

    const finishTimeout = setTimeout(() => {
      setLoading(false);
      // Restore scroll slightly after exit animation to prevent glitched viewing
      setTimeout(() => {
          document.body.style.overflow = "auto";
      }, 800);
    }, 2800); // 2.8 seconds total loading

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
      clearTimeout(finishTimeout);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505]"
        >
          {/* Progress Bar Container */}
          <div className="w-72 max-w-[80vw]">
            <div className="flex justify-between items-end mb-3 font-mono text-xs font-bold tracking-[0.2em] text-primary/80">
              <span>SYSTEM.BOOT</span>
              <span>{Math.min(progress, 100)}%</span>
            </div>
            
            {/* The bar */}
            <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary to-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>

            {/* Terminal Text box */}
            <div className="mt-8 h-12 flex items-start text-xs sm:text-sm font-mono text-white/60 tracking-wider">
              <span className="text-secondary mr-3">{">"}</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={textIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {lines[textIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-[0.4em] text-white/20 uppercase">
            {tagline}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
