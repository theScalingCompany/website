import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What types of organisations do you work with?",
      a: "We work with coaches, consultants, education brands, institutes, course providers, health and wellness businesses, e-commerce companies, events, communities, nonprofits and spiritual organisations. We accept projects where there is a clear offer, audience, objective and capacity for growth."
    },
    {
      q: "Do you only run paid advertisements?",
      a: "No. Advertising is one component of the growth system. Depending on the project, we may also work on positioning, offers, landing pages, campaign communication, creative strategy, follow-up, automation, sales journeys and performance tracking."
    },
    {
      q: "Can you help us if we already have an internal marketing team?",
      a: "Yes. We can work as an external growth partner alongside your internal team, providing strategy, campaign direction, paid acquisition, funnel optimisation or specialist execution."
    },
    {
      q: "Do you work with early-stage businesses?",
      a: "We selectively work with early-stage businesses that have a strong product, sufficient market clarity, execution capacity and the budget required for testing. However, advertising cannot compensate for the absence of a validated offer."
    },
    {
      q: "How much advertising budget do we need?",
      a: "The appropriate budget depends on your market, geography, objective, offer value, existing conversion rate and growth target. We recommend the budget only after understanding the campaign economics."
    },
    {
      q: "Do you guarantee results?",
      a: "No responsible growth partner can guarantee a particular business outcome. Results depend on the offer, market, pricing, competition, budget, sales process, fulfilment and speed of implementation. Our responsibility is to apply sound strategy, transparent measurement and continuous optimisation."
    },
    {
      q: "Who owns the advertising accounts and customer data?",
      a: "The client should maintain ownership of their advertising accounts, customer data, domains, landing pages and core business assets wherever technically possible."
    },
    {
      q: "How long does it take to launch?",
      a: "Timelines depend on the scope. A campaign using an existing funnel may launch faster than a project requiring strategy, landing pages, creative production, tracking and automation. A realistic timeline will be provided during the strategy process."
    },
    {
      q: "Can you support regional-language campaigns?",
      a: "Yes. We have experience creating campaigns for multilingual and regional audiences, depending on the availability of subject-matter and language support."
    },
    {
      q: "Do you work with donation campaigns?",
      a: "Yes. We can help eligible nonprofit, charitable and spiritual organisations improve campaign storytelling, donor journeys, landing pages, paid acquisition, follow-up and recurring donation communication. All campaigns must comply with relevant legal, payment-platform and advertising-platform requirements."
    },
    {
      q: "What happens during the strategy call?",
      a: "We will understand your organisation, objective, current performance, audience, offer and biggest growth constraints. Where possible, we will identify the areas that require immediate attention. If there is a mutual fit, we will explain the recommended engagement."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="insights" className="py-32 bg-background relative overflow-hidden border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 glassmorphism text-xs font-semibold mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-foreground tracking-widest uppercase">COMMON QUESTIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-white mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Everything you need to know about our growth frameworks, pricing, and campaign ownership.
          </p>
        </div>

        {/* Accordion FAQ Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Card 
                key={index} 
                className={`glassmorphism bg-[#0a0f1c]/45 border transition-all duration-300 ${
                  isOpen ? "border-primary/40 shadow-primary-glow" : "border-white/10 hover:border-white/20"
                }`}
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center px-8 py-6 text-left group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base md:text-lg font-bold font-outfit text-white group-hover:text-primary transition-colors pr-6">
                      {faq.q}
                    </span>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-primary group-hover:border-primary/30 transition-colors">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  
                  {/* Collapsible Content */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-[300px] border-t border-white/5" : "max-h-0"
                    }`}
                  >
                    <div className="p-8 text-sm md:text-base text-white/70 leading-relaxed font-light">
                      {faq.a}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
