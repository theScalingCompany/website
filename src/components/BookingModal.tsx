import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Calendar, User, Briefcase, ArrowRight, Loader2, Sparkles, Building } from "lucide-react";

export const BookingModal = ({ isOpen, onOpenChange }: { isOpen: boolean, onOpenChange: (open: boolean) => void }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // Forms data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    revenue: ""
  });

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsSubmitting(false);
      setSelectedSlot(null);
    }
  }, [isOpen]);

  const handleNext = () => {
    setStep(s => s + 1);
  };

  const handleSlotSelection = (slot: string) => {
    setSelectedSlot(slot);
    setIsSubmitting(true);
    // Simulate API call for booking
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4); // Success step
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden bg-background/95 backdrop-blur-xl border-white/10 shadow-[0_0_60px_-15px_rgba(var(--primary-rgb),0.5)] rounded-3xl">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-radial from-primary/10 to-transparent blur-[80px] -z-10" />

        {/* Header Ribbon */}
        <div className="bg-white/5 border-b border-white/5 px-8 py-5 flex items-center justify-between relative z-10">
          <div>
            <h3 className="text-xl font-bold font-outfit text-white leading-none tracking-wide">
              {step === 4 ? "Booking Confirmed" : "Book Strategy Call"}
            </h3>
            <p className="text-xs text-white/50 mt-1 uppercase tracking-wider font-medium">
              The Scaling Circle Media
            </p>
          </div>
          {step < 4 && (
            <div className="flex gap-1.5 items-center bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <span className={`w-2 h-2 rounded-full ${step >= 1 ? 'bg-primary shadow-glow' : 'bg-white/20'}`} />
              <span className={`w-2 h-2 rounded-full ${step >= 2 ? 'bg-primary shadow-glow' : 'bg-white/20'}`} />
              <span className={`w-2 h-2 rounded-full ${step >= 3 ? 'bg-primary shadow-glow' : 'bg-white/20'}`} />
            </div>
          )}
        </div>

        <div className="p-8 relative z-10 min-h-[350px]">
          
          {/* Step 1: Basic Details */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Your Details</h4>
                  <p className="text-sm text-white/50">Where should we reach you?</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-white/70 mb-2 block">Full Name</Label>
                  <Input placeholder="John Doe" className="bg-white/5 border-white/10 h-12 text-white focus-visible:ring-primary" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <Label className="text-white/70 mb-2 block">Email Address</Label>
                  <Input type="email" placeholder="john@company.com" className="bg-white/5 border-white/10 h-12 text-white focus-visible:ring-primary" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div>
                  <Label className="text-white/70 mb-2 block">Phone Number</Label>
                  <Input type="tel" placeholder="+91 98765 43210" className="bg-white/5 border-white/10 h-12 text-white focus-visible:ring-primary" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>
              
              <Button onClick={handleNext} className="w-full mt-4 h-12 group" disabled={!formData.name || !formData.email}>
                Continue
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}

          {/* Step 2: Company Info */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in-up">
               <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center border border-accent/50">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Your Business</h4>
                  <p className="text-sm text-white/50">Help us understand your scale.</p>
                </div>
              </div>

               <div className="space-y-4">
                <div>
                  <Label className="text-white/70 mb-2 block">Company / Brand Name</Label>
                  <Input placeholder="e.g. Acme Coaching" className="bg-white/5 border-white/10 h-12 text-white focus-visible:ring-accent" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                </div>
                <div>
                  <Label className="text-white/70 mb-2 block">Current Monthly Revenue</Label>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {["Just Starting", "< ₹5 Lakhs", "₹5-20 Lakhs", "₹20L+"].map((amt) => (
                      <div 
                        key={amt} 
                        onClick={() => setFormData({...formData, revenue: amt})}
                        className={`border rounded-lg p-3 text-center cursor-pointer transition-all duration-300 text-sm font-medium ${formData.revenue === amt ? 'bg-accent/20 border-accent text-white shadow-[0_0_15px_rgba(var(--accent-rgb),0.3)]' : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30'}`}
                      >
                        {amt}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

               <Button onClick={handleNext} className="w-full mt-4 h-12 bg-accent hover:bg-accent/90 group" disabled={!formData.company || !formData.revenue}>
                Find Availability
                <Calendar className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}

          {/* Step 3: Slots */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/50">
                  <Calendar className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Select a Time</h4>
                  <p className="text-sm text-white/50">Times are in IST (GMT+5:30).</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {["Tomorrow, 10:00 AM", "Tomorrow, 2:30 PM", "Wed, 11:00 AM", "Thu, 4:00 PM"].map((slot) => (
                  <Button
                    key={slot}
                    variant="outline"
                    onClick={() => handleSlotSelection(slot)}
                    disabled={isSubmitting}
                    className="h-14 glassmorphism border-white/10 hover:border-blue-400 hover:bg-blue-500/10 hover:text-white transition-all text-sm relative overflow-hidden group"
                  >
                    {isSubmitting && selectedSlot === slot ? (
                       <Loader2 className="animate-spin w-5 h-5 text-blue-400" />
                    ) : (
                      <>
                        <span className="relative z-10">{slot}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      </>
                    )}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Success Message */}
          {step === 4 && (
            <div className="flex flex-col items-center justify-center text-center animate-scale-in py-8">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center border-2 border-green-500 mb-6 relative">
                 <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
                 <CheckCircle2 className="w-10 h-10 text-green-400 relative z-10" />
              </div>
              
              <h3 className="text-3xl font-black text-white font-outfit mb-3">Call Requested!</h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-[80%] leading-relaxed">
                Your preferred slot for <span className="text-white font-bold">{selectedSlot}</span> has been noted.
              </p>
              
              <div className="glassmorphism rounded-xl border border-white/10 p-4 mb-2 flex items-start gap-4 text-left bg-white/5">
                 <Building className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                 <div>
                    <h4 className="text-white font-bold mb-1">What Happens Next?</h4>
                    <p className="text-sm text-white/60">Our growth team will review your details and get back to you within 24 hours to strictly confirm your time slot.</p>
                 </div>
              </div>

              <Button variant="ghost" onClick={() => onOpenChange(false)} className="mt-8 text-white/50 hover:text-white">
                 Close Window
              </Button>
            </div>
          )}

        </div>
      </DialogContent>
    </Dialog>
  );
};
