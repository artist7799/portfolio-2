import React, { useState, useEffect, useRef } from "react";
import { Play, Film, Sliders, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function ProjectGallery({ onSelectProject }) {
  const { projects } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef(null);

  const categories = ["All", "Reels & Shorts", "Cinematic", "Commercial", "Music & Beat Sync"];
  const filteredProjects = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".reveal");
    if (!items) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    items.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [filteredProjects]);

  return (
    <section id="projects" className="py-24 relative bg-[#08080f] border-t border-violet-500/5">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>FEATURED PORTFOLIO WORK</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] uppercase">
              SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400">PROJECTS</span>
            </h2>
            <p className="text-gray-400 text-base max-w-xl mt-2">
              Explore short-form reels, commercial ads, cinematic edits, and beat-synced cuts created for high retention and visual impact.
            </p>
          </div>

          <div className="reveal delay-200 flex flex-wrap items-center gap-2 glass-panel p-1.5 rounded-xl border border-violet-500/15">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all duration-200 uppercase tracking-wider ${activeCategory === cat ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className={`reveal delay-${Math.min(idx * 100 + 100, 600)} glass-card rounded-2xl overflow-hidden border border-violet-500/10 hover:border-violet-500/50 transition-all duration-500 group flex flex-col justify-between hover:-translate-y-2`}>
              <div>
                <div className="relative aspect-video bg-black overflow-hidden cursor-pointer" onClick={() => onSelectProject(project)}>
                  <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080f] via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-bold text-violet-300 border border-violet-500/30 font-mono uppercase">{project.category}</span>
                    <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-gray-300 border border-white/10">{project.duration}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-violet-600/90 text-white flex items-center justify-center shadow-xl shadow-violet-600/50 transform group-hover:scale-110 transition-transform border border-white/30">
                      <Play className="w-7 h-7 fill-white translate-x-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-3 text-[10px] font-mono text-gray-400 bg-black/80 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">{project.resolution}</div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">{project.clientType}</span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-violet-300 transition-colors font-['Outfit'] uppercase mb-3 mt-1">{project.title}</h3>
                  <p className="text-gray-300 text-xs leading-relaxed mb-5 line-clamp-3">{project.shortDescription}</p>

                  <div className="mb-5">
                    <p className="text-[11px] font-mono uppercase text-gray-400 tracking-wider mb-2 flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-violet-400" />
                      <span>EDITING TECHNIQUES</span>
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {(project.editingTechniques || []).slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-gray-300 font-medium">{tech}</span>
                      ))}
                      {(project.editingTechniques || []).length > 3 && (
                        <span className="px-2 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-[10px] text-violet-300 font-mono font-bold">+{(project.editingTechniques || []).length - 3} more</span>
                      )}
                    </div>
                  </div>

                  <div className="mb-2">
                    <p className="text-[11px] font-mono uppercase text-gray-400 tracking-wider mb-2 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-fuchsia-400" />
                      <span>SOFTWARE USED</span>
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {(project.softwareUsed || []).map((sw, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-full bg-violet-600/10 border border-violet-500/30 text-[11px] text-violet-300 font-mono font-semibold">{sw}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <button onClick={() => onSelectProject(project)} className="w-full py-3 rounded-xl bg-white/5 hover:bg-violet-600 text-gray-200 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 hover:border-violet-500 group-hover:shadow-lg group-hover:shadow-violet-600/20">
                  <Play className="w-4 h-4 fill-current" />
                  <span>WATCH VIDEO &amp; DETAILS</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
