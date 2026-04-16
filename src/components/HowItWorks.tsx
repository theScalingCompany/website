import { Button } from "@/components/ui/button";
import { Phone, FileText, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Discovery Call",
      description: "We dive deep into your business goals, bottlenecks, and current market positioning to understand exactly what you need."
    },
    {
      number: "02",
      icon: FileText,
      title: "Custom Blueprint",
      description: "You receive a tailored roadmap. We engineer the exact organic and paid growth structures required to dominate your niche."
    },
    {
      number: "03",
      icon: Rocket,
      title: "Execute & Scale",
      description: "We deploy the systems, launch the campaigns, and continuously optimize to drive predictable, astronomical growth."
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <h2 className="text-5xl md:text-7xl font-black mb-6 font-outfit tracking-tighter">
            Your Growth Journey,{" "}
            <span className="text-gradient">
              Simplified.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Three simple steps to transition from chaotic hustle to predictable, automated market dominance.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto mb-20">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-1 bg-white/5 rounded-full">
            <div className="h-full bg-gradient-to-r from-primary via-accent to-primary animate-pulse shadow-glow rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative opacity-0 animate-fade-in-up group"
                style={{ animationDelay: `${0.2 + index * 0.2}s`, animationFillMode: 'forwards' }}
              >
                <div className="text-center">
                  <div className="relative inline-block mb-10 group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="w-32 h-32 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center glassmorphism shadow-2xl relative z-10 group-hover:border-primary/50 group-hover:shadow-primary-glow transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-150 rounded-full transition-transform duration-700 ease-out" />
                      <step.icon className="w-12 h-12 text-white group-hover:text-white relative z-10" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-accent text-background flex items-center justify-center text-lg font-bold font-outfit shadow-xl z-20">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 font-outfit text-white group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed max-w-sm mx-auto">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <Button size="lg" className="group rounded-full px-12 py-8 text-xl bg-white hover:bg-primary text-background hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-primary-glow font-bold tracking-wide">
            <Phone className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
            Book Your Free Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
