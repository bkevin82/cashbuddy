import {
  Home,
  Info,
  Briefcase,
  FileText,
  ShieldCheck,
  Newspaper,
  HelpCircle,
  Mail,
  LayoutGrid,
} from "lucide-react";
import { Link } from "react-router-dom";

const sitemapSections = [
  {
    title: "Main",
    icon: Home,
    links: [
      { label: "Home", to: "/" },
      { label: "How It Works", to: "/how-it-works" },
      { label: "Eligibility", to: "/eligibility" },
      { label: "Apply", to: "/apply" },
    ],
  },
  {
    title: "Company",
    icon: Info,
    links: [
      { label: "Company", to: "/company" },
      { label: "About Us", to: "/about-us" },
      { label: "Careers", to: "/careers" },
      { label: "Press", to: "/press" },
    ],
  },
  {
    title: "Support",
    icon: HelpCircle,
    links: [
      { label: "FAQ", to: "/faq" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Legal",
    icon: ShieldCheck,
    links: [
      { label: "Terms & Conditions", to: "/terms" },
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Licensing", to: "/licensing" },
    ],
  },
  {
    title: "Resources",
    icon: FileText,
    links: [
      { label: "Blog", to: "/blog" },
      { label: "Sitemap", to: "/sitemap" },
    ],
  },
];

const Sitemap = () => {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sitemap</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Explore all sections of InstantFund.ca from one place
        </p>
      </section>

      {/* MODERN GRID */}
      <section className="section-padding container-custom max-w-6xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapSections.map((section, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-primary">
                  {section.title}
                </h2>
              </div>

              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      to={link.to}
                      className="flex items-center justify-between text-foreground hover:text-primary transition-colors"
                    >
                      <span>{link.label}</span>
                      <LayoutGrid className="w-4 h-4 opacity-60" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Sitemap;
