import React, { useEffect, useRef } from "react";
import { Cpu, Zap } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

const renderBadge = (name) => {
  switch (name) {
    case "CapCut":
      return <div className="w-12 h-12 rounded-xl bg-black border border-white/20 flex items-center justify-center font-extrabold text-white text-lg font-mono">CC</div>;
    case "Adobe Premiere Pro":
      return <div className="w-12 h-12 rounded-xl bg-[#00005b] border border-[#9999ff]/50 flex items-center justify-center font-extrabold text-[#9999ff] text-xl font-mono">Pr</div>;
    case "After Effects":
      return <div className="w-12 h-12 rounded-xl bg-[#00005b] border border-[#cf96fd]/50 flex items-center justify-center font-extrabold text-[#cf96fd] text-xl font-mono">Ae</div>;
    case "Canva":
      return <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#00c4cc] to-[#7d2ae8] flex items-center justify-center font-black text-white text-xl italic font-serif">C</div>;
    default:
      return <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white"><Cpu className="w-6 h-6" /></div>;
  }
};

export default function SoftwareSection() {
  const { software } = PORTFOLIO_DATA;
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".reveal");
    if (!items) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    items.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="software" className="py-24 relative bg-[#060609] border-t border-violet-500/5">
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-[140px] pointer-events-none float-orb" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>EDITING SUITE &amp; TOOLKIT</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] uppercase">
            SOFTWARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-purple-400">EXPERTISE</span>
          </h2>
          <p className="text-gray-400 text-base mt-2">
            Industry-standard non-linear editors, color grading suites, motion graphics tools, and graphics creation platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {software.map((item, index) => (
            <div key={index} className={`reveal delay-${Math.min(index * 100 + 100, 500)} glass-card p-6 rounded-2xl border border-violet-500/10 hover:border-fuchsia-500/40 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-2`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  {renderBadge(item.name)}
                  <span className="px-2.5 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-[10px] font-mono font-bold text-violet-300 uppercase">{item.level}</span>
                </div>
                <h3 className="text-lg font-bold text-white font-['Outfit'] uppercase mb-1 group-hover:text-fuchsia-300 transition-colors">{item.name}</h3>
                <p className="text-[11px] font-mono text-gray-400 uppercase mb-3">{item.category}</p>
                <p className="text-gray-300 text-xs leading-relaxed mb-4">{item.description}</p>
              </div>
              <div className="pt-3 border-t border-violet-500/10 flex items-center gap-1 text-[11px] text-gray-400">
                <Zap className="w-3.5 h-3.5 text-violet-400" />
                <span>Production Ready</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
