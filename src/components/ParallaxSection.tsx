import { useParallax } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxSection = ({ children, speed = 0.5, className = "" }: ParallaxSectionProps) => {
  const offset = useParallax(speed);

  return (
    <div
      className={`relative ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
};
