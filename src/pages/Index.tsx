import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { ProductShowcase3D } from "@/components/ProductShowcase3D";
import { BrandVideoSection } from "@/components/BrandVideoSection";
import { ProductCard } from "@/components/ProductCard";
import { ProductCardList } from "@/components/ProductCardList";
import { LayoutToggle } from "@/components/LayoutToggle";
import { ARViewer } from "@/components/ARViewer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { log } from "console";

const { VITE_APP_BASE_URL } = import.meta.env.VITE_APP_BASE_URL || "";

export const products = [
  {
    id: "smartfit-pro",
    name: "SmartFit Pro",
    description:
      "A premium smartwatch designed for fitness enthusiasts. Features heart rate tracking, sleep analysis, GPS, and up to 10 days of battery life.",
    price: "$199",
    modelUrl: "/models/product1.glb",
    arLink: `${VITE_APP_BASE_URL}/models/product1"`,
    variants: {
      colors: ["Midnight Black", "Silver Gray", "Rose Gold"],
      sizes: ["40mm", "44mm"],
    },
  },
  {
    id: "aura-active",
    name: "Aura Active",
    description:
      "Lightweight smartwatch built for active lifestyles. Tracks workouts, calories, and hydration while syncing seamlessly with your smartphone.",
    price: "$179",
    modelUrl: "/models/product2.glb",
    arLink: `${VITE_APP_BASE_URL}/models/product2"`,
    variants: {
      colors: ["Sky Blue", "Graphite", "Coral Red"],
      sizes: ["42mm", "46mm"],
    },
  },
  {
    id: "chrono-x",
    name: "Chrono X",
    description:
      "A bold smartwatch blending classic design with modern tech. Features AMOLED display, customizable faces, and health tracking sensors.",
    price: "$229",
    modelUrl: "/models/product3.glb",
    arLink: `${VITE_APP_BASE_URL}/models/product3"`,
    variants: {
      colors: ["Jet Black", "Steel Blue", "Champagne Gold"],
      sizes: ["41mm", "45mm"],
    },
  },
  {
    id: "zenith-edge",
    name: "Zenith Edge",
    description:
      "Minimalist smartwatch with edge-to-edge display, voice assistant support, and wireless charging — crafted for elegance and performance.",
    price: "$249",
    modelUrl: "/models/product4.glb",
    arLink: `${VITE_APP_BASE_URL}/models/product4"`,
    variants: {
      colors: ["Onyx", "Arctic White", "Sapphire"],
      sizes: ["40mm", "44mm"],
    },
  },
  {
    id: "chrono-luxe",
    name: "KiddoJoy",
    description:
      "Luxury smartwatch crafted with stainless steel frame, sapphire glass, and AI-powered fitness tracking for the modern professional.",
    price: "$299",
    modelUrl: "/models/KiddoJoy-Pink.glb",
    arLink: `${VITE_APP_BASE_URL}/models/KiddoJoy-Pink"`,
    variants: {
      colors: ["Platinum", "Midnight Blue"],
      sizes: ["42mm", "46mm"],
    },
  },


  {
    id: "smartfit-ultra",
    name: "KidsFriends Ultra",
    description:
      "Flagship smartwatch combining performance and style. Features wireless charging, voice control, and over 100 workout modes.",
    price: "$279",
    modelUrl: "/models/KidsFriends-Blue.glb",
    arLink: `${VITE_APP_BASE_URL}/models/KidsFriends-Blue"`,
    variants: {
      colors: ["Charcoal Black", "Crimson Red", "Forest Green"],
      sizes: ["40mm", "44mm", "46mm"],
    },
  },

  {
    id: "smartfit-ultra",
    name: "KidsGuard Ultra",
    description:
      "Flagship smartwatch combining performance and style. Features wireless charging, voice control, and over 100 workout modes.",
    price: "$279",
    modelUrl: "/models/KidsGuard-Red.glb",
    arLink: `${VITE_APP_BASE_URL}/models/KidsGuard-Red"`,
    variants: {
      colors: ["Charcoal Black", "Crimson Red", "Forest Green"],
      sizes: ["40mm", "44mm", "46mm"],
    },
  },

  {
    id: "smartfit-ultra",
    name: "KidsMagic Ultra",
    description:
      "Flagship smartwatch combining performance and style. Features wireless charging, voice control, and over 100 workout modes.",
    price: "$279",
    modelUrl: "/models/KidsMagic-Purple.glb",
    arLink: `${VITE_APP_BASE_URL}/models/KidsMagic-Purple"`,
    variants: {
      colors: ["Charcoal Black", "Crimson Red", "Forest Green"],
      sizes: ["40mm", "44mm", "46mm"],
    },
  },
];



