import React from "react";
import { MessageSquare, Quote, Star, Sparkles, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import proof1 from "@/assets/payment-proof-1.webp";
import proof2 from "@/assets/payment-proof-2.webp";

const Testimonials = () => {
  const reviews = [
    {
      clientName: "Dr. MV Priyaank",
      role: "Healing & Manifestation Coach",
      rating: 5,
      questions: [
        { q: "What was happening before?", a: "We had inconsistent leads. Our advertising spend felt like guesswork, and registrations rarely converted into workshop attendance." },
        { q: "Why did you choose The Scaling Company?", a: "We needed a partner who actually understood high-ticket conversion funnels, positioning, and copywriting rather than just budget bidding." },
        { q: "What did the team change?", a: "They rebuilt our landing page copy, introduced structured WhatsApp reminders, and optimized our paid creative angles." },
        { q: "What outcome did you experience?", a: "We managed ₹3.2L in spend and tracked ₹18.48L in revenue, achieving a 5.77x return on ad spend." },
        { q: "What was the working experience?", a: "Total transparency. They actively debugged our sales process and did not stop after generating the lead." }
      ]
    },
    {
      clientName: "Raghunath Murthy",
      role: "Founder, Parenting4U",
      rating: 5,
      questions: [
        { q: "What was happening before?", a: "We received registrations but parent follow-ups and admissions conversions were extremely expensive." },
        { q: "Why did you choose The Scaling Company?", a: "They didn't treat education like generic e-commerce. They customized the student qualification journey." },
        { q: "What did the team change?", a: "Introduced a qualification questionnaire, created student-focused advertising copies, and optimized counselling routing." },
        { q: "What outcome did you experience?", a: "Admissions and enrolments increased to 114 paid students with ₹57L in course revenue." },
        { q: "What was the working experience?", a: "Highly structured. They function like an extended CMO rather than an external agency vendor." }
      ]
    },
    {
      clientName: "Sujan Setty",
      role: "Founder & Lifestyle Architect",
      rating: 5,
      questions: [
        { q: "What was happening before?", a: "We faced severe ad creative fatigue, and our acquisition costs were rising rapidly on a weekly basis." },
        { q: "Why did you choose The Scaling Company?", a: "They challenged our offer positioning instead of just running the ads as they were." },
        { q: "What did the team change?", a: "Implemented multiple video angles, structured A/B testing on our product pages, and set up abandoned cart recovery." },
        { q: "What outcome did you experience?", a: "Acquisition costs dropped by 38% while average order value grew by 26%." },
        { q: "What was the working experience?", a: "Responsive, metrics-driven, and completely direct about what is blocking our campaign growth." }
      ]
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-background relative overflow-hidden border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-4">
            CLIENT TRANSFORMATIONS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-white mb-6 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            We avoid generic testimonials. Here are the detailed breakdowns of the transformations and working relationships.
          </p>
        </div>

        {/* Written Testimonials - 5 Questions format */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {reviews.map((r, i) => (
            <Card 
              key={i}
              className="glassmorphism bg-[#0a0f1c]/45 border-white/10 hover:border-primary/45 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <CardContent className="p-8 space-y-6">
                <div className="border-b border-white/5 pb-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-black text-white font-outfit">{r.clientName}</h3>
                    <p className="text-xs text-primary font-semibold tracking-wide mt-1">{r.role}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {r.questions.map((q, idx) => (
                    <div key={idx} className="text-xs leading-relaxed">
                      <p className="text-accent font-bold tracking-wide uppercase mb-1">{q.q}</p>
                      <p className="text-white/80 font-light">{q.a}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visual Proof Section - WhatsApp wins & Dashboards */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-bold tracking-widest text-xs uppercase block mb-4">
              VERIFIED CAMPAIGN WINS
            </span>
            <h3 className="text-3xl font-black font-outfit text-white">
              Real WhatsApp Win Chats & Revenue Dashboard Proofs
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Proof Card 1 */}
            <Card className="glassmorphism bg-white/5 border-white/10 overflow-hidden group hover:border-primary/45 transition-all duration-500">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white leading-none">WhatsApp Win Chat</p>
                    <p className="text-[10px] text-white/50 leading-none mt-1">Direct feedback from consulting partner</p>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#080b14] p-2 flex items-center justify-center">
                  <img 
                    src={proof1} 
                    alt="WhatsApp win screenshot" 
                    className="w-full h-auto object-cover rounded-xl opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/80 via-transparent to-transparent pointer-events-none" />
                </div>
                <p className="text-xs text-white/60 font-light text-center leading-relaxed italic">
                  "₹2.5 Lakhs collected in a single day from the retargeting workflow. Reminders are working insanely well."
                </p>
              </CardContent>
            </Card>

            {/* Proof Card 2 */}
            <Card className="glassmorphism bg-white/5 border-white/10 overflow-hidden group hover:border-primary/45 transition-all duration-500">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white leading-none">Revenue Payment Dashboard</p>
                    <p className="text-[10px] text-white/50 leading-none mt-1">Verified payment gateway integration</p>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#080b14] p-2 flex items-center justify-center">
                  <img 
                    src={proof2} 
                    alt="Payment gateway screenshot" 
                    className="w-full h-auto object-cover rounded-xl opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/80 via-transparent to-transparent pointer-events-none" />
                </div>
                <p className="text-xs text-white/60 font-light text-center leading-relaxed italic">
                  Verified earnings of ₹8.68Cr+ managed across unified customer pipelines in the coaching space.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
