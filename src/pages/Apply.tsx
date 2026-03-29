// import { ShieldCheck, Lock, CheckCircle, Clock } from "lucide-react";
// import { useState } from "react";

// const Apply = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     province: "",
//     loanAmount: "",
//     employmentStatus: "",
//     agreeToTerms: false,
//   });

//   const handleChange = (field: string, value: any) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     alert("🎉 Your application has been submitted successfully!");
//   };

//   return (
//     <>
//       {/* HERO */}
//       <section className="pb-14 bg-gradient-to-br from-primary to-primary/80 text-white text-center px-4 pt-24">
//         <h1 className="text-4xl md:text-5xl font-bold mb-3">
//           Apply for a Loan in Minutes
//         </h1>
//         <p className="text-lg max-w-2xl mx-auto text-white/95">
//           Secure and instant approval process for Canadians. No paperwork or
//           faxing required.
//         </p>
//       </section>

//       {/* FORM SECTION */}
//       <section className="pb-20 px-4">
//         <div className="container-custom mx-auto grid md:grid-cols-2 gap-10">
//           {/* FORM CARD */}
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white p-8 rounded-2xl shadow-lg border space-y-6"
//           >
//             <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
//               Your Information
//             </h2>

//             {/* FIRST + LAST NAME */}
//             <div className="grid sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="text-sm font-medium">First Name *</label>
//                 <input
//                   type="text"
//                   required
//                   placeholder="Enter your first name"
//                   onChange={(e) => handleChange("firstName", e.target.value)}
//                   className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary"
//                 />
//               </div>
//               <div>
//                 <label className="text-sm font-medium">Last Name *</label>
//                 <input
//                   type="text"
//                   required
//                   placeholder="Enter your last name"
//                   onChange={(e) => handleChange("lastName", e.target.value)}
//                   className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary"
//                 />
//               </div>
//             </div>

//             {/* EMAIL */}
//             <div>
//               <label className="text-sm font-medium">Email *</label>
//               <input
//                 type="email"
//                 required
//                 placeholder="your.email@example.com"
//                 onChange={(e) => handleChange("email", e.target.value)}
//                 className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary"
//               />
//             </div>

//             {/* PHONE */}
//             <div>
//               <label className="text-sm font-medium">Phone Number *</label>
//               <input
//                 type="tel"
//                 required
//                 placeholder="(123) 456-7890"
//                 onChange={(e) => handleChange("phone", e.target.value)}
//                 className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary"
//               />
//             </div>

//             {/* PROVINCE */}
//             <div>
//               <label className="text-sm font-medium">Province *</label>
//               <select
//                 required
//                 onChange={(e) => handleChange("province", e.target.value)}
//                 className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl cursor-pointer focus:ring-2 focus:ring-primary"
//               >
//                 <option value="">Select province</option>
//                 {[
//                   "Alberta",
//                   "British Columbia",
//                   "Manitoba",
//                   "New Brunswick",
//                   "Newfoundland and Labrador",
//                   "Nova Scotia",
//                   "Ontario",
//                   "Prince Edward Island",
//                   "Quebec",
//                   "Saskatchewan",
//                 ].map((p) => (
//                   <option key={p}>{p}</option>
//                 ))}
//               </select>
//             </div>

//             {/* LOAN AMOUNT */}
//             <div>
//               <label className="text-sm font-medium">Loan Amount *</label>
//               <select
//                 required
//                 onChange={(e) => handleChange("loanAmount", e.target.value)}
//                 className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl cursor-pointer focus:ring-2 focus:ring-primary"
//               >
//                 <option value="">Select amount</option>
//                 {["$500", "$1000", "$1500", "$2000", "$2500", "$3000+"].map(
//                   (amt) => (
//                     <option key={amt}>{amt}</option>
//                   )
//                 )}
//               </select>
//             </div>

