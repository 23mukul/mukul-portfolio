"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { Terminal, Code2, Database, Rocket } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

const icons = [
  <Terminal className="text-primary" size={24} key="t" />,
  <Code2 className="text-secondary" size={24} key="c" />,
  <Database className="text-accent" size={24} key="d" />,
  <Rocket className="text-success" size={24} key="r" />,
];

export default function AboutSection() {
  const { lang } = useLanguage();
  const tr = t[lang].about;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title={tr.title} 
          subtitle={tr.subtitle}
          align="left"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-text-main text-lg leading-relaxed"
          >
            <p>
              {tr.p1.includes("Data Scientist") ? (
                <>
                  {tr.p1.split("Data Scientist")[0]}
                  <strong className="text-white">Data Scientist</strong>
                  {tr.p1.split("Data Scientist")[1]}
                </>
              ) : tr.p1.includes("डेटा साइंटिस्ट") ? (
                <>
                  {tr.p1.split("डेटा साइंटिस्ट")[0]}
                  <strong className="text-white">डेटा साइंटिस्ट</strong>
                  {tr.p1.split("डेटा साइंटिस्ट")[1]}
                </>
              ) : tr.p1}
            </p>
            <p>{tr.p2}</p>
            <p>{tr.p3}</p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {tr.highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl bg-bg-secondary/50 border border-white/5 backdrop-blur-sm hover:border-primary/50 transition-colors group"
              >
                <div className="mb-4 p-3 rounded-lg bg-white/5 w-fit group-hover:bg-primary/10 transition-colors">
                  {icons[index]}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-text-sub">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 -right-[20%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
    </section>
  );
}
