import React, { useState, useRef, useEffect } from 'react';
import { Sliders, Sparkles, Layers, Eye, RefreshCw, ArrowLeftRight, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function BeforeAfterSection() {
  const { beforeAfter } = PORTFOLIO_DATA;
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState('slider'); // 'slider' | 'sideBySide'
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section id="before-after" className="py-24 relative bg-[#06060e] border-t border-violet-500/5 overflow-hidden">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-violet-600/8 rounded-full blur-[140px] pointer-events-none float-orb" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-fuchsia-500/8 rounded-full blur-[140px] pointer-events-none float-orb-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>COLOR GRADING & POST-PRODUCTION</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] uppercase">
            RAW FOOTAGE <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">→ FINAL EDIT</span>
          </h2>
          <p className="text-gray-400 text-base mt-2">
            {beforeAfter.subtitle}
          </p>

          {/* Mode Switcher */}
          <div className="inline-flex items-center gap-2 mt-6 p-1.5 rounded-xl glass-panel border border-white/10">
            <button
              onClick={() => setViewMode('slider')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all uppercase flex items-center gap-2 ${
                viewMode === 'slider'
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <ArrowLeftRight className="w-3.5 h-3.5" />
              <span>Interactive Drag Slider</span>
            </button>
            <button
              onClick={() => setViewMode('sideBySide')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all uppercase flex items-center gap-2 ${
                viewMode === 'sideBySide'
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Side-by-Side</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Interactive Drag Split Slider */}
        {viewMode === 'slider' ? (
          <div className="max-w-5xl mx-auto">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative aspect-video rounded-2xl overflow-hidden glass-panel border border-violet-500/15 shadow-2xl select-none cursor-ew-resize group"
            >
              {/* Underneath: Final Color Graded Image */}
              <img
                src={beforeAfter.gradedImage}
                alt="Final Color Graded Edit"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 z-10 bg-violet-600/90 text-white text-xs font-mono font-bold px-3 py-1.5 rounded-md backdrop-blur-md shadow-lg border border-violet-400/40">
                {beforeAfter.gradedLabel}
              </div>

              {/* Top Clipped: RAW Footage Image */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={beforeAfter.rawImage}
                  alt="Raw Camera Footage"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                />
                <div className="absolute top-4 left-4 z-10 bg-black/80 text-gray-300 text-xs font-mono font-bold px-3 py-1.5 rounded-md backdrop-blur-md border border-white/10">
                  {beforeAfter.rawLabel}
                </div>
              </div>

              {/* Interactive Divider Line with Handle */}
              <div
                className="absolute top-0 bottom-0 z-20 w-1 bg-gradient-to-b from-violet-500 via-white to-fuchsia-500 shadow-xl"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-violet-600 text-white border-2 border-white flex items-center justify-center shadow-2xl glow-box-violet">
                  <ArrowLeftRight className="w-5 h-5" />
                </div>
              </div>

              {/* Slider Drag Instructions */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/75 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10 text-[11px] font-mono text-gray-300 pointer-events-none">
                ↔ DRAG SLIDER LEFT OR RIGHT TO COMPARE
              </div>
            </div>
          </div>
        ) : (
          /* View Mode 2: Side-by-Side Comparison */
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Raw Card */}
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10">
              <div className="relative aspect-video bg-black">
                <img
                  src={beforeAfter.rawImage}
                  alt="RAW Camera Footage"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute top-3 left-3 bg-black/80 px-3 py-1 rounded text-xs font-mono text-gray-300 font-bold border border-white/10">
                  {beforeAfter.rawLabel}
                </div>
              </div>
              <div className="p-5 space-y-2">
                <p className="text-xs text-gray-400 font-mono">Camera: Sony A7S III (S-LOG3 / Flat)</p>
                <p className="text-sm text-gray-300">Desaturated flat profile requiring dynamic curve mapping and white balance adjustment.</p>
              </div>
            </div>

            {/* Graded Card */}
            <div className="glass-card rounded-2xl overflow-hidden border border-violet-500/30">
              <div className="relative aspect-video bg-black">
                <img
                  src={beforeAfter.gradedImage}
                  alt="Final Graded Edit"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-gradient-to-r from-violet-600 to-purple-600 px-3 py-1 rounded text-xs font-mono text-white font-bold border border-violet-400/40">
                  {beforeAfter.gradedLabel}
                </div>
              </div>
              <div className="p-5 space-y-2">
                <p className="text-xs text-violet-400 font-mono">Grade: DaVinci Resolve Teal & Orange Node Tree</p>
                <p className="text-sm text-gray-300">Enhanced neon reflections, atmospheric rain contrast, glowing tail-lights, and filmic grain.</p>
              </div>
            </div>

          </div>
        )}

        {/* Detailed Before & After Metric Highlights */}
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {beforeAfter.details.map((detail, index) => (
            <div key={index} className="glass-panel p-5 rounded-xl border border-white/10 flex flex-col justify-between">
              <h4 className="text-xs font-mono uppercase text-gray-400 mb-2">
                {detail.title}
              </h4>
              <div className="space-y-1">
                <p className="text-xs text-gray-400 line-through">
                  RAW: {detail.raw}
                </p>
                <p className="text-sm font-bold text-violet-300">
                  GRADED: {detail.graded}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