//             {/* EMPLOYMENT */}
//             <div>
//               <label className="text-sm font-medium">Employment Status *</label>
//               <select
//                 required
//                 onChange={(e) =>
//                   handleChange("employmentStatus", e.target.value)
//                 }
//                 className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl cursor-pointer focus:ring-2 focus:ring-primary"
//               >
//                 <option value="">Select status</option>
//                 <option value="full-time">Full-time employed</option>
//                 <option value="part-time">Part-time employed</option>
//                 <option value="benefits">Government benefits</option>
//                 <option value="disability">Disability income</option>
//                 <option value="none">Neither / Unemployed</option>
//               </select>
//             </div>

//             {/* TERMS */}
//             <div className="flex items-start gap-3">
//               <input
//                 type="checkbox"
//                 required
//                 onChange={(e) => handleChange("agreeToTerms", e.target.checked)}
//                 className="mt-1 w-5 h-5 rounded border-gray-400 text-primary"
//               />
//               <p className="text-xs text-gray-600 leading-relaxed">
//                 I agree to the{" "}
//                 <a className="text-primary underline cursor-pointer">
//                   Terms & Conditions
//                 </a>{" "}
//                 and{" "}
//                 <a className="text-primary underline cursor-pointer">
//                   Privacy Policy
//                 </a>
//                 .
//               </p>
//             </div>

//             {/* SUBMIT BUTTON */}
//             <button
//               type="submit"
//               className="btn-primary w-full py-3 text-lg rounded-xl font-semibold"
//             >
//               Submit Application →
//             </button>

//             <p className="text-xs text-center text-gray-500 mt-2">
//               🔒 SSL-secured form — your data is encrypted
//             </p>
//           </form>

//           {/* SUMMARY CARD */}
//           <div className="p-8 rounded-2xl bg-white shadow-xl border">
//             <h3 className="text-xl font-bold mb-4 text-gray-900">
//               Why Canadians Choose Us
//             </h3>

//             <ul className="space-y-4 text-gray-700">
//               {[
//                 {
//                   icon: ShieldCheck,
//                   text: "Licensed & trusted Canadian lender",
//                 },
//                 {
//                   icon: CheckCircle,
//                   text: "94% approval rate — fast decisions",
//                 },
//                 {
//                   icon: Clock,
//                   text: "Same-day funding available",
//                 },
//                 {
//                   icon: Lock,
//                   text: "Bank-level security & encryption",
//                 },
//               ].map((item, i) => (
//                 <li key={i} className="flex items-center gap-3">
//                   <item.icon className="w-6 h-6 text-primary" />
//                   {item.text}
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-6 border-t pt-4 text-sm text-gray-600">
//               Loan Range: <b>$3000 – $10,000</b>
//               <br />
//               Repayment Terms: <b>3 – 24 months</b>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Apply;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const InputField = ({ label, ...props }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-primary">{label}</label>
    <input
      {...props}
      className="px-4 py-3 rounded-xl border border-border bg-white 
      focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent 
      transition-all text-sm shadow-sm"
    />
  </div>
);

const SelectField = ({ label, children, ...props }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-primary">{label}</label>
    <select
      {...props}
      className="px-4 py-3 rounded-xl border border-border bg-white 
      focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent 
      transition-all text-sm shadow-sm"
    >
      {children}
    </select>
  </div>
);

