import { RotateCw, View, Maximize2, Sparkles } from "lucide-react";
import { FeatureBadge } from "./FeatureBadge";

export const Hero = () => {
  return (
    <section className="relative w-full pt-20 md:pt-32 px-4 text-center overflow-hidden bg-gradient-hero">
      {/* Animated background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-primary opacity-20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-gradient-accent opacity-20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-glow" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="max-w-5xl mx-auto space-y-10 animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-gradient-primary text-primary-foreground border border-primary/30 rounded-full text-sm font-semibold shadow-glow hover:scale-105 hover:shadow-large transition-all duration-300 cursor-default">
          <Sparkles className="w-4 h-4 animate-pulse" />
          Experience the Future of Shopping
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight leading-[1.1]">
          <span className="block animate-fade-in">3D & AR Smart Watch</span>
          <span className="block mt-3 bg-gradient-primary bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Showcase
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Explore our collection with interactive 3D models and augmented reality. 
          <span className="block mt-2">See how Smart Watch looks in your space before you buy.</span>
        </p>
        
        {/* Feature badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <FeatureBadge icon={RotateCw} label="360° Rotation" variant="primary" animate />
          <FeatureBadge icon={View} label="AR Preview" variant="accent" animate />
          <FeatureBadge icon={Maximize2} label="Zoom & Pan" variant="secondary" animate />
        </div>

        {/* Scroll indicator */}
        <div className="pt-12 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
