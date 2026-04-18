import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "../data";

export default function Experience() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-premium-black relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-coral/5 blur-[120px] rounded-full -z-10 rotate-12"></div>

      <div className="mb-20">
        <p className="font-display font-medium text-xs tracking-[0.2em] text-brand-teal uppercase mb-4">Journey</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
          Work & academic <span className="text-white/40">experience.</span>
        </h2>
      </div>

      <div className="space-y-12">
        {portfolioData.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-white/5 last:border-0"
          >
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 text-brand-coral mb-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-display font-bold tracking-widest">{exp.period}</span>
              </div>
              <h3 className="text-2xl font-display font-black leading-tight group-hover:text-brand-coral transition-colors">{exp.company}</h3>
            </div>

            <div className="lg:col-span-9 lg:pl-12 border-l lg:border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <span className="text-xl font-display font-bold text-white">{exp.role}</span>
                </div>
                <div className="flex items-center gap-2 text-white/30 text-xs font-display font-medium uppercase tracking-widest">
                  <MapPin className="w-3 h-3 text-brand-teal" />
                  {portfolioData.location.split(" - ")[0]}
                </div>
              </div>

              <p className="text-white/60 mb-6 leading-relaxed max-w-3xl">{exp.description}</p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white/0.02 border border-white/5 group/li hover:bg-white/5 transition-colors">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-teal group-hover/li:scale-125 transition-transform shrink-0"></div>
                    <span className="text-sm text-white/50 group-hover/li:text-white/80 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
