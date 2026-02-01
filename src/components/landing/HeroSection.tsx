// import { useState } from "react";
// import { Shield, Clock, CheckCircle2, ChevronDown } from "lucide-react";

// /**
//  * HeroSection Component
//  * Main hero with headline, bullet points, and loan calculator
//  */

// const provinces = [
//   "Alberta",
//   "British Columbia",
//   "Manitoba",
//   "New Brunswick",
//   "Newfoundland and Labrador",
//   "Nova Scotia",
//   "Ontario",
//   "Prince Edward Island",
//   "Quebec",
//   "Saskatchewan",
// ];

// const payFrequencies = [
//   { value: "weekly", label: "Weekly" },
//   { value: "bi-weekly", label: "Bi-weekly" },
//   { value: "semi-monthly", label: "Semi-monthly" },
//   { value: "monthly", label: "Monthly" },
// ];

// export const HeroSection = () => {
//   const [loanAmount, setLoanAmount] = useState(3000);
//   const [province, setProvince] = useState("");
//   const [payFrequency, setPayFrequency] = useState("");

//   // Calculate estimated repayment (example calculation)
//   const interestRate = 15; // $15 per $100 borrowed (example)
//   const totalRepayment = loanAmount + (loanAmount * interestRate) / 100;
//   const apr = 9.99; // Example APR for display

//   const scrollToApply = () => {
//     document.querySelector("#apply")?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     // <section className="gradient-hero pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 relative overflow-hidden">
//     <section className="gradient-hero pt-20 md:pt-24 pb-16 md:pb-24 px-4 md:px-8 relative overflow-hidden -mt-4">
//       {/* Background decoration */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
//       </div>

//       <div className="container-custom mx-auto relative">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left Content */}
//           {/* <div className="text-primary-foreground">
//             <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 animate-fade-in">
//               Get up to <span className="text-accent">$10,000</span> in minutes
//               — 100% online in Canada
//             </h1>

//             <p
//               className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-in"
//               style={{ animationDelay: "0.1s" }}
//             >
//               Fast, secure short-term loans for Canadians from coast to coast.
//               No paperwork, no faxing — just quick funds when you need them
//               most.
//             </p>

//             <ul className="space-y-4 mb-8">
//               {[
//                 { icon: Clock, text: "Funding as fast as 30 minutes*" },
//                 { icon: Shield, text: "Secure, encrypted online application" },
//                 { icon: CheckCircle2, text: "All types of income considered" },
//               ].map((item, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center gap-3 animate-fade-in"
//                   style={{ animationDelay: `${0.2 + index * 0.1}s` }}
//                 >
//                   <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <item.icon className="w-5 h-5 text-accent" />
//                   </div>
//                   <span className="text-primary-foreground/90 font-medium">
//                     {item.text}
//                   </span>
//                 </li>
//               ))}
//             </ul>

//             <div
//               className="flex flex-col sm:flex-row gap-4 animate-fade-in"
//               style={{ animationDelay: "0.5s" }}
//             >
//               <button onClick={scrollToApply} className="btn-primary text-lg">
//                 Start Application
//               </button>
//               <button
//                 onClick={() =>
//                   document
//                     .querySelector("/eligibility")
//                     ?.scrollIntoView({ behavior: "smooth" })
//                 }
//                 className="btn-hero-ghost text-lg"
//               >
//                 Check Eligibility
//               </button>
//             </div>
//           </div> */}

//           {/* LEFT CONTENT */}
//           <div className="text-white max-w-xl">
//             {/* Headline */}
//             <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 animate-fade-in">
//               Need Cash Fast? Get up to{" "}
//               <span className="text-accent">$10,000</span> Today - Anywhere in
//               Canada 🇨🇦
//             </h1>

//             {/* Social Proof */}
//             <div
//               className="flex items-center gap-2 mb-6 animate-fade-in"
//               style={{ animationDelay: "0.1s" }}
//             >
//               <div className="flex">
//                 {[...Array(5)].map((_, i) => (
//                   <svg
//                     key={i}
//                     className="w-5 h-5 text-yellow-400 fill-yellow-400"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.049.293L6.176 6.057.868 6.91l4.16 4.06-.981 5.72L10 14.347l5.953 3.343-.981-5.72 4.16-4.06-5.308-.853L10 .293z" />
//                   </svg>
//                 ))}
//               </div>
//               <span className="text-white/90 text-sm font-medium">
//                 Trusted by 12,000+ Canadians
//               </span>
//             </div>

