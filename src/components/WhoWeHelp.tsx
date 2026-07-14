import React from "react";
import { CheckCircle2, ArrowRight, Brain, GraduationCap, ShoppingBag, HeartHandshake, ShieldAlert, Sparkles, Dumbbell, CalendarRange } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WhoWeHelp = () => {
  const models = [
    {
      id: "coaches",
      icon: Brain,
      title: "Coaches, Consultants and Experts",
      outcome: "Generate qualified leads, fill workshops, book consultations and scale premium programs.",
      bullets: [
        "Webinar registrations & workshop funnels",
        "High-ticket application funnels",
        "Consultation campaigns & program launches",
        "Automated nurture & lead qualification"
      ],
      cta: "Scale My Expert Business",
      featured: true,
      glow: "border-primary/50 shadow-primary-glow"
    },
    {
      id: "education",
      icon: GraduationCap,
      title: "Education Brands, Institutes and Course Providers",
      outcome: "Increase qualified enquiries, applications and paid course enrolments.",
      bullets: [
        "Degree & certification enrolments",
        "Online-course & admissions funnels",
        "Student, parent & counselling-call comm",
        "Regional & multilingual campaigns"
      ],
      cta: "Increase Course Enrolments",
      featured: true,
      glow: "border-accent/50 shadow-glow"
    },
    {
      id: "ecommerce",
      icon: ShoppingBag,
      title: "E-Commerce and Consumer Brands",
      outcome: "Acquire more customers while protecting profitability and improving repeat purchases.",
      bullets: [
        "Product-acquisition & retargeting ads",
        "Product page & conversion rate optimisation",
        "Abandoned-cart recovery & repeat purchases",
        "Average-order-value & creative testing"
      ],
      cta: "Scale Product Sales",
      featured: true,
      glow: "border-gold/50 shadow-[0_0_20px_rgba(251,191,36,0.3)]"
    },
    {
      id: "nonprofit",
      icon: HeartHandshake,
      title: "Nonprofits, Spiritual Organisations and Donation Campaigns",
      outcome: "Reach more supporters, communicate the cause effectively and increase meaningful contributions.",
      bullets: [
        "Donation campaign strategy & donor funnels",
        "Cause-based storytelling & donor follow-up",
        "Occasion-based advertising campaigns",
        "Recurring donor & transparency communication"
      ],
      cta: "Grow Donations and Support",
      featured: true,
      glow: "border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
    },
    {
      id: "wellness",
      icon: Dumbbell,
      title: "Health, Wellness and Lifestyle Brands",
      outcome: "Build credibility, educate the market and acquire qualified participants or customers responsibly.",
      bullets: [
        "Health workshops & lifestyle programs",
        "Consultation & wellness product campaigns",
        "Educational ads & regional campaigns",
        "Lead qualification & enrolment journeys"
      ],
      cta: "Grow My Wellness Brand",
      featured: false,
      glow: "border-white/10"
    },
    {
      id: "events",
      icon: CalendarRange,
      title: "Events, Communities and Memberships",
      outcome: "Increase registrations, attendance, participation and long-term community growth.",
      bullets: [
        "Event registration & membership campaigns",
        "Community acquisition funnels",
        "Attendance reminder & referral campaigns",
        "Upsell, retention & event follow-up"
      ],
      cta: "Grow My Event or Community",
      featured: false,
      glow: "border-white/10"
    }
  ];

  const handleCtaClick = () => {
    document.querySelector("#application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="who-we-help" className="py-32 bg-background relative overflow-hidden border-b border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Label & Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-accent font-bold tracking-widest text-xs uppercase block mb-4">
            BUILT FOR DIFFERENT GROWTH OBJECTIVES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-white mb-6 tracking-tight leading-tight">
            One Growth Partner. <br />
            <span className="text-gradient">Multiple Business Models.</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Different organisations require different conversion journeys. A coaching business should not be marketed like an e-commerce brand. We adapt the strategy, funnel and communication to the outcome that matters to you.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {models.map((model, i) => {
            const Icon = model.icon;
            return (
              <Card 
                key={model.id}
                className={`flex flex-col bg-white/5 backdrop-blur-xl border transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden ${model.glow}`}
              >
                {/* Header ribbon for featured */}
                {model.featured && (
                  <div className="absolute top-0 right-0 bg-primary/20 text-primary border-l border-b border-primary/30 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-bl-xl flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                    Core Focus
                  </div>
                )}
                
                <CardContent className="p-10 flex flex-col h-full flex-1">
                  <div className="mb-8">
                    <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 ${model.featured ? 'bg-primary/10 border-primary/30 group-hover:bg-primary/20' : 'group-hover:bg-white/10'}`}>
                      <Icon className={`w-7 h-7 text-white ${model.featured ? 'text-primary' : 'group-hover:text-primary'} transition-colors`} />
                    </div>
                    <h3 className="text-2xl font-black font-outfit text-white leading-snug">
                      {model.title}
                    </h3>
                  </div>

                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-accent font-bold tracking-widest text-[10px] uppercase mb-2">EXPECTED OUTCOME</p>
                      <p className="text-foreground leading-relaxed text-sm font-medium mb-6">{model.outcome}</p>
                      
                      <p className="text-white/40 font-bold tracking-widest text-[10px] uppercase mb-3">WHAT WE HELP WITH</p>
                      <ul className="space-y-2.5">
                        {model.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-white/80">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      onClick={handleCtaClick} 
                      className={`w-full mt-8 rounded-xl h-12 font-bold tracking-wide group/btn ${
                        model.featured 
                          ? "bg-primary hover:bg-primary/95 text-white shadow-primary-glow" 
                          : "glassmorphism hover:bg-white/10 hover:text-white border-white/10"
                      }`}
                    >
                      {model.cta}
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
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

export default WhoWeHelp;
