import { forwardRef, useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import "@google/model-viewer";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerJSX & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

interface ModelViewerJSX {
  src: string;
  poster?: string;
  alt: string;
  ar?: boolean;
  "ar-modes"?: string;
  "camera-controls"?: boolean;
  "camera-orbit"?: string;
  "min-camera-orbit"?: string;
  "max-camera-orbit"?: string;
  "shadow-intensity"?: string;
  "exposure"?: string;
  "environment-image"?: string;
  autoplay?: boolean;
  loading?: string;
  reveal?: string;
  style?: React.CSSProperties;
}

interface ModelViewer3DProps {
  src: string;
  alt: string;
  poster?: string;
  enableAR?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const ModelViewer3D = forwardRef<HTMLElement & { activateAR?: () => void }, ModelViewer3DProps>(
  ({ src, alt, poster, enableAR = true, className, style }, ref) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const modelViewer = (ref as React.MutableRefObject<HTMLElement | null>)?.current;

      if (!modelViewer) return;

      const handleLoad = () => {
        setIsLoading(false);
      };

      const handleError = () => {
        console.error('Failed to load 3D model');
        setIsLoading(false);
      };

      // Set timeout fallback to hide loader after 5 seconds
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 5000);

      // Listen to model-viewer events
      modelViewer.addEventListener('load', handleLoad);
      modelViewer.addEventListener('error', handleError);

      return () => {
        clearTimeout(timeoutId);
        modelViewer.removeEventListener('load', handleLoad);
        modelViewer.removeEventListener('error', handleError);
      };
    }, [ref, src]);

    return (
      <div className="relative w-full h-full">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-secondary/50 backdrop-blur-sm z-10 rounded-lg animate-fade-in">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <p className="text-sm text-muted-foreground font-medium">Loading 3D Model...</p>
            </div>
          </div>
        )}
        <model-viewer
          ref={ref}
          src={src}
          poster={poster}
          alt={alt}
          ar={enableAR}
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          camera-orbit="0deg 75deg 105%"
          min-camera-orbit="auto auto 5%"
          max-camera-orbit="auto auto 200%"
          shadow-intensity="1"
          exposure="1"
          environment-image="neutral"
          loading="eager"
          reveal="auto"
          autoplay
          className={className}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            ...style,
          }}
        />
      </div>
    );
  }
);

ModelViewer3D.displayName = "ModelViewer3D";
