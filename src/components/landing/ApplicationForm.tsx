// import { useState } from "react";
// import { useToast } from "@/hooks/use-toast";
// import { ChevronDown, Loader2 } from "lucide-react";

// /**
//  * ApplicationForm Component
//  * Loan application form with validation
//  */

// const provinces = [
//   "Alberta",
//   "British Columbia",
//   "Manitoba",
//   "New Brunswick",
//   "Newfoundland and Labrador",
//   "Nova Scotia",
//   "Ontario",
//   "Prince Edward Island",
//   "Quebec",
//   "Saskatchewan",
// ];

// const loanAmounts = [
//   "$100",
//   "$200",
//   "$300",
//   "$400",
//   "$500",
//   "$600",
//   "$700",
//   "$800",
//   "$900",
//   "$1,000",
//   "$1,100",
//   "$1,200",
//   "$1,300",
//   "$1,400",
//   "$1,500",
// ];

// const payFrequencies = [
//   { value: "weekly", label: "Weekly" },
//   { value: "bi-weekly", label: "Bi-weekly" },
//   { value: "semi-monthly", label: "Semi-monthly" },
//   { value: "monthly", label: "Monthly" },
// ];

// interface FormData {
//   fullName: string;
//   email: string;
//   phone: string;
//   province: string;
//   loanAmount: string;
//   payFrequency: string;
//   agreeToTerms: boolean;
// }

// interface FormErrors {
//   fullName?: string;
//   email?: string;
//   phone?: string;
//   province?: string;
//   loanAmount?: string;
//   payFrequency?: string;
//   agreeToTerms?: string;
// }

// export const ApplicationForm = () => {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState<FormData>({
//     fullName: "",
//     email: "",
//     phone: "",
//     province: "",
//     loanAmount: "",
//     payFrequency: "",
//     agreeToTerms: false,
//   });
//   const [errors, setErrors] = useState<FormErrors>({});

//   const validateForm = (): boolean => {
//     const newErrors: FormErrors = {};

