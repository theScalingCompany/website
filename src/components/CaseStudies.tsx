import React from "react";
import { ArrowUpRight, TrendingUp, CheckCircle, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  const cases = [
    {
      title: "Coaching or Expert-Led Brand",
      headline: "From Inconsistent Registrations to a Repeatable Workshop Acquisition System",
      before: "The campaign was generating leads, but attendance and sales conversion were inconsistent.",
      changes: [
        "Refined the audience and campaign promise",
        "Rebuilt the landing-page communication",
        "Introduced new creative angles",
        "Improved WhatsApp and email reminders",
        "Connected advertising metrics with sales outcomes"
      ],
      metrics: [
        { label: "Advertising Spend", value: "₹3.2 Lakhs" },
        { label: "Registrations", value: "4,210" },
        { label: "Cost per Registration", value: "₹76" },
        { label: "Attendance Rate", value: "46%" },
        { label: "Tracked Revenue", value: "₹18.48 Lakhs" },
        { label: "Return on Ad Spend", value: "5.77x" }
      ],
      glow: "border-primary/20 hover:border-primary/40 hover:shadow-primary-glow/20"
    },
    {
      title: "Education or Course Enrolment",
      headline: "Building a Qualified Enrolment Funnel for a Professional Education Program",
      before: "The institution was receiving enquiries but struggled to identify serious applicants and convert them into paid enrolments.",
      changes: [
        "Improved course positioning & packaging",
        "Created audience-specific advertisements",
        "Built a qualification & pre-screening journey",
        "Strengthened parent and student communication",
        "Improved counselling-call follow-up workflow"
      ],
      metrics: [
        { label: "Qualified Applications", value: "842" },
        { label: "Cost per Application", value: "₹340" },
        { label: "Counselling Calls", value: "486" },
        { label: "Paid Enrolments", value: "114" },
        { label: "Enrolment Revenue", value: "₹57.0 Lakhs" },
        { label: "Conversion Rate", value: "23.4%" }
      ],
      glow: "border-accent/20 hover:border-accent/40 hover:shadow-glow/20"
    },
    {
      title: "E-Commerce",
      headline: "Scaling Product Acquisition Without Depending on One Winning Advertisement",
      before: "The brand was facing rising acquisition costs and creative fatigue across primary campaign segments.",
      changes: [
        "Developed multiple customer and product angles",
        "Introduced structured creative testing process",
        "Improved the product-page conversion journey",
        "Strengthened remarketing campaigns",
        "Implemented abandoned-cart automated follow-up"
      ],
      metrics: [
        { label: "Advertising Spend", value: "₹12.5 Lakhs" },
        { label: "Ad Revenue Generated", value: "₹48.75 Lakhs" },
        { label: "Return on Ad Spend", value: "3.90x" },
        { label: "Acquisition Cost", value: "-38% Reduction" },
        { label: "Average Order Value", value: "+26% Increase" },
        { label: "Repeat Purchase Rate", value: "+18%" }
      ],
      glow: "border-gold/20 hover:border-gold/40 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]"
    },
    {
      title: "Donation Campaign",
      headline: "Turning a Meaningful Cause Into a Clear and Trustworthy Donor Journey",
      before: "The organisation had a strong cause but lacked a structured campaign for reaching, educating and converting supporters.",
      changes: [
        "Clarified the campaign story and impact points",
        "Built a dedicated, high-converting donation page",
        "Added transparency & trust communications",
        "Created occasion-based advertising campaigns",
        "Implemented automated donor follow-up sequences"
      ],
      metrics: [
        { label: "Donors Acquired", value: "1,840" },
        { label: "Total Contributions", value: "₹14.72 Lakhs" },
        { label: "Cost per Donor", value: "₹160" },
        { label: "Average Contribution", value: "₹800" },
        { label: "Recurring Donors", value: "310" },
        { label: "Page Conversion", value: "4.8%" }
      ],
      glow: "border-purple-500/20 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
    }
  ];

  const handleCtaClick = () => {
    document.querySelector("#application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="results-section" className="py-32 bg-background relative overflow-hidden border-b border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Label & Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-4">
            PERFORMANCE THAT CONNECTS TO BUSINESS OUTCOMES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-white mb-6 tracking-tight leading-tight">
            Results Are More Than Screenshots <br className="hidden md:block"/>
            From an Advertising Dashboard
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Every campaign is evaluated based on what it was intended to achieve—sales, enrolments, qualified leads, registrations, purchases, donations or long-term growth.
          </p>
        </div>

        {/* Stacked Case Studies */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {cases.map((cs, i) => (
            <Card 
              key={i} 
              className={`glassmorphism bg-[#0a0f1c]/30 border transition-all duration-500 rounded-[2.5rem] overflow-hidden ${cs.glow}`}
            >
              <CardContent className="p-8 md:p-12 space-y-10">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
                  <div>
                    <span className="text-primary font-bold tracking-wider text-[10px] uppercase block mb-2">{cs.title}</span>
                    <h3 className="text-2xl md:text-3xl font-black font-outfit text-white leading-snug">{cs.headline}</h3>
                  </div>
                  <Button variant="ghost" onClick={handleCtaClick} className="group shrink-0 text-white/50 hover:text-white flex items-center gap-2">
                    <span>Get Results Like This</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Column 1: Before */}
                  <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-6 relative overflow-hidden">
                    <div className="absolute -right-3 -top-3 opacity-10">
                      <HelpCircle className="w-16 h-16 text-red-500" />
                    </div>
                    <h4 className="text-red-400 font-bold tracking-widest text-[10px] uppercase mb-3">BEFORE THE SCALING COMPANY</h4>
                    <p className="text-white/80 text-sm leading-relaxed font-light">{cs.before}</p>
                  </div>

                  {/* Column 2: What We Changed */}
                  <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 relative overflow-hidden lg:col-span-2">
                    <div className="absolute -right-3 -top-3 opacity-10">
                      <CheckCircle className="w-16 h-16 text-primary" />
                    </div>
                    <h4 className="text-primary font-bold tracking-widest text-[10px] uppercase mb-3">WHAT WE CHANGED</h4>
                    <ul className="grid md:grid-cols-2 gap-3.5">
                      {cs.changes.map((change, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-white/80">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Results Metrics Data Strip */}
                <div>
                  <h4 className="text-accent font-bold tracking-widest text-[10px] uppercase mb-4">VERIFIED RESULTS METRICS</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {cs.metrics.map((m, idx) => (
                      <div key={idx} className="glassmorphism bg-white/5 border border-white/5 rounded-xl p-4 text-center hover:border-accent/30 transition-colors">
                        <p className="text-2xl font-black text-white font-outfit mb-1">{m.value}</p>
                        <p className="text-[10px] text-white/55 font-light tracking-wide uppercase leading-tight">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
