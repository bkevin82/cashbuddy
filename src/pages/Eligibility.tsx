import {
  ShieldCheck,
  CheckCircle,
  FileText,
  Building2,
  LocateIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CountUp = ({
  end,
  duration = 1500,
}: {
  end: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // smooth frame-based animation
    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count}%</>;
};

const Eligibility = () => {
  const requirements = [
    "You are 18 years of age or older",
    "You are a Canadian resident with valid ID",
    "You have a steady and verifiable income",
    "You are paid via direct deposit",
    "You have an active bank account (90+ days old)",
    "No active bankruptcy or consumer proposal",
  ];

  const documents = [
    "Government-issued photo ID",
    "Most recent pay stub or income proof",
    "Bank statement showing last 30–90 days",
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="gradient-hero text-center text-white py-24 px-6">
        <div className="container-custom mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Are You Eligible for a Fast Online Loan?
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            We make approvals simple — if you have regular income and a Canadian
            bank account, you're already on the right path! 🎯
          </p>

          <div className="mt-8">
            <Link to="/apply" className="btn-primary text-lg py-4 px-10">
              Check My Eligibility
            </Link>
          </div>
        </div>
      </section>
      {/* WHY ELIGIBILITY MATTERS */}
      <section className="section-padding bg-muted">
        <div className="container-custom mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Simple & Fair Qualification
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We approve Canadians daily — even with credit challenges. Income and
            ability to repay matters more than your credit score.
          </p>
        </div>

        <div className="container-custom mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "Credit-Friendly Approval",
              text: "Bad credit? No problem. We look at income stability instead.",
            },
            {
              icon: CheckCircle,
              title: "Fast Same-Day Funding",
              text: "Get approved in minutes and receive funds as soon as today.*",
            },
            {
              icon: Building2,
              title: "Across Canada",
              text: "Serving Canadians nationwide — coast to coast.",
            },
          ].map((card, i) => (
            <div key={i} className="card-elevated text-center">
              <card.icon className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-muted-foreground">{card.text}</p>
            </div>
          ))}
        </div>
      </section>
      {/* ELIGIBILITY REQUIREMENTS */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Minimum Eligibility Requirements
          </h2>

          <ul className="grid md:grid-cols-2 gap-5">
            {requirements.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-lg">
                <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* REQUIRED DOCUMENTS */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            What You’ll Need to Apply
          </h2>

          <ul className="grid md:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <li key={index} className="card-flat p-6 text-center font-medium">
                <FileText className="w-10 h-10 text-primary mx-auto mb-3" />
                {doc}
              </li>
            ))}
          </ul>

          <p className="text-center text-sm text-muted-foreground mt-6">
            *Documents may vary based on income and bank verification needs.
          </p>
        </div>
      </section>
      {/* --- Who Gets Approved Section --- */}
      {/* <section className="py-20 bg-gradient-to-b from-white to-secondary/40">
        <div className="container-custom mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            We’re Here to Help Canadians Move Forward
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-14">
            When unexpected expenses pop up, we step in. Our goal is simple —
            fast access to money when life happens, without judgment.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Approval Rate", value: "94%" },
              { label: "Low Credit Score Approved", value: "86%" },
              { label: "Loan Amount Range", value: "$3,000 – $10,000" },
              { label: "Same-Day Funding", value: "72%" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-card transition-transform duration-300 hover:scale-105"
              >
                <p className="text-4xl font-bold text-accent mb-2">
                  {item.value}
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* --- Who Gets Approved Section ---  */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/40">
        <div className="container-custom mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            We’re Here to Help Canadians Move Forward
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-14">
            When unexpected expenses pop up, we step in. Our goal is simple —
            fast access to money when life happens, without judgment.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Approval Rate", value: 94 },
              { label: "Low Credit Score Approved", value: 86 },
              { label: "Loan Amount Range", value: "$3,000 – $10,000" }, // Not a number → static
              { label: "Same-Day Funding", value: 72 },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-card transition-transform duration-300 hover:scale-105"
              >
                <p className="text-4xl font-bold text-accent mb-2">
                  {typeof item.value === "number" ? (
                    <CountUp end={item.value} />
                  ) : (
                    item.value
                  )}
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            *Statistics based on instantfund performance data — 2024
          </p>
        </div>
      </section>
      {/* --- Security & Trust Section --- */}
      <section className="py-20">
        <div className="container-custom mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Trusted & Secure Canadian Lending
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Your privacy and financial safety always come first. We use
            banking-grade security and operate under strict compliance
            standards.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🔐", text: "Bank-Level Encryption" },
              { icon: "🇨🇦", text: "Licensed Canadian Lender" },
              { icon: "🛡️", text: "Protected Personal Data" },
              { icon: "📄", text: "No Hidden Fees — Ever" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-secondary shadow-md border border-border/60 transition-all hover:shadow-lg"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="font-medium text-foreground">{item.text}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              document
                .querySelector("/apply")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary text-lg px-10 py-4 mt-12 shadow-lg hover:shadow-xl transition-all"
          >
            Apply Now
          </button>
        </div>
      </section>
    </>
  );
};

export default Eligibility;
