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
          
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glassmorphism text-xs font-semibold mb-10 animate-fade-in-up border-primary/20 shadow-primary-glow" style={{ animationDelay: '0.1s' }}>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-foreground tracking-widest uppercase">Performance Marketing and Growth Systems for Ambitious Brands and Organisations</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 tracking-tighter font-outfit animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We Build Predictable <br/>
            <span className="text-gradient relative inline-block">
              Growth Systems
              <div className="absolute -inset-2 bg-primary/20 blur-2xl -z-10 rounded-full mix-blend-screen" />
            </span> <br />
            That Turn Attention Into Revenue, Enrolments and Impact
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: "0.3s" }}>
            Whether you want to acquire more customers, enrol more students, fill your programs, scale product sales or raise more donations, we combine strategy, funnels, advertising, creative communication and automation to help you grow consistently.
          </p>
          
          <div className="flex flex-col gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-xl">
              <Button size="lg" className="w-full sm:w-auto group rounded-full px-10 py-7 text-lg bg-primary hover:bg-primary/90 text-white shadow-primary-glow hover:scale-105 transition-all duration-300" onClick={() => document.querySelector("#application-form")?.scrollIntoView({ behavior: "smooth" })}>
                <Rocket className="mr-2 w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                Get Your Growth Plan
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto group rounded-full px-10 py-7 text-lg glassmorphism hover:bg-white/10 hover:text-white transition-all duration-300 border-white/20" onClick={() => document.querySelector("#results")?.scrollIntoView({ behavior: "smooth" })}>
                <Phone className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                Explore Our Work
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4 max-w-lg leading-relaxed font-light">
              Book a strategy session to identify the biggest constraint currently affecting your campaigns, conversions and growth.
            </p>
          </div>
          
          {/* Immediate Proof Strip */}
          <div className="mt-24 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            {[
              '₹5Cr+ Advertising Spend Managed',
              '100+ Coaches and Entrepreneurs Supported',
              'Strategy, Creative, Advertising and Automation Under One Roof'
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-full backdrop-blur-md">
                 <div className="w-2 h-2 rounded-full bg-primary shadow-glow animate-pulse" />
                 <span className="font-semibold tracking-wide text-white/90">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
