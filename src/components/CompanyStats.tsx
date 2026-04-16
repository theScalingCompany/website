import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, Globe, Building2 } from "lucide-react";
import strategyMeeting from "@/assets/strategy-meeting.jpg";

const CompanyStats = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "100+",
      label: "Businesses Launched",
      description: "Digital marketers and coaches have launched their own branded biz with our guidance.",
      gradient: "from-primary to-blue-500"
    },
    {
      icon: Award,
      number: "98%",
      label: "Client Satisfaction Rate",
      description: "Coaching and automation that actually drives clarity, confidence, and monthly recurring income.",
      gradient: "from-blue-500 to-primary"
    },
    {
      icon: Users,
      number: "1,527",
      label: "Total Opportunities",
      description: "Cold leads converted into warm prospects through our proven systems.",
      highlight: "15 Follow-Ups | 1,527 Cold Leads | 0 Warm Leads",
      gradient: "from-primary to-accent"
    },
    {
      icon: Globe,
      number: "Global",
      label: "Indian Customers",
      description: "From global ecosystems empowering entrepreneurs in India.",
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-0 w-3/4 h-[500px] bg-gradient-radial from-primary/10 to-transparent blur-[120px] -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-primary-glow hover:-translate-y-2 group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
            >
              <CardContent className="p-8">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-5xl font-black mb-3 text-white font-outfit tracking-tighter">
                  {stat.number}
                </h3>
                <p className="text-primary font-medium tracking-wide mb-4 text-lg">
                  {stat.label}
                </p>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  {stat.description}
                </p>
                {stat.highlight && (
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <p className="text-xs text-accent font-medium tracking-wider uppercase">{stat.highlight}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Image Section with CTA */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden group glassmorphism border-white/10 p-2 opacity-0 animate-fade-in-up md:order-2" style={{ animationDelay: "0.2s", animationFillMode: 'forwards' }}>
            <img 
              src={strategyMeeting} 
              alt="Strategy Meeting" 
              className="w-full h-[600px] object-cover rounded-3xl transition-transform duration-1000 group-hover:scale-105 mix-blend-luminosity opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <h3 className="text-3xl font-black text-white mb-6 font-outfit">
                Sky Rocket Your ROI
              </h3>
              <div className="flex items-center gap-6">
                <div className="glassmorphism rounded-2xl px-8 py-4 border border-white/20 shadow-2xl relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                  <p className="text-primary font-black text-3xl mb-1 relative z-10">Rs. 10L</p>
                  <p className="text-white/80 text-xs tracking-wider uppercase font-medium relative z-10">30 Day Earning</p>
                </div>
                <div className="flex-1 h-16 relative">
                  <svg viewBox="0 0 200 40" className="w-full h-full">
                    <path 
                      d="M 0,30 Q 50,25 100,15 T 200,5" 
                      fill="none" 
                      stroke="url(#chart-gradient)" 
                      strokeWidth="4"
                      strokeLinecap="round"
                      className="animate-pulse drop-shadow-[0_0_10px_rgba(250,250,250,0.5)]"
                    />
                    <defs>
                      <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--accent))" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10 opacity-0 animate-fade-in-up md:order-1" style={{ animationDelay: "0.4s", animationFillMode: 'forwards' }}>
            <div>
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 glassmorphism text-sm font-medium mb-6">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-foreground tracking-wide">Your Unfair Advantage</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight font-outfit tracking-tighter">
                We're Not An Agency. <br/>
                <span className="text-gradient">
                  We're Growth Partners.
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light mb-8">
                At The Scaling Company, we engineer bespoke growth systems. We don't just run ads; we build empires. If you're a coach, creator, or EdTech brand looking to dominate, you're in the right place.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Data-driven frameworks that predictably convert",
                "Organic omnipresence that builds unshakable authority",
                "100% transparent ROI performance reporting",
                "Dedicated elite growth manager for every partner"
              ].map((feature, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-4 group glassmorphism p-4 rounded-2xl border-white/5 hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg text-white/80 group-hover:text-white transition-colors tracking-wide">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
