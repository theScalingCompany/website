import React, { useState } from "react";
import { 
  TrendingDown, UserX, DollarSign, MousePointerClick, HeartHandshake, 
  ArrowDown, AlertTriangle, CheckCircle2, ShieldAlert, Sparkles, HelpCircle 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProblemSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const problems = [
    {
      icon: TrendingDown,
      title: "Inconsistent Customer Acquisition",
      description: "Sales fluctuate because there is no repeatable system to acquire and convert customers.",
      glow: "group-hover:border-red-500/30"
    },
    {
      icon: UserX,
      title: "Low-Quality Leads",
      description: "Campaigns generate enquiries, but many prospects are not serious, eligible or ready to buy.",
      glow: "group-hover:border-orange-500/30"
    },
    {
      icon: DollarSign,
      title: "Expensive Enrolments",
      description: "Course and program campaigns receive registrations but struggle to convert them into paid enrolments.",
      glow: "group-hover:border-yellow-500/30"
    },
    {
      icon: TrendingDown,
      title: "Unprofitable Product Sales",
      description: "E-commerce campaigns generate purchases, but rising acquisition costs and weak retention reduce profitability.",
      glow: "group-hover:border-pink-500/30"
    },
    {
      icon: MousePointerClick,
      title: "Low Campaign Conversion",
      description: "Landing pages, applications, webinars and checkout journeys fail to convert enough visitors.",
      glow: "group-hover:border-blue-500/30"
    },
    {
      icon: HeartHandshake,
      title: "Weak Donation Response",
      description: "The cause is meaningful, but the campaign lacks the storytelling, trust and conversion journey required to inspire action.",
      glow: "group-hover:border-purple-500/30"
    }
  ];

  const leaks = [
    { name: "Unclear Offer", detail: "Creatives fail to highlight clear positioning, attracting non-serious prospects." },
    { name: "Landing Page Bounce", detail: "Friction-filled design causes immediate drop-offs of qualified traffic." },
    { name: "Weak Follow-Up", detail: "Leads go cold without automated retargeting, nurturing, or counselling." }
  ];

  const sealed = [
    { name: "Qualified Targeting", detail: "Ad budget is directed only toward high-intent decision makers." },
    { name: "High-Converting Funnel", detail: "Optimized landing copy, page layout, and offer value hook visitors." },
    { name: "Automated Retargeting", detail: "Nurturing sequences qualify leads and guide them to enrolment or sale." }
  ];

  return (
    <section id="what-we-do" className="py-32 bg-background relative overflow-hidden border-b border-white/5">
      {/* Ambience glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Label & Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-red-500 font-bold tracking-widest text-xs uppercase block mb-4">
            GROWTH SHOULD NOT DEPEND ON GUESSWORK
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-white mb-6 tracking-tight leading-tight">
            More Advertising Does Not <br className="hidden md:block" />
            Automatically Create More Growth
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            Many organisations invest in advertising but still struggle to scale. Increasing budget on an unoptimized campaign only accelerates budget leakage.
          </p>
        </div>

        {/* INTERACTIVE COMPARISON FLOWS (Leakage vs Sealed) */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-28">
          
          {/* Leaky Funnel (Red/Warning Psychology) */}
          <div className="glassmorphism bg-[#0f0a0d]/60 border-red-500/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-red-500/20 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-3 border-b border-white/5 pb-6 mb-8">
              <span className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                <ShieldAlert className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-xl font-black font-outfit text-white">The Leaky Campaign</h3>
                <p className="text-xs text-red-400 font-semibold tracking-wide mt-1">High Leakage • Wasted Ad Spend</p>
              </div>
            </div>

            {/* Visual Funnel Stack */}
            <div className="space-y-6 relative">
              {/* Vertical connector line */}
              <div className="absolute left-[29px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-red-500/30 to-red-500/5 -z-10" />

              {leaks.map((leak, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`flex gap-6 items-start p-4 rounded-2xl border transition-all duration-300 ${
                    activeStep === idx 
                      ? 'bg-red-500/5 border-red-500/30 translate-x-2' 
                      : 'bg-white/5 border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                    activeStep === idx ? 'bg-red-500 text-background' : 'bg-white/5 text-red-500 border border-red-500/30'
                  }`}>
                    {idx + 1}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white">{leak.name}</h4>
                      <span className="text-[10px] bg-red-500/15 text-red-400 font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                        LEAK
                      </span>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed font-light">{leak.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Result */}
            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <span className="text-xs font-bold text-red-400 tracking-wider uppercase bg-red-500/10 px-4 py-2 rounded-full inline-block">
                Result: Unpredictable ROI & High Cost Per Conversion
              </span>
            </div>
          </div>

          {/* Sealed System (Emerald/Green/Blue Psychology) */}
          <div className="glassmorphism bg-[#0a0f0d]/60 border-emerald-500/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 border-b border-white/5 pb-6 mb-8">
              <span className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-xl font-black font-outfit text-white">The Connected Growth System™</h3>
                <p className="text-xs text-emerald-400 font-semibold tracking-wide mt-1">Sealed Funnel • Optimized Scaling</p>
              </div>
            </div>

            {/* Visual Funnel Stack */}
            <div className="space-y-6 relative">
              {/* Vertical connector line */}
              <div className="absolute left-[29px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-emerald-500/30 to-emerald-500/5 -z-10" />

              {sealed.map((seal, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveStep(idx + 3)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`flex gap-6 items-start p-4 rounded-2xl border transition-all duration-300 ${
                    activeStep === idx + 3
                      ? 'bg-emerald-500/5 border-emerald-500/30 translate-x-2' 
                      : 'bg-white/5 border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                    activeStep === idx + 3 ? 'bg-emerald-500 text-background' : 'bg-white/5 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    ✓
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white">{seal.name}</h4>
                      <span className="text-[10px] bg-emerald-500/15 text-emerald-400 font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                        OPTIMIZED
                      </span>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed font-light">{seal.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Result */}
            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase bg-emerald-500/10 px-4 py-2 rounded-full inline-block">
                Result: Predictable Cost-Per-Acquisition & Growth System
              </span>
            </div>
          </div>

        </div>

        {/* Problem Cards Grid */}
        <div className="text-center mb-12">
          <span className="text-accent font-bold tracking-widest text-xs uppercase block mb-4">
            SPECIFIC SYSTEM LEAKS WE REPAIR
          </span>
          <h3 className="text-3xl font-black font-outfit text-white">
            Which Constraint is Limiting Your Scale?
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <Card 
                key={i} 
                className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1.5 group"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-red-500/10 group-hover:border-red-500/30 transition-all duration-500 shadow-md">
                    <Icon className="w-6 h-6 text-red-500 transition-transform group-hover:scale-110" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold font-outfit text-white leading-snug group-hover:text-red-400 transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm font-light">
                      {problem.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Transition statement */}
        <div className="max-w-4xl mx-auto text-center pt-8">
          <div className="inline-block relative glassmorphism border-primary/20 px-8 py-6 rounded-2xl shadow-xl bg-gradient-to-r from-primary/5 to-transparent">
            <p className="text-xl md:text-2xl text-white font-medium tracking-wide">
              "You don't just need another isolated campaign. <span className="text-gradient">You need a trustable partner who understands your mission and works as a true extension of your team.</span>"
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;
