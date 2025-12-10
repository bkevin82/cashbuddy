// import { ShieldCheck, Lock, CheckCircle, Clock } from "lucide-react";
// import { useState } from "react";

// const Apply = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     income: "",
//     loanAmount: "",
//     paySchedule: "",
//     employmentType: "",
//     bankName: "",
//     accountType: "",
//   });

//   const handleChange = (e: any) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     alert("🎉 Application Submitted Successfully!");
//     // Later: send to backend
//   };

//   return (
//     <>
//       {/* HERO */}
//       <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/80 text-white text-center px-4">
//         <h1 className="text-4xl md:text-5xl font-bold mb-3">
//           Apply for a Loan in Minutes
//         </h1>
//         <p className="text-lg max-w-3xl mx-auto opacity-90">
//           Safe, fast & 100% online — No faxing, no paperwork, instant approval
//           decision.
//         </p>
//       </section>

//       {/* MAIN FORM */}
//       <section className="py-16 px-4">
//         <form
//           onSubmit={handleSubmit}
//           className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start"
//         >
//           {/* LEFT: FORM */}
//           <div className="bg-white p-8 rounded-2xl shadow-lg border space-y-6">
//             <h2 className="text-2xl font-bold text-gray-900">
//               Your Information
//             </h2>

//             {[
//               { label: "Full Name", name: "fullName", type: "text" },
//               { label: "Email Address", name: "email", type: "email" },
//               { label: "Phone Number", name: "phone", type: "tel" },
//               {
//                 label: "Monthly Income (Before Tax)",
//                 name: "income",
//                 type: "number",
//               },
//               {
//                 label: "Requested Loan Amount",
//                 name: "loanAmount",
//                 type: "number",
//               },
//             ].map((f, idx) => (
//               <div key={idx}>
//                 <label className="text-sm font-medium">{f.label}</label>
//                 <input
//                   type={f.type}
//                   name={f.name}
//                   required
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1 focus:ring-2 focus:ring-primary"
//                 />
//               </div>
//             ))}

//             {/* Dropdown Fields */}
//             <div>
//               <label className="text-sm font-medium">Pay Schedule</label>
//               <select
//                 name="paySchedule"
//                 required
//                 onChange={handleChange}
//                 className="w-full mt-1 px-4 py-3 border rounded-lg"
//               >
//                 <option value="">Select</option>
//                 <option value="weekly">Weekly</option>
//                 <option value="biweekly">Bi-weekly</option>
//                 <option value="monthly">Monthly</option>
//               </select>
//             </div>

//             <div>
//               <label className="text-sm font-medium">Employment Type</label>
//               <select
//                 name="employmentType"
//                 required
//                 onChange={handleChange}
//                 className="w-full mt-1 px-4 py-3 border rounded-lg"
//               >
//                 <option value="">Select</option>
//                 <option value="full-time">Full Time</option>
//                 <option value="part-time">Part Time</option>
//                 <option value="self-employed">Self-Employed</option>
//                 <option value="benefits">Government Benefits</option>
//               </select>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="btn-primary w-full py-3 text-lg rounded-lg"
//             >
//               Submit Application →
//             </button>

//             <p className="text-xs text-center text-gray-500">
//               🔒 Secure SSL Encryption – Your data is safe
//             </p>
//           </div>

//           {/* RIGHT: SUMMARY */}
//           <div className="p-8 rounded-2xl bg-primary/5 border shadow-md">
//             <h3 className="text-xl font-bold mb-4">Loan Summary</h3>

//             <div className="space-y-3 text-sm">
//               <p className="flex justify-between">
//                 <span>Loan Range:</span> <b>$3,000 – $10,000</b>
//               </p>
//               <p className="flex justify-between">
//                 <span>Interest:</span> <b>5% – 10% APR</b>
//               </p>
//               <p className="flex justify-between">
//                 <span>Repayment:</span> <b>6–60 months</b>
//               </p>
//               <p className="flex justify-between">
//                 <span>Decision:</span> <b>Same-day available</b>
//               </p>
//             </div>

//             <div className="border-b my-6"></div>

//             <h4 className="font-semibold mb-3">Trusted by Canadians</h4>
//             <div className="space-y-3">
//               {[ShieldCheck, CheckCircle, Lock, Clock].map((Icon, i) => (
//                 <div key={i} className="flex items-center gap-3">
//                   <Icon className="text-primary w-5 h-5" />
//                   <span className="text-gray-700">
//                     {
//                       [
//                         "Licensed Canadian lender",
//                         "94% approval rate",
//                         "Bank-level encryption",
//                         "Funds within hours",
//                       ][i]
//                     }
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </form>
//       </section>
//     </>
//   );
// };

