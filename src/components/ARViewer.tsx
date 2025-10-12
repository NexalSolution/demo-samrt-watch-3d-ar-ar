import { useEffect, useRef } from "react";
import { X, Smartphone } from "lucide-react";
import { ModelViewer3D } from "./ModelViewer3D";

interface ARViewerProps {
  name: string;
  modelUrl: string;
  onClose: () => void;
}

export const ARViewer = ({ name, modelUrl, onClose }: ARViewerProps) => {
  const modelViewerRef = useRef<HTMLElement & { activateAR?: () => void }>(null);

  useEffect(() => {
    // Prevent scrolling when AR viewer is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handlePlaceInAR = () => {
    if (modelViewerRef.current && modelViewerRef.current.activateAR) {
      modelViewerRef.current.activateAR();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-background animate-fade-in">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-background via-background/80 to-transparent backdrop-blur-md">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-primary" />
              {name}
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground">Tap to place in your space</p>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 bg-card/80 hover:bg-muted/80 rounded-full transition-all duration-300 shadow-medium hover:shadow-large hover:scale-110 backdrop-blur-sm border border-border"
            aria-label="Close AR view"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>

      {/* 3D Model Viewer */}
      <ModelViewer3D
        ref={modelViewerRef}
        src={modelUrl}
        alt={name}
        enableAR
        style={{ height: "100vh" }}
      />

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 md:p-6 bg-gradient-to-t from-background via-background/80 to-transparent backdrop-blur-md">
        <div className="max-w-7xl mx-auto space-y-3">
          <button 
            onClick={handlePlaceInAR}
            className="w-full relative px-6 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-bold text-base md:text-lg shadow-large hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Smartphone className="w-5 h-5" />
              Place in AR
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <p className="text-center text-xs md:text-sm text-muted-foreground font-medium">
            Use pinch to zoom • Drag to rotate • Move to explore
          </p>
        </div>
      </div>
    </div>
  );
};
