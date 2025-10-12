import { Smartphone, Rotate3d, Scan, Maximize2, Sparkles, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Rotate3d,
    title: "360° Product View",
    description: "Interact with products from every angle with smooth 3D rotation",
    gradient: "from-primary/20 to-accent/20",
    iconColor: "text-primary",
  },
  {
    icon: Scan,
    title: "AR Preview",
    description: "See how Smart Watch looks in your space before you buy",
    gradient: "from-accent/20 to-primary/20",
    iconColor: "text-accent",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Seamless experience across all devices with touch controls",
    gradient: "from-primary/20 to-accent/20",
    iconColor: "text-primary",
  },
  {
    icon: Maximize2,
    title: "True Scale",
    description: "View products at actual size using AR technology",
    gradient: "from-accent/20 to-primary/20",
    iconColor: "text-accent",
  },
  {
    icon: Sparkles,
    title: "Photorealistic",
    description: "Ultra-high quality 3D models with realistic materials",
    gradient: "from-primary/20 to-accent/20",
    iconColor: "text-primary",
  },
  {
    icon: Zap,
    title: "Instant Loading",
    description: "Optimized models for lightning-fast load times",
    gradient: "from-accent/20 to-primary/20",
    iconColor: "text-accent",
  },
];

export const FeaturesGrid = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-4 py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Section Header */}
      <div className={`text-center mb-16 space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="inline-block">
          <span className="text-sm font-bold text-primary uppercase tracking-widest px-4 py-2 bg-primary/10 rounded-full border-2 border-primary/20">
            Features
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Experience the <span className="bg-gradient-primary bg-clip-text text-transparent">Future</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Revolutionary technology that transforms how you shop for Smart Watch
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`group relative overflow-hidden transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-glow group-hover:-translate-y-2">
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
              
              {/* Content */}
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
