import React from "react";
import { Button } from "@/components/ui/button";
import { Rocket, PhoneCall, Sparkles } from "lucide-react";

const FinalCTA = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  const handleCtaClick = () => {
    document.querySelector("#application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-32 bg-gradient-hero border-t border-white/5 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/10 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glassmorphism text-xs font-semibold mb-2 animate-fade-in-up border-primary/20 shadow-primary-glow">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-foreground tracking-widest uppercase">YOUR NEXT STAGE OF GROWTH NEEDS MORE THAN ANOTHER CAMPAIGN</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight font-outfit text-white tracking-tight">
            Build a Growth System That Produces <br className="hidden md:block"/>
            <span className="text-gradient">Revenue, Enrolments and Impact</span> More Predictably
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Whether you are scaling a program, course, product, event, community or donation initiative, we will help you identify what is currently limiting growth and what must be built next.
          </p>
          
          <div className="pt-6 flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-lg">
              <Button size="lg" className="w-full sm:w-auto group rounded-full px-12 py-7 text-lg bg-primary hover:bg-primary/90 text-white shadow-primary-glow hover:scale-105 transition-all duration-300 font-bold" onClick={handleCtaClick}>
                <Rocket className="mr-2 w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                Get Your Growth Plan
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto group rounded-full px-10 py-7 text-lg glassmorphism hover:bg-white/10 hover:text-white transition-all duration-300 border-white/20 font-bold" onClick={onOpenBooking}>
                <PhoneCall className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                Book Strategy Call
              </Button>
            </div>
            
            <p className="text-xs text-white/50 mt-6 max-w-xl leading-relaxed font-light">
              Apply for a strategy session with The Scaling Company. We will review your objective, current marketing journey and biggest growth constraints before recommending the next step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
