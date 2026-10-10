import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Film, ArrowRight, ShieldCheck, Flame, Eye, Clock, Layers } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function HeroSection({ onOpenReelModal }) {
  const { personal, heroReel, projects } = PORTFOLIO_DATA;
  
  // Available video samples in public/assets/
  const videoClips = [
    { id: "clip-1", label: "Cinematic Reel", file: "/assets/jk.mp4", duration: "01:15", badge: "4K UHD" },
    { id: "clip-2", label: "Viral Short", file: "/assets/jk2.mp4", duration: "00:30", badge: "9:16 Vertical" },
    { id: "clip-3", label: "Product Commercial", file: "/assets/jk3.mp4", duration: "00:45", badge: "Commercial" },
  ];

  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [aspectMode, setAspectMode] = useState("16:9"); // 16:9 or 2.39:1
  const [timecode, setTimecode] = useState("00:01:24:18");
  const videoRef = useRef(null);

  // Running SMPTE timecode
  useEffect(() => {
    let frame = 18;
    let sec = 24;
    const interval = setInterval(() => {
      frame = (frame + 1) % 24;
      if (frame === 0) sec = (sec + 1) % 60;
      const fStr = frame < 10 ? `0${frame}` : frame;
      const sStr = sec < 10 ? `0${sec}` : sec;
      setTimecode(`00:01:${sStr}:${fStr}`);
    }, 41); // ~24fps update
    return () => clearInterval(interval);
  }, []);

  const currentClip = videoClips[activeClipIndex];

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleSwitchClip = (index) => {
    setActiveClipIndex(index);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-[#060609]">
      
      {/* Cinematic Ambient Atmosphere */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle hairline grid */}
      <div className="absolute inset-0 cinematic-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        
        {/* Top Status Bar Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-gray-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-white font-bold tracking-wider">AVAILABLE FOR PROJECTS</span>
            <span className="text-gray-500">|</span>
            <span className="text-violet-400 font-semibold">2026 EDITING SUITE</span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[11px] font-mono text-gray-400">
            <span>RES: <strong className="text-white">4K UHD / DCI-P3</strong></span>
            <span>FPS: <strong className="text-white">59.94 FPS</strong></span>
            <span>LOCATION: <strong className="text-white">HYDERABAD & REMOTE</strong></span>
          </div>
        </div>

        {/* Two-Column Cinema Studio Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Bold Cinematic Identity & Pitch (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Slate Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-mono font-bold tracking-widest uppercase">
              <Film className="w-3.5 h-3.5 text-violet-400" />
              <span>DIRECTOR'S CUT &bull; POST-PRODUCTION SPECIALIST</span>
            </div>

            {/* Impactful Bebas Neue Title */}
            <div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-cinema tracking-tight text-white leading-[0.88] uppercase drop-shadow-md">
                JAIKRISHNA<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-amber-200">
                  JANJANAM
                </span>
              </h1>
              
              <div className="mt-3 flex items-center gap-3">
                <span className="h-[2px] w-12 bg-gradient-to-r from-violet-500 to-transparent" />
                <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-violet-400 uppercase font-semibold">
                  VIDEO EDITOR &bull; COLORIST &bull; MOTION CRAFTER
                </p>
              </div>
            </div>

            {/* Cinematic Pitch */}
            <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed font-light">
              Transforming raw camera footage into high-retention cinematic edits that stop the scroll. Specializing in kinetic short-form reels, travel documentaries, and high-impact commercial advertisements.
            </p>

            {/* Key Proof Metrics Deck */}
            <div className="grid grid-cols-3 gap-3 pt-2 pb-2">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-violet-500/30 transition-all">
                <div className="text-2xl sm:text-3xl font-cinema text-white tracking-wide">50M+</div>
                <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mt-0.5">Views Driven</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-violet-500/30 transition-all">
                <div className="text-2xl sm:text-3xl font-cinema text-violet-300 tracking-wide">200+</div>
                <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mt-0.5">Edits Mastered</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-violet-500/30 transition-all">
                <div className="text-2xl sm:text-3xl font-cinema text-amber-300 tracking-wide">&lt;48H</div>
                <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mt-0.5">Turnaround</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.muted = false;
                    setIsMuted(false);
                    videoRef.current.play();
                    setIsPlaying(true);
                  }
                  if (onOpenReelModal) onOpenReelModal(heroReel);
                }}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white font-bold text-sm tracking-wider uppercase flex items-center gap-3 shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02] active:scale-95 transition-all border border-violet-400/30 group"
              >
                <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                <span>OPEN FULL SHOWREEL</span>
              </button>

              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-gray-200 hover:text-white font-bold text-sm tracking-wider uppercase border border-white/15 hover:border-violet-400/40 transition-all flex items-center gap-2"
              >
                <span>EXPLORE WORK</span>
                <ArrowRight className="w-4 h-4 text-violet-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Studio Cinema Monitor (lg:col-span-6) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-white/15 via-violet-500/10 to-transparent shadow-2xl shadow-black">
              
              {/* Monitor Chassis */}
              <div className="rounded-xl bg-[#090810] border border-white/10 overflow-hidden shadow-2xl">
                
                {/* Cinema Monitor Top Header */}
                <div className="bg-[#100d1c] px-4 py-2.5 flex items-center justify-between border-b border-white/[0.08] text-xs font-mono text-gray-300">
                  <div className="flex items-center gap-3">
                    {/* Tally Light */}
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-600/20 border border-red-500/40 text-red-400 text-[10px] font-bold">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span>REC</span>
                    </div>

                    <span className="text-white font-semibold text-[11px] hidden sm:inline">
                      STUDIO MONITOR &bull; {currentClip.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Live Timecode */}
                    <div className="font-mono text-violet-400 bg-violet-950/60 px-2 py-0.5 rounded border border-violet-500/30 text-[11px] font-bold">
                      TC: {timecode}
                    </div>

                    {/* Scope toggle */}
                    <button
                      onClick={() => setAspectMode(aspectMode === "16:9" ? "2.39:1" : "16:9")}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/15 text-[10px] text-gray-300 transition-colors hidden sm:block"
                      title="Toggle 2.39:1 Anamorphic Scope"
                    >
                      {aspectMode}
                    </button>
                  </div>
                </div>

                {/* Video Screen Area */}
                <div className="relative bg-black aspect-video overflow-hidden group">
                  
                  {/* Anamorphic Bars if in 2.39:1 mode */}
                  {aspectMode === "2.39:1" && (
                    <>
                      <div className="absolute top-0 left-0 right-0 h-6 bg-black z-20 pointer-events-none transition-all" />
                      <div className="absolute bottom-0 left-0 right-0 h-6 bg-black z-20 pointer-events-none transition-all" />
                    </>
                  )}

                  {/* Cinema Crosshair Watermark Overlay */}
                  <div className="absolute inset-0 pointer-events-none z-10 opacity-30 flex items-center justify-center">
                    <div className="w-8 h-8 border border-white/20 rounded-full" />
                    <div className="absolute w-12 h-[1px] bg-white/20" />
                    <div className="absolute h-12 w-[1px] bg-white/20" />
                  </div>

                  {/* HTML5 Video Player */}
                  <video
                    ref={videoRef}
                    key={currentClip.file}
                    src={currentClip.file}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={handleTogglePlay}
                  >
                    <source src={currentClip.file} type="video/mp4" />
                  </video>

                  {/* Floating Action Controls on Video */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-auto">
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleTogglePlay}
                        className="p-2 rounded-lg bg-black/70 hover:bg-violet-600 text-white backdrop-blur-md border border-white/20 transition-all shadow-lg"
                        title={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                      </button>

                      <button
                        onClick={handleToggleMute}
                        className="px-3 py-1.5 rounded-lg bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all flex items-center gap-1.5 text-xs font-mono"
                        title={isMuted ? "Unmute Audio" : "Mute Audio"}
                      >
                        {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
                        <span className="hidden sm:inline">{isMuted ? "Unmute Sound" : "Audio Active"}</span>
                      </button>
                    </div>

                    {/* Expand Modal Trigger */}
                    <button
                      onClick={() => onOpenReelModal && onOpenReelModal(heroReel)}
                      className="p-2 rounded-lg bg-black/70 hover:bg-violet-600 text-white backdrop-blur-md border border-white/20 transition-all"
                      title="Expand Fullscreen"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Audio Wave Bars visualizer badge */}
                  {!isMuted && isPlaying && (
                    <div className="absolute top-3 right-3 z-20 flex items-end gap-1 bg-black/70 px-2 py-1.5 rounded-lg border border-white/20 backdrop-blur-md">
                      <span className="w-1 bg-violet-400 animate-wave-1 rounded-full" />
                      <span className="w-1 bg-cyan-400 animate-wave-2 rounded-full" />
                      <span className="w-1 bg-fuchsia-400 animate-wave-3 rounded-full" />
                      <span className="w-1 bg-emerald-400 animate-wave-4 rounded-full" />
                      <span className="text-[10px] font-mono text-gray-300 ml-1">AUDIO VU</span>
                    </div>
                  )}

                </div>

                {/* Clip Switcher Tabs (Directly on the Monitor!) */}
                <div className="bg-[#0c0a18] p-3 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-2">
                    <span className="text-gray-300 uppercase font-semibold">Switch Footage Preview:</span>
                    <span className="text-violet-400">Clip {activeClipIndex + 1} of {videoClips.length}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {videoClips.map((clip, index) => {
                      const isActive = activeClipIndex === index;
                      return (
                        <button
                          key={clip.id}
                          onClick={() => handleSwitchClip(index)}
                          className={`px-2.5 py-2 rounded-lg text-left text-xs font-mono transition-all border ${
                            isActive
                              ? "bg-violet-600/20 border-violet-400/50 text-white shadow-md shadow-violet-900/30"
                              : "bg-white/[0.03] border-white/5 text-gray-400 hover:text-gray-200 hover:bg-white/[0.06]"
                          }`}
                        >
                          <div className="font-bold truncate text-[11px]">{clip.label}</div>
                          <div className="text-[10px] text-gray-500 mt-0.5">{clip.duration} &bull; {clip.badge}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Software Suite Footer Badges */}
                <div className="bg-[#08070d] px-4 py-2 flex items-center justify-between border-t border-white/5 text-[10px] font-mono text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">&bull; LUT APPLIED:</span>
                    <span>Cinematic Teal & Orange 3D Cube</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-3">
                    <span className="text-gray-400">PREMIERE PRO</span>
                    <span className="text-gray-600">&bull;</span>
                    <span className="text-gray-400">DAVINCI RESOLVE</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Cinematic Marquee Ribbon Under Hero */}
      <div className="w-full mt-16 border-y border-white/[0.08] bg-[#0c0a18]/70 backdrop-blur-md py-3 overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-gray-400 whitespace-nowrap">
          <span className="flex items-center gap-2 text-white font-bold"><span className="text-violet-400">&bull;</span> ADOBE PREMIERE PRO</span>
          <span className="flex items-center gap-2 text-white font-bold"><span className="text-violet-400">&bull;</span> DAVINCI RESOLVE COLOR STUDIO</span>
          <span className="flex items-center gap-2 text-white font-bold"><span className="text-violet-400">&bull;</span> KINETIC SHORT-FORM REELS</span>
          <span className="flex items-center gap-2 text-white font-bold"><span className="text-violet-400">&bull;</span> HIGH RETENTION PACING</span>
          <span className="flex items-center gap-2 text-white font-bold"><span className="text-violet-400">&bull;</span> SPATIAL SOUND DESIGN</span>
          <span className="flex items-center gap-2 text-white font-bold"><span className="text-violet-400">&bull;</span> SPEED RAMPING &amp; MOTION FX</span>
          <span className="flex items-center gap-2 text-white font-bold"><span className="text-violet-400">&bull;</span> COMMERCIAL PRODUCT ADS</span>
          <span className="flex items-center gap-2 text-white font-bold"><span className="text-violet-400">&bull;</span> 4K UHD 60FPS COLOR GRADING</span>
          
          {/* Duplicate for infinite loop */}
          <span className="flex items-center gap-2 text-white font-bold"><span className="text-violet-400">&bull;</span> ADOBE PREMIERE PRO</span>
          <span className="flex items-center gap-2 text-white font-bold"><span className="text-violet-400">&bull;</span> DAVINCI RESOLVE COLOR STUDIO</span>
          <span className="flex items-center gap-2 text-white font-bold"><span className="text-violet-400">&bull;</span> KINETIC SHORT-FORM REELS</span>
          <span className="flex items-center gap-2 text-white font-bold"><span className="text-violet-400">&bull;</span> HIGH RETENTION PACING</span>
          <span className="flex items-center gap-2 text-white font-bold"><span className="text-violet-400">&bull;</span> SPATIAL SOUND DESIGN</span>
          <span className="flex items-center gap-2 text-white font-bold"><span className="text-violet-400">&bull;</span> SPEED RAMPING &amp; MOTION FX</span>
          <span className="flex items-center gap-2 text-white font-bold"><span className="text-violet-400">&bull;</span> COMMERCIAL PRODUCT ADS</span>
          <span className="flex items-center gap-2 text-white font-bold"><span className="text-violet-400">&bull;</span> 4K UHD 60FPS COLOR GRADING</span>
        </div>
      </div>

    </section>
  );
}
