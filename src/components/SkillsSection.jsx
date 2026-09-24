import React from 'react';
import { Film, Palette, Sparkles, Wand2, Volume2, Type, Smartphone, Video, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;

  // Icon mapping for each required skill
  const skillIcons = {
    "Video Editing": Film,
    "Color Grading": Palette,
    "Motion Graphics": Sparkles,
    "Transitions": Wand2,
    "Sound Design": Volume2,
    "Caption/Subtitles": Type,
    "Reels & Shorts": Smartphone,
    "Cinematic Editing": Video,
  };

  return (
    <section id="skills" className="py-24 relative bg-[#09090e] border-t border-white/5">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] uppercase">
            EDITING <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">SKILLS</span>
          </h2>
          <p className="text-gray-400 text-base mt-2">
            Specialized editing skill set tailored for high retention, narrative storytelling, and cinematic polish.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skillIcons[skill.name] || Film;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-red-500/50 transition-all duration-300 group hover:-translate-y-1.5"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/10 border border-red-500/30 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white font-['Outfit'] uppercase mb-2 group-hover:text-red-400 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-gray-400 text-xs leading-relaxed">
                  {skill.description}
                </p>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500 group-hover:text-gray-400">
                  <span>SPECIALTY</span>
                  <span className="text-red-400 font-bold">100% HAND-CRAFTED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
