import { motion } from "motion/react";

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Atmosphere Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,107,53,0.15)_0%,transparent_40%),radial-gradient(circle_at_80%_70%,rgba(46,196,182,0.15)_0%,transparent_40%)]" />

      {/* Decorative Rings */}
      <div className="absolute w-400px h-400px -top-100px -right-100px border border-glass-border rounded-full opacity-30" />
      <div className="absolute w-200px h-200px bottom-10% left-20% border border-glass-border rounded-full opacity-20" />

      {/* Decorative Floating shapes */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 right-10% w-32 h-32 border border-brand-coral/10 rounded-full" />
      <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/3 left-5% w-16 h-16 border border-brand-teal/10 rounded-lg rotate-45" />

      {/* Grain effect */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-150"></div>
    </div>
  );
}
