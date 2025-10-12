import { forwardRef } from "react";
import QRCode from "react-qr-code";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

interface ARActionsProps {
  arUrl: string;
  onPlaceInAR: () => void;
  productName?: string;
  showQRCode?: boolean;
  showARButton?: boolean;
  className?: string;
}

export const ARActions = forwardRef<HTMLDivElement, ARActionsProps>(
  ({ arUrl, onPlaceInAR, productName = "Product", showQRCode = true, showARButton = true, className = "" }, ref) => {
    return (
      <div ref={ref} className={className}>
        {/* QR Code Section */}
        {showQRCode && (
          <div className="space-y-3 p-5 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 animate-fade-in">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-primary" />
              Scan to View in AR
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-medium">
                <QRCode value={arUrl} size={100} level="H" fgColor="#1a1f2c" />
              </div>
              <div className="flex-1 space-y-1.5">
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">Quick Steps:</strong>
                </p>
                <ol className="text-xs text-muted-foreground space-y-1 list-decimal list-inside">
                  <li>Open camera on your phone</li>
                  <li>Point at QR code</li>
                  <li>Place {productName} in your space</li>
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* Place in AR Button */}
        {showARButton && (
          <Button
            onClick={onPlaceInAR}
            className="w-full bg-gradient-primary text-primary-foreground font-bold shadow-glow hover:shadow-glow-accent transition-all duration-300 hover:scale-105 group"
            size="lg"
          >
            <Smartphone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Place in AR
          </Button>
        )}
      </div>
    );
  }
);

ARActions.displayName = "ARActions";
