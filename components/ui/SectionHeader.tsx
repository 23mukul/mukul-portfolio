"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-16",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        align === "right" && "items-end text-right",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-4"
      >
        {align !== "left" && <div className="h-px w-12 bg-primary/50" />}
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
          {title}
        </h2>
        {align !== "right" && <div className="h-px w-12 bg-primary/50" />}
      </motion.div>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-text-sub text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
