const PrivacyPolicy = () => {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          How InstantFund.ca collects, uses, and protects your information
        </p>
      </section>

      {/* CONTENT */}
      <section className="section-padding container-custom max-w-5xl">
        <div className="space-y-10 text-muted-foreground leading-relaxed">
          {/* INTRO */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              1. Introduction
            </h2>
            <p>
              InstantFund.ca is committed to safeguarding your privacy. This
              Privacy Policy explains how we collect, use, store, and protect
              personal information when you access or use our website and
              services.
            </p>
          </div>

          {/* INFORMATION COLLECTED */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Personal identification details (name, email, phone number)
              </li>
              <li>Financial and employment-related information</li>
              <li>
                Technical data such as IP address, browser type, and device
                information
              </li>
              <li>Usage data related to website interactions</li>
            </ul>
          </div>

          {/* HOW USED */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              3. How We Use Your Information
            </h2>
            <p className="mb-3">Information collected may be used to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process loan inquiries and applications</li>
              <li>Verify identity and eligibility</li>
              <li>Improve website functionality and user experience</li>
              <li>Communicate updates, support, or service-related notices</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </div>

          {/* SHARING */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              4. Information Sharing
            </h2>
            <p>
              InstantFund.ca does not sell personal data. Information may be
              shared with licensed third-party lenders, service providers, or
              regulatory authorities only when necessary to provide services or
              comply with the law.
            </p>
          </div>

          {/* SECURITY */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              5. Data Security
            </h2>
            <p>
              We implement administrative, technical, and physical safeguards to
              protect personal information from unauthorized access, loss,
              misuse, or disclosure.
            </p>
          </div>

          {/* COOKIES */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              6. Cookies & Tracking Technologies
            </h2>
            <p>
              Our website may use cookies and similar technologies to enhance
              user experience, analyze traffic, and improve services. You may
              control cookie preferences through your browser settings.
            </p>
          </div>

          {/* RETENTION */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              7. Data Retention
            </h2>
            <p>
              Personal information is retained only for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy or as
              required by law.
            </p>
          </div>

          {/* USER RIGHTS */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              8. Your Rights
            </h2>
            <p className="mb-3">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access personal information we hold about you</li>
              <li>Request corrections to inaccurate data</li>
              <li>
                Request deletion of personal data, subject to legal obligations
              </li>
              <li>Withdraw consent for data processing where applicable</li>
            </ul>
          </div>

          {/* THIRD PARTY */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              9. Third-Party Links
            </h2>
            <p>
              Our website may contain links to external websites. We are not
              responsible for the privacy practices or content of third-party
              sites.
            </p>
          </div>

          {/* CHANGES */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              10. Changes to This Policy
            </h2>
            <p>
              InstantFund.ca reserves the right to update this Privacy Policy at
              any time. Continued use of the website constitutes acceptance of
              any changes.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              11. Contact Us
            </h2>
            <p>
              If you have questions or concerns regarding this Privacy Policy,
              please contact us at{" "}
              <span className="font-medium text-foreground">
                privacy@instantfund.ca
              </span>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
