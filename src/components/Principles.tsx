import React from "react";
import { Lightbulb, Target, ShieldCheck, HeartHandshake, Settings2, Hammer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Principles = () => {
  const principles = [
    {
      title: "Strategy Before Spending",
      description: "We do not increase budgets until the message, audience and conversion journey show clear potential.",
      icon: Lightbulb
    },
    {
      title: "Business Outcomes Before Vanity Metrics",
      description: "We care about the quality and commercial value of each result, not only the volume.",
      icon: Target
    },
    {
      title: "Systems Before Random Campaigns",
      description: "We build processes that can be tested, measured, improved and repeated.",
      icon: Settings2
    },
    {
      title: "Integrity Before Exaggeration",
      description: "We communicate outcomes responsibly and never treat advertising as a guarantee.",
      icon: ShieldCheck
    },
    {
      title: "Partnership Before Transactions",
      description: "The strongest outcomes happen when strategy, marketing, sales and fulfilment work together.",
      icon: HeartHandshake
    },
    {
      title: "Implementation Before Information",
      description: "We do not simply provide recommendations. We help translate strategy into campaigns, pages, communication and systems.",
      icon: Hammer
    }
  ];

  return (
    <section id="principles" className="py-32 bg-background relative overflow-hidden border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-4">
            OUR PRINCIPLES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-white mb-6 tracking-tight">
            How We Think About Growth
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            These values shape our operations, campaigns, and commercial partnerships.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {principles.map((pr, index) => {
            const Icon = pr.icon;
            return (
              <Card 
                key={index}
                className="glassmorphism bg-[#0a0f1c]/40 border-white/10 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1.5 group"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-500 shadow-md">
                      <Icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-sm font-black font-outfit text-white/20 group-hover:text-primary/30 transition-colors">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold font-outfit text-white leading-snug group-hover:text-primary transition-colors">
                      {pr.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm font-light">
                      {pr.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Principles;