const Index = () => {
  const [arProduct, setArProduct] = useState<typeof products[0] | null>(null);
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const { isScrolled } = useScrollPosition();

  useEffect(() => {
    // Check if URL has AR parameter
    const urlParams = new URLSearchParams(window.location.search);
    const arProductId = urlParams.get("ar");

    if (arProductId) {
      const product = products.find(p => p.id === arProductId);
      if (product) {
        setArProduct(product);
      }
    }
  }, []);

  const handleCloseAR = () => {
    setArProduct(null);
    // Remove AR parameter from URL
    const url = new URL(window.location.href);
    url.searchParams.delete("ar");
    window.history.replaceState({}, "", url.toString());
  };

  if (arProduct) {
    return (
      <ARViewer
        name={arProduct.name}
        modelUrl={arProduct.modelUrl}
        onClose={handleCloseAR}
      />
    );
  }
  return (
    <div className="min-h-screen bg-gradient-hero">
      <ScrollProgress />
      <BackToTop />

      <header className={`w-full border-b transition-all duration-500 sticky top-0 z-50 ${isScrolled
        ? "bg-background/95 backdrop-blur-2xl border-border/50 shadow-large py-2"
        : "bg-background/30 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] py-3"
        }`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-300">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className={`flex items-center justify-center rounded-lg overflow-hidden transition-all duration-300 ${isScrolled ? "scale-90" : "scale-100"
              }`}>
              <img
                src="/Nexal_Solution_vertical.png"
                alt="Brand Icon"
                className="w-20 h-10 object-contain"
              />
            </div>
            <span className={`font-bold bg-gradient-primary bg-clip-text text-transparent group-hover:scale-105 transition-all duration-300 ${isScrolled ? "text-xl" : "text-2xl"
              }`}>
              Smart Watch 3D
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8">
              {[
                { name: 'Collection', href: '#collection' },
                { name: 'About', href: '#about' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm font-bold text-foreground/80 hover:text-primary transition-colors duration-300 relative group/link"
                >
                  {item.name}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-1 bg-gradient-primary rounded-full group-hover/link:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="w-full">
        <Hero />

        {/* Features Grid */}
        <FeaturesGrid />

        {/* 3D/AR Product Showcase Section */}
        <ProductShowcase3D
          product={{
            id: "featured-chair",
            name: "Modern Lounge Chair",
            tagline: "Experience luxury and comfort in stunning 3D. See every detail, feel every curve.",
            modelUrl: "/models/product1.glb"
          }}
          onViewInAR={() => {
            const product = products.find(p => p.id === "modern-lounge-chair");
            if (product) setArProduct(product);
          }}
        />

        {/* Brand Video Section */}
        <section id="about">
          <BrandVideoSection
            tagline="Innovation You Can Feel"
            subtext="Where cutting-edge technology meets timeless design"
            ctaText="Explore Our Story"
            onCtaClick={() => console.log("CTA clicked")}
          />
        </section>

        {/* Stats Section */}
        <StatsSection />

        <section id="collection" className="max-w-7xl mx-auto px-4 pb-24 pt-4">
          {/* Section header with enhanced styling */}
          <div className="text-center mb-12 space-y-6">
            <div className="inline-block animate-fade-in">
              <span className="text-sm font-bold text-primary uppercase tracking-widest px-4 py-2 bg-primary/10 rounded-full border-2 border-primary/20">
                Our Collection
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground animate-fade-in leading-tight" style={{ animationDelay: '0.1s' }}>
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">3D Models</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Interact with our photorealistic 3D models - rotate 360°, zoom in on details, and preview in your space with augmented reality
            </p>
            <div className="flex items-center justify-center gap-3 pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="h-1.5 w-20 bg-gradient-primary rounded-full shadow-glow" />
              <div className="h-1.5 w-1.5 bg-accent rounded-full" />
              <div className="h-1.5 w-1.5 bg-accent rounded-full" />
            </div>
          </div>

          {/* Layout Toggle and Product Count */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-muted-foreground">
                Showing <span className="text-foreground">{products.length}</span> products
              </span>
            </div>
            <LayoutToggle layout={layout} onLayoutChange={setLayout} />
          </div>

          {/* Product grid/list with staggered animations */}
          {layout === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <ProductCardList {...product} />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />
      </main>

      <footer id="contact" className="relative w-full border-t border-border/30 bg-gradient-to-b from-background via-card/50 to-background backdrop-blur-xl mt-32 overflow-hidden">
        {/* Animated decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 text-center space-y-8">
          {/* Logo + Brand */}
          <div className="inline-flex items-center justify-center gap-4 mb-6 animate-fade-in">
            <div className="w-20 h-20 flex items-center justify-center rounded-xl overflow-hidden bg-white shadow-glow p-2 hover:scale-110 transition-transform duration-300">
              <img
                src="/Nexal_Solution_vertical.png"
                alt="Nexal Solution Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-3xl font-extrabold bg-gradient-primary bg-clip-text text-transparent">
              Smart Watch 3D
            </span>
          </div>

          {/* Description */}
          <p className="text-lg font-medium text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Experience the future of Smart Watch shopping with interactive 3D and AR technology
          </p>

          {/* Feature Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-full font-semibold text-primary border border-primary/20 transition-colors duration-300 cursor-default">
              AR Technology
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="px-4 py-2 bg-accent/10 hover:bg-accent/20 rounded-full font-semibold text-accent border border-accent/20 transition-colors duration-300 cursor-default">
              Interactive 3D
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-full font-semibold text-primary border border-primary/20 transition-colors duration-300 cursor-default">
              Real-time Preview
            </span>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 py-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="h-2 w-2 rounded-full bg-primary/50 animate-pulse" />
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {/* Copyright */}
          <div className="pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm text-muted-foreground/60 font-medium">
              © {new Date().getFullYear()} Nexal Solution. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
