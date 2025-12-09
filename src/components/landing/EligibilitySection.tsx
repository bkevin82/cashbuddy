// import { Check, AlertCircle } from "lucide-react";

// /**
//  * EligibilitySection Component
//  * Checklist of basic requirements
//  */

// const requirements = [
//   "Canadian resident, 18 years or older (19+ in some provinces)",
//   "Active chequing account with a Canadian financial institution",
//   "Regular income deposited directly to your bank account",
//   "Valid Canadian phone number",
//   "Active email address",
//   "Not currently in bankruptcy or under a consumer proposal",
// ];

// export const EligibilitySection = () => {
//   return (
//     <section id="eligibility" className="section-padding bg-muted">
//       <div className="container-custom mx-auto">
//         <div className="max-w-3xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//               Basic eligibility requirements
//             </h2>
//             <p className="text-lg text-muted-foreground">
//               To apply for a loan with Myloanbuddy, please ensure you meet the
//               following criteria.
//             </p>
//           </div>

//           {/* Requirements Checklist */}
//           <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
//             <ul className="space-y-4">
//               {requirements.map((req, index) => (
//                 <li key={index} className="flex items-start gap-3">
//                   <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <Check className="w-4 h-4 text-green-600" />
//                   </div>
//                   <span className="text-card-foreground">{req}</span>
//                 </li>
//               ))}
//             </ul>

//             {/* Legal Note */}
//             <div className="mt-8 p-4 bg-secondary rounded-xl flex gap-3">
//               <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
//               <p className="text-sm text-muted-foreground">
//                 Meeting these requirements does not guarantee loan approval. All
//                 applications are subject to review and verification. Loan terms
//                 and availability may vary by province.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import { CheckCircle, AlertTriangle, Shield, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

const requirements = [
  "Canadian resident, 18+ (19+ in some provinces)",
  "Active chequing account with a Canadian bank",
  "Regular income deposited directly into bank account",
  "Valid government-issued ID",
  "Active phone number & email",
  "Not under bankruptcy or consumer proposal",
];

export const EligibilitySection = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-primary/10 to-white relative overflow-hidden">
      {/* Modern diagonal background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,#004d72,transparent_40%)] opacity-10"></div>

      <div className="container-custom mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Do You Qualify for Fast Online Loans?
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          These are the **minimum** requirements to apply with MyLoan
          <span className="text-accent font-bold">Buddy</span> 🇨🇦
        </p>

        {/* Requirements Box */}
        <div className="bg-white mt-14 p-10 rounded-3xl shadow-2xl border border-primary/10 hover:shadow-primary/20 transition">
          <ul className="grid md:grid-cols-2 gap-6 text-left">
            {requirements.map((item, index) => (
              <li
                key={index}
                className="flex gap-3 items-start group hover:translate-x-1 transition"
              >
                <CheckCircle className="w-6 h-6 text-green-600 group-hover:scale-110 transition" />
                <span className="text-foreground text-base font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Legal Notice */}
          <div className="flex gap-3 bg-secondary/40 mt-10 p-5 rounded-xl text-left">
            <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-sm text-muted-foreground">
              Meeting these requirements does not guarantee approval. Loan
              decisions vary based on income stability and province regulations.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
          <Link
            to="/apply"
            className="btn-primary text-lg px-10 py-4 shadow-lg hover:shadow-primary/40 transition rounded-full"
          >
            Start Application 🚀
          </Link>

          <Link
            to="/how-it-works"
            className="btn-secondary text-lg px-10 py-4 rounded-full shadow-sm hover:bg-primary/500 transition"
          >
            How It Works →
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-10 mt-12 opacity-80 text-sm">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Secure Application
          </div>
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-5 h-5 text-primary" />
            Licensed Canadian Lender
          </div>
        </div>
      </div>
    </section>
  );
};
