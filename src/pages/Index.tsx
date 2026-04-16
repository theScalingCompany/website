import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBrands from "@/components/TrustedBrands";
import AutomatedGrowth from "@/components/AutomatedGrowth";
import Services from "@/components/Services";
import CompanyAbout from "@/components/CompanyAbout";
import CompanyStats from "@/components/CompanyStats";
import Founders from "@/components/Founders";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { useState } from "react";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />
        <TrustedBrands />
        <Services />
        <CompanyAbout />
        <Founders />
        <CompanyStats />
        <Testimonials />
        <HowItWorks />
        <FinalCTA onOpenBooking={() => setIsBookingOpen(true)} />
      </main>
      <Footer />
      
      {/* Interactive Integrations */}
      <BookingModal isOpen={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </>
  );
};

export default Index;
