import React, { useState, useEffect } from 'react';
import { Play, Film, Sparkles, ArrowDown, ExternalLink, Monitor, Sliders, Volume2, Pause, Maximize2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function HeroSection({ onOpenReelModal }) {
  const { personal, heroReel } = PORTFOLIO_DATA;
  const [isInlinePlaying, setIsInlinePlaying] = useState(false);
  const [tcFrame, setTcFrame] = useState('00:01:24:18');

  // Simulated live video frame counter
  useEffect(() => {
    const interval = setInterval(() => {
      const sec = Math.floor(Math.random() * 50);
      const frame = Math.floor(Math.random() * 24);
      setTcFrame(`00:01:${sec < 10 ? '0' + sec : sec}:${frame < 10 ? '0' + frame : frame}`);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const heroVideoSrc = heroReel.sampleVideoMp4 || heroReel.videoUrl;

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden cinematic-grid">
      {/* Glow Orbs & Background Atmospheric Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Header Badge */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="tracking-widest uppercase text-red-400 font-mono font-bold">FREELANCE & FULL-TIME EDITOR</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-300">SHORT-FORM & CINEMATIC</span>
          </div>
        </div>

        {/* Hero Headlines */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-4 font-['Syne'] leading-tight">
            Yaswitha{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 glow-text-red">
              Janjanam
            </span>
          </h1>

          <div className="flex items-center justify-center gap-3 my-4">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 font-['Space_Grotesk'] font-bold tracking-[0.3em] text-sm sm:text-base uppercase shadow-lg shadow-red-600/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span>{personal.title}</span>
            </div>
          </div>

          <p className="text-base sm:text-xl font-normal text-gray-300 max-w-2xl mx-auto leading-relaxed font-['Space_Grotesk'] mt-4">
            "<span className="text-white italic">{personal.tagline}</span>"
          </p>

          {/* Action Call to Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-red-600/30 hover:shadow-red-600/60 hover:scale-105 transition-all duration-300 flex items-center gap-3 border border-red-400/40 group"
            >
              <Film className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
              <span>VIEW MY WORK</span>
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm tracking-wider uppercase backdrop-blur-md border border-white/15 hover:border-white/30 transition-all duration-300 flex items-center gap-3 group"
            >
              <span>CONTACT ME</span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Large Cinematic Video/Reel Preview */}
        <div id="showreel" className="max-w-5xl mx-auto mt-4">
          <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/15 shadow-2xl group">
            
            {/* Top Video Player Bar / Timecode Display */}
            <div className="bg-[#0b0b10] px-4 py-2.5 flex items-center justify-between border-b border-white/10 text-xs font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="ml-2 text-gray-300 font-semibold uppercase tracking-widest text-[11px]">
                  {heroReel.title}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-1 text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                  <span>TIMECODE: {tcFrame}</span>
                </div>
                <span className="bg-white/10 px-2 py-0.5 rounded text-white font-bold">
                  {heroReel.resolution}
                </span>
              </div>
            </div>

            {/* Video Canvas Container */}
            <div className="relative aspect-video bg-black overflow-hidden group">
              {isInlinePlaying ? (
                <video
                  key={heroVideoSrc}
                  src={heroVideoSrc}
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-contain"
                >
                  <source src={heroVideoSrc} type="video/mp4" />
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" />
                </video>
              ) : (
                <>
                  {/* Thumbnail Image */}
                  <img
                    src={heroReel.thumbnail}
                    alt="Jaikrishna Janjanam Video Editor Showreel"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <button
                      onClick={() => setIsInlinePlaying(true)}
                      className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-600/90 hover:bg-red-600 text-white flex items-center justify-center shadow-2xl shadow-red-600/60 hover:scale-110 transition-all duration-300 group-hover:glow-box-red border-2 border-white/30"
                      aria-label="Play Showreel Video"
                    >
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-1" />
                      <span className="absolute -inset-3 rounded-full border border-red-500/40 animate-ping pointer-events-none"></span>
                    </button>

                    <p className="mt-4 text-xs sm:text-sm font-semibold tracking-widest text-white uppercase font-mono bg-black/60 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                      CLICK TO PLAY SHOWREEL ({heroReel.duration})
                    </p>
                  </div>

                  {/* Timeline Bottom Ruler Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-transparent flex flex-col justify-end pointer-events-none">
                    <div className="h-2 w-full timeline-ruler opacity-60"></div>
                    <div className="flex items-center justify-between px-4 py-1 text-[10px] font-mono text-gray-400">
                      <span>00:00:00</span>
                      <div className="flex items-center gap-1 text-red-500">
                        <Volume2 className="w-3 h-3 animate-pulse" />
                        <span>AUDIO TRACK LOADED</span>
                      </div>
                      <span>{heroReel.duration}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Bottom Bar Info */}
            <div className="bg-[#121217] p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-600/20 text-red-500 border border-red-500/30">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-['Outfit'] uppercase">
                    {heroReel.subtitle}
                  </h3>
                  <p className="text-xs text-gray-400">
                    Precision Timeline Cuts • Color Matching • Dynamic Sound Design
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsInlinePlaying(!isInlinePlaying)}
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
                >
                  {isInlinePlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  <span>{isInlinePlaying ? "Stop Inline" : "Inline Play"}</span>
                </button>

                <button
                  onClick={() => onOpenReelModal(heroReel)}
                  className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-lg shadow-red-600/30"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Full Screen Modal</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="flex justify-center mt-12">
          <a
            href="#projects"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-red-400 transition-colors group"
          >
            <span className="text-xs font-mono uppercase tracking-widest">EXPLORE PROJECTS</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-red-500" />
          </a>
        </div>

      </div>
    </section>
  );
}