// export default Apply;

import { ShieldCheck, Lock, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

const Apply = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    province: "",
    loanAmount: "",
    employmentStatus: "",
    agreeToTerms: false,
  });

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("🎉 Your application has been submitted successfully!");
  };

  return (
    <>
      {/* HERO */}
      <section className="pb-14 bg-gradient-to-br from-primary to-primary/80 text-white text-center px-4 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Apply for a Loan in Minutes
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-white/95">
          Secure and instant approval process for Canadians. No paperwork or
          faxing required.
        </p>
      </section>

      {/* FORM SECTION */}
      <section className="pb-20 px-4">
        <div className="container-custom mx-auto grid md:grid-cols-2 gap-10">
          {/* FORM CARD */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg border space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
              Your Information
            </h2>

            {/* FIRST + LAST NAME */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">First Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your first name"
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Last Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your last name"
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium">Email *</label>
              <input
                type="email"
                required
                placeholder="your.email@example.com"
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="text-sm font-medium">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="(123) 456-7890"
                onChange={(e) => handleChange("phone", e.target.value)}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* PROVINCE */}
            <div>
              <label className="text-sm font-medium">Province *</label>
              <select
                required
                onChange={(e) => handleChange("province", e.target.value)}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl cursor-pointer focus:ring-2 focus:ring-primary"
              >
                <option value="">Select province</option>
                {[
                  "Alberta",
                  "British Columbia",
                  "Manitoba",
                  "New Brunswick",
                  "Newfoundland and Labrador",
                  "Nova Scotia",
                  "Ontario",
                  "Prince Edward Island",
                  "Quebec",
                  "Saskatchewan",
                ].map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>

            {/* LOAN AMOUNT */}
            <div>
              <label className="text-sm font-medium">Loan Amount *</label>
              <select
                required
                onChange={(e) => handleChange("loanAmount", e.target.value)}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl cursor-pointer focus:ring-2 focus:ring-primary"
              >
                <option value="">Select amount</option>
                {["$500", "$1000", "$1500", "$2000", "$2500", "$3000+"].map(
                  (amt) => (
                    <option key={amt}>{amt}</option>
                  )
                )}
              </select>
            </div>

            {/* EMPLOYMENT */}
            <div>
              <label className="text-sm font-medium">Employment Status *</label>
              <select
                required
                onChange={(e) =>
                  handleChange("employmentStatus", e.target.value)
                }
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl cursor-pointer focus:ring-2 focus:ring-primary"
              >
                <option value="">Select status</option>
                <option value="full-time">Full-time employed</option>
                <option value="part-time">Part-time employed</option>
                <option value="benefits">Government benefits</option>
                <option value="disability">Disability income</option>
                <option value="none">Neither / Unemployed</option>
              </select>
            </div>

            {/* TERMS */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                required
                onChange={(e) => handleChange("agreeToTerms", e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-gray-400 text-primary"
              />
              <p className="text-xs text-gray-600 leading-relaxed">
                I agree to the{" "}
                <a className="text-primary underline cursor-pointer">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a className="text-primary underline cursor-pointer">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="btn-primary w-full py-3 text-lg rounded-xl font-semibold"
            >
              Submit Application →
            </button>

            <p className="text-xs text-center text-gray-500 mt-2">
              🔒 SSL-secured form — your data is encrypted
            </p>
          </form>

          {/* SUMMARY CARD */}
          <div className="p-8 rounded-2xl bg-white shadow-xl border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              Why Canadians Choose Us
            </h3>

            <ul className="space-y-4 text-gray-700">
              {[
                {
                  icon: ShieldCheck,
                  text: "Licensed & trusted Canadian lender",
                },
                {
                  icon: CheckCircle,
                  text: "94% approval rate — fast decisions",
                },
                {
                  icon: Clock,
                  text: "Same-day funding available",
                },
                {
                  icon: Lock,
                  text: "Bank-level security & encryption",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <item.icon className="w-6 h-6 text-primary" />
                  {item.text}
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t pt-4 text-sm text-gray-600">
              Loan Range: <b>$300 – $10,000</b>
              <br />
              Repayment Terms: <b>3 – 24 months</b>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Apply;
