import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Interior Designer",
    content: "The AR feature is a game-changer! My clients can now visualize Smart Watch in their space before making decisions. It's saved us countless returns.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Homeowner",
    content: "I was skeptical about buying Smart Watch online, but the 3D viewer let me see every detail. The quality exceeded my expectations!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Small Business Owner",
    content: "As a café owner, I needed to see how Smart Watch would fit our aesthetic. The interactive 3D models made it so easy to choose the perfect pieces.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10 animate-float" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-block">
            <span className="text-sm font-bold text-primary uppercase tracking-widest px-4 py-2 bg-primary/10 rounded-full border-2 border-primary/20">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Loved by <span className="bg-gradient-primary bg-clip-text text-transparent">Thousands</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See what our customers say about their experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-glow">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Quote className="w-16 h-16 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/90 leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-primary rounded-full blur-md opacity-50" />
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="relative w-12 h-12 rounded-full border-2 border-primary/50"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
