import {
  ShieldCheck,
  Globe,
  Users,
  TrendingUp,
  HeartHandshake,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    description:
      "We believe in clear terms, honest communication, and no hidden surprises for our customers.",
  },
  {
    icon: Lock,
    title: "Security First",
    description:
      "Your data is protected using industry-standard encryption and secure systems.",
  },
  {
    icon: Users,
    title: "Customer-First Approach",
    description:
      "Every decision we make is focused on improving the customer experience.",
  },
];

const highlights = [
  { icon: TrendingUp, text: "Fast digital lending platform" },
  { icon: Globe, text: "Serving customers across Canada 🇨🇦" },
  { icon: HeartHandshake, text: "Responsible & ethical lending practices" },
];

const AboutUs = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About InstantFund.ca
        </h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          A modern financial platform built to deliver fast, secure, and
          transparent funding solutions for Canadians.
        </p>
      </section>

      {/* COMPANY STORY */}
      {/* <section className="py-24 px-4 md:px-8 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            InstantFund.ca was created with one simple goal — to remove the
            complexity and delays from accessing short-term financial support.
            By combining technology with responsible lending practices, we help
            Canadians get access to funds quickly while maintaining clarity,
            security, and trust.
          </p>
        </div>
      </section> */}

      {/* CORE VALUES */}
      <section className="py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {values.map((item, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-accent rounded-xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY INSTANTFUND */}
      <section className="py-20 px-4 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-foreground">
          Why Choose InstantFund.ca
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-secondary rounded-2xl p-6 shadow-card flex flex-col items-center"
            >
              <item.icon className="w-10 h-10 text-primary mb-3" />
              <p className="text-card-foreground font-medium text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-secondary/40 mt-10 px-4">
        <Link
          to="/apply"
          className="btn-primary text-base sm:text-lg font-semibold px-6 sm:px-10 py-3 sm:py-4 shadow-lg hover:shadow-xl transition-all inline-block max-w-[280px] sm:max-w-none"
        >
          Apply Now — Get Started Today
        </Link>
      </section>
    </>
  );
};

export default AboutUs;
