// import { Link } from "react-router-dom";
// import {
//   BadgeCheck,
//   Zap,
//   FileX,
//   ThumbsUp,
//   Smartphone,
//   Headphones,
// } from "lucide-react";

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
//       "Many customers are approved and funded within hours — when timing matters.",
//   },
//   {
//     icon: FileX,
//     title: "No Faxing Required",
//     description: "Everything is done online. No paperwork, no waiting in line.",
//   },
//   {
//     icon: ThumbsUp,
//     title: "High Approval Consideration",
//     description:
//       "We look beyond traditional credit scores to support more Canadians.",
//   },
//   {
//     icon: Smartphone,
//     title: "Apply From Any Device",
//     description: "Quick application you can complete on your phone in minutes.",
//   },
//   {
//     icon: Headphones,
//     title: "Friendly Support Team",
//     description: "Our Canadian support team is here for you 7 days a week.",
//   },
// ];

// export const WhyChooseUsSection = () => {
//   return (
//     <section className="section-padding bg-white">
//       <div className="container-custom mx-auto">
//         {/* Header */}
//         <div className="text-center mb-14">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//             Why Canadians choose us
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Trusted short-term lending designed to support real-life needs.
//           </p>
//         </div>

//         {/* Feature Cards */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default group"
//             >
//               <div
//                 className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4
//                 group-hover:bg-green-600 transition-all duration-300"
//               >
//                 <feature.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
//               </div>

//               <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                 {feature.title}
//               </h3>

//               <p className="text-gray-600 leading-relaxed">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div className="text-center mt-14">
//           <Link to="/Eligibility">
//             <button className="btn-primary text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-primary/90 active:scale-95 transition">
//               Check Your Eligibility →
//             </button>
//           </Link>
//         </div>

//         {/* Trust Note */}
//         <p className="text-center text-sm text-gray-500 mt-6">
//           Licensed lender • Secure encryption • Serving all of Canada 🇨🇦
//         </p>
//       </div>
//     </section>
//   );
// };

import { Link } from "react-router-dom";

const features = [
  {
    image: "/images/fast-approval.jpg",
    title: "Fast Approval",
    description:
      "Get approved in minutes with our streamlined loan process and instant decision system.",
  },
  {
    image: "/images/no-paperwork.jpg",
    title: "No Paperwork",
    description:
      "Apply online without any documents. 100% digital and hassle-free experience.",
  },
  {
    image: "/images/security.jpg",
    title: "Secure & Safe",
    description:
      "Your data is protected with advanced encryption and secure systems.",
  },
  {
    image: "/images/feature4.jpg",
    title: "High Approval Consideration",
    description:
      "We look beyond traditional credit scores to support more Canadians.",
  },
  {
    image: "/images/feature5.jpg",
    title: "Apply From Any Device",
    description: "Quick application you can complete on your phone in minutes.",
  },
  {
    image: "/images/feature.jpg",
    title: "Friendly Support Team",
    description: "Our Canadian support team is here for you 7 days a week.",
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            Why Canadians choose us
          </h2>

          <p className="text-gray-600 mt-3">
            Designed to provide fast, secure, and reliable loan solutions.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-lg transition"
            >
              {/* IMAGE */}
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-44 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-green-700">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* LINK */}
                <p className="text-green-600 text-sm font-medium mt-4 cursor-pointer hover:underline">
                  Learn more →
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/Eligibility"
            className="bg-green-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-green-700 transition"
          >
            Check Your Eligibility →
          </Link>
        </div>

        {/* FOOT NOTE */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Licensed lender • Secure encryption • Serving all of Canada 🇨🇦
        </p>
      </div>
    </section>
  );
};
