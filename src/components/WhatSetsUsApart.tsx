import { Rocket, TrendingUp, BarChart3, Bot, Eye } from "lucide-react";

const WhatSetsUsApart = () => {
  const features = [
    {
      icon: Rocket,
      title: "Build High Converting Offers & Funnels",
      description: "Learn how to craft irresistible offers and build funnels that convert cold traffic into high-paying clients",
      color: "from-orange-500 to-red-500",
      pattern: "dots"
    },
    {
      icon: TrendingUp,
      title: "Run Performance Ads That Drive Results",
      description: "Master Facebook & Google Ads with the exact frameworks used by ₹100Cr+ brands to maximize ROI",
      color: "from-blue-500 to-cyan-500",
      pattern: "grid"
    },
    {
      icon: BarChart3,
      title: "Scale with Data-Backed Strategy",
      description: "Use real metrics (not guesswork) to scale profitably with a proven performance system",
      color: "from-green-500 to-emerald-500",
      pattern: "waves"
    },
    {
      icon: Bot,
      title: "Automate and Grow with AI Tools",
      description: "Leverage AI to streamline your campaigns, save time, and scale faster than ever before",
      color: "from-purple-500 to-pink-500",
      pattern: "circuit"
    },
    {
      icon: Eye,
      title: "Discover the Metric Most Coaches Miss",
      description: "Uncover the one key metric that's silently blocking your growth—and how to fix it",
      color: "from-yellow-500 to-orange-500",
      pattern: "target"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Sets{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Us Apart
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine cutting-edge strategies with proven frameworks to deliver results that matter
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card with hover effect */}
              <div className="relative h-full bg-card border-2 border-border rounded-2xl p-8 transition-all duration-500 hover:border-accent hover:shadow-glow hover:-translate-y-2">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon container */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Decorative element */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${feature.color} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl`}></div>
              </div>

              {/* Floating background element */}
              <div className={`absolute -inset-4 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 -z-10 rounded-3xl`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-4">
            Ready to experience the difference?
          </p>
          <div className="inline-block animate-pulse">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
