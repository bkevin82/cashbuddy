import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * FAQSection Component
 * Accordion with common questions
 */

const faqs = [
  {
    question: "How fast can I get my money?",
    answer: "Many approved applications are funded within the same business day. Once approved, funds are typically sent via Interac e-Transfer® within 30 minutes to 2 hours. Direct deposit may take 1-2 business days depending on your bank.",
  },
  {
    question: "What if I have bad credit?",
    answer: "We consider more than just your credit score. While we do check credit, we also look at your current income, banking history, and overall ability to repay. Many Canadians with less-than-perfect credit have been approved for loans with us.",
  },
  {
    question: "How much can I borrow?",
    answer: "First-time borrowers can typically borrow between $100 and $1,500, depending on your province, income, and financial situation. Returning customers with good repayment history may qualify for higher amounts.",
  },
  {
    question: "How do repayments work?",
    answer: "Repayment is automatically withdrawn from your bank account on your next payday (or a schedule agreed upon). You'll know exactly when and how much will be withdrawn before signing your loan agreement.",
  },
  {
    question: "Is my personal information secure?",
    answer: "Absolutely. We use industry-standard 256-bit SSL encryption to protect your data. Your information is never sold to third parties, and we follow all Canadian privacy regulations including PIPEDA.",
  },
  {
    question: "Can I pay off my loan early?",
    answer: "Yes! You can pay off your loan early at any time without penalty. In fact, paying early may reduce the total cost of borrowing. Contact our support team or log into your account to make an early payment.",
  },
  {
    question: "Can I re-apply for another loan?",
    answer: "Yes, once you've successfully repaid your loan, you can apply again. Returning customers often enjoy faster approval times and may qualify for larger loan amounts based on their repayment history.",
  },
  {
    question: "What are the fees and interest rates?",
    answer: "Our rates comply with provincial regulations. The maximum cost of borrowing varies by province but is clearly disclosed before you sign. For example, in Ontario, the maximum is $15 per $100 borrowed for a 2-week loan. All fees are shown upfront with no hidden charges.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Have questions? We've got answers. If you don't see what you're looking for, feel free to contact us.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-card-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
