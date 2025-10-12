import { memo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Eye, Star } from "lucide-react";
import { ProductDetailsDialog } from "./ProductDetailsDialog";
import { ModelViewer3D } from "./ModelViewer3D";

interface ProductCardListProps {
  id: string;
  name: string;
  description: string;
  price: string;
  modelUrl: string;
  posterUrl?: string;
}

export const ProductCardList = memo(({ id, name, description, price, modelUrl, posterUrl }: ProductCardListProps) => {
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
      <Card className="group overflow-hidden bg-gradient-card border-2 border-border/50 shadow-medium hover:shadow-glow transition-all duration-500 hover:border-primary/40 hover:scale-[1.01] cursor-pointer">
        <div
          className="flex flex-col sm:flex-row gap-4 md:gap-6"
        >
          {/* 3D Model Viewer - Left Side */}
          <div className="relative w-full sm:w-80 md:w-96 h-64 sm:h-auto flex-shrink-0 overflow-hidden bg-gradient-to-br from-secondary/40 via-background to-accent/10">
            <ModelViewer3D
              src={modelUrl}
              poster={posterUrl}
              alt={name}
              enableAR
              className="transition-transform duration-700 group-hover:scale-110"
            />

            {/* AR Badge */}
            <div onClick={() => setIsDialogOpen(true)} className="absolute top-2 right-1 z-10 animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary blur-md opacity-60 animate-glow" />
                <Badge className="relative bg-gradient-primary backdrop-blur-sm text-primary-foreground shadow-glow border-2 border-primary-foreground/30 flex items-center gap-2 px-4 py-2 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
                  AR View
                </Badge>
              </div>
            </div>
          </div>

          {/* Product Info - Right Side */}
          <div

            onClick={(e) => {
              e.stopPropagation();
              setIsDialogOpen(true);
            }}
            className="flex-1 p-6 md:p-8 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              {/* Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 text-yellow-600" />
                ))}
                <span className="text-sm text-muted-foreground ml-2 font-medium">(4.8)</span>
              </div>

              {/* Product Name */}
              <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                {name}
              </h3>

              {/* Description */}
              <p className="text-base text-muted-foreground leading-relaxed">
                {description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                  360° View
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/20">
                  AR View
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                  Free Shipping
                </span>
              </div>
            </div>

            {/* Price and Action */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t-2 border-border/40">
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Price</span>
                <span className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {price}
                </span>
              </div>
              <button
                className="relative px-8 py-4 bg-gradient-primary text-primary-foreground rounded-xl font-bold overflow-hidden group/button transition-all duration-300 hover:shadow-glow hover:scale-105 active:scale-95 shadow-medium flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <Eye className="w-5 h-5" />
                <span className="relative z-10">View Details</span>
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
});

ProductCardList.displayName = "ProductCardList";