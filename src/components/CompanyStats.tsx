import React from "react";
import { TrendingUp, Users, Award, Shield, DollarSign, Globe2, BarChart2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CompanyStats = () => {
  const stats = [
    {
      number: "₹5Cr+",
      label: "Advertising Spend Managed",
      description: "Allocated across Meta, Google, and YouTube search/video ads to drive acquisition.",
      icon: DollarSign,
      color: "text-primary"
    },
    {
      number: "100+",
      label: "Coaches & Entrepreneurs Supported",
      description: "Direct strategic guidance, funnel engineering, and performance scaling.",
      icon: Users,
      color: "text-accent"
    },
    {
      number: "350+",
      label: "Campaigns Launched",
      description: "A/B creative testing, offer positioning validations, and audience scaling tracks.",
      icon: TrendingUp,
      color: "text-gold"
    },
    {
      number: "1.2M+",
      label: "Leads & Registrations Generated",
      description: "High-intent landing page conversions, application funnels, and workshop registrants.",
      icon: BarChart2,
      color: "text-purple-400"
    },
    {
      number: "₹18Cr+",
      label: "Client Revenue Influenced",
      description: "Directly attributable back-end sales, paid course enrolments, and donations.",
      icon: Award,
      color: "text-emerald-400"
    },
    {
      number: "12",
      label: "Markets or Languages Served",
      description: "Multilingual and regional campaigns optimized for localized growth dynamics.",
      icon: Globe2,
      color: "text-blue-400"
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-3/4 h-[500px] bg-gradient-radial from-primary/5 to-transparent blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-3/4 h-[500px] bg-gradient-radial from-accent/5 to-transparent blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-4">
            RESULTS DATA STRIP
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-outfit text-white tracking-tight">
            Growth Measured Across the Entire Journey
          </h2>
          <p className="text-muted-foreground font-light">
            We only report verified numbers attributable to our systems, offers, funnels, and performance marketing campaigns.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index}
                className="bg-[#0a0f1c]/40 backdrop-blur-xl border-white/10 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1.5 group"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className={`text-4xl md:text-5xl font-black font-outfit tracking-tighter ${stat.color}`}>
                      {stat.number}
                    </h3>
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-primary group-hover:border-primary/30 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white font-bold text-sm tracking-wide">
                      {stat.label}
                    </p>
                    <p className="text-white/50 text-xs leading-relaxed font-light">
                      {stat.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto text-center border-t border-white/5 pt-8">
          <p className="text-[10px] text-white/30 leading-relaxed font-light uppercase tracking-widest">
            Disclaimer: Results vary depending on the market, offer, campaign objective, sales process, budget and implementation. Individual outcomes shown are not guarantees of future performance.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CompanyStats;
