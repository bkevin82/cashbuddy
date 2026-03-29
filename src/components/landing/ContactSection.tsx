// import { Phone, Mail, Clock, AlertTriangle } from "lucide-react";

// /**
//  * ContactSection Component
//  * Contact information and support hours
//  */

// export const ContactSection = () => {
//   return (
//     <section id="contact" className="section-padding bg-muted">
//       <div className="container-custom mx-auto">
//         <div className="max-w-4xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//               Need help? We're here for you
//             </h2>
//             <p className="text-lg text-muted-foreground">
//               Our friendly Canadian support team is ready to assist you with any
//               questions.
//             </p>
//           </div>

//           {/* Contact Cards */}
//           <div className="grid md:grid-cols-3 gap-6 mb-10">
//             {/* Phone */}
//             <div className="card-flat text-center">
//               <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <Phone className="w-7 h-7 text-primary" />
//               </div>
//               <h3 className="font-semibold text-card-foreground mb-2">
//                 Call Us
//               </h3>
//               <a
//                 href="tel:1-800-555-0123"
//                 className="text-accent hover:underline font-medium"
//               >
//                 1-800-555-0123
//               </a>
//               <p className="text-sm text-muted-foreground mt-1">
//                 Toll-free across Canada
//               </p>
//             </div>

//             {/* Email */}
//             <div className="card-flat text-center">
//               <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <Mail className="w-7 h-7 text-primary" />
//               </div>
//               <h3 className="font-semibold text-card-foreground mb-2">
//                 Email Us
//               </h3>
//               <a
//                 href="mailto:support@Myloanbuddy.ca"
//                 className="text-accent hover:underline font-medium"
//               >
//                 support@Myloanbuddy.ca
//               </a>
//               <p className="text-sm text-muted-foreground mt-1">
//                 We respond within 24 hours
//               </p>
//             </div>

//             {/* Hours */}
//             <div className="card-flat text-center">
//               <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <Clock className="w-7 h-7 text-primary" />
//               </div>
//               <h3 className="font-semibold text-card-foreground mb-2">
//                 Support Hours
//               </h3>
//               <p className="text-card-foreground font-medium">
//                 Mon–Fri: 8am–8pm ET
//               </p>
//               <p className="text-sm text-muted-foreground mt-1">
//                 Sat–Sun: 10am–6pm ET
//               </p>
//             </div>
//           </div>

//           {/* Emergency Note */}
//           <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-4">
//             <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
//               <AlertTriangle className="w-5 h-5 text-yellow-600" />
//             </div>
//             <div>
//               <h4 className="font-semibold text-card-foreground mb-1">
//                 In a financial emergency?
//               </h4>
//               <p className="text-sm text-muted-foreground">
//                 If you're experiencing a financial crisis, please consider
//                 reaching out to local support services. In Canada, you can
//                 contact the{" "}
//                 <a
//                   href="#"
//                   className="text-primary underline hover:no-underline"
//                 >
//                   Financial Consumer Agency of Canada
//                 </a>{" "}
//                 or provincial debt helplines for free, confidential assistance.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import { Phone, Mail, Clock, MapPin, ShieldCheck } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-primary mb-3">
            We’re Here to Help You Anytime
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our support team provides friendly assistance with applications,
            repayments, and account questions.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <div className="text-center bg-secondary/30 p-6 rounded-xl shadow-sm border hover:shadow-md transition">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-1">Phone Support</h3>
            <a
              href="tel:+14375620558"
              className="text-accent font-semibold hover:underline"
            >
              (705) 408-4763
            </a>
            <br />
            <a
              href="tel:+18005550123"
              className="text-accent font-semibold hover:underline"
            >
              (800) 555-0123
            </a>

            <p className="text-sm text-muted-foreground mt-1">
              Toll-free across Canada
            </p>
          </div>

          {/* Email */}
          <div className="text-center bg-secondary/30 p-6 rounded-xl shadow-sm border hover:shadow-md transition">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-1">Email Support</h3>
            <a
              href="mailto:support@myloanbuddy.ca"
              className="text-accent font-semibold hover:underline"
            >
              {/* support@myloanbuddy.ca */}
              support@Cashbuddy.ca
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              We respond within 1–3 hours
            </p>
          </div>

          {/* Address */}
          <div className="text-center bg-secondary/30 p-6 rounded-xl shadow-sm border hover:shadow-md transition">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-1">Office Location</h3>
            <p className="text-muted-foreground">
              19 Queen St W,
              <br /> Toronto, ON M5H 3W4 🇨🇦
            </p>
          </div>
        </div>

        {/* Business Hours */}
        <div className="text-center mb-16">
          <Clock className="w-10 h-10 mx-auto text-primary mb-3" />
          <h3 className="font-bold text-lg">Business Hours</h3>
          <p className="text-muted-foreground text-sm">
            Monday – Friday: 9:00 AM – 7:00 PM EST
            <br />
            Saturday: 10:00 AM – 4:00 PM EST
            <br />
            Sunday: Closed
          </p>
        </div>

        {/* Security Compliance */}
        <div className="bg-primary/10 p-6 rounded-xl border shadow-sm text-center mb-16">
          <ShieldCheck className="w-8 h-8 mx-auto text-primary mb-2" />
          <p className="font-medium text-primary">
            Licensed & Regulated Canadian Lender — License #349145
          </p>
        </div>

        {/* Loan Disclosures */}
        <div className="bg-secondary/40 p-6 rounded-xl shadow-sm border text-sm text-muted-foreground leading-relaxed">
          <h4 className="font-semibold text-foreground mb-2">
            About Our Loans
          </h4>

          <p className="mb-3">
            We provide personal loans up to $10,000 with interest rates from 5%
            to 10% APR depending on credit score, loan amount, and repayment
            term (6–60 months).
          </p>

          <p className="italic mb-3">
            Example: A $5,000 loan for 36 months at 9.99% APR results in
            $179/month payments for a total repayment of $6,444 (includes $1,444
            interest).
          </p>

          <p>
            Eligibility requirements include a Canadian bank account, valid
            government ID, and consistent direct-deposit income.
          </p>
        </div>

        {/* Bottom Note */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          © 2026 Cashbuddy Canada • All Rights Reserved • www.Cashbuddy.ca
        </p>
      </div>
    </section>
  );
};
