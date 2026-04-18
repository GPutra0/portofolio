import { motion } from "motion/react";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { portfolioData } from "../data";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 px-6 md:px-12 bg-premium-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end mb-24">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-7xl md:text-[100px] font-display font-black leading-[0.85] tracking-[-4px] mb-12">
              LET'S <span className="text-brand-coral">CONNECT</span> <br />
              AND WORK.
            </motion.h2>

            <motion.a
              href={`mailto:${portfolioData.email}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-serif italic hover:text-brand-teal transition-colors"
            >
              {portfolioData.email}
              <span className="not-italic text-2xl ml-4">&rarr;</span>
            </motion.a>
          </div>

          <div className="flex flex-col gap-8 lg:items-end">
            <div className="flex gap-12">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-display font-bold uppercase tracking-[0.3em] text-white/20">Socials</span>
                <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noopener noreferrer" className="font-display font-bold text-sm tracking-widest uppercase hover:text-brand-teal transition-colors">
                  LinkedIn
                </a>
                <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="font-display font-bold text-sm tracking-widest uppercase hover:text-brand-teal transition-colors">
                  GitHub
                </a>
                <a href="#" className="font-display font-bold text-sm tracking-widest uppercase hover:text-brand-teal transition-colors">
                  Instagram
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-display font-bold uppercase tracking-[0.3em] text-white/20">Menu</span>
                <a href="#" className="font-display font-bold text-sm tracking-widest uppercase hover:text-brand-coral transition-colors">
                  Home
                </a>
                <a href="#" className="font-display font-bold text-sm tracking-widest uppercase hover:text-brand-coral transition-colors">
                  About
                </a>
                <a href="#" className="font-display font-bold text-sm tracking-widest uppercase hover:text-brand-coral transition-colors">
                  Services
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-display font-bold uppercase tracking-[0.3em] text-white/20">© 2026 {portfolioData.name.toUpperCase()} — ALL RIGHTS RESERVED</p>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-[10px] font-display font-bold uppercase tracking-[0.3em] text-white/40">AVAILABLE FOR NEW PROJECTS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
