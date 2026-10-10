import React, { useEffect, useRef } from "react";
import { Film, Palette, Sparkles, Wand2, Volume2, Type, Smartphone, Video } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

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

export default function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;
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
    <section id="skills" className="py-24 relative bg-[#070710] border-t border-violet-500/5">
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-violet-600/5 rounded-full blur-[140px] pointer-events-none float-orb-slow" />
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] uppercase">
            EDITING <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400">SKILLS</span>
          </h2>
          <p className="text-gray-400 text-base mt-2">
            Specialized editing skill set tailored for high retention, narrative storytelling, and cinematic polish.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skillIcons[skill.name] || Film;
            const delay = `delay-${Math.min(index * 100 + 100, 800)}`;
            return (
              <div key={index} className={`reveal ${delay} glass-card p-6 rounded-2xl border border-violet-500/10 hover:border-violet-500/50 transition-all duration-300 group hover:-translate-y-2`}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-purple-600/10 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-4 group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-['Outfit'] uppercase mb-2 group-hover:text-violet-300 transition-colors">{skill.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{skill.description}</p>
                <div className="mt-4 pt-3 border-t border-violet-500/10 flex items-center justify-between text-[10px] font-mono text-gray-500 group-hover:text-gray-400">
                  <span>SPECIALTY</span>
                  <span className="text-violet-400 font-bold">100% HAND-CRAFTED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
