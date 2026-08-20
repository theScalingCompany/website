import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Eye, Lock, FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "introduction",
      icon: Shield,
      title: "1. Introduction",
      content: (
        <>
          <p>
            Welcome to <strong>The Scaling Company</strong> ("we," "our," "us"). We are dedicated to building measurable growth systems for businesses, institutions, and organisations. We respect your privacy and are committed to protecting the personal information you share with us.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (the "Site"), use our services, or interact with us in any way. Please read this policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Site.
          </p>
        </>
      ),
    },
    {
      id: "information-collection",
      icon: Eye,
      title: "2. Information We Collect",
      content: (
        <>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <h4 className="text-white font-semibold mt-4 mb-2">Personal Data</h4>
          <p>
            Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you apply for our growth programs, book a consultation, or sign up for newsletters.
          </p>
          <h4 className="text-white font-semibold mt-4 mb-2">Derivative Data</h4>
          <p>
            Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
          </p>
          <h4 className="text-white font-semibold mt-4 mb-2">Business Data</h4>
          <p>
            Information regarding your business, marketing performance metrics, current revenue, growth objectives, and team size that you provide when completing our Fit Checker or Application Form.
          </p>
        </>
      ),
    },
    {
      id: "information-use",
      icon: FileText,
      title: "3. How We Use Your Information",
      content: (
        <>
          <p>
            Having accurate information about you allows us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>Evaluate your business fit for our growth acceleration programs.</li>
            <li>Deliver customized growth proposals and strategy plans.</li>
            <li>Respond to customer service requests and application inquiries.</li>
            <li>Send newsletters, promotional materials, and other growth-related insights.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
          </ul>
        </>
      ),
    },
    {
      id: "information-sharing",
      icon: Shield,
      title: "4. Sharing Your Information",
      content: (
        <>
          <p>
            We will not sell, rent, or trade your personal data with third parties. We may share information we have collected about you in certain situations, including:
          </p>
          <h4 className="text-white font-semibold mt-4 mb-2">By Law or to Protect Rights</h4>
          <p>
            If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
          </p>
          <h4 className="text-white font-semibold mt-4 mb-2">Third-Party Service Providers</h4>
          <p>
            We may share your information with third parties that perform services for us or on our behalf, including hosting services, email delivery, customer service, and marketing assistance.
          </p>
        </>
      ),
    },
    {
      id: "data-security",
      icon: Lock,
      title: "5. Security of Your Information",
      content: (
        <>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>
          <p>
            Any information shared online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.
          </p>
        </>
      ),
    },
    {
      id: "your-rights",
      icon: Shield,
      title: "6. Your Rights & Choices",
      content: (
        <>
          <p>
            You have options regarding the collection, use, and sharing of your personal data:
          </p>
          <h4 className="text-white font-semibold mt-4 mb-2">Marketing Communications</h4>
          <p>
            If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out by clicking the "unsubscribe" link at the bottom of our emails or contacting us directly using the contact information below.
          </p>
          <h4 className="text-white font-semibold mt-4 mb-2">Access & Deletion</h4>
          <p>
            You may request to review, change, or request deletion of the personal information we store about you by sending an email to <a href="mailto:growth@thescaling.co" className="text-primary hover:underline">growth@thescaling.co</a>.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-20 bg-background text-foreground relative overflow-hidden">
        {/* Decorative Top Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-primary transition-colors group"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>

          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism text-xs text-primary font-semibold mb-4 tracking-wider uppercase border border-primary/20">
              <Shield size={14} className="text-primary" />
              Privacy Center
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 font-outfit text-white">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-primary">Policy</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed">
              Last updated: August 20, 2026. This policy outlines how we collect, store, and protect your information when you engage with us.
            </p>
          </div>

          {/* Main Layout Grid */}
          <div className="grid lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
            
            {/* Sidebar Table of Contents (Hidden on mobile) */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-32 h-fit space-y-3">
              <div className="glassmorphism p-6 rounded-2xl border border-white/10 space-y-4 shadow-card">
                <h3 className="text-white font-bold text-base tracking-wide uppercase font-outfit border-b border-white/10 pb-3">
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block py-2 px-3 text-sm text-white/60 hover:text-primary hover:bg-white/5 rounded-xl transition-all duration-200"
                    >
                      {section.title.split(". ")[1]}
                    </a>
                  ))}
                  <a
                    href="#contact-us"
                    className="block py-2 px-3 text-sm text-white/60 hover:text-primary hover:bg-white/5 rounded-xl transition-all duration-200"
                  >
                    Contact Us
                  </a>
                </nav>
              </div>
            </aside>

            {/* Policy Content */}
            <article className="lg:col-span-8 space-y-8">
              <div className="glassmorphism p-8 sm:p-10 rounded-3xl border border-white/10 shadow-card space-y-10">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <section
                      key={section.id}
                      id={section.id}
                      className="space-y-4 scroll-mt-28 border-b border-white/5 pb-8 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                          <Icon size={20} />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold font-outfit text-white">
                          {section.title}
                        </h2>
                      </div>
                      <div className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed space-y-4">
                        {section.content}
                      </div>
                    </section>
                  );
                })}

                {/* Contact Us Section */}
                <section id="contact-us" className="space-y-4 scroll-mt-28 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      <MailIcon size={20} />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold font-outfit text-white">
                      7. Contact Us
                    </h2>
                  </div>
                  <div className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed space-y-4">
                    <p>
                      If you have questions or comments about this Privacy Policy, please contact us at:
                    </p>
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2 mt-4">
                      <p className="font-semibold text-white">The Scaling Company</p>
                      <p className="text-sm">Coimbatore, Tamil Nadu, India</p>
                      <p className="text-sm">
                        Email:{" "}
                        <a href="mailto:growth@thescaling.co" className="text-primary hover:underline">
                          growth@thescaling.co
                        </a>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </article>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
};

// Simple inline mail icon helper to avoid duplicate imports if not needed
const MailIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default PrivacyPolicy;
