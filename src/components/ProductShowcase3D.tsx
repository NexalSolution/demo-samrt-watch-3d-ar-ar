import { useRef, useState } from "react";
import { ModelViewer3D } from "./ModelViewer3D";
import { Button } from "./ui/button";
import { Sparkles, View, Expand } from "lucide-react";

interface ProductShowcase3DProps {
  product: {
    id: string;
    name: string;
    tagline: string;
    modelUrl: string;
  };
  onViewInAR?: () => void;
}

export const ProductShowcase3D = ({ product, onViewInAR }: ProductShowcase3DProps) => {
  const modelViewerRef = useRef<HTMLElement & { activateAR?: () => void }>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleViewInAR = () => {
    if (onViewInAR) {
      onViewInAR();
    } else if (modelViewerRef.current?.activateAR) {
      modelViewerRef.current.activateAR();
    }
  };

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background">
        {/* Soft Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary/10 border-2 border-primary/20 rounded-full backdrop-blur-sm animate-glow">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Featured Showcase</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {product.name}
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {product.tagline}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button
                size="lg"
                onClick={handleViewInAR}
                className="group relative overflow-hidden bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <View className="w-5 h-5" />
                  View in AR
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              </Button>

              {/* <Button
                size="lg"
                variant="outline"
                className="group hover:bg-primary/5 hover:border-primary/50 hover:shadow-glow-accent hover:scale-105 transition-all duration-300"
              >
                <Expand className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                Explore Details
              </Button> */}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border/40 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground font-medium">Interactive 3D</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span className="text-sm text-muted-foreground font-medium">AR Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '1s' }} />
                <span className="text-sm text-muted-foreground font-medium">360° View</span>
              </div>
            </div>
          </div>

          {/* Right: 3D Model */}
          <div 
            className="relative animate-fade-in-up" 
            style={{ animationDelay: '0.2s' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Glow Ring */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-700 ${isHovered ? 'opacity-20' : ''}`} />
            
            {/* Light Reflection Effect */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-700 ${isHovered ? 'opacity-100' : ''}`} />

            {/* Model Container */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-card/50 to-card/80 backdrop-blur-xl border-2 border-border/60 shadow-elegant group">
              {/* Shimmer Effect on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] transition-transform duration-1000 ${isHovered ? 'translate-x-[200%]' : ''}`} style={{ transform: 'skewX(-20deg)' }} />
              
              {/* 3D Model */}
              <div className={`w-full h-full transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                <ModelViewer3D
                  ref={modelViewerRef}
                  src={product.modelUrl}
                  alt={product.name}
                  enableAR={true}
                  className="w-full h-full"
                />
              </div>

              {/* Floating Action Hint */}
              <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full border border-border/60 shadow-medium transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <p className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                  Drag to rotate • Pinch to zoom
                </p>
              </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute -z-10 inset-0">
              <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-primary/40 animate-float blur-sm" />
              <div className="absolute top-20 right-16 w-1.5 h-1.5 rounded-full bg-accent/40 animate-float blur-sm" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-20 left-16 w-2 h-2 rounded-full bg-primary/30 animate-float blur-sm" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-32 right-10 w-1 h-1 rounded-full bg-accent/50 animate-float blur-sm" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
