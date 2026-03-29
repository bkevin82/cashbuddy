// import { FileText, CheckCircle, Banknote } from "lucide-react";
// import { Link } from "react-router-dom";

// const steps = [
//   {
//     icon: FileText,
//     title: "Apply Online",
//     description:
//       "Complete our secure form in just a few minutes — no documents, no waiting in line.",
//     number: "01",
//   },
//   {
//     icon: CheckCircle,
//     title: "Get Approved",
//     description:
//       "Our team reviews your application quickly. Many customers get approved in minutes.",
//     number: "02",
//   },
//   {
//     icon: Banknote,
//     title: "Receive Funds",
//     description:
//       "Approved loans are sent directly to your bank via Interac e-Transfer® or direct deposit.",
//     number: "03",
//   },
// ];

// export const HowItWorksSection = () => {
//   return (
//     <section
//       id="how-it-works"
//       className="section-padding bg-gradient-to-b from-white to-gray-100"
//     >
//       <div className="container-custom mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Simple 3-step loan process
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-3">
//             Getting approved and funded is fast and easy — from anywhere in
//             Canada 🇨🇦
//           </p>
//         </div>

//         <div className="relative">
//           {/* Connecting Line (Desktop) */}
//           <div className="hidden md:block absolute top-20 left-0 right-0 mx-auto w-3/4 border-t-2 border-dashed border-gray-300" />

//           <div className="grid md:grid-cols-3 gap-12">
//             {steps.map((step, index) => (
//               <div
//                 key={index}
//                 className="relative text-center group bg-white p-8 rounded-2xl border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
//               >
//                 {/* Number Circle */}
//                 <div className="mx-auto relative w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
//                   <step.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />

//                   <div className="absolute -bottom-2 -right-3 bg-accent text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shadow">
//                     {step.number}
//                   </div>
//                 </div>

//                 <h3 className="text-xl font-bold text-gray-900 mt-6">
//                   {step.title}
//                 </h3>

//                 <p className="text-gray-600 leading-relaxed mt-3">
//                   {step.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA BUTTON */}
//         <div className="text-center mt-14">
//           <Link
//             to="/how-it-works"
//             className="btn-primary px-8 py-4 text-lg font-medium shadow-md hover:shadow-lg transition"
//           >
//             Learn How It Works →
//           </Link>
//         </div>

//         {/* Disclaimer */}
//         <p className="text-center text-sm text-gray-500 mt-10">
//           *Funding times may vary depending on your bank.
//         </p>
//       </div>
//     </section>
//   );
// };

import { Link } from "react-router-dom";

const steps = [
  {
    image: "/images/apply.jpg", // replace with your image
    title: "Apply Online",
    description: "Fill out a quick 2-minute application. No paperwork needed.",
    number: "1",
  },
  {
    image: "/images/approved.png",
    title: "Get Approved",
    description: "Instant decision. Know your rate in minutes, not days.",
    number: "2",
  },
  {
    image: "/images/funds.png",
    title: "Get Your Funds",
    description:
      "Money deposited directly into your bank account within 24 hours.",
    number: "3",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            How It Works
          </h2>

          <p className="text-gray-600 mt-3">
            Get your loan in 3 simple and fast steps
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-lg transition"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover"
                />

                {/* NUMBER BADGE */}
                <div
                  className="absolute top-3 left-3 bg-white text-gray-900 
                w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow"
                >
                  {step.number}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-green-700">
                  {step.title}
                </h3>

                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="bg-green-600 text-white px-8 py-3 rounded-full 
            shadow-md hover:bg-green-700 transition"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </section>
  );
};