//             {/* Sub-Text */}
//             <p
//               className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in"
//               style={{ animationDelay: "0.15s" }}
//             >
//               Apply online in minutes. Quick approval. No paperwork. No waiting.
//             </p>

//             {/* Benefits */}
//             <ul className="space-y-4 mb-10">
//               {[
//                 { icon: Clock, text: "Funding as fast as 30 minutes*" },
//                 { icon: Shield, text: "Bank-grade encrypted application" },
//                 { icon: CheckCircle2, text: "All types of income accepted" },
//               ].map((item, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center gap-3 animate-fade-in"
//                   style={{ animationDelay: `${0.2 + index * 0.1}s` }}
//                 >
//                   <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <item.icon className="w-5 h-5 text-accent" />
//                   </div>
//                   <span className="text-white/95 font-medium">{item.text}</span>
//                 </li>
//               ))}
//             </ul>

//             {/* CTA Buttons */}
//             <div
//               className="flex flex-col sm:flex-row gap-4 animate-fade-in"
//               style={{ animationDelay: "0.5s" }}
//             >
//               <button onClick={scrollToApply} className="btn-primary text-lg">
//                 Start Application
//               </button>

//               <a href="/eligibility" className="btn-hero-ghost text-lg">
//                 Check Eligibility
//               </a>
//             </div>
//           </div>

//           {/* Right - Loan Calculator Card */}
//           <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
//             <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
//               <h2 className="text-xl md:text-2xl font-bold text-card-foreground mb-6">
//                 Quick Estimate
//               </h2>

//               <div className="mb-6">
//                 <div className="flex justify-between items-center mb-3">
//                   <label className="text-sm font-medium text-muted-foreground">
//                     Loan Amount
//                   </label>
//                   <span className="text-2xl font-bold text-primary">
//                     ${loanAmount.toLocaleString()}
//                   </span>
//                 </div>
//                 <input
//                   type="range"
//                   min="3000"
//                   max="10000"
//                   step="50"
//                   value={loanAmount}
//                   onChange={(e) => setLoanAmount(Number(e.target.value))}
//                   className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
//                   aria-label="Select loan amount"
//                 />
//                 <div className="flex justify-between text-xs text-muted-foreground mt-2">
//                   <span>$3000</span>
//                   <span>$10,000</span>
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-muted-foreground mb-2">
//                   Province
//                 </label>
//                 <div className="relative">
//                   <select
//                     value={province}
//                     onChange={(e) => setProvince(e.target.value)}
//                     className="w-full p-3 bg-muted border border-border rounded-lg appearance-none cursor-pointer text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//                     aria-label="Select province"
//                   >
//                     <option value="">Select your province</option>
//                     {provinces.map((p) => (
//                       <option key={p} value={p}>
//                         {p}
//                       </option>
//                     ))}
//                   </select>
//                   <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-muted-foreground mb-2">
//                   Pay Frequency
//                 </label>
//                 <div className="relative">
//                   <select
//                     value={payFrequency}
//                     onChange={(e) => setPayFrequency(e.target.value)}
//                     className="w-full p-3 bg-muted border border-border rounded-lg appearance-none cursor-pointer text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//                     aria-label="Select pay frequency"
//                   >
//                     <option value="">Select pay frequency</option>
//                     {payFrequencies.map((pf) => (
//                       <option key={pf.value} value={pf.value}>
//                         {pf.label}
//                       </option>
//                     ))}
//                   </select>
//                   <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
//                 </div>
//               </div>

//               <div className="bg-secondary rounded-xl p-4 mb-4">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-sm text-muted-foreground">
//                     Estimated Repayment
//                   </span>
//                   <span className="text-xl font-bold text-primary">
//                     ${totalRepayment.toFixed(2)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm text-muted-foreground">
//                     Example APR
//                   </span>
//                   <span className="text-sm font-medium text-card-foreground">
//                     {apr}%
//                   </span>
//                 </div>
//               </div>

//               <p className="text-xs text-muted-foreground text-center mb-4">
//                 *This is an example only, not a final loan offer. Actual rates
//                 and terms may vary based on your application.
//               </p>

//               <button
//                 onClick={scrollToApply}
//                 className="btn-primary w-full text-lg"
//               >
//                 Get Started Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import { useState } from "react";
import { Shield, Clock, CheckCircle2, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const provinces = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Nova Scotia",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
];

