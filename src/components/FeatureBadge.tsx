import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureBadgeProps {
  icon: LucideIcon;
  label: string;
  variant?: "primary" | "accent" | "secondary";
  animate?: boolean;
  className?: string;
}

export const FeatureBadge = ({ 
  icon: Icon, 
  label, 
  variant = "primary", 
  animate = false,
  className 
}: FeatureBadgeProps) => {
  const variantClasses = {
    primary: "bg-gradient-primary text-primary-foreground border-primary/30 shadow-glow hover:shadow-large",
    accent: "bg-gradient-accent text-accent-foreground border-accent/30 shadow-glow-accent hover:shadow-large",
    secondary: "bg-gradient-soft border-border text-foreground hover:shadow-medium",
  };

  return (
    <div 
      className={cn(
        "group flex items-center gap-2.5 px-5 py-2.5 rounded-xl border-2 transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-default",
        variantClasses[variant],
        className
      )}
    >
      <div className={cn(
        "w-2 h-2 rounded-full transition-transform group-hover:scale-125",
        variant === "primary" && "bg-primary-foreground",
        variant === "accent" && "bg-accent-foreground",
        variant === "secondary" && "bg-primary",
        animate && "animate-pulse"
      )} />
      <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
};
