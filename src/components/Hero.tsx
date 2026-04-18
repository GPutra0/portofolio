import { motion } from "motion/react";
import { ArrowUpRight, Linkedin, Instagram, Twitter, ChevronDown } from "lucide-react";
import { portfolioData } from "../data";

export default function Hero() {
  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-12 items-center px-6 md:px-12 pt-24 pb-12 overflow-hidden z-10">
      {/* Left Column: Greeting & Name */}
      <div className="lg:col-span-4 z-20 flex flex-col justify-center h-full">
        <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-white font-serif italic text-2xl mb-2">
          Hi,
        </motion.p>
        <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-7xl md:text-[84px] font-display font-black leading-[0.9] tracking-[-3px]">
          {portfolioData.firstName}
          <span className="text-brand-coral">.</span> <br />
          {portfolioData.lastName.toUpperCase().split(" ").join("\n")}
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-8 flex flex-col items-start gap-6">
          <p className="text-white/70 font-sans text-xs uppercase tracking-[0.3em] font-medium">{portfolioData.title}</p>

          <button className="px-12 py-4 bg-linear-to-br from-brand-coral to-[#ff8c5a] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_10px_30px_rgba(255,107,53,0.3)]">Hire Me</button>
        </motion.div>

        {/* Social Icons (Desktop Left bottom) */}
        <div className="hidden lg:flex flex-col gap-6 absolute bottom-12 left-12">
          <div className="flex flex-col gap-6 items-center">
            <div className="w-1px h-8 bg-white/20"></div>
            <a href="#" className="relative w-3 h-3 border border-white/40 block hover:border-brand-coral transition-colors"></a>
            <a href="#" className="relative w-3 h-3 border border-white/40 block hover:border-brand-coral transition-colors"></a>
            <a href="#" className="relative w-3 h-3 border border-white/40 block hover:border-brand-coral transition-colors"></a>
          </div>
        </div>
      </div>

      {/* Center Column: Profile Image */}
      <div className="lg:col-span-4 relative flex justify-center items-end h-500px lg:h-full mt-12 lg:mt-0 z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} className="relative w-full aspect-4/5 max-w-440px flex items-end">
          <div className="relative w-full h-600px portrait-arch overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] bg-premium-gray border border-glass-border">
            <img src={portfolioData.profileImage} alt={portfolioData.name} referrerPolicy="no-referrer" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700 hover:scale-105" />
            {/* Edge fade */}
            <div className="absolute inset-0 bg-linear-to-t from-premium-black via-transparent to-transparent opacity-100 h-1/2 bottom-0 top-auto"></div>
          </div>
        </motion.div>
      </div>

      {/* Right Column: Summary & Bio */}
      <div className="lg:col-span-4 z-20 flex flex-col justify-center h-full lg:pl-12 mt-12 lg:mt-0">
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col gap-8">
          <div>
            <p className="font-sans font-bold text-[12px] tracking-[0.2em] text-brand-teal uppercase mb-2">Expert on</p>
            <h2 className="text-xl font-serif italic leading-relaxed opacity-90 max-w-xs">
              Based in {portfolioData.location.split(",")[0]}, specializing in <span className="text-white not-italic font-sans font-bold uppercase text-xs tracking-widest">{portfolioData.skills.specialized[0]}</span> solutions.
            </h2>
          </div>

          <p className="text-white/50 font-sans text-sm leading-relaxed max-w-sm">{portfolioData.summary}</p>

          <a
            href={portfolioData.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans font-bold text-[13px] uppercase pb-1 border-b border-white/20 group hover:text-brand-teal hover:border-brand-teal transition-all w-fit"
          >
            Download CV <span>&rarr;</span>
          </a>
        </motion.div>

        {/* Chat Bubble (Desktop Right bottom) */}
        <div className="hidden lg:flex items-center gap-3 absolute bottom-12 right-12 glass px-6 py-3 rounded-full group cursor-pointer hover:bg-white/10 transition-all">
          <div className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-pulse shadow-[0_0_10px_#2EC4B6]"></div>
          <span className="text-[12px] font-sans font-bold uppercase tracking-widest">Let's Chat</span>
        </div>
      </div>
    </section>
  );
}
