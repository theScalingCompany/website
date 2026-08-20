import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBrands from "@/components/TrustedBrands";
import ProblemSection from "@/components/ProblemSection";
import Services from "@/components/Services";
import WhoWeHelp from "@/components/WhoWeHelp";
import HowItWorks from "@/components/HowItWorks";
import MetricsGrid from "@/components/MetricsGrid";
import CaseStudies from "@/components/CaseStudies";
import CompanyStats from "@/components/CompanyStats";
import WhyUs from "@/components/WhyUs";
import Principles from "@/components/Principles";
import CompanyAbout from "@/components/CompanyAbout";
import Founders from "@/components/Founders";
import EngagementProcess from "@/components/EngagementProcess";
import FitChecker from "@/components/FitChecker";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Section 2: Hero */}
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />
        
        {/* Section 3: Trusted Brands / Logo Strip */}
        <TrustedBrands />
        
        {/* Section 4: Problem Section */}
        <ProblemSection />
        
        {/* Section 5: Services (What We Do) */}
        <Services />
        
        {/* Section 6: Who We Help */}
        <WhoWeHelp />
        
        {/* Section 7: Our Growth System (Scaling Growth System™) */}
        <HowItWorks />
        
        {/* Section 8: Metrics Grid (What We Actually Improve) */}
        <MetricsGrid />
        
        {/* Section 9: Results Case Studies */}
        <CaseStudies />
        
        {/* Section 10: Stats Data Strip */}
        <CompanyStats />
        
        {/* Section 11: Why The Scaling Company */}
        <WhyUs />
        
        {/* Section 12: Our Principles */}
        <Principles />
        
        {/* Section 13: About Us */}
        <CompanyAbout />
        
        {/* Section 14: Founder Section */}
        <Founders />
        
        {/* Section 15: Engagement Process */}
        <EngagementProcess />
        
        {/* Section 16 & 17: Fit Checker */}
        <FitChecker />
        
        {/* Section 18: Testimonials */}
        <Testimonials />
        
        {/* Section 19: Frequently Asked Questions */}
        <FAQ />
        
        {/* Section 20: Final CTA */}
        <FinalCTA onOpenBooking={() => setIsBookingOpen(true)} />
        
        {/* Section 21: Application Form */}
        <ApplicationForm />
      </main>
      
      {/* Section 22: Footer */}
      <Footer />
      
      {/* Onboarding Booking Modal popup */}
      <BookingModal isOpen={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </>
  );
};

export default Index;
