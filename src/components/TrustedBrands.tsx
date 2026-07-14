import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Target, GraduationCap, HeartPulse, ShoppingBag, Landmark, CalendarDays } from "lucide-react";

const TrustedBrands = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Models" },
    { id: "coaching", name: "Coaching & Consulting", icon: Target },
    { id: "education", name: "Education & Course Enrolments", icon: GraduationCap },
    { id: "wellness", name: "Health & Wellness", icon: HeartPulse },
    { id: "ecommerce", name: "E-Commerce", icon: ShoppingBag },
    { id: "nonprofit", name: "Spiritual & Nonprofit", icon: Landmark },
    { id: "events", name: "Events & Workshops", icon: CalendarDays }
  ];

  const brands = [
    { name: "Dr. MV Priyaank", category: "coaching", categoryName: "Coaching & Consulting", role: "India's leading healing & manifestation coach", image: "/mvpriyank_cutout.png", imageClass: "w-full scale-[1.35] origin-bottom", imageAlign: "items-end", type: "cutout" },
    { name: "Sandeep Gupta", category: "coaching", categoryName: "Coaching & Consulting", role: "Wealth Accelerator Coach", image: "/sandeep_cutout.png", imageClass: "w-[85%] scale-[1.0] origin-top", imageAlign: "items-start", type: "cutout" },
    { name: "Kennet Alphy", category: "events", categoryName: "Events & Workshops", role: "CEO & Co-Founder, GOAT Media", image: "/kennet_cutout.png", imageClass: "w-[75%] scale-[1.0] origin-top", imageAlign: "items-start", type: "cutout" },
    { name: "Vasantha Kumari", category: "coaching", categoryName: "Coaching & Consulting", role: "Leading Healing & Life Coach in the Telugu Market", image: "/vasantha_kumari.jpg", imageClass: "w-full scale-[1.0] origin-top", imageAlign: "items-start", type: "photo" },
    { name: "Raghunath Murthy", category: "education", categoryName: "Education & Course Enrolments", role: "Founder, Parenting4U (Parenting Admissions)", image: "/raghunath_murthy.jpg", imageClass: "w-full scale-[1.0] origin-top", imageAlign: "items-start", type: "photo" },
    { name: "Sujan Setty", category: "wellness", categoryName: "Health & Wellness", role: "Founder & Lifestyle Architect", image: "/sujan_setty.jpg", imageClass: "w-full scale-[1.0] origin-top", imageAlign: "items-start", type: "photo" },
    { name: "The Yoga Institute", category: "wellness", categoryName: "Health & Wellness", role: "India's oldest trusted Yoga Institute, Mumbai", image: "/yoga_institute_logo.png", imageAlign: "items-center", type: "logo" },
    { name: "Dr. Rajendar", category: "wellness", categoryName: "Health & Wellness", role: "Founder, Diabetes & Lifestyle Clinic (Hyderabad)", image: "/dr_rajendar.png", imageClass: "w-[85%] scale-[1.0] origin-top", imageAlign: "items-start", type: "cutout" },
    { name: "Gowri Shankar", category: "coaching", categoryName: "Coaching & Consulting", role: "Manifestation Coach & Co-Founder, Embed Mastery", image: "/gowri_shankar.jpg", imageClass: "w-full scale-[1.0] origin-top", imageAlign: "items-start", type: "photo" },
    { name: "Dr. Rakesh Dashpute", category: "nonprofit", categoryName: "Spiritual & Nonprofit", role: "Hanuman Sadhana Mentor & Spiritual Scientist", image: "/rakesh_dashpute.jpg", imageClass: "w-full scale-[1.0] origin-top", imageAlign: "items-start", type: "photo" },
    { name: "Dr. Takshin", category: "wellness", categoryName: "Health & Wellness", role: "MBBS Led Diabetes Reversal Coach", image: "/dr_takshin.jpg", imageClass: "w-full scale-[1.0] origin-top", imageAlign: "items-start", type: "photo" },
    { name: "Yeppi OH", category: "coaching", categoryName: "Coaching & Consulting", role: "Category-Leading Consulting Brand", image: "/yeppi_oh.png", imageClass: "w-[85%] scale-[1.0] origin-top", imageAlign: "items-start", type: "cutout" },
    { name: "Mr. Aboothahir", category: "wellness", categoryName: "Health & Wellness", role: "Natural Health & Naturopathy Mentor", image: "/aboothahir.png", imageClass: "w-[85%] scale-[1.0] origin-top", imageAlign: "items-start", type: "cutout" }
  ];

  const filteredBrands = activeFilter === "all"
    ? brands
    : brands.filter(b => b.category === activeFilter);

  return (
    <section id="results" className="py-32 bg-background relative border-b border-white/5 overflow-hidden">
      {/* Target/Concentric Rings Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <div className="w-[600px] h-[600px] border-[2px] border-white rounded-full absolute" />
        <div className="w-[1000px] h-[1000px] border-[2px] border-white rounded-full absolute" />
        <div className="w-[1400px] h-[1400px] border-[2px] border-white rounded-full absolute" />
        <div className="w-[1800px] h-[1800px] border-[2px] border-white rounded-full absolute" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-outfit text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Trusted by Experts, Institutions, Education Brands and <br className="hidden md:block" />
            <span className="text-gradient">
              Growth-Focused Organisations
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Our logo strip and client portfolio demonstrate that we build repeatable conversion systems across multiple growth models.
          </p>
        </div>

        {/* Categories Tab Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-5xl mx-auto">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full border transition-all duration-300 text-sm font-medium ${activeFilter === cat.id
                  ? "bg-primary border-primary text-white shadow-primary-glow scale-105"
                  : "glassmorphism border-white/10 text-white/70 hover:border-white/30 hover:text-white"
                  }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto min-h-[420px]">
          {filteredBrands.map((brand, index) => (
            <div
              key={brand.name}
              className="relative overflow-hidden rounded-[2rem] bg-[#0a0f1c] border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.3)] hover:-translate-y-2 group flex flex-col h-[420px] animate-scale-in"
              style={{ animationDelay: `${(index % 5) * 0.1}s`, animationFillMode: "forwards" }}
            >
              {/* Background Glow inside card */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[50%] bg-primary/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Top Half: Image Area */}
              <div className={`h-[200px] w-full relative flex-shrink-0 flex ${brand.imageAlign} justify-center overflow-hidden ${brand.type === 'logo' ? 'bg-white rounded-t-[2rem]' : 'bg-[#0a0f1c]'}`}>
                {brand.type === 'logo' && (
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-[75%] h-auto object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                  />
                )}

                {brand.type === 'cutout' && (
                  <>
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className={`h-auto object-contain transition-transform duration-700 drop-shadow-2xl group-hover:scale-105 ${brand.imageClass}`}
                    />
                    {/* Bottom fade */}
                    <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#0a0f1c] to-transparent" />
                  </>
                )}

                {brand.type === 'photo' && (
                  <div className="w-full h-full relative">
                    <div className="absolute inset-0 bg-white" />
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      style={{ mixBlendMode: 'multiply' }}
                    />
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 20%, transparent 30%, rgba(10,15,28,0.6) 65%, rgba(10,15,28,0.98) 100%)' }} />
                    <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#0a0f1c] to-transparent" />
                  </div>
                )}
              </div>

              {/* Horizontal Divider Line */}
              <div className="relative w-full px-8">
                <div className="w-full h-[1px] bg-white/10"></div>
                <div className="absolute left-1/2 -translate-x-1/2 -top-3.5">
                  <div className="bg-primary text-primary-foreground text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]">
                    {brand.categoryName}
                  </div>
                </div>
              </div>

              {/* Bottom Half: Text */}
              <div className="flex-1 flex flex-col items-center text-center p-6 pt-8 relative z-10">
                <h3 className="text-xl font-black text-white mb-2 font-outfit tracking-wide">{brand.name}</h3>
                <p className="text-xs text-white/50 font-light leading-relaxed px-1">{brand.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
