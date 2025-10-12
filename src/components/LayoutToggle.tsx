import { Grid3x3, List } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutToggleProps {
  layout: "grid" | "list";
  onLayoutChange: (layout: "grid" | "list") => void;
}

export const LayoutToggle = ({ layout, onLayoutChange }: LayoutToggleProps) => {
  return (
    <div className="inline-flex items-center gap-2 p-1.5 bg-secondary/50 backdrop-blur-sm rounded-xl border-2 border-border/60 shadow-soft">
      <button
        onClick={() => onLayoutChange("grid")}
        className={cn(
          "flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300",
          layout === "grid"
            ? "bg-gradient-primary text-primary-foreground shadow-glow"
            : "text-muted-foreground hover:text-foreground hover:bg-background/50"
        )}
      >
        <Grid3x3 className="w-4 h-4" />
        Grid
      </button>
      <button
        onClick={() => onLayoutChange("list")}
        className={cn(
          "flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300",
          layout === "list"
            ? "bg-gradient-primary text-primary-foreground shadow-glow"
            : "text-muted-foreground hover:text-foreground hover:bg-background/50"
        )}
      >
        <List className="w-4 h-4" />
        List
      </button>
    </div>
  );
};