import React, { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sliders, Cpu, Film, ExternalLink, Check, Info, Maximize2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Determine video source
  const activeVideoUrl = project.sampleVideoMp4 || project.videoUrl;
  const isEmbed = project.videoUrl && (project.videoUrl.includes('youtube') || project.videoUrl.includes('vimeo') || project.videoUrl.includes('embed'));

  useEffect(() => {
    if (videoRef.current && activeVideoUrl && !isEmbed) {
      videoRef.current.muted = true;
      setIsMuted(true);

      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.log("Autoplay waiting for user interaction:", err);
            setIsPlaying(false);
          });
      }
    }
  }, [activeVideoUrl, isEmbed]);

  const togglePlay = (e) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log("Play failed:", err));
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-300">
      
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#0e0e14] rounded-2xl border border-white/15 shadow-2xl shadow-black overflow-hidden z-10 my-auto">
        
        {/* Modal Header Bar */}
        <div className="bg-[#14141c] px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
            <h3 className="text-lg font-bold text-white font-['Outfit'] uppercase tracking-wider">
              {project.title}
            </h3>
            <span className="px-2.5 py-0.5 rounded bg-red-600/20 text-red-400 text-xs font-mono border border-red-500/30">
              {project.category || 'SHOWREEL'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Content Layout */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 max-h-[80vh] overflow-y-auto">
          
          {/* Left Column: Large Video Player Area (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
              
              {/* Render Local Video Player or Embed Iframe */}
              {activeVideoUrl && !isEmbed ? (
                <div className="relative w-full h-full bg-black flex items-center justify-center">
                  <video
                    ref={videoRef}
                    key={activeVideoUrl}
                    src={activeVideoUrl}
                    controls
                    playsInline
                    preload="auto"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    className="w-full h-full object-contain cursor-pointer"
                    onClick={togglePlay}
                  >
                    <source src={activeVideoUrl} type="video/mp4" />
                  </video>

                  {/* Play / Unmute Floating Overlay if paused */}
                  {!isPlaying && (
                    <div 
                      onClick={togglePlay}
                      className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center cursor-pointer group-hover:bg-black/30 transition-all"
                    >
                      <button className="w-20 h-20 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl shadow-red-600/60 hover:scale-110 transition-transform border-2 border-white/30 glow-box-red">
                        <Play className="w-9 h-9 fill-white translate-x-1" />
                      </button>
                      <p className="mt-3 text-xs font-mono text-white font-bold bg-black/70 px-4 py-1.5 rounded-full border border-white/20">
                        CLICK TO PLAY VIDEO WITH SOUND
                      </p>
                    </div>
                  )}
                </div>
              ) : isEmbed ? (
                <iframe
                  src={project.videoUrl}
                  title={project.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-6 text-center">
                    <p className="text-sm font-mono text-gray-300">
                      Add your video file in <code className="text-red-400">public/assets/</code> and update <code className="text-red-400">portfolioData.js</code>!
                    </p>
                  </div>
                </div>
              )}

            </div>

            {/* Video Controls Toolbar */}
            {activeVideoUrl && !isEmbed && (
              <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/10 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="px-3 py-1.5 rounded bg-red-600 hover:bg-red-500 text-white font-bold flex items-center gap-1.5 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                    <span>{isPlaying ? "Pause" : "Play Video"}</span>
                  </button>

                  <button
                    onClick={toggleMute}
                    className="px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
                    <span>{isMuted ? "Unmute Audio" : "Audio On"}</span>
                  </button>
                </div>

                <span className="text-gray-400 text-[11px] hidden sm:inline-block">
                  Playing: <span className="text-red-400 font-bold">{activeVideoUrl}</span>
                </span>
              </div>
            )}

            {/* Project Full Description */}
            <div className="glass-panel p-5 rounded-xl border border-white/10">
              <h4 className="text-sm font-bold text-white uppercase font-mono mb-2 flex items-center gap-2">
                <Film className="w-4 h-4 text-red-400" />
                <span>PROJECT BREAKDOWN & SCOPE</span>
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.shortDescription}
              </p>
            </div>
          </div>

          {/* Right Column: Editing Tech & Software Spec Details */}
          <div className="flex flex-col gap-6">
            
            {/* Quick Specs */}
            <div className="glass-panel p-5 rounded-xl border border-white/10 space-y-3">
              <h4 className="text-xs font-mono uppercase text-gray-400 tracking-wider border-b border-white/10 pb-2">
                PROJECT METADATA
              </h4>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Duration:</span>
                <span className="text-white font-mono font-bold">{project.duration}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Resolution:</span>
                <span className="text-white font-mono font-bold">{project.resolution}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Aspect Ratio:</span>
                <span className="text-white font-mono font-bold">{project.aspectRatio}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Client / Brand:</span>
                <span className="text-red-400 font-bold">{project.clientType}</span>
              </div>
            </div>

            {/* Editing Techniques Used */}
            <div className="glass-panel p-5 rounded-xl border border-white/10">
              <h4 className="text-xs font-mono uppercase text-red-400 tracking-wider mb-3 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-red-400" />
                <span>APPLIED TECHNIQUES</span>
              </h4>
              <ul className="space-y-2">
                {(project.editingTechniques || ["Kinetic Cuts", "Pacing", "Color Grading", "Sound Design"]).map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-gray-200">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Software Used */}
            <div className="glass-panel p-5 rounded-xl border border-white/10">
              <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-amber-400" />
                <span>SOFTWARE SUITE</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {(project.softwareUsed || ["Adobe Premiere Pro", "DaVinci Resolve", "CapCut"]).map((sw, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-red-600/15 border border-red-500/30 text-xs font-mono font-bold text-red-300"
                  >
                    {sw}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
