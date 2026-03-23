"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlowButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  target?: string;
  rel?: string;
}

export default function GlowButton({
  children,
  variant = "primary",
  className,
  href,
  target,
  rel,
  ...props
}: GlowButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 overflow-hidden group focus:outline-none";

  const variants = {
    primary:
      "bg-primary text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:bg-primary/90",
    secondary:
      "bg-secondary text-bg-primary shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:bg-secondary/90",
    outline:
      "bg-transparent border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary shadow-[0_0_15px_rgba(99,102,241,0.1)] hover:shadow-[0_0_25px_rgba(99,102,241,0.3)]",
  };

  const Content = () => (
    <>
      <span className="relative z-10 flex items-center gap-2 pointer-events-none">
        {children}
      </span>
      {variant !== "outline" && (
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer z-0 pointer-events-none" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={cn(baseStyles, variants[variant], className)}
        whileTap={{ scale: 0.95 }}
      >
        <Content />
      </motion.a>
    );
  }

  return (
    <motion.button
      className={cn(baseStyles, variants[variant], className)}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <Content />
    </motion.button>
  );
}
