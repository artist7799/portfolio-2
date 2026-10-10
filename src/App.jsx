import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectGallery from './components/ProjectGallery';
import ProjectModal from './components/ProjectModal';
import BeforeAfterSection from './components/BeforeAfterSection';
import SkillsSection from './components/SkillsSection';
import SoftwareSection from './components/SoftwareSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAudioMuted, setIsAudioMuted] = useState(true);

  // Play subtle web audio sound effect on click
  const playClickSound = () => {
    if (isAudioMuted) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch (e) {
      // Audio context fallback
    }
  };

  const handleOpenProject = (project) => {
    playClickSound();
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    playClickSound();
    setSelectedProject(null);
  };

  const toggleAudio = () => {
    setIsAudioMuted(!isAudioMuted);
  };

  return (
    <div className="min-h-screen bg-[#060609] text-gray-100 font-['Plus_Jakarta_Sans'] selection:bg-violet-600/40 selection:text-white">
      
      {/* Navigation Header */}
      <Navbar isAudioMuted={isAudioMuted} toggleAudio={toggleAudio} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection onOpenReelModal={handleOpenProject} />

        {/* Featured Work Project Gallery */}
        <ProjectGallery onSelectProject={handleOpenProject} />

        {/* Interactive Before & After RAW vs EDIT Comparison */}
        <BeforeAfterSection />

        {/* Video Editing Skills */}
        <SkillsSection />

        {/* Software Suite */}
        <SoftwareSection />

        {/* Professional About Me */}
        <AboutSection />

        {/* Contact Form & Links */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Video Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseProject} />
      )}

    </div>
  );
}
