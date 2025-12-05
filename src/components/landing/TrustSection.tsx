import { Star, Shield, Clock, Award } from "lucide-react";

/**
 * TrustSection Component
 * Displays customer reviews and trust badges
 */

const reviews = [
  {
    name: "Sarah M.",
    province: "Ontario",
    rating: 5,
    text: "The application was incredibly quick. I had the funds in my account the same day!",
  },
  {
    name: "Raj P.",
    province: "British Columbia",
    rating: 5,
    text: "Friendly support team helped me through every step. Highly recommend for anyone in a tight spot.",
  },
  {
    name: "Mike T.",
    province: "Alberta",
    rating: 5,
    text: "No hassle, no faxing — just a simple online form. Exactly what I needed.",
  },
  {
    name: "Emma L.",
    province: "Quebec",
    rating: 5,
    text: "I was worried about my credit, but they considered my income and approved me quickly.",
  },
  {
    name: "James K.",
    province: "Manitoba",
    rating: 5,
    text: "Fast funding and clear terms. The whole process was transparent from start to finish.",
  },
  {
    name: "Lisa C.",
    province: "Nova Scotia",
    rating: 5,
    text: "Great experience! The customer service was available when I had questions at night.",
  },
];

const trustBadges = [
  { icon: Award, label: "Trusted Since 2005" },
  { icon: Shield, label: "Licensed Canadian Lender" },
  { icon: Clock, label: "24/7 Secure Application" },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "star-filled" : "text-muted-foreground/30"}`}
      />
    ))}
  </div>
);

export const TrustSection = () => {
  return (
    <section id="reviews" className="section-padding bg-muted">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Canadians from coast to coast
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who've used MapleCash for their short-term lending needs.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          {trustBadges.map((badge, index) => (
            <div key={index} className="trust-badge">
              <badge.icon className="w-5 h-5 text-primary" />
              <span>{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="card-elevated"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-semibold text-card-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.province}</p>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-card-foreground/80 italic">"{review.text}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
