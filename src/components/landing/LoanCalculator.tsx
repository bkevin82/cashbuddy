import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";

const LoanCalculator = () => {
  const [amount, setAmount] = useState(5000);
  const [rate, setRate] = useState(9.9);
  const [tenure, setTenure] = useState(24);

  const { monthly, totalInterest, totalRepayment } = useMemo(() => {
    const r = rate / 100 / 12;
    const n = tenure;
    const emi =
      r > 0
        ? (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
        : amount / n;
    const total = emi * n;
    return {
      monthly: emi,
      totalInterest: total - amount,
      totalRepayment: total,
    };
  }, [amount, rate, tenure]);

  const fmt = (v: number) =>
    new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 2,
    }).format(v);

  return (
    <div className="glass-card rounded-3xl p-6 lg:p-8 w-full max-w-md">
      <h3 className="font-heading font-bold text-lg text-primary mb-6">
        Loan Calculator
      </h3>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Loan Amount</span>
            <span className="font-semibold text-primary">{fmt(amount)}</span>
          </div>
          <Slider
            value={[amount]}
            onValueChange={([v]) => setAmount(v)}
            min={500}
            max={10000}
            step={100}
          />
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Interest Rate</span>
            <span className="font-semibold text-primary">
              {rate.toFixed(1)}%
            </span>
          </div>
          <Slider
            value={[rate]}
            onValueChange={([v]) => setRate(v)}
            min={4}
            max={30}
            step={0.1}
          />
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Tenure (months)</span>
            <span className="font-semibold text-primary">{tenure} mo</span>
          </div>
          <Slider
            value={[tenure]}
            onValueChange={([v]) => setTenure(v)}
            min={3}
            max={60}
            step={1}
          />
        </div>
      </div>

      <div className="mt-8 bg-primary rounded-2xl p-5 text-primary-foreground">
        <div className="text-center">
          <p className="text-sm opacity-80">Monthly Payment</p>
          <motion.p
            key={monthly.toFixed(2)}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-3xl font-heading font-bold mt-1"
          >
            {fmt(monthly)}
          </motion.p>
        </div>
        <div className="flex justify-between mt-4 text-sm opacity-80">
          <div className="text-center">
            <p>Total Interest</p>
            <p className="font-semibold text-primary-foreground">
              {fmt(totalInterest)}
            </p>
          </div>
          <div className="text-center">
            <p>Total Repayment</p>
            <p className="font-semibold text-primary-foreground">
              {fmt(totalRepayment)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
