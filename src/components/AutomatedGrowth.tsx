import { Button } from "@/components/ui/button";
import { Rocket, ArrowRight } from "lucide-react";
import growthDashboard from "@/assets/growth-dashboard.jpg";
import teamCollab from "@/assets/team-collab.jpg";

const AutomatedGrowth = () => {
  return (
    <section id="automated-growth" className="py-24 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              We Engineer Automated Growth for{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Savvy Professionals
              </span>
            </h2>
            <p className="text-sm uppercase tracking-wider text-accent font-semibold">
              From Expertise to Empire: Built for Scale
            </p>
          </div>
          
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl text-muted-foreground leading-relaxed">
              You've got the knowledge; we've got the system. We partner with coaches, consultants, 
              and educators to implement cutting-edge digital advertising and automation strategies 
              that transform your business into a predictable, highly profitable growth machine.
            </p>
            <Button variant="gold" size="lg" className="group">
              <Rocket className="transition-transform group-hover:rotate-12" />
              Start Your Scaling Journey
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Stats and Results Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Stats Card */}
          <div className="bg-card border border-border rounded-2xl p-10 hover:border-accent transition-all duration-500 hover:shadow-card animate-scale-in">
            <div className="space-y-8">
              <div>
                <p className="text-muted-foreground mb-2 uppercase text-sm tracking-wider">
                  Entrepreneurs Launching Scale Systems with Us
                </p>
                <h3 className="text-7xl font-bold mb-2">
                  <span className="bg-gradient-gold bg-clip-text text-transparent">110</span>
                  <span className="text-accent">+</span>
                </h3>
                <Button variant="link" className="text-accent hover:text-gold p-0">
                  See How It Works <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              
              <p className="text-foreground leading-relaxed text-lg border-t border-border pt-6">
                We've helped digital marketers, agency owners, and coaches replace one-time 
                sales with consistent, recurring revenue.
              </p>
            </div>
          </div>

          {/* Right: Image + Text Card */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-accent transition-all duration-500 hover:shadow-card animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="relative h-64 overflow-hidden">
              <img 
                src={teamCollab} 
                alt="Real People, Real Results" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            </div>
            <div className="p-10 space-y-4">
              <h3 className="text-3xl font-bold">
                Real People.{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Real Results.
                </span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                We don't just teach. We build.
              </p>
              <p className="text-foreground leading-relaxed">
                Check out how our clients went from chaos to clarity with our SaaS system, 
                automation tools, and weekly mentorship.
              </p>
              <Button variant="link" className="text-accent hover:text-gold p-0 mt-4">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomatedGrowth;
