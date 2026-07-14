import React from "react";
import { UserCheck, GraduationCap, ShoppingBag, HeartHandshake, CalendarDays, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MetricsGrid = () => {
  const categories = [
    {
      title: "For Lead-Generation Campaigns",
      icon: UserCheck,
      metrics: [
        "Cost per qualified lead",
        "Lead-to-call conversion",
        "Call-show-up rate",
        "Sales conversion",
        "Customer acquisition cost",
        "Collected revenue"
      ],
      glow: "border-primary/20 hover:border-primary/50"
    },
    {
      title: "For Course Enrolments",
      icon: GraduationCap,
      metrics: [
        "Enquiry cost",
        "Application quality",
        "Counselling-call booking",
        "Application-to-enrolment conversion",
        "Cost per paid student",
        "Enrolment revenue"
      ],
      glow: "border-accent/20 hover:border-accent/50"
    },
    {
      title: "For E-Commerce",
      icon: ShoppingBag,
      metrics: [
        "Customer acquisition cost",
        "Return on advertising spend",
        "Checkout conversion",
        "Average order value",
        "Repeat purchase rate",
        "Contribution margin"
      ],
      glow: "border-gold/20 hover:border-gold/50"
    },
    {
      title: "For Donation Campaigns",
      icon: HeartHandshake,
      metrics: [
        "Cost per donor",
        "Donation-page conversion",
        "Average contribution",
        "Recurring donor acquisition",
        "Campaign reach",
        "Donor retention"
      ],
      glow: "border-purple-500/20 hover:border-purple-500/50"
    },
    {
      title: "For Events and Workshops",
      icon: CalendarDays,
      metrics: [
        "Cost per registration",
        "Registration quality",
        "Attendance percentage",
        "Engagement",
        "Conversion after the event",
        "Revenue per participant"
      ],
      glow: "border-blue-500/20 hover:border-blue-500/50"
    }
  ];

  return (
    <section id="metrics-grid" className="py-32 bg-background relative overflow-hidden border-b border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Label & Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 glassmorphism text-xs font-semibold mb-6">
            <LineChart className="w-4 h-4 text-primary" />
            <span className="text-foreground tracking-widest uppercase">REAL MEASUREMENTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-white mb-6 tracking-tight">
            We Look Beyond Vanity Metrics
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Cheap leads do not always become customers. A high number of registrations does not guarantee attendance. Traffic does not guarantee enrolments. Revenue does not always mean profitability. <br /><span className="text-white font-normal mt-3 block">That is why we measure the complete business outcome.</span>
          </p>
        </div>

        {/* Metrics Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-[90rem] mx-auto">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Card 
                key={i} 
                className={`glassmorphism bg-[#0a0f1c]/40 transition-all duration-500 hover:-translate-y-2 group border ${cat.glow}`}
              >
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6 flex items-center gap-4 border-b border-white/5 pb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-500">
                      <Icon className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-base font-bold font-outfit text-white leading-snug group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-4 flex-1">
                    {cat.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/30 transition-colors">
                          <span className="text-[10px] font-black text-primary font-outfit">{idx + 1}</span>
                        </div>
                        <span className="text-xs text-white/80 group-hover:text-white transition-colors leading-relaxed font-light">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default MetricsGrid;
