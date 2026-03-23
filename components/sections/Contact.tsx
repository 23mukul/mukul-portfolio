"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowButton from "@/components/ui/GlowButton";
import { Linkedin, Mail, Send, Loader2, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function ContactSection() {
  const { lang } = useLanguage();
  const tr = t[lang].contact;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        console.error('Error sending message');
      }
    } catch (error) {
      console.error('Failed to submit:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title={tr.title} 
          subtitle={tr.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-16 mt-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-heading font-bold text-white mb-6">Let&apos;s connect</h3>
            <p className="text-text-main text-lg mb-10 leading-relaxed">
              Whether you have a project in mind, a collaboration opportunity, or just want to chat about data science and tech — I&apos;m always open to new connections.
            </p>

            <div className="flex flex-col gap-4">
              {/* Email */}
              <a
                href="mailto:mukulsheoran23@gmail.com"
                className="flex items-center gap-4 text-white hover:text-primary transition-colors p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/50 group"
              >
                <div className="w-11 h-11 rounded-full flex items-center justify-center bg-primary/20 text-primary group-hover:scale-110 transition-transform shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-text-sub mb-0.5 font-medium">Email</p>
                  <span className="font-semibold text-sm">mukulsheoran23@gmail.com</span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+918708775970"
                className="flex items-center gap-4 text-white hover:text-secondary transition-colors p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-secondary/50 group"
              >
                <div className="w-11 h-11 rounded-full flex items-center justify-center bg-secondary/20 text-secondary group-hover:scale-110 transition-transform shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-text-sub mb-0.5 font-medium">Mobile</p>
                  <span className="font-semibold text-sm">+91-8708775970</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="http://www.linkedin.com/in/mukulsheoran23"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-white hover:text-[#0A66C2] transition-colors p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#0A66C2]/50 group"
              >
                <div className="w-11 h-11 rounded-full flex items-center justify-center bg-[#0A66C2]/20 text-[#0A66C2] group-hover:scale-110 transition-transform shrink-0">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-xs text-text-sub mb-0.5 font-medium">LinkedIn</p>
                  <span className="font-semibold text-sm">linkedin.com/in/mukulsheoran23</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-bg-secondary/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-text-sub">{tr.name_label}</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-white/20"
                placeholder={tr.name_placeholder}
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-text-sub">{tr.email_label}</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-white/20"
                placeholder={tr.email_placeholder}
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-text-sub">{tr.message_label}</label>
              <textarea 
                id="message" 
                name="message"
                required
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none placeholder:text-white/20"
                placeholder={tr.message_placeholder}
              />
            </div>

            <GlowButton 
              type="submit" 
              variant="primary" 
              className="w-full mt-2" 
              disabled={isSubmitting || isSuccess}
            >
              {isSubmitting ? (
                <><Loader2 className="animate-spin" size={18} /> {tr.sending}</>
              ) : isSuccess ? (
                <>{tr.success} ✨</>
              ) : (
                <>{tr.send} <Send size={18} /></>
              )}
            </GlowButton>
          </motion.form>
        </div>
      </div>
      
      {/* Background decor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] max-w-2xl h-[200px] bg-primary/10 blur-[100px] rounded-t-[100%] pointer-events-none" />
    </section>
  );
}
