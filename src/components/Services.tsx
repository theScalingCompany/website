import { BarChart, Target, PlayCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Catalyst Growth Circle",
      subtitle: "The 8-Figure Mentorship",
      description: "A 1-year mentorship designed to help you launch, scale, and become a category leader — without wasting time or money. We hand you the exact playbooks that built our empire.",
      delay: "0.1s",
      glowColor: "bg-blue-500/20"
    },
    {
      icon: BarChart,
      title: "Performance Marketing Partner",
      subtitle: "Your Extended CMO",
      description: "We don't just run ads; we take complete ownership of your marketing. As your dedicated growth partners, we handle acquisition so you can focus purely on delivering value.",
      delay: "0.2s",
      glowColor: "bg-primary/20",
      featured: true
    },
    {
      icon: PlayCircle,
      title: "Performance Video Systems",
      subtitle: "Conversion-Engineered Creative",
      description: "Ads today are won on video. We build complete ad video systems — from concept and scripts to shoots and post-production — scientifically engineered to stop the scroll and drive action.",
      delay: "0.3s",
      glowColor: "bg-accent/20"
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden bg-background">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <h2 className="text-5xl md:text-6xl font-black mb-6 font-outfit tracking-tight">
            Our 8-Figure <br/>
            <span className="text-gradient">
              Scaling Architecture.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            We build predictable, repeatable profits for coaches and course creators through three elite tier engagements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`glassmorphism border-white/5 transition-all duration-500 hover:-translate-y-2 group opacity-0 animate-fade-in-up bg-white/5 ${service.featured ? 'border-primary/50 shadow-primary-glow scale-105 relative z-10' : 'hover:border-primary/50 hover:shadow-primary-glow'}`}
              style={{ animationDelay: service.delay, animationFillMode: 'forwards' }}
            >
              <CardContent className="p-10 relative overflow-hidden flex flex-col h-full">
                {/* Internal Glow Effect */}
                <div className={`absolute -right-10 -top-10 w-40 h-40 ${service.glowColor} blur-3xl rounded-full transition-colors duration-500`} />
                
                <div className="mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-all duration-500 shadow-lg ${service.featured ? 'bg-primary/20 border-primary/50' : 'group-hover:bg-primary/20 group-hover:border-primary/50'}`}>
                    <service.icon className={`w-8 h-8 transition-colors ${service.featured ? 'text-primary' : 'text-white group-hover:text-primary'}`} />
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-accent font-bold tracking-widest uppercase text-xs">
                      {service.subtitle}
                    </p>
                    <h3 className="text-3xl font-black font-outfit text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed font-light mt-auto">
                  {service.description}
                </p>
                
                {service.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
