import { Check, AlertCircle } from "lucide-react";

/**
 * EligibilitySection Component
 * Checklist of basic requirements
 */

const requirements = [
  "Canadian resident, 18 years or older (19+ in some provinces)",
  "Active chequing account with a Canadian financial institution",
  "Regular income deposited directly to your bank account",
  "Valid Canadian phone number",
  "Active email address",
  "Not currently in bankruptcy or under a consumer proposal",
];

export const EligibilitySection = () => {
  return (
    <section id="eligibility" className="section-padding bg-muted">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Basic eligibility requirements
            </h2>
            <p className="text-lg text-muted-foreground">
              To apply for a loan with Myloanbuddy, please ensure you meet the
              following criteria.
            </p>
          </div>

          {/* Requirements Checklist */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-card-foreground">{req}</span>
                </li>
              ))}
            </ul>

            {/* Legal Note */}
            <div className="mt-8 p-4 bg-secondary rounded-xl flex gap-3">
              <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Meeting these requirements does not guarantee loan approval. All
                applications are subject to review and verification. Loan terms
                and availability may vary by province.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
