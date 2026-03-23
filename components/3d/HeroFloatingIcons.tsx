"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import { SiPython, SiNextdotjs, SiCplusplus, SiPandas, SiTailwindcss, SiScikitlearn } from "react-icons/si";
import { FaChartBar, FaDatabase } from "react-icons/fa";

export default function HeroFloatingIcons() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (rafRef.current) return; // skip if a frame is already queued
    rafRef.current = requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove]);

  // Reduced from 10 to 6 icons for better performance
  const icons = [
    { Icon: SiPython,      color: "#3776AB", size: 48, defaultPos: { x: "10%", y: "20%" }, factor: 0.05 },
    { Icon: FaChartBar,    color: "#F2C811", size: 56, defaultPos: { x: "80%", y: "15%" }, factor: -0.04 },
    { Icon: SiPandas,      color: "#150458", size: 64, defaultPos: { x: "70%", y: "70%" }, factor: 0.06 },
    { Icon: SiScikitlearn, color: "#F7931E", size: 40, defaultPos: { x: "20%", y: "80%" }, factor: -0.03 },
    { Icon: FaDatabase,    color: "#4169E1", size: 52, defaultPos: { x: "40%", y: "10%" }, factor: 0.02 },
    { Icon: SiTailwindcss, color: "#06B6D4", size: 44, defaultPos: { x: "90%", y: "50%" }, factor: -0.05 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {icons.map((item, index) => {
        const xOffset = mousePosition.x * item.factor;
        const yOffset = mousePosition.y * item.factor;

        return (
          <motion.div
            key={index}
            className="absolute opacity-20 drop-shadow-[0_0_12px_currentColor]"
            style={{
              left: item.defaultPos.x,
              top: item.defaultPos.y,
              color: item.color,
            }}
            animate={{
              x: xOffset,
              y: yOffset,
            }}
            transition={{ type: "spring", stiffness: 30, damping: 25 }}
          >
            <item.Icon size={item.size} />
          </motion.div>
        );
      })}
    </div>
  );
}
