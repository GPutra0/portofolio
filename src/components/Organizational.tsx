import { motion } from "motion/react";
import { Users, FileText, Video } from "lucide-react";
import { portfolioData } from "../data";

export default function Organizational() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <p className="font-display font-medium text-xs tracking-[0.2em] text-brand-coral uppercase mb-4">
          Leadership
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
          Organizational <span className="text-white/40 italic">Contributions.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {portfolioData.organizations.map((org, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group p-8 md:p-12 rounded-[2rem] bg-premium-gray border border-white/5 hover:border-brand-coral/20 transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-brand-coral/10 text-brand-coral text-[10px] font-display font-bold uppercase tracking-widest mb-4">
                  {org.period}
                </span>
                <h3 className="text-2xl font-display font-black group-hover:text-brand-coral transition-colors">
                  {org.name}
                </h3>
                <p className="text-brand-teal font-display font-bold text-sm mt-1 tracking-wider uppercase">
                  {org.role}
                </p>
              </div>
              <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-coral group-hover:text-premium-black transition-all duration-500">
                <Users className="w-8 h-8" />
              </div>
            </div>

            <p className="text-white/40 mb-8 border-l-2 border-brand-coral/20 pl-6 py-1 italic">
              {org.description}
            </p>

            <div className="space-y-4">
              {org.achievements.map((item, i) => {
                const isVideo = item.toLowerCase().includes('video');
                const isCert = item.toLowerCase().includes('certificate');
                return (
                  <div key={i} className="flex items-center gap-4 text-white/60 text-sm group/item">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/item:bg-white/10 transition-colors">
                      {isVideo ? <Video className="w-4 h-4 text-brand-coral" /> : isCert ? <FileText className="w-4 h-4 text-brand-teal" /> : <FileText className="w-4 h-4" />}
                    </div>
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Languages Section */}
      <div className="mt-24 pt-12 border-t border-white/5">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
           <p className="font-display font-medium text-xs tracking-[0.2em] text-brand-teal uppercase mb-8">
            Language Proficiency
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            {portfolioData.languages.map((lang) => (
              <div key={lang.name} className="flex flex-col items-center gap-2">
                <span className="text-2xl font-display font-black tracking-tight">{lang.name}</span>
                <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-coral">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

