import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const quickLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Pricing Policy", href: "#" }
  ];

  return (
    <footer className="bg-card border-t border-white/10 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="container mx-auto px-4 pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex flex-col gap-4 group cursor-pointer items-start">
              <Logo height={48} className="transition-transform duration-300 group-hover:scale-[1.04]" />
            </div>
            <p className="text-muted-foreground leading-relaxed font-light">
              India's most experienced performance marketing partner and mentor for coaches. We help businesses scale into 8-figure brands.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-primary hover:bg-primary/20 text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Official Partners */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white font-outfit">Official Partners With</h3>
            <div className="space-y-4">
               <div className="bg-white h-24 rounded-2xl flex items-center justify-center px-6 overflow-hidden hover:bg-gray-50 transition-colors cursor-pointer group shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <img src="/flexifunnels_logo.png" alt="FlexiFunnels Partner" className="w-full h-full object-contain mix-blend-multiply scale-[2.5] group-hover:scale-[2.7] transition-transform duration-300" />
               </div>
               <div className="bg-white h-24 rounded-2xl flex items-center justify-center px-6 overflow-hidden hover:bg-gray-50 transition-colors cursor-pointer group shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <img src="/meta_logo.jpg" alt="Meta Business Partner" className="w-full h-full object-contain mix-blend-multiply scale-[1.7] group-hover:scale-[1.85] transition-transform duration-300 brightness-110 contrast-125" />
               </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white font-outfit">Legal Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white font-outfit">Location</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 glassmorphism p-4 rounded-xl border border-white/5 border-l-primary hover:border-l-accent transition-colors">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-white/80 font-medium">
                  Coimbatore, India
                </span>
              </li>
              <li className="flex items-center gap-4 glassmorphism p-4 rounded-xl border border-white/5 border-l-primary hover:border-l-accent transition-colors">
                <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                <a href="mailto:hello@scaling.co" className="text-white/80 font-medium hover:text-white transition-colors">
                  hello@scaling.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm text-center md:text-left font-light">
              © {currentYear} The Scaling Circle Media. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
               <span className="text-white/40 text-sm font-light">Designed for</span>
               <span className="text-primary font-bold text-sm">Category Leaders</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
