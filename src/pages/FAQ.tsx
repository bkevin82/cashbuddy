// import { useState } from "react";
// import { ChevronDown, HelpCircle, Mail, Phone } from "lucide-react";

// const faqList = [
//   {
//     q: "How fast can I receive my loan?",
//     a: "Most customers receive funds the same day once approved — often within minutes using Interac e-Transfer®. Timing may vary depending on your bank’s processing hours.",
//   },
//   {
//     q: "Do I need good credit to be approved?",
//     a: "No. We consider all credit types. Approval is based more on income stability than credit score.",
//   },
//   {
//     q: "How much can I borrow?",
//     a: "Clients can apply for loan amounts between $3,000 and $10,000 depending on eligibility.",
//   },
//   {
//     q: "What income types are accepted?",
//     a: "We accept employment income, child benefits (CCB), private disability, pensions, Workers’ Compensation, and more.",
//   },
//   {
//     q: "Are there any hidden fees?",
//     a: "No, all fees are clearly displayed in your loan terms before you sign. Transparency is a core principle of MyLoanBuddy.",
//   },
//   {
//     q: "What if I miss a repayment?",
//     a: "Simply contact our support team in advance and we will help you with alternative solutions.",
//   },
// ];

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   return (
//     <>
//       {/* HERO */}
//       <section className="pt-32 pb-20 bg-gradient-to-br from-primary/90 to-primary text-primary-foreground text-center px-4 shadow-xl">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           Frequently Asked Questions
//         </h1>
//         <p className="text-lg max-w-2xl mx-auto opacity-90">
//           Everything you need to know before applying.
//         </p>
//       </section>

//       {/* FAQ ACCORDION */}
//       <section className="py-20 container-custom mx-auto px-4">
//         <div className="max-w-3xl mx-auto space-y-4">
//           {faqList.map((item, index) => {
//             const isOpen = openIndex === index;
//             return (
//               <div
//                 key={index}
//                 className="bg-card border rounded-xl shadow-sm transition-all"
//               >
//                 <button
//                   className="w-full flex justify-between items-center px-6 py-5 text-left"
//                   onClick={() => setOpenIndex(isOpen ? null : index)}
//                 >
//                   <span className="text-lg font-semibold text-primary">
//                     {item.q}
//                   </span>
//                   <ChevronDown
//                     className={`w-6 h-6 transition-transform ${
//                       isOpen
//                         ? "rotate-180 text-accent"
//                         : "text-muted-foreground"
//                     }`}
//                   />
//                 </button>

//                 <div
//                   className={`px-6 overflow-hidden transition-all duration-300 ${
//                     isOpen ? "max-h-52 pb-5" : "max-h-0"
//                   }`}
//                 >
//                   <p className="text-muted-foreground text-sm">{item.a}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* SUPPORT CTA */}
//       <section className="py-20 bg-secondary text-center">
//         <h2 className="text-3xl font-bold text-primary mb-4">
//           Still need help?
//         </h2>
//         <p className="text-muted-foreground mb-8">
//           Our friendly team is here to assist you 7 days a week.
//         </p>

//         <div className="flex flex-col md:flex-row gap-4 justify-center">
//           <a
//             href="mailto:support@myloanbuddy.ca"
//             className="btn-primary flex items-center gap-2"
//           >
//             <Mail className="w-5 h-5" />
//             Email Support
//           </a>

//           <a
//             href="tel:+11234567890"
//             className="btn-secondary flex items-center gap-2"
//           >
//             <Phone className="w-5 h-5" />
//             Call Us
//           </a>
//         </div>
//       </section>
//     </>
//   );
// };

// export default FAQ;

import { useMemo, useState } from "react";
import { ChevronDown, Search, Mail, Phone } from "lucide-react";

const categories = [
  "All",
  "Loans",
  "Approval",
  "Eligibility",
  "Repayment",
  "Fees",
  "Security",
  "General",
];

type FAQItem = {
  q: string;
  a: string;
  category: (typeof categories)[number];
};

const faqItems: FAQItem[] = [
  // GENERAL
  {
    q: "What is Cashbuddy?",
    a: "Cashbuddy is an online lending platform that helps Canadians access short-term funds quickly and securely through a fully digital application process.",
    category: "General",
  },
  {
    q: "Who can use Cashbuddy?",
    a: "Any Canadian resident who meets our basic eligibility criteria, such as age, income and having an active bank account, can apply for a loan.",
    category: "General",
  },
  {
    q: "Is Cashbuddy available across Canada?",
    a: "Yes, Cashbuddy serves borrowers across Canada, following all applicable provincial lending regulations.",
    category: "General",
  },
  {
    q: "Do I need to visit a branch to apply?",
    a: "No. Our process is 100% online. You can apply using your phone, tablet or computer from anywhere in Canada.",
    category: "General",
  },
  {
    q: "Can I talk to a real person if I have questions?",
    a: "Yes. Our support team is available by email and phone to answer any questions before or after you apply.",
    category: "General",
  },

  // LOANS
  {
    q: "How fast can I receive my loan?",
    a: "Most approved customers receive funds the same day, often within a few hours. Exact timing depends on your bank’s processing times.",
    category: "Loans",
  },
  {
    q: "How much money can I borrow?",
    a: "You can typically apply for loan amounts between $3,000 and $10,000, depending on your income, banking history and provincial rules.",
    category: "Loans",
  },
  {
    q: "Are the loans short-term or long-term?",
    a: "We focus on short-term loans designed to cover urgent or unexpected expenses, with clear due dates and repayment schedules.",
    category: "Loans",
  },
  {
    q: "Can I have more than one active loan at a time?",
    a: "In most cases, only one active loan is allowed at a time so that repayments remain manageable and responsible.",
    category: "Loans",
  },
  {
    q: "What can I use the loan for?",
    a: "You can use the funds for urgent needs such as car repairs, bill payments, medical expenses or unexpected household costs.",
    category: "Loans",
  },
  {
    q: "Are there restrictions on how I use the loan?",
    a: "We do not allow loan proceeds to be used for illegal activities or speculative investments such as gambling.",
    category: "Loans",
  },
  {
    q: "Can I choose my repayment date?",
    a: "Your repayment schedule is usually aligned with your pay dates to make repayment easier and more predictable.",
    category: "Loans",
  },

  // APPROVAL
  {
    q: "Do I need good credit to be approved?",
    a: "No. Many approved borrowers have fair or lower credit scores. We focus more on your income stability and banking history than your credit score alone.",
    category: "Approval",
  },
  {
    q: "How is my application evaluated?",
    a: "We review your income, employment or benefit stability, banking history, existing obligations and overall ability to repay safely.",
    category: "Approval",
  },
  {
    q: "Will you run a credit check?",
    a: "A credit check may be performed, but it is only one part of the decision. Having past credit issues does not automatically mean you will be declined.",
    category: "Approval",
  },
  {
    q: "How long does it take to get a decision?",
    a: "Most applications receive a decision within minutes during business hours, as long as the information is complete and verifiable.",
    category: "Approval",
  },
  {
    q: "Can I apply again if I am declined?",
    a: "Yes. You may reapply after a reasonable period, especially if your income or financial situation has improved.",
    category: "Approval",
  },
  {
    q: "Can I cancel my application before accepting the loan?",
    a: "Yes. You are under no obligation until you review and accept your loan agreement.",
    category: "Approval",
  },

  // ELIGIBILITY
  {
    q: "What is the minimum age to apply?",
    a: "You must be at least 18 years old or the age of majority in your province or territory.",
    category: "Eligibility",
  },
  {
    q: "Do I need to be a Canadian citizen?",
    a: "You must be a Canadian citizen or permanent resident with valid identification and a Canadian bank account.",
    category: "Eligibility",
  },
  {
    q: "What types of income do you accept?",
    a: "We accept many forms of income including employment, self-employment, pensions, Child Tax Benefits (CCB), disability benefits and some government benefits.",
    category: "Eligibility",
  },
  {
    q: "Do I need to be employed full-time?",
    a: "No. Part-time, contract and gig workers may also qualify if their income is stable and meets our minimum requirements.",
    category: "Eligibility",
  },
  {
    q: "Do I need a Canadian bank account?",
    a: "Yes. You must have an active Canadian bank account that has been open for a minimum period, typically at least 90 days.",
    category: "Eligibility",
  },
  {
    q: "Can I apply if I am currently in bankruptcy?",
    a: "If you are currently in bankruptcy or a recent consumer proposal, your application may not be eligible. It is best to contact us to discuss your situation.",
    category: "Eligibility",
  },
  {
    q: "Can I apply if I am on employment insurance or disability?",
    a: "Yes. Many forms of government and private benefits, including EI and disability, may be considered as income for eligibility.",
    category: "Eligibility",
  },

  // REPAYMENT
  {
    q: "How do I repay the loan?",
    a: "Repayments are usually withdrawn automatically from your bank account on your scheduled due dates, often aligned with your pay cycle.",
    category: "Repayment",
  },
  {
    q: "Can I make extra payments?",
    a: "Yes. You can make additional payments or pay off the loan early. Contact support to arrange early or extra payments.",
    category: "Repayment",
  },
  {
    q: "Is there a penalty for repaying early?",
    a: "Generally, there is no penalty for repaying your loan early. Early repayment may reduce total interest or fees.",
    category: "Repayment",
  },
  {
    q: "What if I know I will miss a payment?",
    a: "If you anticipate difficulty making a payment, contact us as soon as possible. We may be able to adjust dates or work out a solution.",
    category: "Repayment",
  },
  {
    q: "What happens if a payment is returned NSF?",
    a: "A returned payment may result in additional fees from both your bank and the lender. Communication is important to avoid repeated NSFs.",
    category: "Repayment",
  },
  {
    q: "Can I extend my loan term?",
    a: "Extensions or deferrals may be available in some situations, subject to provincial rules and responsible lending guidelines.",
    category: "Repayment",
  },

  // FEES
  {
    q: "Are there any hidden fees?",
    a: "No. All fees and costs are disclosed up front in your loan agreement before you sign. We believe in full transparency.",
    category: "Fees",
  },
  {
    q: "Will I know the total cost of the loan before accepting?",
    a: "Yes. You will see the total repayment amount, fees and payment schedule clearly in your loan documents.",
    category: "Fees",
  },
  {
    q: "Do fees vary by province?",
    a: "Yes. Maximum costs and fee structures are governed by provincial regulations, so fees can differ depending on where you live.",
    category: "Fees",
  },
  {
    q: "Is there a fee to apply?",
    a: "No. There is no fee just to submit an application. You only pay costs associated with an approved and accepted loan.",
    category: "Fees",
  },
  {
    q: "Do you charge NSF or late payment fees?",
    a: "If a payment is missed or returned, NSF or late fees may apply according to your loan agreement and provincial rules.",
    category: "Fees",
  },

  // SECURITY
  {
    q: "Is my personal information safe?",
    a: "Yes. We use secure encryption, protected servers and strict access controls to safeguard your personal and financial information.",
    category: "Security",
  },
  {
    q: "Do you share my data with third parties?",
    a: "We do not sell your data. Information is only shared with trusted partners when required to process your application or meet legal obligations.",
    category: "Security",
  },
  {
    q: "Is your website secure?",
    a: "Our website uses HTTPS with modern encryption standards and regular security monitoring to protect your activity.",
    category: "Security",
  },
  {
    q: "Will my employer be contacted?",
    a: "We may verify employment or income in some situations, but we do so discreetly and never disclose that you are applying for a loan.",
    category: "Security",
  },
  {
    q: "How do I update my contact or banking information?",
    a: "You can contact our support team to securely update your contact details or banking information.",
    category: "Security",
  },

  // APPLICATION PROCESS
  {
    q: "How long does the online application take?",
    a: "Most people complete the application in under 5 minutes if they have their information ready.",
    category: "Loans",
  },
  {
    q: "What information do I need to apply?",
    a: "You’ll need your basic personal details, contact information, income information and bank account details.",
    category: "Approval",
  },
  {
    q: "Can I save my application and finish later?",
    a: "In many cases, you can return using your email or phone to complete an unfinished application, depending on how far you progressed.",
    category: "General",
  },
  {
    q: "Will applying affect my credit score?",
    a: "In some cases, a credit inquiry may appear on your report. However, our focus is on responsible approval, not penalizing applicants.",
    category: "Approval",
  },
  {
    q: "Can I apply from my mobile phone?",
    a: "Yes. Our application is mobile-friendly and works on most smartphones and tablets.",
    category: "General",
  },
  {
    q: "Do I need to upload documents?",
    a: "You may be asked to upload recent bank statements, pay stubs or benefit statements to verify your income and account.",
    category: "Approval",
  },
  {
    q: "How will I know if I am approved?",
    a: "You will receive an email and/or SMS notification with your approval decision and next steps.",
    category: "Approval",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredFaqs = useMemo(
    () =>
      faqItems.filter((faq) => {
        const matchesCategory =
          activeCategory === "All" || faq.category === activeCategory;
        const matchesSearch = faq.q
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [activeCategory, searchTerm],
  );

  return (
    <>
      {/* SEO STRUCTURED DATA FOR FAQ PAGE */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        })}
      </script>

      {/* HERO */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Clear answers to help you borrow with confidence anywhere in Canada.
        </p>
      </section>

      {/* SEARCH + FILTERS */}
      <div className="container-custom mx-auto px-4 mt-10 flex flex-col lg:flex-row gap-6 justify-between">
        {/* Search */}
        <div className="relative w-full lg:w-80">
          <Search className="absolute left-3 top-3 text-muted-foreground w-5 h-5" />
          <input
            type="text"
            placeholder="Search questions..."
            className="w-full py-3 pl-10 pr-4 border rounded-xl focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-primary hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ LIST */}
      <section className="py-16 container-custom mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          {filteredFaqs.length === 0 && (
            <p className="text-center text-muted-foreground py-10">
              No matching questions found. Try a different keyword or category.
            </p>
          )}

          {filteredFaqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border rounded-xl bg-card shadow-sm transition"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex justify-between items-center px-6 py-5 w-full text-left"
                >
                  <span className="text-base font-semibold text-primary">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      isOpen
                        ? "rotate-180 text-accent"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden text-muted-foreground transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-4" : "max-h-0"
                  }`}
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SUPPORT CTA */}
      <section className="py-16 bg-secondary/40 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Still need help?
        </h2>
        <p className="text-muted-foreground mb-8">
          Our friendly support team is here to help you 7 days a week.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="mailto:support@myloanbuddy.ca"
            className="btn-primary flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Email Support
          </a>

          <a
            href="tel:+11234567890"
            className="btn-secondary flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call Us
          </a>
        </div>
      </section>
    </>
  );
};

export default FAQ;
