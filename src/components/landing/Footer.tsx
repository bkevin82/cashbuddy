import { Leaf, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

/**
 * Footer Component
 * Links, social icons, and legal disclaimers
 */

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Licensing", href: "#" },
    { label: "Sitemap", href: "#" },
  ],
  resources: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
    { label: "Eligibility", href: "#eligibility" },
    { label: "Blog", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="flex items-center gap-2 text-primary-foreground font-bold text-xl mb-4"
            >
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-accent-foreground" />
              </div>
              <span>Myloanbuddy</span>
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Helping Canadians access fast, transparent short-term loans since
              2005. Licensed and regulated.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom mx-auto px-4 md:px-8 py-6">
          <div className="text-xs text-primary-foreground/60 space-y-4">
            <p>
              <strong>Example Cost of Borrowing:</strong> A $500 loan for 14
              days in Ontario would have a cost of borrowing of $75 ($15 per
              $100 borrowed), for a total repayment of $575. This represents an
              Annual Percentage Rate (APR) of approximately 391%. The maximum
              allowable cost of borrowing varies by province and is regulated by
              provincial law.
            </p>
            <p>
              <strong>Important:</strong> This website provides informational
              content only and does not constitute a binding loan offer. Loan
              approval, amounts, and terms are subject to verification and may
              vary based on your individual circumstances and provincial
              regulations. Myloanbuddy is a licensed payday lender operating
              under applicable provincial Consumer Protection Acts.
            </p>
            <p>
              Interac e-Transfer® is a registered trademark of Interac Corp.
              Used under license.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom mx-auto px-4 md:px-8 py-4">
          <p className="text-sm text-primary-foreground/60 text-center">
            © {currentYear} Myloanbuddy Financial Services Inc. All rights
            reserved. | Licensed Lender in Canada
          </p>
        </div>
      </div>
    </footer>
  );
};
