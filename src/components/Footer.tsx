import React from "react";
import { Facebook, Linkedin, Instagram, Youtube, Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  const currentYear = 2026;

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/thescalingcompany/", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Facebook, href: "#", label: "Facebook" }
  ];

  const quickLinks = [
    { label: "About", href: "#about-us" },
    { label: "Services", href: "#what-we-do" },
    { label: "Who We Help", href: "#who-we-help" },
    { label: "Results", href: "#results-section" },
    { label: "Insights", href: "#metrics-grid" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#application-form" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms and Conditions", href: "#" },
    { label: "Disclaimer", href: "#" }
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
            <p className="text-muted-foreground text-sm leading-relaxed font-light">
              The Scaling Company helps businesses, institutions and organisations build measurable growth systems through strategy, funnels, paid acquisition, communication, automation and performance optimisation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-primary hover:bg-primary/20 text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-white font-outfit">Company</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-white font-outfit">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Info */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-white font-outfit">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 glassmorphism p-4 rounded-xl border border-white/5 border-l-primary hover:border-l-accent transition-colors">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-white/80 text-sm font-medium">
                  Coimbatore, India
                </span>
              </li>
              <li className="flex items-center gap-4 glassmorphism p-4 rounded-xl border border-white/5 border-l-primary hover:border-l-accent transition-colors">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:growth@thescaling.co" className="text-white/80 text-sm font-medium hover:text-white transition-colors">
                  growth@thescaling.co
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer row */}
        <div className="pt-8 border-t border-white/5 mb-8">
          <p className="text-[10px] text-white/30 leading-relaxed font-light uppercase tracking-wider text-center md:text-left">
            Disclaimer: The information and results presented on this website are for educational and illustrative purposes. Marketing and business results vary based on multiple factors, including market conditions, offer quality, pricing, advertising budget, sales process and execution. Past performance does not guarantee future results.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs text-center md:text-left font-light">
              © {currentYear} The Scaling Company. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
               <span className="text-white/40 text-xs font-light">Designed for</span>
               <span className="text-primary font-bold text-xs">Category Leaders</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
