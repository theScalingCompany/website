import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Darken border on scroll for cleaner look
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const menuItems = [
    { label: "Home",        href: "#hero"        },
    { label: "What We Do",  href: "#what-we-do"  },
    { label: "Who We Help", href: "#who-we-help" },
    { label: "Results",     href: "#results"     },
    { label: "About Us",    href: "#about-us"    },
    { label: "Insights",    href: "#metrics-grid"},
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    // Give menu time to close before scrolling
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  const handleCtaClick = () => {
    setIsMenuOpen(false);
    setTimeout(() => {
      document.querySelector("#application-form")?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/98 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-background/80 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* ── Logo ── */}
          <a
            href="/"
            className="flex items-center flex-shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            aria-label="The Scaling Company — Home"
          >
            {/* Full wordmark on sm+ screens */}
            <span className="hidden sm:block">
              <Logo
                height={40}
                className="transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </span>
            {/* Icon-only on xs screens to save space */}
            <span className="block sm:hidden">
              <Logo
                height={36}
                iconOnly={false}
                className="transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </span>
          </a>

          {/* ── Desktop Navigation ── */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8"
            aria-label="Main navigation"
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-primary after:to-accent after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="gradient"
              size="default"
              className="ml-2 rounded-full px-6 shadow-primary-glow hover:scale-105 transition-transform duration-200"
              onClick={handleCtaClick}
            >
              Get Your Growth Plan
            </Button>
          </nav>

          {/* ── Mobile Hamburger ── */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-primary/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`md:hidden fixed inset-0 top-0 z-40 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`relative z-50 flex flex-col h-full pt-20 px-6 pb-10 transition-all duration-300 ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-48 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

          <nav
            className="flex flex-col gap-1 mt-4"
            aria-label="Mobile navigation"
          >
            {menuItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="flex items-center gap-4 px-5 py-4 rounded-2xl text-lg font-semibold text-white/80 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0" />
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA in mobile menu */}
          <div className="mt-auto pt-6 border-t border-white/10">
            <Button
              variant="gradient"
              size="lg"
              className="w-full rounded-2xl py-6 text-base font-bold shadow-primary-glow"
              onClick={handleCtaClick}
            >
              Get Your Growth Plan
            </Button>
            <p className="text-center text-xs text-white/30 mt-4 font-light">
              India's #1 Growth Partner
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
