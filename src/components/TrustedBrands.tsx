import { Badge } from "@/components/ui/badge";

const TrustedBrands = () => {
  const brands = [
    // True transparent PNG cutouts — rendered directly on dark card background
    { name: "Dr. MV Priyaank", category: "HEALING", role: "India's leading healing & manifestation coach", image: "/mvpriyank_cutout.png", imageClass: "w-full scale-[1.35] origin-bottom", imageAlign: "items-end", type: "cutout" },
    { name: "Sandeep Gupta", category: "WEALTH", role: "Wealth Accelerator Coach", image: "/sandeep_cutout.png", imageClass: "w-[85%] scale-[1.0] origin-top", imageAlign: "items-start", type: "cutout" },
    { name: "Kennet Alphy", category: "AGENCY", role: "CEO & Co-Founder, GOAT Media", image: "/kennet_cutout.png", imageClass: "w-[75%] scale-[1.0] origin-top", imageAlign: "items-start", type: "cutout" },
    // JPG photos — use mix-blend-mode: multiply so background disappears on dark card
    { name: "Vasantha Kumari", category: "LIFE GURU", role: "Leading Healing & Life Coach in the Telugu Market", image: "/vasantha_kumari.jpg", imageClass: "w-full scale-[1.0] origin-top", imageAlign: "items-start", type: "photo" },
    { name: "Raghunath Murthy", category: "PARENTING", role: "Founder, Parenting4U", image: "/raghunath_murthy.jpg", imageClass: "w-full scale-[1.0] origin-top", imageAlign: "items-start", type: "photo" },
    { name: "Sujan Setty", category: "LIFESTYLE", role: "Founder & Life Architect", image: "/sujan_setty.jpg", imageClass: "w-full scale-[1.0] origin-top", imageAlign: "items-start", type: "photo" },
    // Logos on white card
    { name: "The Yoga Institute", category: "WELLNESS", role: "India's oldest trusted yoga institute", image: "/yoga_institute_logo.png", imageAlign: "items-center", type: "logo" },
    { name: "ISKCON Coimbatore", category: "SPIRITUAL", role: "Spiritual & Cultural Center", image: "/iskcon_logo.png", imageAlign: "items-center", type: "logo" }
  ];

  return (
    <section className="py-32 bg-background relative border-b border-white/5 overflow-hidden">
      {/* Target/Concentric Rings Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <div className="w-[600px] h-[600px] border-[2px] border-white rounded-full absolute" />
        <div className="w-[1000px] h-[1000px] border-[2px] border-white rounded-full absolute" />
        <div className="w-[1400px] h-[1400px] border-[2px] border-white rounded-full absolute" />
        <div className="w-[1800px] h-[1800px] border-[2px] border-white rounded-full absolute" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-20 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-outfit text-white tracking-tight leading-tight">
            The trusted growth partner for <br className="hidden md:block"/>
            <span className="text-gradient">
              category-leading brands
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[2rem] bg-[#0a0f1c] border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.3)] hover:-translate-y-2 group opacity-0 animate-fade-in-up flex flex-col h-[460px]"
              style={{ animationDelay: `${0.2 + (index % 4) * 0.15}s`, animationFillMode: 'forwards' }}
            >
              {/* Background Glow inside card */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[50%] bg-primary/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Top Half: Image Area */}
              <div className={`h-[240px] w-full relative flex-shrink-0 flex ${brand.imageAlign} justify-center overflow-hidden ${brand.type === 'logo' ? 'bg-white rounded-t-[2rem]' : 'bg-[#0a0f1c]'}`}>

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
                    {/* White background behind image so multiply blend works */}
                    <div className="absolute inset-0 bg-white" />
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      style={{ mixBlendMode: 'multiply' }}
                    />
                    {/* Strong dark overlay on edges to blend into card */}
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 20%, transparent 30%, rgba(10,15,28,0.6) 65%, rgba(10,15,28,0.98) 100%)' }} />
                    {/* Bottom fade */}
                    <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#0a0f1c] to-transparent" />
                  </div>
                )}

              </div>

              {/* Horizontal Divider Line */}
              <div className="relative w-full px-8">
                <div className="w-full h-[1px] bg-white/10"></div>
                <div className="absolute left-1/2 -translate-x-1/2 -top-3.5">
                  <div className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]">
                    {brand.category}
                  </div>
                </div>
              </div>

              {/* Bottom Half: Text */}
              <div className="flex-1 flex flex-col items-center text-center p-8 pt-10 relative z-10">
                <h3 className="text-2xl font-black text-white mb-3 font-outfit tracking-wide">{brand.name}</h3>
                <p className="text-sm text-white/50 font-light leading-relaxed px-2">{brand.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
