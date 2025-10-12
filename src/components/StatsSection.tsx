import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "3D Models", duration: 2000 },
  { value: 50, suffix: "K+", label: "Happy Customers", duration: 2000 },
  { value: 99, suffix: "%", label: "Satisfaction Rate", duration: 2000 },
  { value: 24, suffix: "/7", label: "Support", duration: 1500 },
];

const useCounter = (end: number, duration: number, isVisible: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return count;
};

export const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb,120,119,198),0.1),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const count = useCounter(stat.value, stat.duration, isVisible);
            
            return (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative inline-block">
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-gradient-primary blur-2xl opacity-20 animate-pulse" />
                  
                  {/* Counter */}
                  <div className="relative">
                    <span className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {count}
                      {isVisible && stat.suffix}
                    </span>
                  </div>
                </div>
                
                <p className="mt-4 text-base md:text-lg font-semibold text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
