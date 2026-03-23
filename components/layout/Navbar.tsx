"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { cn } from "@/lib/utils";
import { Menu, X, User, Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const { lang, setLang } = useLanguage();
  const nav = t[lang].nav;

  const navLinks = [
    { name: nav.about, to: "about" },
    { name: nav.skills, to: "skills" },
    { name: nav.projects, to: "projects" },
    { name: nav.achievements, to: "journey" },
    { name: nav.contact, to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setLangDropdown(false);
    if (langDropdown) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [langDropdown]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4",
        isScrolled
          ? "bg-bg-primary/70 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Profile Icon + Language Switcher */}
        <div className="flex items-center gap-3">
          <Link 
            to="hero" 
            smooth={true} 
            duration={500} 
            className="cursor-pointer flex items-center group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center overflow-hidden relative shadow-sm group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all">
              <img src="/assets/mukul_professional_image.png" alt="Mukul" className="w-full h-full object-cover object-top" />
            </div>
          </Link>

          {/* Language Switcher */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLangDropdown(!langDropdown)}
              className="flex items-center gap-1.5 text-sm font-medium text-text-sub hover:text-white transition-colors px-3 py-1.5 rounded-full border border-white/10 hover:border-primary/30 hover:bg-primary/5 bg-white/5 backdrop-blur-sm"
              title="Change Language"
            >
              <Globe size={14} className={cn("transition-colors", langDropdown ? "text-primary" : "")} />
              <span className="font-mono tracking-wider text-xs uppercase">{lang === "en" ? "EN" : "HI"}</span>
              <ChevronDown size={12} className={cn("transition-transform", langDropdown ? "rotate-180 text-primary" : "")} />
            </button>

            <AnimatePresence>
              {langDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full mt-2 left-0 min-w-[140px] bg-[#111] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 backdrop-blur-md"
                >
                  <button
                    onClick={() => { setLang("en"); setLangDropdown(false); }}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-white/5 transition-colors",
                      lang === "en" ? "text-primary font-semibold bg-primary/5" : "text-text-main"
                    )}
                  >
                    <span className="text-base">🇬🇧</span>
                    <div className="flex flex-col items-start">
                      <span className="text-xs font-bold tracking-wider">ENGLISH</span>
                      <span className="text-[10px] text-text-sub">English</span>
                    </div>
                    {lang === "en" && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
                  </button>
                  <div className="h-px bg-white/5" />
                  <button
                    onClick={() => { setLang("hi"); setLangDropdown(false); }}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-white/5 transition-colors",
                      lang === "hi" ? "text-primary font-semibold bg-primary/5" : "text-text-main"
                    )}
                  >
                    <span className="text-base">🇮🇳</span>
                    <div className="flex flex-col items-start">
                      <span className="text-xs font-bold tracking-wider">हिन्दी</span>
                      <span className="text-[10px] text-text-sub">Hindi</span>
                    </div>
                    {lang === "hi" && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-text-main hover:text-primary transition-colors cursor-pointer text-sm font-medium"
              activeClass="text-primary font-semibold"
              spy={true}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/assets/mukul_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
          >
            {nav.resume}
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-main hover:text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-bg-secondary/95 backdrop-blur-xl border-t border-white/5 mt-4 rounded-2xl"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text-main hover:text-primary transition-colors text-lg font-medium"
                >
                  {link.name}
                </Link>
              ))}
              {/* Mobile language toggle */}
              <div className="flex gap-3 pt-2 border-t border-white/5">
                <button onClick={() => setLang("en")} className={cn("flex-1 py-2 px-3 rounded-lg text-sm font-semibold border transition-colors", lang === "en" ? "bg-primary/10 border-primary/30 text-primary" : "bg-white/5 border-white/10 text-text-sub")}>
                  🇬🇧 English
                </button>
                <button onClick={() => setLang("hi")} className={cn("flex-1 py-2 px-3 rounded-lg text-sm font-semibold border transition-colors", lang === "hi" ? "bg-primary/10 border-primary/30 text-primary" : "bg-white/5 border-white/10 text-text-sub")}>
                  🇮🇳 हिन्दी
                </button>
              </div>
              <a
                href="/assets/mukul_resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center px-5 py-3 rounded-xl bg-primary/10 text-primary border border-primary/20 font-medium"
              >
                {nav.resume}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
