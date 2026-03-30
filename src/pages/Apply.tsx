// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";

// const InputField = ({ label, ...props }: any) => (
//   <div className="flex flex-col gap-1">
//     <label className="text-sm font-medium text-primary">{label}</label>
//     <input
//       {...props}
//       className="px-4 py-3 rounded-xl border border-border bg-white
//       focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent
//       transition-all text-sm shadow-sm"
//     />
//   </div>
// );

// const SelectField = ({ label, children, ...props }: any) => (
//   <div className="flex flex-col gap-1">
//     <label className="text-sm font-medium text-primary">{label}</label>
//     <select
//       {...props}
//       className="px-4 py-3 rounded-xl border border-border bg-white
//       focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent
//       transition-all text-sm shadow-sm"
//     >
//       {children}
//     </select>
//   </div>
// );

// const Apply = () => {
//   const [step, setStep] = useState(1);
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     dob: "",
//     address: "",

//     income: "",
//     employment: "",
//     employer: "",
//     salaryDate: "",
//     experience: "",
//     incomeType: "",

//     bank: "",
//     accountType: "",
//     accountAge: "",
//     directDeposit: "",
//     bankingStatus: "",
//   });

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const validateStep = () => {
//     for (let key in form) {
//       if (
//         step === 1 &&
//         ["name", "email", "phone", "dob", "address"].includes(key)
//       ) {
//         if (!form[key as keyof typeof form]) {
//           toast.error("Please fill all fields");
//           return false;
//         }
//       }

//       if (
//         step === 2 &&
//         [
//           "income",
//           "employment",
//           "employer",
//           "salaryDate",
//           "experience",
//           "incomeType",
//         ].includes(key)
//       ) {
//         if (!form[key as keyof typeof form]) {
//           toast.error("Please fill all fields");
//           return false;
//         }
//       }

//       if (
//         step === 3 &&
//         [
//           "bank",
//           "accountType",
//           "accountAge",
//           "directDeposit",
//           "bankingStatus",
//         ].includes(key)
//       ) {
//         if (!form[key as keyof typeof form]) {
//           toast.error("Please fill all fields");
//           return false;
//         }
//       }
//     }
//     return true;
//   };

//   const next = () => validateStep() && setStep((s) => s + 1);
//   const back = () => setStep((s) => s - 1);

//   const handleSubmit = () => {
//     toast.success("Application Submitted Successfully 🎉");

//     setTimeout(() => {
//       navigate("/");
//     }, 2000);
//   };

//   return (
//     <section className="pt-28 pb-20 px-4 max-w-4xl mx-auto">
//       {/* HEADER */}
//       <h1 className="text-3xl font-bold text-center text-primary mb-6">
//         Apply for Your Loan
//       </h1>

//       {/* PROGRESS */}
//       <div className="w-full bg-secondary h-2 rounded mb-10">
//         <div
//           className="bg-accent h-2 rounded transition-all"
//           style={{ width: `${(step / 4) * 100}%` }}
//         />
//       </div>

//       <div className="bg-white p-8 rounded-2xl shadow-lg border">
//         {/* STEP 1 */}
//         {step === 1 && (
//           <>
//             <h2 className="text-xl font-bold text-primary mb-6">
//               Personal Information
//             </h2>

//             <div className="grid md:grid-cols-2 gap-4">
//               <InputField
//                 label="Full Name"
//                 name="name"
//                 onChange={handleChange}
//               />
//               <InputField label="Email" name="email" onChange={handleChange} />
//               <InputField label="Phone" name="phone" onChange={handleChange} />
//               <InputField
//                 label="Date of Birth"
//                 type="date"
//                 name="dob"
//                 onChange={handleChange}
//               />

//               <div className="md:col-span-2">
//                 <InputField
//                   label="Address"
//                   name="address"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <button
//               onClick={next}
//               className="mt-6 w-full py-3 bg-accent text-white rounded-xl"
//             >
//               Next →
//             </button>
//           </>
//         )}

//         {/* STEP 2 */}
//         {step === 2 && (
//           <>
//             <h2 className="text-xl font-bold text-primary mb-6">
//               Income Details
//             </h2>

//             <div className="grid md:grid-cols-2 gap-4">
//               <InputField
//                 label="Monthly Income"
//                 name="income"
//                 onChange={handleChange}
//               />

//               <SelectField
//                 label="Employment Type"
//                 name="employment"
//                 onChange={handleChange}
//               >
//                 <option value="">Select</option>
//                 <option>Full-time</option>
//                 <option>Part-time</option>
//                 <option>Self-employed</option>
//               </SelectField>

//               <InputField
//                 label="Employer"
//                 name="employer"
//                 onChange={handleChange}
//               />
//               <InputField
//                 label="Salary Date"
//                 name="salaryDate"
//                 onChange={handleChange}
//               />
//               <InputField
//                 label="Experience"
//                 name="experience"
//                 onChange={handleChange}
//               />

//               <SelectField
//                 label="Income Type"
//                 name="incomeType"
//                 onChange={handleChange}
//               >
//                 <option value="">Select</option>
//                 <option>Direct Deposit</option>
//                 <option>Cash</option>
//               </SelectField>
//             </div>

//             <div className="flex gap-3 mt-6">
//               <button onClick={back} className="w-full py-3 border rounded-xl">
//                 ← Back
//               </button>
//               <button
//                 onClick={next}
//                 className="w-full py-3 bg-accent text-white rounded-xl"
//               >
//                 Next →
//               </button>
//             </div>
//           </>
//         )}

//         {/* STEP 3 */}
//         {step === 3 && (
//           <>
//             <h2 className="text-xl font-bold text-primary mb-6">
//               Bank Information
//             </h2>

//             <div className="grid md:grid-cols-2 gap-4">
//               <InputField
//                 label="Bank Name"
//                 name="bank"
//                 onChange={handleChange}
//               />

//               <SelectField
//                 label="Account Type"
//                 name="accountType"
//                 onChange={handleChange}
//               >
//                 <option value="">Select</option>
//                 <option>Checking</option>
//                 <option>Savings</option>
//               </SelectField>

//               <InputField
//                 label="Account Age"
//                 name="accountAge"
//                 onChange={handleChange}
//               />

//               <SelectField
//                 label="Direct Deposit"
//                 name="directDeposit"
//                 onChange={handleChange}
//               >
//                 <option value="">Select</option>
//                 <option>Yes</option>
//                 <option>No</option>
//               </SelectField>

//               <SelectField
//                 label="Bank Status"
//                 name="bankingStatus"
//                 onChange={handleChange}
//               >
//                 <option value="">Select</option>
//                 <option>Active</option>
//                 <option>Inactive</option>
//               </SelectField>
//             </div>

//             <div className="flex gap-3 mt-6">
//               <button onClick={back} className="w-full py-3 border rounded-xl">
//                 ← Back
//               </button>
//               <button
//                 onClick={next}
//                 className="w-full py-3 bg-accent text-white rounded-xl"
//               >
//                 Next →
//               </button>
//             </div>
//           </>
//         )}

//         {/* STEP 4 */}
//         {step === 4 && (
//           <>
//             <h2 className="text-xl font-bold text-primary mb-6">
//               Review & Submit
//             </h2>

//             <div className="bg-secondary/30 rounded-xl p-5 text-sm space-y-2">
//               {Object.entries(form).map(([key, value]) => (
//                 <div key={key} className="flex justify-between border-b pb-1">
//                   <span className="capitalize text-muted-foreground">
//                     {key}
//                   </span>
//                   <span className="font-medium">{value}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="flex gap-3 mt-6">
//               <button onClick={back} className="w-full py-3 border rounded-xl">
//                 ← Back
//               </button>
//               <button
//                 onClick={handleSubmit}
//                 className="w-full py-3 bg-accent text-white rounded-xl"
//               >
//                 Submit 🚀
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Apply;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const InputField = ({ label, ...props }: any) => (
  <div className="flex flex-col gap-1 w-full">
    <label className="text-sm font-medium text-primary">{label}</label>
    <input
      {...props}
      className="w-full px-4 py-3 rounded-xl border border-border bg-white 
      focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent 
      transition-all text-sm shadow-sm appearance-none"
    />
  </div>
);

const SelectField = ({ label, children, ...props }: any) => (
  <div className="flex flex-col gap-1 w-full">
    <label className="text-sm font-medium text-primary">{label}</label>
    <select
      {...props}
      className="w-full px-4 py-3 rounded-xl border border-border bg-white 
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
      <h1 className="text-3xl font-bold text-center text-primary mb-6">
        Apply for Your Loan
      </h1>

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

              {/* ✅ FIXED DOB FIELD */}
              {/* <InputField
                label="Date of Birth"
                type="date"
                name="dob"
                onChange={handleChange}
              /> */}
              <InputField
                label="Date of Birth"
                type="text"
                placeholder="Select Date"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
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
