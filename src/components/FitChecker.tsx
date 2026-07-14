import React from "react";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FitChecker = () => {
  const goodFit = [
    "You already have a legitimate business, organisation, product, program, course or cause.",
    "You want measurable growth rather than random marketing activity.",
    "You are willing to improve your offer, communication and conversion process.",
    "You understand that paid advertising requires testing and optimisation.",
    "You have the capacity to serve more customers, students, participants or donors.",
    "You are looking for a serious implementation partner.",
    "You value transparent reporting and long-term systems."
  ];

  const badFit = [
    "You are looking for guaranteed overnight results.",
    "You expect advertising to fix an unvalidated product or offer automatically.",
    "You are unwilling to invest in creative testing and conversion improvement.",
    "You only want the cheapest possible leads.",
    "You do not have the capacity to fulfil additional demand.",
    "You are unwilling to share sales, enrolment or revenue data.",
    "You want a vendor who simply follows instructions without questioning the strategy."
  ];

  return (
    <section id="fit-checker" className="py-32 bg-background relative overflow-hidden border-b border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-4">
            ALIGNMENT CHECK
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit text-white mb-6 tracking-tight">
            Are We the Right Growth Partner for You?
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            We value our partnerships and only accept projects where we are confident we can add substantial commercial value.
          </p>
        </div>

        {/* Side-by-Side Fit Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* We May Be a Good Fit If... */}
          <Card className="glassmorphism bg-[#0a0f1c]/45 border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-1 group">
            <CardContent className="p-10 space-y-8">
              <div className="border-b border-white/5 pb-6">
                <h3 className="text-2xl font-black font-outfit text-emerald-400 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  We May Be a Good Fit If…
                </h3>
              </div>

              <ul className="space-y-5">
                {goodFit.map((item, idx) => (
                  <li key={idx} className="flex gap-3.5 items-start text-sm text-white/90 leading-relaxed font-light">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 group-hover:scale-105 transition-transform" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* We May Not Be the Right Fit If... */}
          <Card className="glassmorphism bg-[#0a0f1c]/45 border-red-500/10 hover:border-red-500/30 transition-all duration-500 hover:-translate-y-1 group">
            <CardContent className="p-10 space-y-8">
              <div className="border-b border-white/5 pb-6">
                <h3 className="text-2xl font-black font-outfit text-red-400 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                    <XCircle className="w-4 h-4" />
                  </span>
                  We May Not Be the Right Fit If…
                </h3>
              </div>

              <ul className="space-y-5">
                {badFit.map((item, idx) => (
                  <li key={idx} className="flex gap-3.5 items-start text-sm text-white/70 leading-relaxed font-light">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5 group-hover:scale-105 transition-transform" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

        </div>

      </div>
    </section>
  );
};

export default FitChecker;
