import { Target, Zap, Shield, TrendingUp, IndianRupee, Activity, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CompanyAbout = () => {
  const values = [
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Every campaign, every automation, every piece of content is built with your end goal in mind."
    },
    {
      icon: Zap,
      title: "Rapid Execution",
      description: "We move fast, test faster, and optimize for results in real-time."
    },
    {
      icon: Shield,
      title: "Proven Systems",
      description: "Battle-tested frameworks that have scaled hundreds of businesses across industries."
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description: "We don't just spike your numbers—we build systems for long-term, predictable success."
    }
  ];

  // Mock data representing exponential growth hitting the 8.68Cr mark
  const performanceData = [
    { month: 'Jan', revenue: 1.2, spend: 0.3 },
    { month: 'Feb', revenue: 1.8, spend: 0.4 },
    { month: 'Mar', revenue: 2.6, spend: 0.5 },
    { month: 'Apr', revenue: 3.8, spend: 0.65 },
    { month: 'May', revenue: 5.2, spend: 0.85 },
    { month: 'Jun', revenue: 7.8, spend: 1.2 },
    { month: 'Jul', revenue: 11.0, spend: 1.5 },
    { month: 'Aug', revenue: 15.5, spend: 2.0 },
    { month: 'Sep', revenue: 22.0, spend: 2.8 },
    { month: 'Oct', revenue: 31.0, spend: 3.5 },
    { month: 'Nov', revenue: 45.0, spend: 4.8 },
    { month: 'Dec', revenue: 86.8, spend: 8.5 }, // Hitting the ~8.68 Cr mark
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glassmorphism p-4 border border-white/20 rounded-xl shadow-2xl bg-background/90 backdrop-blur-md">
          <p className="text-white font-bold mb-2">{label} Performance</p>
          <div className="space-y-1">
            <p className="text-primary font-medium">Revenue: <span className="font-bold">₹{(payload[0].value).toFixed(1)}M</span></p>
            <p className="text-accent font-medium">Ad Spend: <span className="font-bold">₹{(payload[1].value).toFixed(1)}M</span></p>
            <div className="mt-2 pt-2 border-t border-white/10 text-xs text-muted-foreground">
              ROI: {((payload[0].value / payload[1].value) * 100).toFixed(0)}%
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="about-us" className="py-32 bg-background relative overflow-hidden border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-primary/5 blur-[150px] mix-blend-screen rounded-full -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main About Content */}
          <div className="text-center mb-20 animate-fade-in-up">
            <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-4">
              WHO WE ARE
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight font-outfit text-white">
              A Growth Team Built to Solve More Than <br className="hidden md:block"/>
              <span className="text-gradient">Advertising Problems</span>
            </h2>
            
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light text-left md:text-center">
              <p>
                The Scaling Company is a performance marketing and growth partner for businesses and organisations that want to acquire more customers, students, participants, members or supporters. We work at the intersection of strategy, communication, technology and performance.
              </p>
              
              <div className="my-12">
                <p className="text-xs font-bold tracking-widest text-accent uppercase text-center mb-6">OUR COMBINED EXPERTISE</p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[
                    "Growth strategy",
                    "Market research",
                    "Offer development",
                    "Conversion copywriting",
                    "Funnel design",
                    "Creative strategy",
                    "Paid advertising",
                    "Automation",
                    "Analytics",
                    "Performance optimisation"
                  ].map((capability, idx) => (
                    <div key={idx} className="glassmorphism bg-white/5 border border-white/5 p-4 rounded-xl text-center hover:border-primary/30 transition-colors">
                      <span className="text-xs text-white font-medium">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xl text-white font-medium tracking-wide text-center leading-relaxed max-w-3xl mx-auto border-l-2 border-primary pl-6 md:pl-0 md:border-l-0">
                We created The Scaling Company because most organisations do not need another disconnected vendor. <br />
                <span className="text-gradient">They need a partner capable of understanding the complete journey</span>—from what the audience sees to what they finally purchase, join or support.
              </p>
            </div>
          </div>

          {/* Proof Section - Replaced with Recharts! */}
          <div className="mt-32">
            <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 glassmorphism text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 text-gold" />
                <span className="text-gold tracking-wide">Proven Track Record</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black font-outfit mb-6">
                We Don't Just Teach It,{" "}
                <span className="text-gradient line-through decoration-white/20">
                  We've Built It
                </span>
                <br/>
                <span className="text-gold mt-2 block">We Live It.</span>
              </h3>
            </div>
            
            <div className="glassmorphism rounded-3xl border-white/10 p-8 shadow-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              
              {/* Highlight Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <IndianRupee className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium uppercase tracking-wider">Total Earnings</span>
                  </div>
                  <p className="text-3xl md:text-4xl font-black text-white font-outfit">₹8.68 Cr+</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Activity className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium uppercase tracking-wider">Total Transactions</span>
                  </div>
                  <p className="text-3xl md:text-4xl font-black text-white font-outfit">88,863</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ArrowUpRight className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-medium uppercase tracking-wider">Avg. Client ROI</span>
                  </div>
                  <p className="text-3xl md:text-4xl font-black text-green-400 font-outfit">8.5x</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Shield className="w-4 h-4 text-gold" />
                    <span className="text-sm font-medium uppercase tracking-wider">Success Rate</span>
                  </div>
                  <p className="text-3xl md:text-4xl font-black text-gold font-outfit">98%</p>
                </div>
              </div>

              {/* Chart */}
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={performanceData}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.5}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis 
                      dataKey="month" 
                      stroke="rgba(255,255,255,0.4)" 
                      axisLine={false} 
                      tickLine={false}
                      tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }} 
                      dy={10}
                    />
                    <YAxis 
                      stroke="rgba(255,255,255,0.2)" 
                      axisLine={false} 
                      tickLine={false}
                      tickFormatter={(value) => `₹${value}M`}
                      tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }} 
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey="spend" 
                      stroke="hsl(var(--accent))" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorSpend)" 
                      name="Ad Spend"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={4}
                      fillOpacity={1} 
                      fill="url(#colorRevenue)" 
                      name="Revenue"
                      activeDot={{ r: 8, fill: "hsl(var(--primary))", stroke: "#fff", strokeWidth: 2 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyAbout;
