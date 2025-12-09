// import {
//   Briefcase,
//   Baby,
//   FileCheck,
//   Heart,
//   Users,
//   HardHat,
// } from "lucide-react";

// /**
//  * IncomeTypesSection Component
//  * Grid showing all accepted income types
//  */

// const incomeTypes = [
//   {
//     icon: Briefcase,
//     title: "Employment Income",
//     description: "Regular salary or hourly wages from your job",
//   },
//   {
//     icon: Baby,
//     title: "Child Benefits",
//     description: "Canada Child Benefit (CCB) payments",
//   },
//   {
//     icon: FileCheck,
//     title: "Employment Insurance",
//     description: "EI benefits during job transitions",
//   },
//   {
//     icon: Heart,
//     title: "Private Disability",
//     description: "Long-term disability insurance payments",
//   },
//   {
//     icon: Users,
//     title: "CPP & Pension",
//     description: "Canada Pension Plan or private pension income",
//   },
//   {
//     icon: HardHat,
//     title: "Workers' Compensation",
//     description: "Provincial WSIB or WCB benefits",
//   },
// ];

// export const IncomeTypesSection = () => {
//   return (
//     <section className="section-padding bg-muted">
//       <div className="container-custom mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//             All kinds of income considered
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             We understand that income comes in many forms. Here are the types of
//             income we accept for loan applications.
//           </p>
//         </div>

//         {/* Income Type Cards */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {incomeTypes.map((type, index) => (
//             <div
//               key={index}
//               className="card-flat hover:shadow-card hover:-translate-y-1 transition-all duration-300 group"
//             >
//               <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
//                 <type.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
//               </div>
//               <h3 className="text-lg font-semibold text-card-foreground mb-2">
//                 {type.title}
//               </h3>
//               <p className="text-sm text-muted-foreground">
//                 {type.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import {
  Briefcase,
  Baby,
  FileCheck,
  Heart,
  Users,
  HardHat,
} from "lucide-react";

const incomeTypes = [
  {
    icon: Briefcase,
    title: "Employment Income",
    description: "Regular salary or hourly wages from your job",
    img: "/income/employment.jpg",
  },
  {
    icon: Baby,
    title: "Child Benefits",
    description: "Canada Child Benefit (CCB) payments",
    img: "/income/child-benefits.jpg",
  },
  {
    icon: FileCheck,
    title: "Employment Insurance",
    description: "EI benefits during job transitions",
    img: "/income/employment-insurance.jpg",
  },
  {
    icon: Heart,
    title: "Private Disability",
    description: "Long-term disability insurance payments",
    img: "/income/private-disability.jpg",
  },
  {
    icon: Users,
    title: "CPP & Pension",
    description: "Canada Pension Plan or private pension income",
    img: "/income/pension.jpg",
  },
  {
    icon: HardHat,
    title: "Workers' Compensation",
    description: "Provincial WSIB or WCB benefits",
    img: "/income/wcb.jpg",
  },
];

export const IncomeTypesSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-100">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            All income types are accepted
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We believe every Canadian deserves financial access — no matter the
            income source.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {incomeTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              {/* Image Banner */}
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={type.img}
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Hover Icon Container */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4
                                bg-gray-200 text-primary
                                group-hover:bg-primary group-hover:text-white
                                transition-colors duration-300"
                >
                  <type.icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {type.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* CTA Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() =>
            document
              .querySelector("#apply")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-8 py-4 bg-accent text-white font-semibold rounded-xl shadow-md hover:bg-red-600 transition-all duration-200 text-lg"
        >
          Apply Now
        </button>
      </div>
    </section>
  );
};
