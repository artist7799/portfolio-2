import React, { useState, useEffect } from 'react';
import { Film, Play, Menu, X, Volume2, VolumeX, Sparkles, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Navbar({ isAudioMuted, toggleAudio }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'showreel', 'projects', 'before-after', 'skills', 'software', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Showreel', href: '#showreel' },
    { name: 'Featured Work', href: '#projects' },
    { name: 'Before & After', href: '#before-after' },
    { name: 'Skills', href: '#skills' },
    { name: 'Software', href: '#software' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#070709]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/80' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 via-rose-500 to-amber-500 p-[1px] shadow-lg shadow-red-500/20 group-hover:shadow-red-500/40 transition-all">
            <div className="w-full h-full bg-[#0d0d12] rounded-[7px] flex items-center justify-center">
              <Film className="w-5 h-5 text-red-500 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-wider text-white group-hover:text-red-400 transition-colors uppercase font-['Outfit']">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <div className="flex items-center gap-1.5 text-[10px] tracking-widest text-gray-400 uppercase font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
              <span>VIDEO EDITOR</span>
              <span className="text-gray-600">|</span>
              <span className="text-red-400 font-semibold">REC 4K</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30 font-bold'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Header Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Audio Sound Toggle */}
          <button
            onClick={toggleAudio}
            title={isAudioMuted ? "Unmute Ambient Sound" : "Mute Ambient Sound"}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all duration-200 group"
          >
            {isAudioMuted ? (
              <VolumeX className="w-4 h-4 text-gray-400 group-hover:text-red-400" />
            ) : (
              <div className="flex items-center gap-1">
                <Volume2 className="w-4 h-4 text-red-500 animate-pulse" />
                <span className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 bg-red-500 animate-wave-1 rounded-full"></span>
                  <span className="w-0.5 bg-red-500 animate-wave-2 rounded-full"></span>
                  <span className="w-0.5 bg-red-500 animate-wave-3 rounded-full"></span>
                </span>
              </div>
            )}
          </button>

          {/* Quick Contact CTA */}
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-bold tracking-wider text-white uppercase bg-gradient-to-r from-red-600 to-rose-600 rounded-lg shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105 transition-all duration-200 flex items-center gap-2 border border-red-500/50"
          >
            <span>Hire Me</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleAudio}
            className="p-2 rounded-lg bg-white/5 text-gray-300"
          >
            {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-red-500" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0e]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-2 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-sm font-semibold tracking-wider text-gray-200 hover:text-white hover:bg-red-600/20 hover:border-l-4 hover:border-red-500 rounded-r-lg transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center text-xs font-bold text-white uppercase bg-red-600 rounded-lg shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
            >
              <span>Contact Me</span>
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
