import { portfolioData } from "../data";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-10 md:px-16 flex justify-between items-center bg-transparent">
      <div className="flex items-center gap-10">
        <span className="font-sans font-extrabold text-xl tracking-tighter uppercase">{portfolioData.firstName.split(" ")[0]}</span>
        <span className="hidden sm:inline text-[13px] font-sans font-medium tracking-widest text-white/40 hover:text-white transition-colors cursor-default">{portfolioData.email}</span>
      </div>

      <button className="flex flex-col justify-between w-30px h-12px group cursor-pointer">
        <span className="h-1px w-full bg-white group-hover:bg-brand-coral transition-colors"></span>
        <span className="h-1px w-[60%] self-end bg-white group-hover:bg-brand-coral transition-colors"></span>
      </button>
    </nav>
  );
}
