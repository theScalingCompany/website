import { Linkedin } from "lucide-react";
import nirmalImg from "@/assets/founder-nirmal.jpg";
import aswinImg from "@/assets/founder-aswin.jpg";
import sarathyImg from "@/assets/founder-sarathy.jpg";
import sabinaImg from "@/assets/founder-sabina.png";

const Founders = () => {
  const founders = [
    {
      name: "Nirmal Chandran",
      role: "Co-Founder & CEO",
      image: nirmalImg,
      delay: "0.2s",
      objectPosition: "center 20%"
    },
    {
      name: "Aswin Bavadas",
      role: "Co-Founder & COO",
      image: aswinImg,
      delay: "0.3s",
      objectPosition: "center"
    },
    {
      name: "Pon Sarathy",
      role: "Co-Founder & Head of Operations",
      image: sarathyImg,
      delay: "0.4s",
      objectPosition: "50% 10%" // High alignment to ensure face is visible
    },
    {
      name: "Sabina Tejani",
      role: "Co-Founder & Head of Sales",
      image: sabinaImg,
      delay: "0.5s",
      objectPosition: "center"
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-primary/10 to-transparent blur-[150px] -z-10 mix-blend-screen" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 glassmorphism text-sm font-medium mb-6">
            <span className="text-primary tracking-widest uppercase">The Brains Behind the Machine</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 font-outfit tracking-tight text-white">
            The Founders Behind <br/>
            <span className="text-gradient">
              The Growth.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            We're a team of battle-tested performance marketers, funnel engineers, and sales leaders dedicated to scaling your coaching business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {founders.map((founder, index) => (
            <div 
              key={index}
              className="group relative rounded-[2rem] overflow-hidden glassmorphism border-white/10 bg-white/5 opacity-0 animate-fade-in-up hover:shadow-primary-glow/20 transition-all duration-500"
              style={{ animationDelay: founder.delay, animationFillMode: 'forwards' }}
            >
              {/* Image Container with Hover Zoom */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  style={{ objectPosition: (founder as any).objectPosition || 'center' }}
                />
                {/* Dark Bottom Gradient Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/40 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              {/* Founder Info */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-10">
                <h3 className="text-2xl font-black text-white font-outfit tracking-wide mb-1 drop-shadow-lg">
                  {founder.name}
                </h3>
                <p className="text-primary font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-4 drop-shadow-sm brightness-125">
                  {founder.role}
                </p>
                
                {/* LinkedIn Button fading in */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                  <a href="#" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors border border-white/5">
                      <Linkedin className="w-4 h-4 fill-current" />
                    </div>
                    <span>Connect</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
