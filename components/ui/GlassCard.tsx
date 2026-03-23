"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className,
  delay = 0,
  hoverEffect = true,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={
        hoverEffect
          ? {
              y: -5,
              scale: 1.02,
              boxShadow: "0 20px 40px -10px rgba(99,102,241,0.15)",
            }
          : undefined
      }
      className={cn(
        "relative rounded-2xl overflow-hidden bg-bg-secondary/40 backdrop-blur-md border border-white/10 p-6",
        "before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-white/5 before:to-transparent",
        "after:absolute after:inset-0 after:-z-20 after:bg-bg-primary after:opacity-50",
        className
      )}
    >
      <div className="relative z-10 h-full">{children}</div>
      {/* Subtle neon glow on hover if enabled */}
      {hoverEffect && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
    </motion.div>
  );
}
