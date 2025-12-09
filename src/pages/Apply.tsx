// import { ShieldCheck, Lock, CheckCircle, Clock } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const Apply = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     income: "",
//   });

//   const handleChange = (e: any) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <>
//       {/* HERO */}
//       <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/80 text-white text-center px-4">
//         <h1 className="text-4xl md:text-5xl font-bold mb-3">
//           Fast & Secure Loan Application
//         </h1>
//         <p className="text-lg max-w-3xl mx-auto opacity-95">
//           Get approved today and receive money within hours — anywhere in Canada
//           🇨🇦
//         </p>
//       </section>

//       {/* STEP TRACKER */}
//       <div className="text-center py-3 bg-secondary/30 font-medium text-sm">
//         Step 1 of 3 — Basic Information
//       </div>

//       {/* MAIN */}
//       <section className="py-16 px-4">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
//           {/* FORM SIDE */}
//           <form className="bg-white p-8 rounded-2xl shadow-lg border space-y-6">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">
//               Start your secure application
//             </h2>

//             {[
//               {
//                 label: "Full Name",
//                 name: "fullName",
//                 type: "text",
//                 placeholder: "John Smith",
//               },
//               {
//                 label: "Email Address",
//                 name: "email",
//                 type: "email",
//                 placeholder: "you@example.com",
//               },
//               {
//                 label: "Phone Number",
//                 name: "phone",
//                 type: "tel",
//                 placeholder: "(123) 456-7890",
//               },
//               {
//                 label: "Monthly Income (Before Tax)",
//                 name: "income",
//                 type: "number",
//                 placeholder: "Example: 2500",
//               },
//             ].map((field, i) => (
//               <div key={i}>
//                 <label className="block text-sm font-medium mb-1">
//                   {field.label}
//                 </label>
//                 <input
//                   type={field.type}
//                   name={field.name}
//                   required
//                   placeholder={field.placeholder}
//                   value={formData[field.name as keyof typeof formData]}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary"
//                 />
//               </div>
//             ))}

//             {/* Continue Button */}
//             <button
//               type="button"
//               className="btn-primary w-full py-3 text-lg rounded-lg"
//               onClick={() => navigate("/apply/step-2")}
//             >
//               Continue to Step 2 →
//             </button>

//             <p className="text-xs text-center text-gray-500 mt-2">
//               🔒 Secure 256-bit encrypted application process
//             </p>
//           </form>

//           {/* SUMMARY SIDE */}
//           <div className="p-8 rounded-2xl bg-primary/5 border shadow-md">
//             <h3 className="text-xl font-bold text-gray-900 mb-4">
//               Loan Summary (Preview)
//             </h3>

//             <div className="space-y-4 text-sm">
//               <p className="flex justify-between">
//                 <span>Loan Amount:</span> <b>Up to $10,000</b>
//               </p>
//               <p className="flex justify-between">
//                 <span>Interest Rate:</span> <b>5% – 10% APR</b>
//               </p>
//               <p className="flex justify-between">
//                 <span>Repayment:</span> <b>6–60 months</b>
//               </p>
//               <p className="flex justify-between">
//                 <span>Approx Monthly Payment:</span> <b>$175 – $320</b>
//               </p>
//             </div>

//             <div className="border-b my-6"></div>

//             <h4 className="text-lg font-semibold text-gray-900 mb-3">
//               Why Canadians trust us
//             </h4>

//             <div className="space-y-4">
//               {[
//                 { icon: ShieldCheck, text: "Licensed Canadian lender" },
//                 { icon: CheckCircle, text: "94% approval rate" },
//                 { icon: Clock, text: "Same-day funding available" },
//                 { icon: Lock, text: "Bank-grade security" },
//               ].map((item, i) => (
//                 <div key={i} className="flex items-center gap-3">
//                   <item.icon className="text-primary w-5 h-5" />
//                   <span className="text-gray-700">{item.text}</span>
//                 </div>
//               ))}
//             </div>

//             <p className="text-xs text-gray-500 mt-6">
//               *Approval depends on income & verification checks.
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Apply;

import { ShieldCheck, Lock, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

const Apply = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    income: "",
    loanAmount: "",
    paySchedule: "",
    employmentType: "",
    bankName: "",
    accountType: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("🎉 Application Submitted Successfully!");
    // Later: send to backend
  };

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/80 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Apply for a Loan in Minutes
        </h1>
        <p className="text-lg max-w-3xl mx-auto opacity-90">
          Safe, fast & 100% online — No faxing, no paperwork, instant approval
          decision.
        </p>
      </section>

      {/* MAIN FORM */}
      <section className="py-16 px-4">
        <form
          onSubmit={handleSubmit}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start"
        >
          {/* LEFT: FORM */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Your Information
            </h2>

            {[
              { label: "Full Name", name: "fullName", type: "text" },
              { label: "Email Address", name: "email", type: "email" },
              { label: "Phone Number", name: "phone", type: "tel" },
              {
                label: "Monthly Income (Before Tax)",
                name: "income",
                type: "number",
              },
              {
                label: "Requested Loan Amount",
                name: "loanAmount",
                type: "number",
              },
            ].map((f, idx) => (
              <div key={idx}>
                <label className="text-sm font-medium">{f.label}</label>
                <input
                  type={f.type}
                  name={f.name}
                  required
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1 focus:ring-2 focus:ring-primary"
                />
              </div>
            ))}

            {/* Dropdown Fields */}
            <div>
              <label className="text-sm font-medium">Pay Schedule</label>
              <select
                name="paySchedule"
                required
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 border rounded-lg"
              >
                <option value="">Select</option>
                <option value="weekly">Weekly</option>
                <option value="biweekly">Bi-weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Employment Type</label>
              <select
                name="employmentType"
                required
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 border rounded-lg"
              >
                <option value="">Select</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="self-employed">Self-Employed</option>
                <option value="benefits">Government Benefits</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-primary w-full py-3 text-lg rounded-lg"
            >
              Submit Application →
            </button>

            <p className="text-xs text-center text-gray-500">
              🔒 Secure SSL Encryption – Your data is safe
            </p>
          </div>

          {/* RIGHT: SUMMARY */}
          <div className="p-8 rounded-2xl bg-primary/5 border shadow-md">
            <h3 className="text-xl font-bold mb-4">Loan Summary</h3>

            <div className="space-y-3 text-sm">
              <p className="flex justify-between">
                <span>Loan Range:</span> <b>$3,000 – $10,000</b>
              </p>
              <p className="flex justify-between">
                <span>Interest:</span> <b>5% – 10% APR</b>
              </p>
              <p className="flex justify-between">
                <span>Repayment:</span> <b>6–60 months</b>
              </p>
              <p className="flex justify-between">
                <span>Decision:</span> <b>Same-day available</b>
              </p>
            </div>

            <div className="border-b my-6"></div>

            <h4 className="font-semibold mb-3">Trusted by Canadians</h4>
            <div className="space-y-3">
              {[ShieldCheck, CheckCircle, Lock, Clock].map((Icon, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Icon className="text-primary w-5 h-5" />
                  <span className="text-gray-700">
                    {
                      [
                        "Licensed Canadian lender",
                        "94% approval rate",
                        "Bank-level encryption",
                        "Funds within hours",
                      ][i]
                    }
                  </span>
                </div>
              ))}
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Apply;
