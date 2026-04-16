import { Button } from "@/components/ui/button";
import { Rocket, Phone, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 z-0 bg-background" />
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-hero" />
      
      {/* Animated Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glassmorphism text-sm font-medium mb-10 animate-fade-in-up border-primary/20 shadow-primary-glow" style={{ animationDelay: '0.1s' }}>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-foreground tracking-wide">The #1 Growth Agency for Professionals</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8 tracking-tighter font-outfit animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Grow Your Brand. <br/>
            <span className="text-gradient relative inline-block">
              Scale Your Business.
              <div className="absolute -inset-2 bg-primary/20 blur-2xl -z-10 rounded-full mix-blend-screen" />
            </span> <br />
            Dominate Markets.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: "0.3s" }}>
            We build predictable, highly profitable growth machines. Stop chasing leads and start commanding your industry with our world-class automation and advertising systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="group rounded-full px-10 py-7 text-lg bg-primary hover:bg-primary/90 text-white shadow-primary-glow hover:scale-105 transition-all duration-300" onClick={() => window.open('#', '_self')}>
              <Rocket className="mr-2 w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              Get Your Free Growth Plan
            </Button>
            <Button variant="outline" size="lg" className="group rounded-full px-10 py-7 text-lg glassmorphism hover:bg-white/10 hover:text-white transition-all duration-300 border-white/20" onClick={onOpenBooking}>
              <Phone className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              Book Strategy Call
            </Button>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-24 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            {['Trusted by 100+ clients', 'Proven ROI Systems', '24/7 Dedicated Support', 'Industry Leading Strategies'].map((text, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/5 px-4 py-2 rounded-full backdrop-blur-md">
                 <div className="w-2 h-2 rounded-full bg-primary shadow-glow" />
                 <span className="font-medium tracking-wide text-white/80">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
