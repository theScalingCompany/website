import React from "react";
import { Linkedin, Calendar, DollarSign, Users, Shield, Cpu, Target } from "lucide-react";
import nirmalImg from "@/assets/founder-nirmal.jpg";
import aswinImg from "@/assets/founder-aswin.jpg";
import sarathyImg from "@/assets/founder-sarathy.jpg";
import sabinaImg from "@/assets/founder-sabina.jpg";

const Founders = () => {
  const founders = [
    {
      name: "Nirmal Chandran",
      role: "Co-Founder and Growth Strategist",
      description: "Nirmal works closely with founders, experts and organisations to identify growth opportunities, strengthen positioning and build scalable acquisition systems.",
      image: nirmalImg,
      linkedin: "https://www.linkedin.com/in/nirmal-chandran-grow/",
      stats: [
        { label: "Experience", value: "11+ Years", icon: Calendar },
        { label: "Ad Spend Managed", value: "₹30Cr+", icon: DollarSign },
        { label: "Clients Supported", value: "100+", icon: Users },
        { label: "Students Trained", value: "500+", icon: Target }
      ]
    },
    {
      name: "Aswin Bavadas",
      role: "Co-Founder and Chief Operating Officer",
      description: "Aswin oversees performance marketing campaigns, scaling strategy, and media buying optimization to turn growth plans into predictable, scaling commercial results.",
      image: aswinImg,
      linkedin: "https://www.linkedin.com/in/aswin-bavadas/",
      stats: [
        { label: "Experience", value: "6+ Years", icon: Calendar },
        { label: "Ad Spend Managed", value: "₹10Cr+", icon: DollarSign },
        { label: "Core Expertise", value: "Paid Ads & Scaling", icon: Shield },
        { label: "Campaigns Optimized", value: "200+", icon: Target }
      ]
    },
    {
      name: "Pon Sarathy",
      role: "Co-Founder and Head of Operations",
      description: "Sarathy manages technical delivery, customer data pipelines, CRM infrastructure, and automated operational systems to ensure campaigns execute smoothly without tech friction.",
      image: sarathyImg,
      linkedin: "https://www.linkedin.com/in/ponsarathy/",
      stats: [
        { label: "Experience", value: "4+ Years", icon: Calendar },
        { label: "Systems Deployed", value: "40+ Hubs", icon: Cpu },
        { label: "Automations Built", value: "150+ Flows", icon: Target },
        { label: "Core Expertise", value: "Systems & Automations", icon: Shield }
      ]
    },
    {
      name: "Sabina Tejani",
      role: "Co-Founder and Sales Conversion Coach",
      description: "Sabina brings 14+ years of sales coaching, high-ticket conversion audits, and senior copywriting experience. She specializes in training booking counselling teams, scripting video assets, and sealing conversion leaks.",
      image: sabinaImg,
      linkedin: "https://www.linkedin.com/in/sabina-tejani/",
      stats: [
        { label: "Experience", value: "14+ Years", icon: Calendar },
        { label: "Sales Generated", value: "₹4Cr+", icon: DollarSign },
        { label: "Conversion Audits", value: "80+ Audits", icon: Cpu },
        { label: "Core Expertise", value: "Sales & Copywriting", icon: Shield }
      ]
    }
  ];

  return (
    <section id="about-us" className="py-32 bg-background relative overflow-hidden border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent blur-[150px] -z-10 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent blur-[150px] -z-10 mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 glassmorphism text-xs font-semibold mb-6">
            <span className="text-primary tracking-widest uppercase">THE TEAM</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-outfit tracking-tight text-white">
            Meet the People Behind <br/>
            <span className="text-gradient">The Scaling Company</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            We are battle-tested growth strategists, funnel engineers, and sales leaders working directly on your campaigns.
          </p>
        </div>

        {/* Founders Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {founders.map((founder, index) => (
            <div 
              key={index}
              className="group relative rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/45 hover:shadow-primary-glow/20 transition-all duration-500 flex flex-col md:flex-row h-auto md:h-[480px]"
            >
              {/* Image Container with Grayscale/Color transition */}
              <div className="w-full md:w-2/5 aspect-[4/5] md:aspect-auto relative overflow-hidden shrink-0">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  style={{ objectPosition: "center 20%" }}
                />
                {/* Bottom dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/40 to-transparent opacity-100 group-hover:opacity-85 transition-opacity duration-500" />
              </div>

              {/* Founder Info */}
              <div className="p-8 flex flex-col justify-between flex-1 relative z-10">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-white font-outfit tracking-wide mb-1">
                      {founder.name}
                    </h3>
                    <p className="text-primary font-bold text-xs tracking-wider uppercase">
                      {founder.role}
                    </p>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed font-light">
                    {founder.description}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 space-y-6">
                  {/* Detailed Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {founder.stats.map((s, idx) => {
                      const StatIcon = s.icon;
                      return (
                        <div key={idx} className="flex gap-2.5 items-start">
                          <StatIcon className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs text-white/55 font-light tracking-wide uppercase leading-none mb-1">{s.label}</p>
                            <p className="text-sm font-bold text-white leading-none">{s.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* LinkedIn Icon */}
                  <div className="flex items-center justify-between">
                    <a 
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/55 hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider"
                    >
                      <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary/40 transition-colors">
                        <Linkedin className="w-3.5 h-3.5 fill-current text-white" />
                      </div>
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Support Copy */}
        <div className="text-center mt-12 max-w-2xl mx-auto border-t border-white/5 pt-8">
          <p className="text-sm text-white/60 tracking-wider font-light">
            Supported by specialists across strategy, copy, design, media buying, funnels, automation and analytics.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Founders;
