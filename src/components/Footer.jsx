import React, { useEffect, useRef } from "react";
import { Film, ArrowUp, Code2 } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#040408] border-t border-violet-500/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-violet-500/10">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/20">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-lg text-white font-['Outfit'] uppercase tracking-wider block">{personal.name}</span>
              <span className="text-xs font-mono text-violet-300 font-bold uppercase">{personal.title} PORTFOLIO</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-gray-400">
            {["showreel","projects","before-after","skills","software","contact"].map(s => (
              <a key={s} href={`#${s}`} className="hover:text-violet-300 transition-colors uppercase">{s.replace("-"," ")}</a>
            ))}
          </div>

          <button onClick={scrollToTop} className="p-3 rounded-full bg-white/5 hover:bg-violet-600 text-gray-300 hover:text-white border border-white/10 transition-all duration-300 group" aria-label="Scroll to top">
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-8 p-4 rounded-xl bg-violet-500/5 border border-violet-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-violet-400 shrink-0" />
            <span>Customize videos, thumbnails &amp; contact links in <code className="text-violet-300 bg-black/60 px-1.5 py-0.5 rounded">src/data/portfolioData.js</code></span>
          </div>
          <span className="text-violet-300 font-bold">100% RESPONSIVE &amp; PRODUCTION READY</span>
        </div>

        <div className="mt-8 text-center text-xs font-mono text-gray-500">
          <p>© {new Date().getFullYear()} {personal.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
