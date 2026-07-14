import React from "react";
import { Button } from "@/components/ui/button";
import { Search, Compass, Cpu, Rocket, LineChart, PhoneCall } from "lucide-react";

const HowItWorks = () => {
  const stages = [
    {
      stage: "Stage 1",
      icon: Search,
      title: "Diagnose",
      description: "We analyse the market, offer, audience, funnel, communication, sales process and current performance.",
      deliverable: "A clear diagnosis of the biggest growth constraints and opportunities.",
      glow: "border-purple-500/20 text-purple-400"
    },
    {
      stage: "Stage 2",
      icon: Compass,
      title: "Position",
      description: "We clarify the audience, value proposition, campaign promise and communication required to attract the right people.",
      deliverable: "A stronger offer and campaign strategy.",
      glow: "border-blue-500/20 text-blue-400"
    },
    {
      stage: "Stage 3",
      icon: Cpu,
      title: "Build",
      description: "We create or improve the funnel, landing page, advertisements, creatives, tracking and follow-up journey.",
      deliverable: "A complete campaign infrastructure ready for acquisition.",
      glow: "border-cyan-500/20 text-cyan-400"
    },
    {
      stage: "Stage 4",
      icon: Rocket,
      title: "Launch",
      description: "We launch campaigns, validate the communication and collect real performance data.",
      deliverable: "Initial insights across audience quality, response and conversion.",
      glow: "border-pink-500/20 text-pink-400"
    },
    {
      stage: "Stage 5",
      icon: LineChart,
      title: "Optimise and Scale",
      description: "We improve the ads, pages, communication, follow-up and conversion process before responsibly increasing the budget.",
      deliverable: "A more predictable and scalable growth system.",
      glow: "border-emerald-500/20 text-emerald-400"
    }
  ];

  const handleCtaClick = () => {
    document.querySelector("#application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="how-it-works" className="py-32 bg-background relative overflow-hidden border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Label & Header */}
        <div className="text-center mb-24 animate-fade-in-up">
          <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-4">
            HOW WE CREATE GROWTH
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-outfit tracking-tighter text-white">
            The Scaling Growth System™
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            We do not begin by immediately launching advertisements. We first identify what is preventing the organisation from converting attention into measurable outcomes. Our work follows five connected stages.
          </p>
        </div>
        
        {/* Timeline Grid */}
        <div className="relative max-w-6xl mx-auto mb-20">
          {/* Horizontal line for timeline on large screens */}
          <div className="hidden lg:block absolute top-[64px] left-[10%] right-[10%] h-[2px] bg-white/5 rounded-full z-0">
            <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-emerald-500 opacity-30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div 
                  key={index}
                  className="relative group flex flex-col items-center text-center animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * index}s`, animationFillMode: "forwards" }}
                >
                  {/* Stage Icon Circle */}
                  <div className="relative mb-8 group-hover:-translate-y-1 transition-transform duration-500">
                    <div className={`w-28 h-28 rounded-3xl bg-[#0a0f1c] border border-white/10 flex items-center justify-center glassmorphism shadow-2xl relative z-10 group-hover:border-primary/50 group-hover:shadow-primary-glow transition-all duration-500 overflow-hidden`}>
                      <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-150 rounded-full transition-transform duration-700 ease-out" />
                      <Icon className="w-10 h-10 text-white relative z-10" />
                    </div>
                    <div className="absolute -top-3.5 -right-3.5 px-3 py-1 bg-accent text-background text-xs font-black font-outfit rounded-lg shadow-xl z-20 uppercase tracking-widest">
                      {stage.stage}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black font-outfit text-white group-hover:text-primary transition-colors">
                      {stage.title}
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed text-sm min-h-[70px]">
                      {stage.description}
                    </p>
                    
                    {/* Deliverable Box */}
                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-left mt-4 group-hover:border-white/10 transition-colors">
                      <p className="text-[10px] font-black tracking-widest text-accent uppercase mb-1.5">STAGE DELIVERABLE</p>
                      <p className="text-xs text-white/80 font-normal leading-relaxed">{stage.deliverable}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-up mt-16">
          <Button size="lg" onClick={handleCtaClick} className="group rounded-full px-12 py-8 text-lg bg-white hover:bg-primary text-background hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-primary-glow font-bold tracking-wide">
            <PhoneCall className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
            Get My Custom Growth Plan
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