export const HeroSection = () => {
  const [loanAmount, setLoanAmount] = useState(3000);
  const [province, setProvince] = useState("");
  const [payFrequency, setPayFrequency] = useState("");

  const [interestRate, setInterestRate] = useState(10);
  const [loanTenure, setLoanTenure] = useState(2);

  const monthlyRate = interestRate / 100 / 12;
  const months = loanTenure * 12;

  const monthlyEMI = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1),
  );

  const totalPayment = monthlyEMI * months;
  const totalInterest = totalPayment - loanAmount;

  const scrollToApply = () => {
    document.querySelector("#apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="gradient-hero pt-20 md:pt-28 pb-16 md:pb-20 px-4 md:px-8 relative overflow-hidden">
      <div className="container-custom mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT Side */}
          {/* <div className="text-white">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 animate-fade-in">
              Need Cash Fast? Get up to{" "}
              <span className="text-accent">$10,000</span> Today!
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-6 animate-fade-in">
              Simple online application. Same-day approval for most Canadians.
              No hidden fees.
            </p>

            <p className="text-sm font-semibold text-green-300 mb-5 animate-fade-in">
              ⭐ Over <span className="font-bold">12,000+</span> Canadians
              served
            </p>

            <ul className="space-y-4 mb-8">
              {[
                { icon: Clock, text: "Funding as fast as 30 minutes*" },
                { icon: Shield, text: "Secure, encrypted online application" },
                { icon: CheckCircle2, text: "All income types considered" },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-white/90 font-medium">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <button onClick={scrollToApply} className="btn-primary text-lg">
                Start Application
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#eligibility")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-hero-ghost text-lg"
              >
                Check Eligibility
              </button>
            </div>
          </div> */}
          <div className="text-white max-w-xl">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 animate-fade-in">
              Need Cash Fast? Get up to{" "}
              <span className="text-accent">$10,000</span> Today - Anywhere in
              Canada 🇨🇦
            </h1>
            <div
              className="flex items-center gap-2 mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049.293L6.176 6.057.868 6.91l4.16 4.06-.981 5.72L10 14.347l5.953 3.343-.981-5.72 4.16-4.06-5.308-.853L10 .293z" />
                  </svg>
                ))}
              </div>
              <span className="text-white/90 text-sm font-medium">
                Trusted by 12,000+ Canadians
              </span>
            </div>

            {/* Sub-Text */}
            <p
              className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in"
              style={{ animationDelay: "0.15s" }}
            >
              Apply online in minutes. Quick approval. No paperwork. No waiting.
            </p>

            {/* Benefits */}
            <ul className="space-y-4 mb-10">
              {[
                { icon: Clock, text: "Funding as fast as 30 minutes*" },
                { icon: Shield, text: "Bank-grade encrypted application" },
                { icon: CheckCircle2, text: "All types of income accepted" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-white/95 font-medium">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              {/* <button onClick={scrollToApply} className="btn-primary text-lg">
                Start Application
              </button> */}
              <Link to="/apply" className="btn-primary text-lg text-center">
                Start Application
              </Link>

              {/* <a href="/eligibility" className="btn-hero-ghost text-lg">
                Check Eligibility
              </a> */}
              <Link to="/eligibility" className="btn-hero-ghost text-lg">
                Check Eligibility
              </Link>
            </div>
          </div>

          {/* RIGHT Side Calculator */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                Quick Loan Estimate
              </h2>

              {/* Loan Amount */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-600">
                    Loan Amount
                  </label>
                  <span className="font-bold text-primary text-lg">
                    ${loanAmount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="3000"
                  max="10000"
                  step="50"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-accent"
                />
              </div>

              {/* Interest Rate */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-600">
                    Rate of Interest
                  </label>
                  <span className="font-bold text-primary text-lg">
                    {interestRate}% p.a
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-accent"
                />
              </div>

              {/* Loan Tenure */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-600">
                    Loan Tenure (years)
                  </label>
                  <span className="font-bold text-primary text-lg">
                    {loanTenure} Yr
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="7"
                  step="1"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
                  className="w-full accent-accent"
                />
              </div>

              {/* EMI Results */}
              <div className="bg-gray-100 rounded-xl p-4 mt-4">
                <div className="flex justify-between text-gray-700 mb-1">
                  <span>Monthly EMI</span>
                  <span className="font-bold">
                    ${monthlyEMI.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-gray-700 mb-1">
                  <span>Principal Amount</span>
                  <span className="font-medium">
                    ${loanAmount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-gray-700 mb-1">
                  <span>Total Interest</span>
                  <span className="font-medium">
                    ${totalInterest.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Total Payment</span>
                  <span className="font-bold">
                    ${totalPayment.toLocaleString()}
                  </span>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                *Example only — actual approval & rates depend on your profile.
              </p>

              <button
                onClick={scrollToApply}
                className="btn-primary w-full text-lg mt-4"
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
