import { Briefcase, Baby, FileCheck, Heart, Users, HardHat } from "lucide-react";

/**
 * IncomeTypesSection Component
 * Grid showing all accepted income types
 */

const incomeTypes = [
  {
    icon: Briefcase,
    title: "Employment Income",
    description: "Regular salary or hourly wages from your job",
  },
  {
    icon: Baby,
    title: "Child Benefits",
    description: "Canada Child Benefit (CCB) payments",
  },
  {
    icon: FileCheck,
    title: "Employment Insurance",
    description: "EI benefits during job transitions",
  },
  {
    icon: Heart,
    title: "Private Disability",
    description: "Long-term disability insurance payments",
  },
  {
    icon: Users,
    title: "CPP & Pension",
    description: "Canada Pension Plan or private pension income",
  },
  {
    icon: HardHat,
    title: "Workers' Compensation",
    description: "Provincial WSIB or WCB benefits",
  },
];

export const IncomeTypesSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            All kinds of income considered
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand that income comes in many forms. Here are the types of income we accept for loan applications.
          </p>
        </div>

        {/* Income Type Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {incomeTypes.map((type, index) => (
            <div
              key={index}
              className="card-flat hover:shadow-card hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <type.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {type.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
