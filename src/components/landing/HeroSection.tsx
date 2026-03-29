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
