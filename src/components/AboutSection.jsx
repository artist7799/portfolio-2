import React from 'react';
import { User, Film, CheckCircle2, Award, Eye, Monitor, Flame } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function AboutSection() {
  const { personal, stats } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 relative bg-[#09090e] border-t border-white/5">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Card / Stats Grid (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/15 p-8 shadow-2xl">
              
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 via-rose-600 to-amber-500 p-[1px]">
                  <div className="w-full h-full bg-[#0a0a0f] rounded-[15px] flex items-center justify-center text-red-500 font-extrabold text-2xl font-['Outfit']">
                    {personal.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white font-['Outfit'] uppercase">
                    {personal.name}
                  </h3>
                  <p className="text-xs font-mono text-red-400 font-bold uppercase tracking-widest">
                    {personal.title}
                  </p>
                </div>
              </div>

              {/* Bio Paragraph requested directly */}
              <blockquote className="text-gray-300 text-sm leading-relaxed italic border-l-2 border-red-500 pl-4 py-1 mb-8 bg-white/5 rounded-r-lg">
                "{personal.bio}"
              </blockquote>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <p className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] glow-text-red">
                      {stat.value}
                    </p>
                    <p className="text-[11px] font-mono text-gray-400 uppercase mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: Creative Philosophy & Core Values (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-bold tracking-widest uppercase mb-3">
                <User className="w-3.5 h-3.5" />
                <span>ABOUT MY WORK</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] uppercase">
                CRAFTING <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">HIGH-RETENTION</span> VISUALS
              </h2>
            </div>

            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                As a video editor, my primary focus is creating content that grabs attention in the first 3 seconds and holds viewer retention till the final frame.
              </p>
              <p>
                Whether editing 9:16 vertical reels for Instagram & YouTube Shorts, or assembling widescreen 4K commercial videos, I blend precise audio beat matching, smooth motion graphics, clean color grading, and dynamic pacing.
              </p>
            </div>

            {/* Editing Philosophy Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-xl glass-card border border-white/10">
                <h4 className="text-base font-bold text-white font-['Outfit'] uppercase mb-1 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-red-500" />
                  <span>HOOK & RETENTION</span>
                </h4>
                <p className="text-xs text-gray-400">
                  Strategic first 3-second visual hooks, kinetic text captions, and fast jump cuts.
                </p>
              </div>

              <div className="p-5 rounded-xl glass-card border border-white/10">
                <h4 className="text-base font-bold text-white font-['Outfit'] uppercase mb-1 flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-amber-500" />
                  <span>COLOR & MOOD</span>
                </h4>
                <p className="text-xs text-gray-400">
                  Custom LUTs, Log-to-Rec709 mapping, dynamic skin-tone matching and cinematic teal-orange vibes.
                </p>
              </div>

              <div className="p-5 rounded-xl glass-card border border-white/10">
                <h4 className="text-base font-bold text-white font-['Outfit'] uppercase mb-1 flex items-center gap-2">
                  <Award className="w-4 h-4 text-rose-500" />
                  <span>SOUND DESIGN</span>
                </h4>
                <p className="text-xs text-gray-400">
                  Layered riser sound effects, spatial whooshes, impacts, and crisp audio mixing.
                </p>
              </div>

              <div className="p-5 rounded-xl glass-card border border-white/10">
                <h4 className="text-base font-bold text-white font-['Outfit'] uppercase mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>FAST TURNAROUND</span>
                </h4>
                <p className="text-xs text-gray-400">
                  Organized timelines, efficient proxy workflows, and quick project revisions.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
