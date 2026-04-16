import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The Scaling Company didn't just run our ads; they completely rebuilt our customer acquisition system. We've seen a 300% increase in qualified leads.",
      author: "Sarah Jenkins",
      role: "Founder, Growth Coaching ROI",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    },
    {
      quote: "I was skeptical at first, but within 60 days our pipeline was completely full. Their automation systems are truly world-class.",
      author: "Michael Chen",
      role: "Consultant & Educator",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=a04258114e29026702d"
    },
    {
      quote: "Best agency experience we've ever had. 100% transparency, incredible creative strategies, and absolutely undeniable ROI.",
      author: "Elena Rodriguez",
      role: "CEO, Elevate Institute",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=a04258a2462d826712d"
    },
    {
      quote: "Our cost per acquisition dropped by 45% while our lead quality skyrocketed. If you want serious scale, these are your guys.",
      author: "David Thompson",
      role: "Lead Strategist",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
    }
  ];

  // Duplicate array to create seamless loop effect
  const multipliedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-20 opacity-0 animate-fade-in-up"  style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <h2 className="text-5xl md:text-6xl font-black mb-6 font-outfit">
            Real Professionals. <br className="md:hidden"/>
            <span className="text-gradient">
              Undeniable Results.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Don't just take our word for it. Look at what our partners have to say.
          </p>
        </div>
      </div>
        
      {/* Infinite Marquee Wrapper */}
      <div className="flex overflow-hidden w-full relative z-10 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[100px] before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[100px] after:bg-gradient-to-l after:from-background after:to-transparent">
        <div className="flex animate-marquee hover:[animation-play-state:paused] gap-6 px-3">
          {multipliedTestimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glassmorphism border-white/10 w-[450px] flex-shrink-0 bg-white/5 hover:bg-white/10 transition-colors duration-300 group"
            >
              <CardContent className="p-8">
                <Quote className="w-12 h-12 text-primary/20 mb-6 group-hover:text-primary transition-colors" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                  ))}
                </div>
                
                <p className="text-white/90 mb-8 leading-relaxed text-lg font-light min-h-[100px]">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary transition-colors">
                    <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-white font-outfit text-lg">{testimonial.author}</p>
                    <p className="text-primary text-sm tracking-wide">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
