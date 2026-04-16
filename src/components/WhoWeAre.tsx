import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const WhoWeAre = () => {
  const features = [
    "Data-driven frameworks that predictably convert",
    "Organic omnipresence that builds unshakeable authority",
    "100% transparent ROI performance reporting",
    "Dedicated elite growth manager for every partner"
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          <div className="order-2 lg:order-1 relative opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 glassmorphism p-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-50 mix-blend-overlay z-10" />
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                alt="Growth Team" 
                className="w-full h-[500px] object-cover rounded-2xl opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 relative z-0"
              />
              {/* Floating Stat Card */}
              <div className="absolute bottom-8 right-8 glassmorphism border border-white/20 p-6 rounded-2xl shadow-2xl animate-float z-20 bg-background/80 backdrop-blur-xl">
                <p className="text-4xl font-black font-outfit text-white mb-1">300%</p>
                <p className="text-sm text-primary font-medium tracking-wide">Average Client ROI</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism text-sm font-medium mb-8 border-primary/20 text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Your Unfair Advantage
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-8 font-outfit leading-tight text-white">
              We're Not An Agency. <br/>
              <span className="text-gradient">
                We're Growth Partners.
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-light">
              At <span className="text-white font-semibold">The Scaling Company</span>, we engineer bespoke growth systems. We don't just run ads; we build empires. If you're a coach, consultant, or professional looking to dominate, you're in the right place.
            </p>
            
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg text-foreground/90 group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="group rounded-full px-8 py-6 text-lg bg-white text-background hover:bg-primary hover:text-white transition-all duration-300 shadow-xl">
              Learn Our Framework
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
