import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

/**
 * Navbar Component
 * Sticky navigation with mobile hamburger menu
 * Contains logo, nav links, and CTA buttons
 */

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Eligibility", href: "#eligibility" },
  // { label: "Rates & Fees", href: "#faq" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container-custom mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-primary font-bold text-xl md:text-2xl"
            aria-label="Myloanbuddy Home"
          >
            {/* <div className="w-8 h-8 md:w-10 md:h-10 bg-accent rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 md:w-6 md:h-6 text-accent-foreground" />
            </div> */}
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center">
              <img
                src="/logo.png"
                alt="LoanBuddu logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* <span>LoanBuddy</span> */}
            <span>Myloanbuddy</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection("#apply")}
              className="text-primary font-medium hover:text-accent transition-colors"
            >
              Re-Apply
            </button>
            <button
              onClick={() => scrollToSection("#apply")}
              className="btn-primary text-sm"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => scrollToSection("#apply")}
              className="btn-primary text-sm py-2 px-4"
            >
              Apply Now
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#apply")}
                className="text-left px-4 py-3 text-accent hover:bg-muted rounded-lg transition-colors font-medium"
              >
                Re-Apply
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
