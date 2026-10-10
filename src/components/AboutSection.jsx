import React, { useEffect, useRef } from "react";
import { User, Flame, Monitor, Award, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function AboutSection() {
  const { personal, stats } = PORTFOLIO_DATA;
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    if (!items) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    items.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 relative bg-[#07070f] border-t border-violet-500/5">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-600/5 rounded-full blur-[140px] pointer-events-none float-orb-slow" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-5 space-y-6 reveal-left">
            <div className="relative rounded-2xl overflow-hidden glass-panel border border-violet-500/15 p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-500 to-fuchsia-500 p-[1px]">
                  <div className="w-full h-full bg-[#0d0b1e] rounded-[15px] flex items-center justify-center text-violet-400 font-extrabold text-2xl font-['Outfit']">
                    {personal.name.split(" ").map(n => n[0]).join("")}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white font-['Outfit'] uppercase">{personal.name}</h3>
                  <p className="text-xs font-mono text-violet-300 font-bold uppercase tracking-widest">{personal.title}</p>
                </div>
              </div>
              <blockquote className="text-gray-300 text-sm leading-relaxed italic border-l-2 border-violet-500 pl-4 py-1 mb-8 bg-violet-500/5 rounded-r-lg">
                &ldquo;{personal.bio}&rdquo;
              </blockquote>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/15 text-center">
                    <p className="text-3xl sm:text-4xl font-cinema tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-purple-300">{stat.value}</p>
                    <p className="text-[11px] font-mono text-gray-400 uppercase mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8 reveal-right delay-200">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
                <User className="w-3.5 h-3.5" />
                <span>ABOUT MY WORK</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] uppercase">
                CRAFTING <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400">HIGH-RETENTION</span> VISUALS
              </h2>
            </div>

            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>As a video editor, my primary focus is creating content that grabs attention in the first 3 seconds and holds viewer retention till the final frame.</p>
              <p>Whether editing 9:16 vertical reels for Instagram &amp; YouTube Shorts, or assembling widescreen 4K commercial videos, I blend precise audio beat matching, smooth motion graphics, clean color grading, and dynamic pacing.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { Icon: Flame, color: "text-violet-400", title: "HOOK & RETENTION", desc: "Strategic first 3-second visual hooks, kinetic text captions, and fast jump cuts." },
                { Icon: Monitor, color: "text-fuchsia-400", title: "COLOR & MOOD", desc: "Custom LUTs, Log-to-Rec709 mapping, dynamic skin-tone matching and cinematic teal-orange vibes." },
                { Icon: Award, color: "text-purple-400", title: "SOUND DESIGN", desc: "Layered riser sound effects, spatial whooshes, impacts, and crisp audio mixing." },
                { Icon: CheckCircle2, color: "text-emerald-400", title: "FAST TURNAROUND", desc: "Organized timelines, efficient proxy workflows, and quick project revisions." },
              ].map(({ Icon, color, title, desc }, i) => (
                <div key={i} className="p-5 rounded-xl glass-card border border-violet-500/10 hover:border-violet-500/30 transition-all duration-300">
                  <h4 className="text-base font-bold text-white font-['Outfit'] uppercase mb-1 flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${color}`} />
                    <span>{title}</span>
                  </h4>
                  <p className="text-xs text-gray-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
