import { motion } from "motion/react";
import { Code2, BrainCircuit, Figma, Database, Terminal, Cpu } from "lucide-react";
import { portfolioData } from "../data";

const skillIcons: Record<string, any> = {
  "UI/UX Design": Figma,
  "Image Processing": BrainCircuit,
  "AI (YOLO)": Cpu,
  "Data Science": Database,
  "HTML": Code2,
  "JavaScript": Terminal,
};

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <p className="font-display font-medium text-xs tracking-[0.2em] text-brand-teal uppercase mb-4">
            Specializations
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
            Technical skills and <span className="text-brand-coral italic underline decoration-1 underline-offset-8">specialized</span> expertise.
          </h2>
        </div>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {portfolioData.skills.specialized.map((skill, idx) => {
          const Icon = skillIcons[skill] || BrainCircuit;
          return (
            <motion.div 
              key={skill} 
              variants={item}
              className="group relative p-10 rounded-[2.5rem] glass hover:border-brand-teal transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700">
                <Icon className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center mb-6 text-brand-teal group-hover:bg-brand-teal group-hover:text-premium-black transition-colors duration-500">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-brand-teal transition-colors">
                  {skill}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Proficient in implementing {skill.toLowerCase()} solutions with a focus on efficiency and modern standards.
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Tech Stack Horizontal List */}
      <div className="mt-20 pt-12 border-t border-white/5">
        <p className="text-center font-display font-bold text-xs tracking-[0.3em] text-white/20 uppercase mb-8">
          The Full Stack
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {portfolioData.skills.technical.map((tech) => (
            <span key={tech} className="text-xs md:text-sm font-display font-medium text-white/40 flex items-center gap-2 group cursor-default">
              <span className="w-1 h-1 bg-white/10 rounded-full group-hover:bg-brand-coral transition-colors"></span>
              {tech.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
