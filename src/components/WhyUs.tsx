import React from "react";
import { Check, X, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyUs = () => {
  const comparisons = [
    {
      traditional: "Focuses mainly on cost per lead",
      scaling: "Measures qualified leads, customers, enrolments, donations and revenue"
    },
    {
      traditional: "Runs the offer provided by the client",
      scaling: "Challenges and improves the offer before scaling"
    },
    {
      traditional: "Sends traffic to an existing landing page",
      scaling: "Builds or optimises the complete conversion journey"
    },
    {
      traditional: "Reports advertising metrics",
      scaling: "Connects marketing metrics to business results"
    },
    {
      traditional: "Treats every business model similarly",
      scaling: "Adapts the strategy to each business model"
    },
    {
      traditional: "Stops after generating the lead",
      scaling: "Improves nurture, qualification and follow-up"
    },
    {
      traditional: "Waits for the client to identify conversion problems",
      scaling: "Actively diagnoses the biggest growth constraint"
    }
  ];

  return (
    <section id="why-us" className="py-32 bg-background relative overflow-hidden border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Label & Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-accent font-bold tracking-widest text-xs uppercase block mb-4">
            WHY CLIENTS CHOOSE US
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-white mb-6 tracking-tight leading-tight">
            We Do Not Operate Like a <br />
            <span className="text-gradient">Traditional Advertising Agency</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            We take responsibility for the entire growth system, rather than stopping at the advertising dashboard.
          </p>
        </div>

        {/* Side-by-Side Comparison Card */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-px bg-white/10 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
            
            {/* Traditional Agency Column */}
            <div className="bg-[#0c101d] p-8 md:p-12 space-y-8">
              <div className="border-b border-white/5 pb-6">
                <h3 className="text-2xl font-black font-outfit text-white/50 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                    <X className="w-4 h-4" />
                  </span>
                  Traditional Agency
                </h3>
              </div>
              
              <ul className="space-y-6">
                {comparisons.map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start text-sm text-white/60 font-light">
                    <X className="w-5 h-5 text-red-500/50 shrink-0 mt-0.5" />
                    <span>{item.traditional}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Scaling Company Column */}
            <div className="bg-[#0a0f1c] p-8 md:p-12 space-y-8 relative">
              {/* Highlight borders */}
              <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-primary via-accent to-primary opacity-30" />
              <div className="absolute -inset-px bg-gradient-to-r from-primary to-accent opacity-10 blur-xl pointer-events-none rounded-[2rem]" />
              
              <div className="border-b border-white/5 pb-6 relative z-10">
                <h3 className="text-2xl font-black font-outfit text-primary flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shadow-primary-glow">
                    <Check className="w-4 h-4" />
                  </span>
                  The Scaling Company
                </h3>
              </div>

              <ul className="space-y-6 relative z-10">
                {comparisons.map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start text-sm text-white font-medium group">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span>{item.scaling}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
