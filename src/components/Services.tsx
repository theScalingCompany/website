import React from "react";
import { Compass, MessageSquareCode, MousePointerClick, Megaphone, Cpu, BarChart3, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Compass,
      subtitle: "GROWTH STRATEGY & POSITIONING",
      title: "Growth Strategy and Market Positioning",
      description: "We study your market, audience, current performance and growth goals to identify the clearest opportunity.",
      bullets: [
        "Customer & market research",
        "Competitor & audience analysis",
        "Offer positioning & pricing",
        "Funnel & conversion diagnosis"
      ],
      glow: "bg-purple-500/10"
    },
    {
      icon: MessageSquareCode,
      subtitle: "CAMPAIGN COPYWRITING & CREATIVE",
      title: "Offer and Campaign Communication",
      description: "We create the message that helps your audience understand why they should act.",
      bullets: [
        "Landing-page & ad copy",
        "Video advertisement scripts",
        "Webinar & sales presentation messaging",
        "Email, WhatsApp & retargeting copy"
      ],
      glow: "bg-blue-500/10"
    },
    {
      icon: MousePointerClick,
      subtitle: "CONVERSION JOURNEYS",
      title: "Conversion Funnels and Landing Pages",
      description: "We design and improve the digital journey that converts attention into action.",
      bullets: [
        "Lead-gen & webinar funnels",
        "Course-enrolment & application funnels",
        "Consultation & event booking pages",
        "Donation & checkout campaigns"
      ],
      glow: "bg-cyan-500/10"
    },
    {
      icon: Megaphone,
      subtitle: "PAID ACQUISITION",
      title: "Paid Advertising",
      description: "We plan, launch and optimise campaigns across the platforms most relevant to your audience.",
      bullets: [
        "Meta & Google advertising",
        "YouTube & Search campaigns",
        "Structured creative & audience testing",
        "Budget scaling & CPA management"
      ],
      glow: "bg-pink-500/10"
    },
    {
      icon: Cpu,
      subtitle: "MARKETING AUTOMATION",
      title: "Marketing Automation and Follow-Up",
      description: "We connect the systems required to improve response, engagement and conversion.",
      bullets: [
        "CRM & lead routing systems",
        "WhatsApp & email automation",
        "Appointment & webinar reminders",
        "Abandoned-cart & donation follow-up"
      ],
      glow: "bg-yellow-500/10"
    },
    {
      icon: BarChart3,
      subtitle: "CONTINUOUS DIAGNOSIS",
      title: "Performance Optimisation",
      description: "Growth is not created by launching once. It is created through continuous diagnosis and improvement.",
      bullets: [
        "CPL & CAC monitoring",
        "Webinar & call show-up rates",
        "Average order value & repeat purchase",
        "ROAS & collected revenue optimization"
      ],
      glow: "bg-emerald-500/10"
    }
  ];

  return (
    <section id="what-we-do" className="py-32 relative overflow-hidden bg-background border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-primary/5 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Label & Header */}
        <div className="text-center mb-24 animate-fade-in-up">
          <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-4">
            END-TO-END GROWTH INFRASTRUCTURE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-outfit text-white tracking-tight">
            We Build the Complete Journey From <br className="hidden md:block"/>
            <span className="text-gradient">First Impression to Final Conversion</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            The Scaling Company works across the most important stages of growth—strategy, communication, acquisition, conversion, automation and optimisation. Instead of improving only one metric, we identify and strengthen the complete customer journey.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="glassmorphism border-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-primary-glow group bg-white/5"
              >
                <CardContent className="p-10 relative overflow-hidden flex flex-col h-full">
                  {/* Internal Glow Effect */}
                  <div className={`absolute -right-10 -top-10 w-40 h-40 ${service.glow} blur-3xl rounded-full transition-colors duration-500`} />
                  
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-500 shadow-lg">
                      <Icon className="w-7 h-7 text-white group-hover:text-primary transition-colors" />
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-accent font-bold tracking-widest uppercase text-[10px]">
                        {service.subtitle}
                      </p>
                      <h3 className="text-2xl font-black font-outfit text-white leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm font-light mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mt-auto pt-6 border-t border-white/5">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{bullet}</span>
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

export default Services;