const Apply = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    address: "",

    income: "",
    employment: "",
    employer: "",
    salaryDate: "",
    experience: "",
    incomeType: "",

    bank: "",
    accountType: "",
    accountAge: "",
    directDeposit: "",
    bankingStatus: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateStep = () => {
    for (let key in form) {
      if (
        step === 1 &&
        ["name", "email", "phone", "dob", "address"].includes(key)
      ) {
        if (!form[key as keyof typeof form]) {
          toast.error("Please fill all fields");
          return false;
        }
      }

      if (
        step === 2 &&
        [
          "income",
          "employment",
          "employer",
          "salaryDate",
          "experience",
          "incomeType",
        ].includes(key)
      ) {
        if (!form[key as keyof typeof form]) {
          toast.error("Please fill all fields");
          return false;
        }
      }

      if (
        step === 3 &&
        [
          "bank",
          "accountType",
          "accountAge",
          "directDeposit",
          "bankingStatus",
        ].includes(key)
      ) {
        if (!form[key as keyof typeof form]) {
          toast.error("Please fill all fields");
          return false;
        }
      }
    }
    return true;
  };

  const next = () => validateStep() && setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const handleSubmit = () => {
    toast.success("Application Submitted Successfully 🎉");

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <section className="pt-28 pb-20 px-4 max-w-4xl mx-auto">
      {/* HEADER */}
      <h1 className="text-3xl font-bold text-center text-primary mb-6">
        Apply for Your Loan
      </h1>

      {/* PROGRESS */}
      <div className="w-full bg-secondary h-2 rounded mb-10">
        <div
          className="bg-accent h-2 rounded transition-all"
          style={{ width: `${(step / 4) * 100}%` }}
        />
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border">
        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2 className="text-xl font-bold text-primary mb-6">
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <InputField
                label="Full Name"
                name="name"
                onChange={handleChange}
              />
              <InputField label="Email" name="email" onChange={handleChange} />
              <InputField label="Phone" name="phone" onChange={handleChange} />
              <InputField
                label="Date of Birth"
                type="date"
                name="dob"
                onChange={handleChange}
              />

              <div className="md:col-span-2">
                <InputField
                  label="Address"
                  name="address"
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              onClick={next}
              className="mt-6 w-full py-3 bg-accent text-white rounded-xl"
            >
              Next →
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h2 className="text-xl font-bold text-primary mb-6">
              Income Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <InputField
                label="Monthly Income"
                name="income"
                onChange={handleChange}
              />

              <SelectField
                label="Employment Type"
                name="employment"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Self-employed</option>
              </SelectField>

              <InputField
                label="Employer"
                name="employer"
                onChange={handleChange}
              />
              <InputField
                label="Salary Date"
                name="salaryDate"
                onChange={handleChange}
              />
              <InputField
                label="Experience"
                name="experience"
                onChange={handleChange}
              />

              <SelectField
                label="Income Type"
                name="incomeType"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Direct Deposit</option>
                <option>Cash</option>
              </SelectField>
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={back} className="w-full py-3 border rounded-xl">
                ← Back
              </button>
              <button
                onClick={next}
                className="w-full py-3 bg-accent text-white rounded-xl"
              >
                Next →
              </button>
            </div>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <h2 className="text-xl font-bold text-primary mb-6">
              Bank Information
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <InputField
                label="Bank Name"
                name="bank"
                onChange={handleChange}
              />

              <SelectField
                label="Account Type"
                name="accountType"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Checking</option>
                <option>Savings</option>
              </SelectField>

              <InputField
                label="Account Age"
                name="accountAge"
                onChange={handleChange}
              />

              <SelectField
                label="Direct Deposit"
                name="directDeposit"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
              </SelectField>

              <SelectField
                label="Bank Status"
                name="bankingStatus"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Active</option>
                <option>Inactive</option>
              </SelectField>
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={back} className="w-full py-3 border rounded-xl">
                ← Back
              </button>
              <button
                onClick={next}
                className="w-full py-3 bg-accent text-white rounded-xl"
              >
                Next →
              </button>
            </div>
          </>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <>
            <h2 className="text-xl font-bold text-primary mb-6">
              Review & Submit
            </h2>

            <div className="bg-secondary/30 rounded-xl p-5 text-sm space-y-2">
              {Object.entries(form).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b pb-1">
                  <span className="capitalize text-muted-foreground">
                    {key}
                  </span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={back} className="w-full py-3 border rounded-xl">
                ← Back
              </button>
              <button
                onClick={handleSubmit}
                className="w-full py-3 bg-accent text-white rounded-xl"
              >
                Submit 🚀
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Apply;
