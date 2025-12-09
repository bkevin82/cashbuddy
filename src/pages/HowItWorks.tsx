import {
  FileText,
  CheckCircle,
  Banknote,
  ShieldCheck,
  Timer,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Complete Your Online Application",
    details: [
      "No credit score required for initial check",
      "Takes less than 5 minutes",
      "Secure encrypted form",
    ],
  },
  {
    number: "02",
    icon: CheckCircle,
    title: "Quick Approval",
    details: [
      "Fast review by our lending team",
      "Income-based approval process",
      "No faxing or physical documents",
    ],
  },
  {
    number: "03",
    icon: Banknote,
    title: "Get Money Instantly",
    details: [
      "Funds sent via Interac e-Transfer®",
      "Same-day deposits for most banks*",
      "Track status anytime",
    ],
  },
];

const benefits = [
  { icon: Timer, text: "Decision as fast as 5–10 minutes" },
  { icon: ShieldCheck, text: "Licensed lender — 100% secure" },
  { icon: Globe, text: "Available across all provinces in Canada" },
];

const HowItWorks = () => {
  return (
    <>
      {/* Hero Section */}
      {/* <section className="pt-28 pb-20 bg-gradient-to-b from-primary/95 via-primary/90 to-primary/80 text-white">
        <div className="container-custom mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple Online Payday Loan Process — For Canadians 🇨🇦
          </h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Our streamlined lending approach ensures you get what you need
            without delays, confusing paperwork, or credit hurdles.
          </p>
        </div>
      </section> */}

      {/* HERO SECTION - Updated to match Eligibility styling */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Simple Online Payday Loan Process — For Canadians 🇨🇦
        </h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Our streamlined lending approach ensures you get what you need without
          delays, confusing paperwork, or credit hurdles.
        </p>
      </section>

      {/* Step Timeline */}
      <section className="py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-6xl mx-auto relative">
          {/* connecting line */}
          <div className="hidden md:block absolute top-28 left-0 right-0 h-1 bg-accent/20 rounded"></div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center relative"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-xl font-bold text-primary mb-3">
                  {step.title}
                </h3>

                <ul className="text-muted-foreground text-sm space-y-1">
                  {step.details.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>

                {/* Step Badge */}
                <span className="absolute top-4 right-4 font-bold text-accent text-sm bg-secondary px-3 py-1 rounded-xl">
                  Step {step.number}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-foreground">
          Why Canadians Choose Us
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-secondary rounded-2xl p-6 shadow-card flex flex-col items-center"
            >
              <item.icon className="w-10 h-10 text-primary mb-3" />
              <p className="text-card-foreground font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Loan Examples */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            See What Repayment Could Look Like
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Loan costs vary by province, fees, and terms. These examples show
            how a short-term loan can work for you:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm shadow-lg rounded-xl overflow-hidden">
              <thead className="bg-primary text-white text-sm uppercase tracking-wide">
                <tr>
                  <th className="p-4">Borrowed Amount</th>
                  <th className="p-4">Term</th>
                  <th className="p-4">Total Repayment</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { amount: "$3,000", term: "14 days", repayment: "$3,450" },
                  { amount: "$5,000", term: "14 days", repayment: "$5,750" },
                  { amount: "$8,000", term: "14 days", repayment: "$9,200" },
                  { amount: "$10,000", term: "14 days", repayment: "$11,500" },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 0 ? "bg-secondary/40" : "bg-background"
                    } text-foreground border-b`}
                  >
                    <td className="p-4">{row.amount}</td>
                    <td className="p-4">{row.term}</td>
                    <td className="p-4">{row.repayment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            These are example calculations only. Exact loan costs depend on your
            province and loan agreement.
          </p>
        </div>
      </section>

      {/* Video Explainer Section */}
      <section className="py-24 bg-gradient-to-b from-muted to-background text-center px-4">
        <h2 className="text-3xl font-bold mb-6 text-foreground">
          Watch How It Works in Under 60 Seconds 🎥
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
          A quick video showing how fast and easy it is to apply and receive
          funds.
        </p>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/MsZoq4ZuvZk"
            title="How Payday Loans Work"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* CTA / Apply Section (keeps existing CTA) */}
      <section className="text-center py-20 bg-secondary/40 mt-10 px-4">
        <Link
          to="/apply"
          className="btn-primary text-base sm:text-lg font-semibold px-6 sm:px-10 py-3 sm:py-4 shadow-lg hover:shadow-xl transition-all inline-block max-w-[280px] sm:max-w-none"
        >
          Apply Now — Get Approved Today
        </Link>
      </section>
    </>
  );
};

export default HowItWorks;
