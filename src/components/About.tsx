import { motion } from "motion/react";
import { portfolioData } from "../data";

export default function About() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative aspect-square lg:aspect-video rounded-[40px] overflow-hidden glass">
          <img src={portfolioData.profileImage} alt={portfolioData.name} referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-50 transition-opacity hover:opacity-80" />
          <div className="absolute inset-0 bg-linear-to-tr from-premium-black to-transparent"></div>
        </motion.div>

        <div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display font-medium text-xs tracking-[0.2em] text-brand-coral uppercase mb-4">
            Biography
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-serif italic mb-8 leading-tight">
            Professional background and <span className="text-white/40 not-italic font-sans font-bold uppercase text-xl">academic journey.</span>
          </motion.h2>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-6 text-lg text-white/50 font-sans leading-relaxed">
            <p>{portfolioData.biography}</p>
            <p>My expertise lies in translating complex requirements into elegant digital solutions, leveraging a strong foundation in Informatics and a keen eye for user-centric design.</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <p className="text-3xl font-display font-bold text-white mb-1">3.54</p>
              <p className="text-xs font-display text-white/30 uppercase tracking-widest">GPA Achievement</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-white mb-1">Untag'45</p>
              <p className="text-xs font-display text-white/30 uppercase tracking-widest">University</p>
            </div>
          </div>
        </div>
      </div>
      z
    </section>
  );
}
