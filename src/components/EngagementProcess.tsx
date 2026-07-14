import React from "react";
import { FileEdit, Search, Users, ClipboardList, Settings, Activity, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const EngagementProcess = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Apply",
      description: "Tell us about your organisation, offer, audience, current results and growth goals.",
      icon: FileEdit
    },
    {
      step: "Step 2",
      title: "Growth Diagnosis",
      description: "We review your existing campaigns, funnel, communication and conversion process.",
      icon: Search
    },
    {
      step: "Step 3",
      title: "Strategy Session",
      description: "We identify the biggest constraints and discuss the most relevant growth approach.",
      icon: Users
    },
    {
      step: "Step 4",
      title: "Growth Roadmap",
      description: "If there is a fit, we present the recommended scope, priorities and implementation plan.",
      icon: ClipboardList
    },
    {
      step: "Step 5",
      title: "Execution",
      description: "Our team builds, launches and improves the campaign infrastructure.",
      icon: Settings
    },
    {
      step: "Step 6",
      title: "Optimisation",
      description: "We review the data, identify leakage and continuously improve performance.",
      icon: Activity
    }
  ];

  const handleCtaClick = () => {
    document.querySelector("#application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="engagement-process" className="py-32 bg-background relative overflow-hidden border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Label & Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-accent font-bold tracking-widest text-xs uppercase block mb-4">
            WHAT HAPPENS WHEN YOU WORK WITH US
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-white mb-6 tracking-tight leading-tight">
            A Clear Process From Diagnosis to Scale
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            We work systematically to audit, position, and accelerate your user acquisition systems.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <Card 
                key={index}
                className="glassmorphism bg-[#0a0f1c]/40 border-white/10 hover:border-accent/40 hover:shadow-glow/10 transition-all duration-500 hover:-translate-y-1.5 group"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black font-outfit text-accent tracking-widest uppercase bg-accent/15 px-3 py-1 rounded-md">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-500 shadow-md">
                      <Icon className="w-5 h-5 text-white group-hover:text-accent transition-colors" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold font-outfit text-white leading-snug group-hover:text-accent transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm font-light">
                      {s.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button size="lg" onClick={handleCtaClick} className="group rounded-full px-10 py-7 text-lg bg-accent text-background hover:bg-accent/95 hover:text-background font-bold tracking-wide shadow-glow">
            Apply for a Growth Strategy Session
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

      </div>
    </section>
  );
};

export default EngagementProcess;