//     // Full name validation
//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "Full name is required";
//     } else if (formData.fullName.trim().length < 2) {
//       newErrors.fullName = "Please enter your full name";
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email.trim()) {
//       newErrors.email = "Email address is required";
//     } else if (!emailRegex.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//     }

//     // Phone validation (Canadian format)
//     const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/;
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
//       newErrors.phone = "Please enter a valid Canadian phone number";
//     }

//     // Province validation
//     if (!formData.province) {
//       newErrors.province = "Please select your province";
//     }

//     // Loan amount validation
//     if (!formData.loanAmount) {
//       newErrors.loanAmount = "Please select a loan amount";
//     }

//     // Pay frequency validation
//     if (!formData.payFrequency) {
//       newErrors.payFrequency = "Please select your pay frequency";
//     }

//     // Terms agreement validation
//     if (!formData.agreeToTerms) {
//       newErrors.agreeToTerms = "You must agree to the terms to continue";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       toast({
//         title: "Please check your information",
//         description: "Some required fields need attention.",
//         variant: "destructive",
//       });
//       return;
//     }

//     setIsSubmitting(true);

//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 2000));

//     console.log("Form submitted:", formData);

//     toast({
//       title: "Application Received!",
//       description:
//         "Thank you for applying. We'll review your application and contact you shortly.",
//     });

//     setIsSubmitting(false);

//     // Reset form
//     setFormData({
//       fullName: "",
//       email: "",
//       phone: "",
//       province: "",
//       loanAmount: "",
//       payFrequency: "",
//       agreeToTerms: false,
//     });
//   };

//   const handleChange = (field: keyof FormData, value: string | boolean) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//     // Clear error when user starts typing
//     if (errors[field]) {
//       setErrors((prev) => ({ ...prev, [field]: undefined }));
//     }
//   };

//   return (
//     <section id="apply" className="section-padding gradient-hero">
//       <div className="container-custom mx-auto">
//         <div className="max-w-2xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-10">
//             <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
//               Start Your Application
//             </h2>
//             <p className="text-lg text-primary-foreground/80">
//               Fill out the form below to begin. It only takes a few minutes.
//             </p>
//           </div>

//           {/* Application Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="bg-card rounded-2xl p-6 md:p-8 shadow-card"
//             noValidate
//           >
//             <div className="grid gap-5">
//               {/* Full Name */}
//               <div>
//                 <label
//                   htmlFor="fullName"
//                   className="block text-sm font-medium text-card-foreground mb-2"
//                 >
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   value={formData.fullName}
//                   onChange={(e) => handleChange("fullName", e.target.value)}
//                   className={`w-full p-3 bg-muted border rounded-lg text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
//                     errors.fullName ? "border-destructive" : "border-border"
//                   }`}
//                   placeholder="Enter your full legal name"
//                   aria-describedby={
//                     errors.fullName ? "fullName-error" : undefined
//                   }
//                 />
//                 {errors.fullName && (
//                   <p
//                     id="fullName-error"
//                     className="text-sm text-destructive mt-1"
//                   >
//                     {errors.fullName}
//                   </p>
//                 )}
//               </div>

//               {/* Email */}
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-card-foreground mb-2"
//                 >
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={formData.email}
//                   onChange={(e) => handleChange("email", e.target.value)}
//                   className={`w-full p-3 bg-muted border rounded-lg text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
//                     errors.email ? "border-destructive" : "border-border"
//                   }`}
//                   placeholder="your.email@example.com"
//                   aria-describedby={errors.email ? "email-error" : undefined}
//                 />
//                 {errors.email && (
//                   <p id="email-error" className="text-sm text-destructive mt-1">
//                     {errors.email}
//                   </p>
//                 )}
//               </div>

//               {/* Phone */}
//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-card-foreground mb-2"
//                 >
//                   Phone Number *
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   value={formData.phone}
//                   onChange={(e) => handleChange("phone", e.target.value)}
//                   className={`w-full p-3 bg-muted border rounded-lg text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
//                     errors.phone ? "border-destructive" : "border-border"
//                   }`}
//                   placeholder="(123) 456-7890"
//                   aria-describedby={errors.phone ? "phone-error" : undefined}
//                 />
//                 {errors.phone && (
//                   <p id="phone-error" className="text-sm text-destructive mt-1">
//                     {errors.phone}
//                   </p>
//                 )}
//               </div>

//               {/* Province */}
//               <div>
//                 <label
//                   htmlFor="province"
//                   className="block text-sm font-medium text-card-foreground mb-2"
//                 >
//                   Province *
//                 </label>
//                 <div className="relative">
//                   <select
//                     id="province"
//                     value={formData.province}
//                     onChange={(e) => handleChange("province", e.target.value)}
//                     className={`w-full p-3 bg-muted border rounded-lg appearance-none cursor-pointer text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
//                       errors.province ? "border-destructive" : "border-border"
//                     }`}
//                     aria-describedby={
//                       errors.province ? "province-error" : undefined
//                     }
//                   >
//                     <option value="">Select your province</option>
//                     {provinces.map((p) => (
//                       <option key={p} value={p}>
//                         {p}
//                       </option>
//                     ))}
//                   </select>
//                   <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
//                 </div>
//                 {errors.province && (
//                   <p
//                     id="province-error"
//                     className="text-sm text-destructive mt-1"
//                   >
//                     {errors.province}
//                   </p>
//                 )}
//               </div>

//               {/* Loan Amount & Pay Frequency - Side by side on larger screens */}
//               <div className="grid sm:grid-cols-2 gap-5">
//                 {/* Loan Amount */}
//                 <div>
//                   <label
//                     htmlFor="loanAmount"
//                     className="block text-sm font-medium text-card-foreground mb-2"
//                   >
//                     Loan Amount *
//                   </label>
//                   <div className="relative">
//                     <select
//                       id="loanAmount"
//                       value={formData.loanAmount}
//                       onChange={(e) =>
//                         handleChange("loanAmount", e.target.value)
//                       }
//                       className={`w-full p-3 bg-muted border rounded-lg appearance-none cursor-pointer text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
//                         errors.loanAmount
//                           ? "border-destructive"
//                           : "border-border"
//                       }`}
//                       aria-describedby={
//                         errors.loanAmount ? "loanAmount-error" : undefined
//                       }
//                     >
//                       <option value="">Select amount</option>
//                       {loanAmounts.map((amount) => (
//                         <option key={amount} value={amount}>
//                           {amount}
//                         </option>
//                       ))}
//                     </select>
//                     <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
//                   </div>
//                   {errors.loanAmount && (
//                     <p
//                       id="loanAmount-error"
//                       className="text-sm text-destructive mt-1"
//                     >
//                       {errors.loanAmount}
//                     </p>
//                   )}
//                 </div>

//                 {/* Pay Frequency */}
//                 <div>
//                   <label
//                     htmlFor="payFrequency"
//                     className="block text-sm font-medium text-card-foreground mb-2"
//                   >
//                     Pay Frequency *
//                   </label>
//                   <div className="relative">
//                     <select
//                       id="payFrequency"
//                       value={formData.payFrequency}
//                       onChange={(e) =>
//                         handleChange("payFrequency", e.target.value)
//                       }
//                       className={`w-full p-3 bg-muted border rounded-lg appearance-none cursor-pointer text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
//                         errors.payFrequency
//                           ? "border-destructive"
//                           : "border-border"
//                       }`}
//                       aria-describedby={
//                         errors.payFrequency ? "payFrequency-error" : undefined
//                       }
//                     >
//                       <option value="">Select frequency</option>
//                       {payFrequencies.map((pf) => (
//                         <option key={pf.value} value={pf.value}>
//                           {pf.label}
//                         </option>
//                       ))}
//                     </select>
//                     <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
//                   </div>
//                   {errors.payFrequency && (
//                     <p
//                       id="payFrequency-error"
//                       className="text-sm text-destructive mt-1"
//                     >
//                       {errors.payFrequency}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Terms Agreement */}
//               <div className="pt-2">
//                 <label className="flex items-start gap-3 cursor-pointer group">
//                   <input
//                     type="checkbox"
//                     checked={formData.agreeToTerms}
//                     onChange={(e) =>
//                       handleChange("agreeToTerms", e.target.checked)
//                     }
//                     className="mt-1 w-5 h-5 rounded border-border text-accent focus:ring-primary cursor-pointer"
//                     aria-describedby={
//                       errors.agreeToTerms ? "agreeToTerms-error" : undefined
//                     }
//                   />
//                   <span className="text-sm text-muted-foreground group-hover:text-card-foreground transition-colors">
//                     I agree to the{" "}
//                     <a
//                       href="#"
//                       className="text-primary underline hover:no-underline"
//                     >
//                       Terms & Conditions
//                     </a>{" "}
//                     and{" "}
//                     <a
//                       href="#"
//                       className="text-primary underline hover:no-underline"
//                     >
//                       Privacy Policy
//                     </a>
//                     . I understand this application does not guarantee loan
//                     approval.
//                   </span>
//                 </label>
//                 {errors.agreeToTerms && (
//                   <p
//                     id="agreeToTerms-error"
//                     className="text-sm text-destructive mt-2 ml-8"
//                   >
//                     {errors.agreeToTerms}
//                   </p>
//                 )}
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="btn-primary w-full text-lg mt-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <Loader2 className="w-5 h-5 animate-spin" />
//                     Submitting...
//                   </>
//                 ) : (
//                   "Submit Application"
//                 )}
//               </button>
//             </div>

//             <p className="text-xs text-muted-foreground text-center mt-6">
//               Your information is encrypted and secure. We never share your data
//               with third parties for marketing purposes.
//             </p>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown, Loader2 } from "lucide-react";

const provinces = [
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
];

const loanAmounts = [
  "$3,000",
  "$3,500",
  "$4,000",
  "$4,500",
  "$5,000",
  "$5,500",
  "$6,000",
  "$6,500",
  "$7,000",
  "$7,500",
  "$8,000",
  "$8,500",
  "$9,000",
  "$9,500",
  "$10,000",
];

const employmentStatuses = [
  "Employment Income",
  "Child Tax Credit Benefits",
  "Unemployment Insurance",
  "Private Disability Insurance",
  "CPP & Private Pension",
  "Self-Employed",
  "Neither",
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  province: string;
  loanAmount: string;
  employmentStatus: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  province?: string;
  loanAmount?: string;
  employmentStatus?: string;
  agreeToTerms?: string;
}

export const ApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    province: "",
    loanAmount: "",
    employmentStatus: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "Required";
    if (!formData.lastName.trim()) newErrors.lastName = "Required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email))
      newErrors.email = "Valid email required";

    if (formData.phone.replace(/\D/g, "").length < 10)
      newErrors.phone = "Valid phone required";

    if (!formData.province) newErrors.province = "Required";
    if (!formData.loanAmount) newErrors.loanAmount = "Required";
    if (!formData.employmentStatus) newErrors.employmentStatus = "Required";
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: "Missing information",
        description: "Please correct highlighted fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 2000));

    toast({
      title: "Application received!",
      description: "We'll contact you shortly.",
    });

    setIsSubmitting(false);
  };

  return (
    <section id="apply" className="section-padding gradient-hero">
      <div className="container-custom mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">
              Start Your Application
            </h2>
            <p className="text-lg opacity-90">
              Fast approval • Secure process • 100% online
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-xl"
          >
            <div className="grid gap-5">
              {/* First + Last Name */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-gray-900">
                    First Name *
                  </label>
                  <input
                    // className={`w-full p-3 bg-white border rounded-lg text-gray-900
                    //   focus:ring-2 focus:ring-primary transition
                    //   ${
                    //     errors.firstName ? "border-red-500" : "border-gray-300"
                    //   }`}
                    className={`
  w-full 
  p-3.5 
  rounded-2xl 
  bg-gray-50 
  text-gray-900 
  placeholder:text-gray-400
  border ${errors.firstName ? "border-red-500" : "border-gray-200"}
  focus:border-primary 
  focus:ring-2 
  focus:ring-primary/30
  outline-none 
  transition-all 
  shadow-sm
`}
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                  />
                  {errors.firstName && (
                    <p className="text-xs text-red-500">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-900">
                    Last Name *
                  </label>
                  <input
                    // className={`w-full p-3 bg-white border rounded-lg text-gray-900
                    //   focus:ring-2 focus:ring-primary transition
                    //   ${
                    //     errors.lastName ? "border-red-500" : "border-gray-300"
                    //   }`}
                    className={`
  w-full 
  p-3.5 
  rounded-2xl 
  bg-gray-50 
  text-gray-900 
  placeholder:text-gray-400
  border ${errors.firstName ? "border-red-500" : "border-gray-200"}
  focus:border-primary 
  focus:ring-2 
  focus:ring-primary/30
  outline-none 
  transition-all 
  shadow-sm
`}
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                  />
                  {errors.lastName && (
                    <p className="text-xs text-red-500">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Email Address *
                </label>
                <input
                  // className={`w-full p-3 bg-white border rounded-lg text-gray-900
                  //   focus:ring-2 focus:ring-primary transition
                  //   ${errors.email ? "border-red-500" : "border-gray-300"}`}
                  className={`
  w-full 
  p-3.5 
  rounded-2xl 
  bg-gray-50 
  text-gray-900 
  placeholder:text-gray-400
  border ${errors.firstName ? "border-red-500" : "border-gray-200"}
  focus:border-primary 
  focus:ring-2 
  focus:ring-primary/30
  outline-none 
  transition-all 
  shadow-sm
`}
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Phone Number *
                </label>
                <input
                  // className={`w-full p-3 bg-white border rounded-lg text-gray-900
                  //   focus:ring-2 focus:ring-primary transition
                  //   ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                  className={`
  w-full 
  p-3.5 
  rounded-2xl 
  bg-gray-50 
  text-gray-900 
  placeholder:text-gray-400
  border ${errors.firstName ? "border-red-500" : "border-gray-200"}
  focus:border-primary 
  focus:ring-2 
  focus:ring-primary/30
  outline-none 
  transition-all 
  shadow-sm
`}
                  placeholder="(123) 456-7890"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* Province */}
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Province *
                </label>
                <select
                  // className={`w-full p-3 bg-white border rounded-lg cursor-pointer
                  //   focus:ring-2 focus:ring-primary transition
                  //   ${errors.province ? "border-red-500" : "border-gray-300"}`}
                  className={`
  w-full 
  p-3.5 
  rounded-2xl 
  bg-gray-50 
  text-gray-900 
  placeholder:text-gray-400
  border ${errors.firstName ? "border-red-500" : "border-gray-200"}
  focus:border-primary 
  focus:ring-2 
  focus:ring-primary/30
  outline-none 
  transition-all 
  shadow-sm
`}
                  value={formData.province}
                  onChange={(e) => handleChange("province", e.target.value)}
                >
                  <option value="">Select province</option>
                  {provinces.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </div>

              {/* Loan Amount */}
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Loan Amount *
                </label>
                <select
                  // className={`w-full p-3 bg-white border rounded-lg cursor-pointer
                  //   focus:ring-2 focus:ring-primary transition
                  //   ${
                  //     errors.loanAmount ? "border-red-500" : "border-gray-300"
                  //   }`}
                  className={`
  w-full 
  p-3.5 
  rounded-2xl 
  bg-gray-50 
  text-gray-900 
  placeholder:text-gray-400
  border ${errors.firstName ? "border-red-500" : "border-gray-200"}
  focus:border-primary 
  focus:ring-2 
  focus:ring-primary/30
  outline-none 
  transition-all 
  shadow-sm
`}
                  value={formData.loanAmount}
                  onChange={(e) => handleChange("loanAmount", e.target.value)}
                >
                  <option value="">Select amount</option>
                  {loanAmounts.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </div>

              {/* Employment Status */}
              <div>
                <label className="text-sm font-medium text-gray-900">
                  Employment Status *
                </label>
                <select
                  // className={`w-full p-3 bg-white border rounded-lg cursor-pointer
                  //   focus:ring-2 focus:ring-primary transition
                  //   ${
                  //     errors.employmentStatus
                  //       ? "border-red-500"
                  //       : "border-gray-300"
                  //   }`}
                  className={`
  w-full 
  p-3.5 
  rounded-2xl 
  bg-gray-50 
  text-gray-900 
  placeholder:text-gray-400
  border ${errors.firstName ? "border-red-500" : "border-gray-200"}
  focus:border-primary 
  focus:ring-2 
  focus:ring-primary/30
  outline-none 
  transition-all 
  shadow-sm
`}
                  value={formData.employmentStatus}
                  onChange={(e) =>
                    handleChange("employmentStatus", e.target.value)
                  }
                >
                  <option value="">Select status</option>
                  {employmentStatuses.map((status) => (
                    <option key={status}>{status}</option>
                  ))}
                </select>
              </div>

              {/* Agreement */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={(e) =>
                    handleChange("agreeToTerms", e.target.checked)
                  }
                  className="mt-1 w-5 h-5 border-gray-400 rounded focus:ring-primary"
                />
                <span className="text-sm text-gray-600">
                  I agree to the Terms & Conditions and Privacy Policy.
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary text-lg w-full flex items-center justify-center gap-2 py-3 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </div>

            <p className="text-xs text-center text-gray-500 mt-4">
              🔒 Your information is encrypted and secure.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
