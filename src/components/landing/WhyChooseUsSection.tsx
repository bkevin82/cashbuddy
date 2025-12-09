// import {
//   BadgeCheck,
//   Zap,
//   FileX,
//   ThumbsUp,
//   Smartphone,
//   Headphones,
// } from "lucide-react";

// /**
//  * WhyChooseUsSection Component
//  * Value proposition cards with hover effects
//  */

// const features = [
//   {
//     icon: BadgeCheck,
//     title: "Licensed Canadian Lender",
//     description:
//       "Fully licensed and compliant with provincial lending regulations across Canada.",
//   },
//   {
//     icon: Zap,
//     title: "Fast Same-Day Funding",
//     description:
//       "Get your money when you need it. Many applications approved and funded same day.",
//   },
//   {
//     icon: FileX,
//     title: "No Faxing Required",
//     description:
//       "Everything is done online. No paperwork, no printing, no hassle.",
//   },
//   {
//     icon: ThumbsUp,
//     title: "High Approval Consideration",
//     description:
//       "We look beyond credit scores and consider your overall financial situation.",
//   },
//   {
//     icon: Smartphone,
//     title: "Simple Online Application",
//     description:
//       "Our application takes just minutes to complete from any device.",
//   },
//   {
//     icon: Headphones,
//     title: "Friendly Support Team",
//     description:
//       "Our Canadian support team is here to help you every step of the way.",
//   },
// ];

// export const WhyChooseUsSection = () => {
//   return (
//     <section className="section-padding bg-background">
//       <div className="container-custom mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//             Why Canadians choose us for payday loans
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             We're committed to providing fast, transparent, and responsible
//             lending services.
//           </p>
//         </div>

//         {/* Feature Cards */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {features.map((feature, index) => (
//             <div key={index} className="card-elevated group cursor-default">
//               <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
//                 <feature.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
//               </div>
//               <h3 className="text-lg font-semibold text-card-foreground mb-2">
//                 {feature.title}
//               </h3>
//               <p className="text-muted-foreground leading-relaxed">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import { Link } from "react-router-dom";
import {
  BadgeCheck,
  Zap,
  FileX,
  ThumbsUp,
  Smartphone,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Licensed Canadian Lender",
    description:
      "Fully licensed and compliant with provincial lending regulations across Canada.",
  },
  {
    icon: Zap,
    title: "Fast Same-Day Funding",
    description:
      "Many customers are approved and funded within hours — when timing matters.",
  },
  {
    icon: FileX,
    title: "No Faxing Required",
    description: "Everything is done online. No paperwork, no waiting in line.",
  },
  {
    icon: ThumbsUp,
    title: "High Approval Consideration",
    description:
      "We look beyond traditional credit scores to support more Canadians.",
  },
  {
    icon: Smartphone,
    title: "Apply From Any Device",
    description: "Quick application you can complete on your phone in minutes.",
  },
  {
    icon: Headphones,
    title: "Friendly Support Team",
    description: "Our Canadian support team is here for you 7 days a week.",
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Why Canadians choose us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted short-term lending designed to support real-life needs.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default group"
            >
              <div
                className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4 
                group-hover:bg-red-600 transition-all duration-300"
              >
                <feature.icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-14">
          <Link to="/Eligibility">
            <button className="bg-primary text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-primary/90 active:scale-95 transition">
              Check Your Eligibility →
            </button>
          </Link>
        </div>

        {/* Trust Note */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Licensed lender • Secure encryption • Serving all of Canada 🇨🇦
        </p>
      </div>
    </section>
  );
};
