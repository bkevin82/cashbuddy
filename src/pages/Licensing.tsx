const Licensing = () => {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Licensing & Compliance
        </h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Regulatory information and compliance standards for Cashbuddy.ca
        </p>
      </section>

      {/* CONTENT */}
      <section className="section-padding container-custom max-w-5xl">
        <div className="space-y-10 text-muted-foreground leading-relaxed">
          {/* OVERVIEW */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              1. Regulatory Overview
            </h2>
            <p>
              Cashbuddy.ca operates in accordance with applicable Canadian
              federal and provincial consumer protection and lending
              regulations. Licensing requirements and loan terms may vary by
              province or territory.
            </p>
          </div>

          {/* PROVINCIAL */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              2. Provincial Licensing
            </h2>
            <p>
              Short-term and payday lending in Canada is regulated at the
              provincial level. Cashbuddy.ca works only with lenders that are
              properly licensed or registered in the provinces where services
              are offered.
            </p>
          </div>

          {/* ROLE */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              3. Role of Cashbuddy.ca
            </h2>
            <p>
              Cashbuddy.ca functions as a digital platform that facilitates loan
              inquiries and provides informational services. We do not issue
              loans directly unless explicitly stated. Loan agreements are
              entered into between users and third-party lenders.
            </p>
          </div>

          {/* COMPLIANCE */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              4. Compliance Standards
            </h2>
            <p>
              All partner lenders are expected to comply with applicable laws,
              including disclosure requirements, interest rate caps, and
              consumer rights protections under Canadian law.
            </p>
          </div>

          {/* DISCLAIMER */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              5. Disclaimer
            </h2>
            <p>
              Licensing information provided on this page is for general
              informational purposes only and does not constitute legal advice.
              Users are encouraged to verify licensing details directly with
              provincial regulators.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              6. Contact Information
            </h2>
            <p>
              For questions related to licensing or regulatory compliance,
              please contact us at{" "}
              <span className="font-medium text-foreground">
                compliance@Cashbuddy.ca
              </span>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Licensing;
