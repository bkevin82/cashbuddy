import { useState } from "react";
import { Shield, Clock, CheckCircle2, ChevronDown } from "lucide-react";

/**
 * HeroSection Component
 * Main hero with headline, bullet points, and loan calculator
 */

const provinces = [
  "Alberta", "British Columbia", "Manitoba", "New Brunswick",
  "Newfoundland and Labrador", "Nova Scotia", "Ontario",
  "Prince Edward Island", "Quebec", "Saskatchewan",
];

const payFrequencies = [
  { value: "weekly", label: "Weekly" },
  { value: "bi-weekly", label: "Bi-weekly" },
  { value: "semi-monthly", label: "Semi-monthly" },
  { value: "monthly", label: "Monthly" },
];

export const HeroSection = () => {
  const [loanAmount, setLoanAmount] = useState(500);
  const [province, setProvince] = useState("");
  const [payFrequency, setPayFrequency] = useState("");

  // Calculate estimated repayment (example calculation)
  const interestRate = 15; // $15 per $100 borrowed (example)
  const totalRepayment = loanAmount + (loanAmount * interestRate) / 100;
  const apr = 391; // Example APR for display

  const scrollToApply = () => {
    document.querySelector("#apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="gradient-hero pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              Get up to <span className="text-accent">$1,500</span> in minutes — 100% online in Canada
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Fast, secure short-term loans for Canadians from coast to coast. No paperwork, no faxing — just quick funds when you need them most.
            </p>

            {/* Key Benefits */}
            <ul className="space-y-4 mb-8">
              {[
                { icon: Clock, text: "Funding as fast as 30 minutes*" },
                { icon: Shield, text: "Secure, encrypted online application" },
                { icon: CheckCircle2, text: "All types of income considered" },
              ].map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-primary-foreground/90 font-medium">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <button onClick={scrollToApply} className="btn-primary text-lg">
                Start Application
              </button>
              <button 
                onClick={() => document.querySelector("#eligibility")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-hero-ghost text-lg"
              >
                Check Eligibility
              </button>
            </div>
          </div>

          {/* Right - Loan Calculator Card */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
              <h2 className="text-xl md:text-2xl font-bold text-card-foreground mb-6">
                Quick Estimate
              </h2>

              {/* Loan Amount Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-muted-foreground">
                    Loan Amount
                  </label>
                  <span className="text-2xl font-bold text-primary">
                    ${loanAmount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1500"
                  step="50"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
                  aria-label="Select loan amount"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>$100</span>
                  <span>$1,500</span>
                </div>
              </div>

              {/* Province Select */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Province
                </label>
                <div className="relative">
                  <select
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="w-full p-3 bg-muted border border-border rounded-lg appearance-none cursor-pointer text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label="Select province"
                  >
                    <option value="">Select your province</option>
                    {provinces.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Pay Frequency Select */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Pay Frequency
                </label>
                <div className="relative">
                  <select
                    value={payFrequency}
                    onChange={(e) => setPayFrequency(e.target.value)}
                    className="w-full p-3 bg-muted border border-border rounded-lg appearance-none cursor-pointer text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label="Select pay frequency"
                  >
                    <option value="">Select pay frequency</option>
                    {payFrequencies.map((pf) => (
                      <option key={pf.value} value={pf.value}>{pf.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Estimated Results */}
              <div className="bg-secondary rounded-xl p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Estimated Repayment</span>
                  <span className="text-xl font-bold text-primary">${totalRepayment.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Example APR</span>
                  <span className="text-sm font-medium text-card-foreground">{apr}%</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center mb-4">
                *This is an example only, not a final loan offer. Actual rates and terms may vary based on your application.
              </p>

              <button onClick={scrollToApply} className="btn-primary w-full text-lg">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
