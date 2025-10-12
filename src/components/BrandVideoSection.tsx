import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

interface BrandVideoSectionProps {
  videoUrl?: string;
  tagline?: string;
  subtext?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const BrandVideoSection = ({
  videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  tagline = "Innovation You Can Feel",
  subtext = "Where cutting-edge technology meets timeless design",
  ctaText = "Explore Our Story",
  onCtaClick,
}: BrandVideoSectionProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-background">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.7) contrast(1.1)' }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Soft gradient overlay for readability - much lighter */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/50" />
        
        {/* Subtle edge darkening for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-transparent" />
        
        {/* Additional subtle glow effects */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-[150px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-accent rounded-full blur-[150px] animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        {/* Decorative top element */}
        <div 
          className={`mb-8 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Brand Experience
            </span>
          </div>
        </div>

        {/* Main Tagline with staggered animation */}
        <h2 
          className={`text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight transform transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-sm'
          }`}
        >
          <span className="bg-gradient-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
            {tagline}
          </span>
        </h2>

        {/* Subtext with delayed fade-in */}
        <p 
          className={`text-lg md:text-xl lg:text-2xl text-foreground/90 font-medium max-w-3xl mb-12 leading-relaxed transform transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {subtext}
        </p>

        {/* Decorative divider */}
        <div 
          className={`flex items-center gap-3 mb-12 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        >
          <div className="h-[2px] w-16 bg-gradient-primary rounded-full shadow-glow" />
          <div className="w-3 h-3 bg-primary rounded-full shadow-glow animate-pulse" />
          <div className="h-[2px] w-16 bg-gradient-primary rounded-full shadow-glow" />
        </div>

        {/* CTA Button with enhanced effects */}
        <div 
          className={`flex items-center gap-4 transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Button
            size="lg"
            onClick={onCtaClick}
            className="group relative px-8 py-6 text-lg font-bold bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              {ctaText}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          </Button>
        </div>

        {/* Sound toggle button - removed since video is always muted for autoplay */}
      </div>

      {/* Bottom gradient fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[5] pointer-events-none" />
    </section>
  );
};
