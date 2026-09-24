import React, { useState } from 'react';
import { Play, Film, Sliders, CheckCircle2, Layers, Cpu, ExternalLink, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function ProjectGallery({ onSelectProject }) {
  const { projects } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Reels & Shorts', 'Cinematic', 'Commercial', 'Music & Beat Sync'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-[#09090e] border-t border-white/5">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>FEATURED PORTFOLIO WORK</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] uppercase">
              SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">PROJECTS</span>
            </h2>
            <p className="text-gray-400 text-base max-w-xl mt-2">
              Explore short-form reels, commercial ads, cinematic edits, and beat-synced cuts created for high retention and visual impact.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 glass-panel p-1.5 rounded-xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all duration-200 uppercase tracking-wider ${
                  activeCategory === cat
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                {/* Video Thumbnail Header */}
                <div 
                  className="relative aspect-video bg-black overflow-hidden cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-black/20 to-transparent pointer-events-none"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-bold text-red-400 border border-red-500/30 font-mono uppercase">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-gray-300 border border-white/10">
                      {project.duration}
                    </span>
                  </div>

                  {/* Hover Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-xl shadow-red-600/50 transform group-hover:scale-110 transition-transform border border-white/30">
                      <Play className="w-7 h-7 fill-white translate-x-0.5" />
                    </div>
                  </div>

                  {/* Resolution Indicator Bar */}
                  <div className="absolute bottom-2 left-3 text-[10px] font-mono text-gray-400 bg-black/80 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
                    {project.resolution}
                  </div>
                </div>

                {/* Project Info Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                      {project.clientType}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors font-['Outfit'] uppercase mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-xs leading-relaxed mb-5 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Editing Techniques Pills */}
                  <div className="mb-5">
                    <p className="text-[11px] font-mono uppercase text-gray-400 tracking-wider mb-2 flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-red-400" />
                      <span>EDITING TECHNIQUES</span>
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {(project.editingTechniques || []).slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-gray-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {(project.editingTechniques || []).length > 3 && (
                        <span className="px-2 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-[10px] text-red-400 font-mono font-bold">
                          +{(project.editingTechniques || []).length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Software Used Tags */}
                  <div className="mb-6">
                    <p className="text-[11px] font-mono uppercase text-gray-400 tracking-wider mb-2 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-amber-400" />
                      <span>SOFTWARE USED</span>
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {(project.softwareUsed || ["Adobe Premiere Pro", "DaVinci Resolve"]).map((sw, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-[11px] text-red-300 font-mono font-semibold"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Watch Video Footer Button */}
              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-red-600 text-gray-200 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 hover:border-red-500 group-hover:shadow-lg group-hover:shadow-red-600/20"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>WATCH VIDEO & DETAILS</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
