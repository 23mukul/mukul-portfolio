"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import SkillsSection from "@/components/sections/Skills";
import ProjectsSection from "@/components/sections/Projects";
import JourneySection from "@/components/sections/Journey";
import CertificatesSection from "@/components/sections/Certificates";
import ContactSection from "@/components/sections/Contact";
import Preloader from "@/components/ui/Preloader";

// Lazy load 3D components to improve initial page load performance
const SceneContainer = dynamic(() => import("@/components/3d/SceneContainer"), { ssr: false });
const GlobalBackground = dynamic(() => import("@/components/3d/GlobalBackground"), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-transparent min-h-screen selection:bg-primary/30 selection:text-white">
      <Preloader />
      {/* Global 3D Canvas */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SceneContainer>
          <GlobalBackground />
        </SceneContainer>
      </div>

      <Navbar />
      
      {/* Content wrapper with pointer events */}
      <div className="relative z-10 pointer-events-auto">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <CertificatesSection />
        <ContactSection />
        
        <footer className="py-8 text-center border-t border-white/5 bg-bg-primary/50 backdrop-blur-md">
          <p className="text-text-sub font-medium text-sm">
            © {new Date().getFullYear()} Mukul Sheoran · Data Scientist & Developer
          </p>
        </footer>
      </div>
    </main>
  );
}
