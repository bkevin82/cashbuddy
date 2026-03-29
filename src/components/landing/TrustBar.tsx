import { motion } from "framer-motion";
import { ShieldCheck, Zap, BadgeCheck } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    label: "Bank-Level Security",
    sub: "256-bit encryption",
  },
  {
    icon: Zap,
    label: "Fast Funding",
    sub: "Funds in 24 hours",
  },
  {
    icon: BadgeCheck,
    label: "Verified Service",
    sub: "Licensed in Canada",
  },
];

const TrustBar = () => {
  return (
    <section className="relative py-14 bg-gradient-to-b from-white to-slate-50 border-y border-border/40">
      {/* subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-red-500/10 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* heading (adds premium feel) */}
        <div className="text-center mb-10">
          <p className="text-sm text-muted-foreground">
            Trusted by thousands across Canada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-center gap-4 p-5 rounded-2xl 
              bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm 
              hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* icon */}
              <div
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center 
              group-hover:bg-primary/20 transition"
              >
                <item.icon className="w-6 h-6 text-primary" />
              </div>

              {/* text */}
              <div>
                <p className="font-heading font-semibold text-primary text-sm">
                  {item.label}
                </p>
                <p className="text-xs text-muted-foreground">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
