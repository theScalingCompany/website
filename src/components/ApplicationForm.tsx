import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, ArrowRight, ArrowLeft, Loader2, Sparkles, Building, Mail, Phone, MapPin, User, Globe2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    orgType: "",
    primaryGoal: "",
    monthlyRevenue: "",
    biggestChallenge: "",
    pastAds: "",
    adBudget: "",
    timeframe: "",
    name: "",
    organisation: "",
    website: "",
    email: "",
    mobile: "",
    location: ""
  });

  const nextStep = () => {
    if (step === 1 && (!formData.orgType || !formData.primaryGoal)) {
      toast({
        title: "Selection Required",
        description: "Please answer both questions to proceed.",
        variant: "destructive"
      });
      return;
    }
    if (step === 2 && (!formData.monthlyRevenue || !formData.biggestChallenge || !formData.pastAds || !formData.adBudget || !formData.timeframe)) {
      toast({
        title: "All Fields Required",
        description: "Please complete all answers to help us diagnose your growth.",
        variant: "destructive"
      });
      return;
    }
    setStep(step + 1);
    document.querySelector("#application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const prevStep = () => {
    setStep(step - 1);
    document.querySelector("#application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.mobile || !formData.organisation) {
      toast({
        title: "Contact Fields Required",
        description: "Please fill out all contact information fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setCompleted(true);
      toast({
        title: "Application Received!",
        description: "Our growth team will review your strategy request.",
      });
    }, 2000);
  };

  const orgTypes = [
    "Coach, consultant or expert",
    "Education brand or institute",
    "Course or certification provider",
    "E-commerce business",
    "Health or wellness brand",
    "Nonprofit or charitable organisation",
    "Spiritual organisation",
    "Event or community",
    "Other"
  ];

  const goals = [
    "Generate qualified leads",
    "Increase consultations",
    "Fill a workshop or webinar",
    "Increase course enrolments",
    "Increase product sales",
    "Increase donations",
    "Increase event registrations",
    "Build marketing automation",
    "Improve an existing funnel",
    "Other"
  ];

  const revenueRanges = [
    "< ₹5 Lakhs",
    "₹5-20 Lakhs",
    "₹20-50 Lakhs",
    "₹50L+"
  ];

  const adHistory = [
    "Yes, currently running campaigns",
    "Yes, but campaigns are paused",
    "No, this will be our first campaign"
  ];

  const budgetRanges = [
    "< ₹1 Lakh",
    "₹1-3 Lakhs",
    "₹3-10 Lakhs",
    "₹10L+"
  ];

  const timeframes = [
    "Immediately",
    "Within 30 days",
    "Within 1–3 months",
    "Exploring options"
  ];

  return (
    <section id="application-form" className="py-32 bg-background relative overflow-hidden border-b border-white/5">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-4">
              APPLICATION FORM
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-outfit text-white leading-tight">
              Tell Us What You Want to Scale
            </h2>
            <p className="text-muted-foreground mt-4 font-light">
              Submit your metrics and we will build a custom Growth Diagnosis report detailing your biggest constraints.
            </p>
          </div>

          <div className="glassmorphism bg-[#0a0f1c]/40 border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-radial from-primary/10 to-transparent blur-[60px] -z-10" />

            {/* Progress Bar */}
            {!completed && (
              <div className="flex gap-1.5 items-center mb-10 justify-end">
                <span className="text-xs text-white/55 font-bold tracking-widest uppercase mr-2">STEP {step} OF 3</span>
                <div className="flex gap-1.5">
                  <span className={`w-6 h-1.5 rounded-full ${step >= 1 ? 'bg-primary shadow-glow' : 'bg-white/20'}`} />
                  <span className={`w-6 h-1.5 rounded-full ${step >= 2 ? 'bg-primary shadow-glow' : 'bg-white/20'}`} />
                  <span className={`w-6 h-1.5 rounded-full ${step >= 3 ? 'bg-primary shadow-glow' : 'bg-white/20'}`} />
                </div>
              </div>
            )}

            {/* Success State */}
            {completed ? (
              <div className="flex flex-col items-center justify-center text-center py-12 animate-scale-in">
                <div className="w-20 h-20 rounded-full bg-emerald-500/25 flex items-center justify-center border-2 border-emerald-500 mb-8 relative">
                  <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-15" />
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                </div>
                
                <h3 className="text-3xl font-black text-white font-outfit mb-4">Application Submitted!</h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed font-light">
                  Thank you, <span className="text-white font-bold">{formData.name}</span>. Our growth architects will review your business diagnosis request for <span className="text-white font-bold">{formData.organisation}</span>.
                </p>
                
                <div className="glassmorphism rounded-2xl border border-white/10 p-6 text-left max-w-xl bg-white/5">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Next Steps
                  </h4>
                  <p className="text-sm text-white/60 leading-relaxed font-light">
                    We will audit your existing funnel structure and advertising spend efficiency. You will receive an email within 24 hours to schedule your strategy session.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Step 1 */}
                {step === 1 && (
                  <div className="space-y-8 animate-fade-in-up">
                    <div className="space-y-4">
                      <Label className="text-base font-bold text-white block">
                        1. What type of organisation are you?
                      </Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {orgTypes.map((type) => (
                          <div 
                            key={type}
                            onClick={() => setFormData({...formData, orgType: type})}
                            className={`border rounded-xl p-4 cursor-pointer transition-all duration-300 text-sm ${
                              formData.orgType === type 
                                ? 'bg-primary/20 border-primary text-white shadow-primary-glow font-bold' 
                                : 'bg-white/5 border-white/10 text-white/70 hover:border-white/20'
                            }`}
                          >
                            {type}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4 pt-4">
                      <Label className="text-base font-bold text-white block">
                        2. What is your primary goal?
                      </Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {goals.map((goal) => (
                          <div 
                            key={goal}
                            onClick={() => setFormData({...formData, primaryGoal: goal})}
                            className={`border rounded-xl p-4 cursor-pointer transition-all duration-300 text-sm ${
                              formData.primaryGoal === goal 
                                ? 'bg-primary/20 border-primary text-white shadow-primary-glow font-bold' 
                                : 'bg-white/5 border-white/10 text-white/70 hover:border-white/20'
                            }`}
                          >
                            {goal}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button type="button" onClick={nextStep} className="w-full h-14 rounded-xl text-base font-bold tracking-wide shadow-primary-glow group">
                        Next Step
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div className="space-y-8 animate-fade-in-up">
                    <div className="space-y-4">
                      <Label className="text-base font-bold text-white block">
                        3. What is your current average monthly revenue or contribution volume?
                      </Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {revenueRanges.map((range) => (
                          <div 
                            key={range}
                            onClick={() => setFormData({...formData, monthlyRevenue: range})}
                            className={`border rounded-xl p-4 text-center cursor-pointer transition-all duration-300 text-sm ${
                              formData.monthlyRevenue === range 
                                ? 'bg-primary/20 border-primary text-white shadow-primary-glow font-bold' 
                                : 'bg-white/5 border-white/10 text-white/70 hover:border-white/20'
                            }`}
                          >
                            {range}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4 pt-2">
                      <Label className="text-base font-bold text-white block">
                        4. What is the biggest challenge currently limiting growth?
                      </Label>
                      <Textarea 
                        placeholder="Please write down your biggest bottlenecks in landing pages, campaign quality, leads, checkouts, margins, etc."
                        className="bg-white/5 border-white/10 h-28 text-white focus-visible:ring-primary rounded-xl"
                        value={formData.biggestChallenge}
                        onChange={(e) => setFormData({...formData, biggestChallenge: e.target.value})}
                      />
                    </div>

                    <div className="space-y-4 pt-2">
                      <Label className="text-base font-bold text-white block">
                        5. Have you previously invested in paid advertising?
                      </Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {adHistory.map((option) => (
                          <div 
                            key={option}
                            onClick={() => setFormData({...formData, pastAds: option})}
                            className={`border rounded-xl p-4 text-center cursor-pointer transition-all duration-300 text-sm ${
                              formData.pastAds === option 
                                ? 'bg-primary/20 border-primary text-white shadow-primary-glow font-bold' 
                                : 'bg-white/5 border-white/10 text-white/70 hover:border-white/20'
                            }`}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4 pt-2">
                      <Label className="text-base font-bold text-white block">
                        6. What monthly advertising budget are you prepared to invest?
                      </Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {budgetRanges.map((range) => (
                          <div 
                            key={range}
                            onClick={() => setFormData({...formData, adBudget: range})}
                            className={`border rounded-xl p-4 text-center cursor-pointer transition-all duration-300 text-sm ${
                              formData.adBudget === range 
                                ? 'bg-primary/20 border-primary text-white shadow-primary-glow font-bold' 
                                : 'bg-white/5 border-white/10 text-white/70 hover:border-white/20'
                            }`}
                          >
                            {range}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4 pt-2">
                      <Label className="text-base font-bold text-white block">
                        7. When would you like to begin?
                      </Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {timeframes.map((tf) => (
                          <div 
                            key={tf}
                            onClick={() => setFormData({...formData, timeframe: tf})}
                            className={`border rounded-xl p-4 text-center cursor-pointer transition-all duration-300 text-sm ${
                              formData.timeframe === tf 
                                ? 'bg-primary/20 border-primary text-white shadow-primary-glow font-bold' 
                                : 'bg-white/5 border-white/10 text-white/70 hover:border-white/20'
                            }`}
                          >
                            {tf}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button type="button" onClick={prevStep} variant="ghost" className="h-14 rounded-xl text-white/55 hover:text-white flex-1 border border-white/10">
                        <ArrowLeft className="mr-2 w-5 h-5" />
                        Back
                      </Button>
                      <Button type="button" onClick={nextStep} className="h-14 rounded-xl text-base font-bold tracking-wide shadow-primary-glow group flex-1">
                        Next Step
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div className="space-y-8 animate-fade-in-up">
                    <h3 className="text-lg font-bold text-white border-b border-white/5 pb-4">
                      Contact Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-white/75 flex items-center gap-2">
                          <User className="w-4 h-4 text-primary" /> Full Name
                        </Label>
                        <Input 
                          placeholder="Your Name" 
                          className="bg-white/5 border-white/10 h-12 text-white focus-visible:ring-primary rounded-xl"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-white/75 flex items-center gap-2">
                          <Building className="w-4 h-4 text-primary" /> Organisation
                        </Label>
                        <Input 
                          placeholder="Organisation Name" 
                          className="bg-white/5 border-white/10 h-12 text-white focus-visible:ring-primary rounded-xl"
                          value={formData.organisation}
                          onChange={(e) => setFormData({...formData, organisation: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-white/75 flex items-center gap-2">
                          <Globe2 className="w-4 h-4 text-primary" /> Website / Social Link
                        </Label>
                        <Input 
                          placeholder="https://example.com" 
                          className="bg-white/5 border-white/10 h-12 text-white focus-visible:ring-primary rounded-xl"
                          value={formData.website}
                          onChange={(e) => setFormData({...formData, website: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-white/75 flex items-center gap-2">
                          <Mail className="w-4 h-4 text-primary" /> Email Address
                        </Label>
                        <Input 
                          type="email"
                          placeholder="hello@example.com" 
                          className="bg-white/5 border-white/10 h-12 text-white focus-visible:ring-primary rounded-xl"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-white/75 flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary" /> Mobile Number
                        </Label>
                        <Input 
                          type="tel"
                          placeholder="+91 98765 43210" 
                          className="bg-white/5 border-white/10 h-12 text-white focus-visible:ring-primary rounded-xl"
                          value={formData.mobile}
                          onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-white/75 flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" /> City and Country
                        </Label>
                        <Input 
                          placeholder="e.g. Coimbatore, India" 
                          className="bg-white/5 border-white/10 h-12 text-white focus-visible:ring-primary rounded-xl"
                          value={formData.location}
                          onChange={(e) => setFormData({...formData, location: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button type="button" onClick={prevStep} variant="ghost" className="h-14 rounded-xl text-white/55 hover:text-white flex-1 border border-white/10">
                        <ArrowLeft className="mr-2 w-5 h-5" />
                        Back
                      </Button>
                      <Button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="h-14 rounded-xl text-base font-bold tracking-wide shadow-primary-glow group flex-1 bg-primary hover:bg-primary/90 text-white"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="animate-spin mr-2 w-5 h-5" />
                            Diagnosing metrics...
                          </>
                        ) : (
                          <>
                            Get My Growth Plan
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
                
              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
