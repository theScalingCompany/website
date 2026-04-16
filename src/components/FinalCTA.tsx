import { Button } from "@/components/ui/button";
import { Rocket, Phone } from "lucide-react";

const FinalCTA = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  return (
    <section className="py-20 bg-gradient-hero border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready To Scale?{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Let's Build Your Growth Engine.
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Join the growing list of coaches, entrepreneurs, and business owners who turned 
            their online presence into consistent profit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gradient" size="lg" className="group" onClick={() => window.open('#', '_self')}>
              <Rocket className="transition-transform group-hover:rotate-12" />
              Get My Free Growth Plan
            </Button>
            <Button variant="gold" size="lg" onClick={onOpenBooking}>
              <Phone />
              Book My Free Strategy Call
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Free Strategy Session</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Custom Growth Plan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
