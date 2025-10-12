import { Card } from "@/components/ui/card";

export const ProductCardSkeleton = () => {
  return (
    <Card className="overflow-hidden bg-gradient-card border-border shadow-soft">
      <div className="relative aspect-square overflow-hidden bg-secondary/30 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      </div>
      
      <div className="p-6 space-y-3">
        <div className="space-y-2">
          <div className="h-6 bg-secondary rounded animate-pulse" />
          <div className="h-4 bg-secondary/60 rounded animate-pulse w-3/4" />
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div className="h-8 bg-secondary rounded animate-pulse w-24" />
          <div className="h-10 bg-secondary rounded animate-pulse w-32" />
        </div>
      </div>
    </Card>
  );
};
