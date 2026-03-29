/**
 * Myloanbuddyh Landing Page
 * A premium Canadian payday loan landing page
 *
 * Sections:
 * 1. Navbar - Sticky navigation with mobile hamburger
 * 2. Hero - Main headline with loan calculator
 * 3. Trust - Customer reviews and trust badges
 * 4. How It Works - 3-step process
 * 5. Income Types - Accepted income sources
 * 6. Why Choose Us - Value proposition
 * 7. Eligibility - Requirements checklist
 * 8. FAQ - Common questions accordion
 * 9. Application Form - Loan application with validation
 * 10. Contact - Support information
 * 11. Footer - Links and legal disclaimers
 */

import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
// import { TrustSection } from "@/components/landing/TrustSection";
import TrustSection from "@/components/landing/TrustSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { IncomeTypesSection } from "@/components/landing/IncomeTypesSection";
import { WhyChooseUsSection } from "@/components/landing/WhyChooseUsSection";
import { EligibilitySection } from "@/components/landing/EligibilitySection";
import { FAQSection } from "@/components/landing/FAQSection";
import { ApplicationForm } from "@/components/landing/ApplicationForm";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta tags would go in index.html or via react-helmet */}

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero with loan calculator */}
        <HeroSection />

        {/* 3-step process */}
        <HowItWorksSection />

        {/* Accepted income types */}
        <IncomeTypesSection />

        {/* Value proposition */}
        <WhyChooseUsSection />

        {/* Trust badges and reviews */}
        <TrustSection />

        {/* Eligibility requirements */}
        <EligibilitySection />

        {/* FAQ accordion */}
        <FAQSection />

        {/* Application form */}
        <ApplicationForm />

        {/* Contact information */}
        <ContactSection />
      </main>

      {/* Footer with legal disclaimers */}
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
