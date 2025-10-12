import { memo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { ProductDetailsDialog } from "./ProductDetailsDialog";
import { ModelViewer3D } from "./ModelViewer3D";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  modelUrl: string;
  posterUrl?: string;
}

export const ProductCard = memo(({ id, name, description, price, modelUrl, posterUrl }: ProductCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <ProductDetailsDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        productId={id}
        name={name}
        description={description}
        price={price}
        modelUrl={modelUrl}
      />
      <Card className="group overflow-hidden bg-gradient-card border-2 border-border/50 shadow-medium hover:shadow-glow transition-all duration-500 hover:border-primary/40 hover:scale-[1.03] cursor-pointer h-full flex flex-col">
        <div
          className="relative aspect-square overflow-hidden bg-gradient-to-br from-secondary/40 via-background to-accent/10 flex-shrink-0"
        >
          <ModelViewer3D
            src={modelUrl}
            poster={posterUrl}
            alt={name}
            enableAR
            className="transition-transform duration-700 group-hover:scale-110"
          />

          {/* AR Badge with glow effect */}
          <div
            onClick={() => setIsDialogOpen(true)}
            className="absolute top-2 right-1 z-10 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary blur-md opacity-60 animate-glow" />
              <Badge className="relative bg-gradient-primary backdrop-blur-sm text-primary-foreground shadow-glow border-2 border-primary-foreground/30 flex items-center gap-2 px-4 py-2 text-xs font-bold hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
                AR View
              </Badge>
            </div>
          </div>

          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none flex items-end justify-center pb-8">
            <span className="text-primary-foreground font-bold text-lg animate-fade-in">Click to explore</span>
          </div>
        </div>

        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsDialogOpen(true);
          }}
          className="p-5 space-y-3 bg-gradient-to-b from-card via-card/95 to-card/90 flex-1 flex flex-col">
          <div className="space-y-2 flex-1">
            <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight line-clamp-2">
              {name}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="space-y-3 pt-3 border-t-2 border-border/40">
            <div className="flex items-baseline justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Price</span>
                <span className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {price}
                </span>
              </div>
              <button
                className="relative px-4 py-2 bg-gradient-primary text-primary-foreground rounded-lg font-bold text-xs overflow-hidden group/button transition-all duration-300 hover:shadow-glow hover:scale-105 active:scale-95 shadow-medium"
              >
                <span className="relative z-10">View</span>
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
});

ProductCard.displayName = "ProductCard";
