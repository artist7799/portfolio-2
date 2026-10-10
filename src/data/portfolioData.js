/**
 * Jaikrishna Janjanam - Video Editor Portfolio Configuration
 * 
 * Edit this file to customize projects, video links, social media URLs,
 * and portfolio content.
 */

export const PORTFOLIO_DATA = {
  personal: {
    name: "Jaikrishna Janjanam",
    title: "VIDEO EDITOR",
    tagline: "Turning raw footage into engaging visual stories.",
    bio: "I am a passionate video editor focused on creating engaging short-form content, cinematic edits, promotional videos and social media content. I enjoy transforming raw footage into polished visual stories using creative editing, pacing, color and sound.",
    email: "jaikrishnajanjanam@gmail.com",
    linkedin: "https://www.linkedin.com/in/jaikrishna-janjanam",
    location: "Hyderabad, India / Remote Worldwide",
    availability: "Available for Freelance & Full-time Projects",
  },

  heroReel: {
    title: "2026 Showreel Preview",
    subtitle: "Compilation of Short-form Reels, Cinematic Edits & Product Ads",
    thumbnail: "/assets/hero_reel.jpg",
    sampleVideoMp4: "/assets/jk.mp4",
    videoUrl: "/assets/jk.mp4",
    duration: "01:15",
    aspectRatio: "16:9",
    resolution: "4K UHD 60FPS",
    clientType: "Showreel Highlights",
    shortDescription: "Featured showcase of Jaikrishna Janjanam's video editing portfolio featuring short-form reels, cinematic edits, beat-synced cuts, and color grading.",
    editingTechniques: [
      "Dynamic Speed Ramping",
      "Teal & Orange Color Grade",
      "Beat-Synced Transitions",
      "Spatial Sound Design",
      "Kinetic Subtitles"
    ],
    softwareUsed: ["Adobe Premiere Pro", "CapCut", "After Effects"]
  },

  projects: [
    {
      id: "travel-edit",
      title: "Cinematic Travel Edit",
      category: "Cinematic",
      thumbnail: "/assets/travel_edit.jpg",
      shortDescription: "A high-octane travel montage capturing breathtaking mountain vistas and golden hour landscapes with seamless transitions.",
      editingTechniques: [
        "Speed Ramping & Slow-Mo",
        "Teal & Orange Color Grading",
        "Spatial Sound Design",
        "Whip Transitions",
        "Drone Shot Stabilization"
      ],
      softwareUsed: ["Adobe Premiere Pro", "After Effects"],
      videoUrl: "/assets/jk.mp4",
      sampleVideoMp4: "/assets/jk.mp4",
      duration: "02:45",
      aspectRatio: "16:9",
      resolution: "4K UHD",
      clientType: "Wanderlust Travel Vlog",
    },
    {
      id: "insta-reel",
      title: "Instagram Reel",
      category: "Reels & Shorts",
      thumbnail: "/assets/insta_reel.jpg",
      shortDescription: "Fast-paced urban streetwear fashion reel designed for maximum hook rate, high retention, and dynamic kinetic text pop-ups.",
      editingTechniques: [
        "Kinetic Typography",
        "Beat-Synced Cuts",
        "Glitch & Zoom Effects",
        "Auto-Framing 9:16",
        "High Retention Hooking"
      ],
      softwareUsed: ["CapCut", "After Effects", "Adobe Premiere Pro"],
      videoUrl: "/assets/jk2.mp4",
      sampleVideoMp4: "/assets/jk2.mp4",
      duration: "00:30",
      aspectRatio: "9:16",
      resolution: "1080x1920 (Vertical)",
      clientType: "CyberStreet Fashion Brand",
    },
    {
      id: "product-ad",
      title: "Product Advertisement",
      category: "Commercial",
      thumbnail: "/assets/product_ad.jpg",
      shortDescription: "Futuristic 3D motion edit showcasing premium wireless headphones with sleek light sweeps and product callout overlays.",
      editingTechniques: [
        "Product Callout Trackers",
        "Light Leak & Flare FX",
        "Studio Audio Mastering",
        "Clean Motion Graphics",
        "Color Matching"
      ],
      softwareUsed: ["After Effects", "Adobe Premiere Pro", "Canva"],
      videoUrl: "/assets/jk3.mp4",
      sampleVideoMp4: "/assets/jk3.mp4",
      duration: "00:45",
      aspectRatio: "16:9",
      resolution: "4K UHD",
      clientType: "Aether Audio Tech",
    },
    {
      id: "music-sync",
      title: "Music / Beat Sync Edit",
      category: "Music & Beat Sync",
      thumbnail: "/assets/music_sync.jpg",
      shortDescription: "High-energy festival edit frame-synced to electronic beats, featuring audio spectrum visualizers and intense flash transitions.",
      editingTechniques: [
        "Sub-frame Beat Matching",
        "Frame Rate Conversion",
        "Flash & Strobe Sync",
        "VFX Glitch Overlays",
        "Audio Equalizer FX"
      ],
      softwareUsed: ["CapCut", "After Effects", "Adobe Premiere Pro"],
      videoUrl: "/assets/jk4.mp4",
      sampleVideoMp4: "/assets/jk4.mp4",
      duration: "01:30",
      aspectRatio: "16:9",
      resolution: "1080p 60FPS",
      clientType: "Live Music Event",
    },
    {
      id: "youtube-short",
      title: "YouTube Short",
      category: "Reels & Shorts",
      thumbnail: "/assets/youtube_short.jpg",
      shortDescription: "High-retention conversational short edit with animated Alex-Hormozi style captions, sound effects, and strategic pop-out graphics.",
      editingTechniques: [
        "Animated Subtitles & Emojis",
        "Sound FX (Whooshes, Pops)",
        "B-Roll Cutaways",
        "Pacing & Jump Cuts",
        "Hook Optimization"
      ],
      softwareUsed: ["CapCut", "Adobe Premiere Pro", "Canva"],
      videoUrl: "/assets/jk.mp4",
      sampleVideoMp4: "/assets/jk.mp4",
      duration: "00:58",
      aspectRatio: "9:16",
      resolution: "1080x1920 (Vertical)",
      clientType: "Creator Brand",
    }
  ],

  beforeAfter: {
    title: "Before & After Edit Comparison",
    subtitle: "See how flat S-LOG camera footage is transformed with color grading, contrast, and atmospheric lighting.",
    rawImage: "/assets/raw_footage.jpg",
    gradedImage: "/assets/graded_footage.jpg",
    rawLabel: "RAW LOG FOOTAGE (S-LOG3)",
    gradedLabel: "FINAL COLOR GRADED (TEAL & ORANGE)",
    details: [
      { title: "Color Profile", raw: "Sony S-Log3 / Flat Rec.709", graded: "Teal & Orange Film Emulation" },
      { title: "Dynamic Range", raw: "Flat & Uncompressed", graded: "Rich Shadows & Glowing Highlights" },
      { title: "Atmosphere", raw: "Neutral Studio Raw", graded: "Dramatic Night Rain Ambience" }
    ]
  },

  skills: [
    { name: "Video Editing", description: "Pacing, narrative rhythm, jump cuts, dynamic story flow." },
    { name: "Color Grading", description: "Log-to-Rec709 conversion, LUT creation, mood color matching." },
    { name: "Motion Graphics", description: "Animated text, lower thirds, callout trackers, logo reveals." },
    { name: "Transitions", description: "Seamless whip zooms, match cuts, mask transitions, speed ramps." },
    { name: "Sound Design", description: "Audio cleanup, spatial sound FX, riser impacts, beat drops." },
    { name: "Caption/Subtitles", description: "Kinetic animated captions, Hormozi-style short-form text." },
    { name: "Reels & Shorts", description: "High retention 9:16 vertical edits tailored for viral algorithms." },
    { name: "Cinematic Editing", description: "Letterboxing, 24fps filmic look, atmospheric grain & flares." }
  ],

  software: [
    {
      name: "CapCut",
      level: "Advanced",
      category: "Short-Form & Speed Editing",
      color: "#000000",
      accent: "#38bdf8",
      description: "Fast-paced Instagram Reels, TikToks, dynamic trend edits, and auto-captions."
    },
    {
      name: "Adobe Premiere Pro",
      level: "Expert",
      category: "Industry Standard NLE",
      color: "#9999ff",
      accent: "#818cf8",
      description: "Timeline editing, multi-cam sync, audio ducking, and proxy workflow."
    },
    {
      name: "After Effects",
      level: "Intermediate",
      category: "VFX & Motion Graphics",
      color: "#cf96fd",
      accent: "#a855f7",
      description: "3D camera tracking, rotoscoping, particle FX, and kinetic typography."
    },
    {
      name: "Canva",
      level: "Proficient",
      category: "Graphics & Thumbnails",
      color: "#00c4cc",
      accent: "#06b6d4",
      description: "Thumbnail design, social graphics, branding assets, and quick visual layouts."
    }
  ],

  stats: [
    { value: "4K UHD", label: "Master Export Quality" },
    { value: "100%", label: "Client Satisfaction" }
  ]
};
