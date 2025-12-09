import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

/**
 * Navbar Component
 * Fixed navigation with mobile hamburger menu
 * Uses React Router navigation instead of section scrolling
 */

const navLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Eligibility", href: "/Eligibility" },
  // { label: "blogs", href: "/blog" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/Contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenuAndNavigate = (href: string) => {
    navigate(href);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container-custom mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          {/* <Link
            to="/"
            className="flex items-center gap-2 text-primary font-bold text-xl md:text-2xl"
            aria-label="Myloanbuddy Home"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center">
              <img
                src="/logo.png"
                alt="LoanBuddy logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span>Myloanbuddy</span>
          </Link> */}

          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Myloanbuddy Home"
          >
            <img
              src="/logo/try1.png"
              alt="MyLoanbuddy Logo"
              className="h-12 md:h-14 w-auto object-contain"
            />

            {/* <span className="text-primary font-bold text-xl md:text-2xl">
              Myloanbuddy
            </span> */}
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-xl md:text-2xl">
                <span className="text-primary">MyLoan</span>
                <span className="text-accent">Buddy</span>
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground tracking-wide">
                Trusted Loan Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-foreground/80 hover:text-primary transition-colors text-m font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/apply"
              className="text-primary font-medium hover:text-accent transition-colors"
            >
              Re-Apply
            </Link>
            <Link to="/apply" className="btn-primary text-sm">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              to="/apply"
              className="btn-primary text-sm py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </Link>

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
                  onClick={() => closeMenuAndNavigate(link.href)}
                  className="text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}

              <button
                onClick={() => closeMenuAndNavigate("/apply")}
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
export default Navbar;
