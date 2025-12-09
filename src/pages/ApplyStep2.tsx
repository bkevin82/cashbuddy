import { Banknote, CreditCard, ChevronRight, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ApplyStep2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    employer: "",
    jobRole: "",
    incomeFrequency: "",
    nextPaydate: "",
    depositMethod: "etransfer",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/apply/step-3");
  };

  return (
    <>
      {/* HEADER */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/80 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Employment Details</h1>
        <p className="text-lg opacity-95">
          Almost there! Just a few more details 📄
        </p>
      </section>

      {/* STEP TRACKER */}
      <div className="text-center py-3 bg-secondary/30 text-sm font-medium">
        Step 2 of 3 — Employment & Deposit Info
      </div>

      {/* MAIN GRID */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT → FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg border space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Verify your source of income
            </h2>

            {[
              {
                label: "Employer Name",
                name: "employer",
                type: "text",
                placeholder: "ABC Company",
              },
              {
                label: "Job Role / Position",
                name: "jobRole",
                type: "text",
                placeholder: "Cashier / Technician / Driver",
              },
              {
                label: "Income Frequency",
                name: "incomeFrequency",
                type: "select",
                options: ["Weekly", "Bi-weekly", "Monthly"],
              },
              {
                label: "Next Pay Date",
                name: "nextPaydate",
                type: "date",
              },
            ].map((field, i) => (
              <div key={i}>
                <label className="block text-sm font-medium mb-1">
                  {field.label}
                </label>

                {field.type === "select" ? (
                  <select
                    name={field.name}
                    required
                    className="input w-full border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary"
                    onChange={handleChange}
                  >
                    <option value="">Select frequency</option>
                    {field.options?.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    required
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    className="input w-full border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary"
                  />
                )}
              </div>
            ))}

            {/* Deposit Method */}
            <div>
              <label className="block text-sm font-medium mb-1">
                How do you receive your income?
              </label>
              <div className="space-y-3">
                {[
                  {
                    id: "etransfer",
                    label: "Interac e-Transfer®",
                    icon: CreditCard,
                  },
                  {
                    id: "directdeposit",
                    label: "Direct Deposit",
                    icon: Banknote,
                  },
                ].map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center gap-3 cursor-pointer p-3 rounded-xl border ${
                      formData.depositMethod === method.id
                        ? "border-primary bg-primary/5"
                        : "border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="depositMethod"
                      value={method.id}
                      checked={formData.depositMethod === method.id}
                      onChange={handleChange}
                      className="accent-primary"
                    />
                    <method.icon className="text-primary w-5 h-5" />
                    <span className="font-medium text-gray-800">
                      {method.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-3 rounded-lg flex justify-center items-center gap-2 text-lg"
            >
              Continue to Step 3
              <ChevronRight className="w-5 h-5" />
            </button>
          </form>

          {/* RIGHT → SUMMARY */}
          <div className="bg-primary/5 border shadow-md p-8 rounded-2xl">
            <h3 className="text-xl font-black text-gray-900 mb-3">
              What’s next?
            </h3>
            <p className="text-gray-600">
              You’ll confirm your banking details so we can securely deposit
              your funds.
            </p>

            <div className="border-b my-6"></div>

            <h4 className="font-semibold mb-3">Why we ask this</h4>
            <ul className="space-y-3 text-gray-700 text-sm">
              {[
                "Verify reliable income source",
                "Prevent fraud and identity misuse",
                "Ensure faster approval & funding",
              ].map((text, i) => (
                <li key={i} className="flex gap-2 items-center">
                  {/* <CheckCircle className="text-primary w-4 h-4" /> */}
                  {text}
                </li>
              ))}
            </ul>

            <div className="border-b my-6"></div>

            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-inner">
              <ShieldCheck className="text-primary w-7 h-7" />
              <p className="text-sm text-gray-600">
                Your information is encrypted & never shared.
              </p>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              *Approval based on income + verification accuracy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplyStep2;
