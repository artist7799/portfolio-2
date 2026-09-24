import React from 'react';
import { Film, ArrowUp, Heart, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050508] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      
      {/* Top Timeline Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-rose-600 flex items-center justify-center text-white shadow-lg">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-lg text-white font-['Outfit'] uppercase tracking-wider block">
                {personal.name}
              </span>
              <span className="text-xs font-mono text-red-400 font-bold uppercase">
                {personal.title} PORTFOLIO
              </span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-gray-400">
            <a href="#showreel" className="hover:text-white transition-colors">SHOWREEL</a>
            <a href="#projects" className="hover:text-white transition-colors">PROJECTS</a>
            <a href="#before-after" className="hover:text-white transition-colors">BEFORE & AFTER</a>
            <a href="#skills" className="hover:text-white transition-colors">SKILLS</a>
            <a href="#software" className="hover:text-white transition-colors">SOFTWARE</a>
            <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/5 hover:bg-red-600 text-gray-300 hover:text-white border border-white/10 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Customization Guide Notification for User */}
        <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              Customize your videos, thumbnails & contact links anytime in <code className="text-amber-300 bg-black/60 px-1.5 py-0.5 rounded">src/data/portfolioData.js</code>
            </span>
          </div>
          <span className="text-red-400 font-bold">100% RESPONSIVE & PRODUCTION READY</span>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 text-center text-xs font-mono text-gray-500">
          <p>© {new Date().getFullYear()} {personal.name}. All Rights Reserved. Designed for Professional Video Editors.</p>
        </div>

      </div>
    </footer>
  );
}
