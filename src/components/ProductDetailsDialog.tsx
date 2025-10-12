import { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Maximize2, RotateCw, X, Star, Check, Package, ShoppingCart } from "lucide-react";
import { ModelViewer3D } from "./ModelViewer3D";
import { ARActions } from "./ARActions";

interface ProductDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productId: string;
  name: string;
  description: string;
  price: string;
  modelUrl: string;
}

export const ProductDetailsDialog = ({
  open,
  onOpenChange,
  productId,
  name,
  description,
  price,
  modelUrl,
}: ProductDetailsDialogProps) => {
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("Medium");
  const modelViewerRef = useRef<HTMLElement & { activateAR?: () => void }>(null);

  const arUrl = `${window.location.origin}?ar=${productId}`;

  const colors = [
    { name: "Black", class: "bg-gray-900" },
    { name: "White", class: "bg-gray-100" },
    { name: "Blue", class: "bg-blue-500" },
    { name: "Red", class: "bg-red-500" },
  ];

  const sizes = ["Small", "Medium", "Large", "X-Large"];

  const handlePlaceInAR = () => {
    if (modelViewerRef.current && modelViewerRef.current.activateAR) {
      modelViewerRef.current.activateAR();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 gap-0 bg-background/95 backdrop-blur-2xl border-2 border-border/50 shadow-[0_0_80px_rgba(0,0,0,0.3)] overflow-hidden animate-scale-in">
        {/* Close Button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-50 p-2 bg-background/80 hover:bg-muted/80 rounded-full transition-all duration-300 shadow-medium hover:shadow-large hover:scale-110 backdrop-blur-sm border border-border/50 group"
        >
          <X className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
        </button>

        <div className="flex flex-col lg:flex-row h-full overflow-hidden">
          {/* Left Side - 3D Model Viewer */}
          <div className="relative w-full lg:w-[55%] h-[45vh] lg:h-full bg-gradient-to-br from-secondary/40 via-background to-accent/10 flex-shrink-0">
            <ModelViewer3D
              ref={modelViewerRef}
              src={modelUrl}
              alt={name}
              enableAR
              className="w-full h-full"
            />

            {/* Floating AR Badge */}
            <div className="absolute top-4 left-4 z-10 animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary blur-lg opacity-60 animate-pulse" />
                <Badge className="relative bg-gradient-primary backdrop-blur-sm text-primary-foreground shadow-glow border-2 border-primary-foreground/30 flex items-center gap-2 px-4 py-2 font-bold">
                  <RotateCw className="w-4 h-4 animate-spin" style={{ animationDuration: "3s" }} />
                  360° Interactive View
                </Badge>
              </div>
            </div>



            {/* Place in AR Button - Mobile */}
            <div className="absolute bottom-4 left-0 right-0 px-4 lg:flex justify-between items-end">
              <div className="animate-fade-in hidden lg:flex" style={{ animationDelay: "0.3s" }}>
                <ARActions
                  arUrl={arUrl}
                  onPlaceInAR={handlePlaceInAR}
                  productName={name}
                  showQRCode={true}
                  showARButton={false}
                />
              </div>
              <div>
                <ARActions
                  arUrl={arUrl}
                  onPlaceInAR={handlePlaceInAR}
                  productName={name}
                  showQRCode={false}
                  showARButton={true}
                />
              </div>
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 space-y-6 bg-gradient-soft">
            {/* Header Section */}
            <div className="space-y-4 animate-fade-in">
              {/* Ratings & Stock */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                  <span className="text-sm text-muted-foreground font-medium ml-1">(4.8 / 127 reviews)</span>
                </div>
                <Badge className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20 flex items-center gap-1.5 px-3 py-1">
                  <Check className="w-3.5 h-3.5" />
                  In Stock
                </Badge>
              </div>

              {/* Product Name */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight bg-gradient-primary bg-clip-text text-transparent">
                {name}
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 pt-2">
                <span className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {price}
                </span>
                <span className="text-xl text-muted-foreground line-through">$1,299</span>
              </div>
            </div>

            {/* Variants Section */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {/* Color Selection */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-foreground">Color</label>
                  <span className="text-sm text-muted-foreground">{selectedColor}</span>
                </div>
                <div className="flex gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`relative w-12 h-12 rounded-full border-2 transition-all duration-300 hover:scale-110 ${selectedColor === color.name
                          ? "border-primary shadow-glow scale-110"
                          : "border-border hover:border-primary/50"
                        }`}
                    >
                      <div className={`w-full h-full rounded-full ${color.class} ${color.name === "White" ? "border border-border" : ""}`} />
                      {selectedColor === color.name && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Check className="w-5 h-5 text-primary-foreground drop-shadow-lg" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">Size</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 backdrop-blur-xl border ${selectedSize === size
                          ? "bg-primary/20 text-primary border-primary/50 shadow-glow"
                          : "bg-background/40 text-foreground hover:bg-background/60 border-border/30"
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-sm font-semibold text-foreground">Key Features</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: RotateCw, text: "360° View" },
                  { icon: Maximize2, text: "True Scale AR" },
                  { icon: Package, text: "Free Shipping" },
                  { icon: Smartphone, text: "Mobile AR Ready" },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50"
                  >
                    <feature.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* QR Code Section */}
            {/* <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <ARActions
                arUrl={arUrl}
                onPlaceInAR={handlePlaceInAR}
                productName={name}
                showQRCode={true}
                showARButton={false}
              />
            </div> */}

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {/* <div className="hidden lg:flex">
                <ARActions
                  arUrl={arUrl}
                  onPlaceInAR={handlePlaceInAR}
                  productName={name}
                  showQRCode={false}
                  showARButton={true}
                />
              </div> */}
              <Button
                className="w-full bg-gradient-accent text-accent-foreground font-bold shadow-glow-accent hover:shadow-glow transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
