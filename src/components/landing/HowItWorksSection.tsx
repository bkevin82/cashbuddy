import { FileText, CheckCircle, Banknote } from "lucide-react";

/**
 * HowItWorksSection Component
 * 3-step process with connecting line on desktop
 */

const steps = [
  {
    icon: FileText,
    title: "Apply Online",
    description: "Complete our quick, secure application in just a few minutes. No paperwork or faxing required — everything is done online.",
    number: "01",
  },
  {
    icon: CheckCircle,
    title: "Get Approved",
    description: "Our team reviews your application during business hours. Most decisions are made within minutes, not days.",
    number: "02",
  },
  {
    icon: Banknote,
    title: "Receive Funds",
    description: "Once approved, funds are sent via Interac e-Transfer® or direct deposit. Many customers receive money the same day.*",
    number: "03",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How our online loan process works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting the funds you need is simple. Here's how our streamlined process works.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop only */}
          <div className="hidden lg:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-border" />
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative text-center group"
              >
                {/* Step Number Badge */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number.slice(-1)}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          *Timing may vary depending on your bank's processing times and when your application is approved.
        </p>
      </div>
    </section>
  );
};
