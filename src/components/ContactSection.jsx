import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Sparkles, MessageSquare, MapPin, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Custom SVG Icons for LinkedIn and Instagram
const LinkedInIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function ContactSection() {
  const { personal } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Reels / Shorts',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    try {
      // Send form message via FormSubmit endpoint
      await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          category: formData.projectType,
          message: formData.message,
          _subject: `New Video Project Inquiry from ${formData.name}`
        })
      });
    } catch (err) {
      console.log("FormSubmit API trigger:", err);
      const mailtoUrl = `mailto:${personal.email}?subject=Video Project Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCategory: ${formData.projectType}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoUrl, '_blank');
    }

    setLoading(false);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}
  };

  return (
    <section id="contact" className="py-24 relative bg-[#06060e] border-t border-violet-500/5">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Send className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] uppercase">
            LET'S WORK <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-400 to-fuchsia-400">TOGETHER</span>
          </h2>
          <p className="text-gray-400 text-base mt-2">
            Have a video editing project, Instagram reel campaign, or commercial shoot in mind? Send a message below or connect via email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-8 rounded-2xl border border-white/15 shadow-2xl space-y-6">
              
              <h3 className="text-2xl font-extrabold text-white font-['Outfit'] uppercase mb-4">
                CONTACT DETAILS
              </h3>

              {/* Email Link */}
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-600/20 text-violet-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-gray-400 uppercase">EMAIL ADDRESS</p>
                  <p className="text-sm font-bold text-white group-hover:text-violet-400 transition-colors font-mono">
                    {personal.email}
                  </p>
                </div>
              </a>

              {/* Social Links Required: Email, LinkedIn, Instagram */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                  SOCIAL MEDIA & PROFILES
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 p-3.5 rounded-xl bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 text-gray-300 hover:text-white transition-all group"
                  >
                    <LinkedInIcon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold font-mono">LinkedIn Profile</span>
                  </a>
                </div>
              </div>

              {/* Status Pill */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3 text-xs text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0"></span>
                <span>{personal.availability}</span>
              </div>

            </div>

          </div>

          {/* Right Column: Clean Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-white/15 shadow-2xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Outfit'] uppercase">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out, <strong className="text-white">{formData.name}</strong>! Your message has been sent directly to <span className="text-violet-400 font-mono font-bold">{personal.email}</span> and I will get back to you shortly!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', projectType: 'Reels / Shorts', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase font-bold transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-extrabold text-white font-['Outfit'] uppercase mb-2">
                    SEND A MESSAGE
                  </h3>

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 mb-2">
                      YOUR NAME <span className="text-violet-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all font-mono"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 mb-2">
                      YOUR EMAIL <span className="text-violet-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all font-mono"
                    />
                  </div>

                  {/* Project Type Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 mb-2">
                      PROJECT CATEGORY
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0e0e14] border border-white/15 text-white text-sm focus:outline-none focus:border-violet-500 transition-all font-mono"
                    >
                      <option value="Reels / Shorts">Instagram Reel / YouTube Short</option>
                      <option value="Cinematic Travel / Vlog">Cinematic Travel / Vlog Edit</option>
                      <option value="Commercial / Product Ad">Commercial / Product Advertisement</option>
                      <option value="Music & Beat Sync">Music / Beat Sync Edit</option>
                      <option value="Full Video Production">Full Video Editing Package</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 mb-2">
                      MESSAGE DETAILS <span className="text-violet-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your footage, deadlines, platforms, or editing style preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all font-mono"
                    ></textarea>
                  </div>

                  {/* Submit Button Required text: Send Message */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 border border-violet-500/40"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2 font-mono">
                        <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                        SENDING...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SEND MESSAGE</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

