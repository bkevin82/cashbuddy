// import { Star, Shield, Clock, Award } from "lucide-react";

// /**
//  * TrustSection Component
//  * Displays customer reviews and trust badges
//  */

// const reviews = [
//   {
//     name: "Sarah M.",
//     province: "Ontario",
//     rating: 5,
//     text: "The application was incredibly quick. I had the funds in my account the same day!",
//   },
//   {
//     name: "Raj P.",
//     province: "British Columbia",
//     rating: 5,
//     text: "Friendly support team helped me through every step. Highly recommend for anyone in a tight spot.",
//   },
//   {
//     name: "Mike T.",
//     province: "Alberta",
//     rating: 5,
//     text: "No hassle, no faxing — just a simple online form. Exactly what I needed.",
//   },
//   {
//     name: "Emma L.",
//     province: "Quebec",
//     rating: 5,
//     text: "I was worried about my credit, but they considered my income and approved me quickly.",
//   },
//   {
//     name: "James K.",
//     province: "Manitoba",
//     rating: 5,
//     text: "Fast funding and clear terms. The whole process was transparent from start to finish.",
//   },
//   {
//     name: "Lisa C.",
//     province: "Nova Scotia",
//     rating: 5,
//     text: "Great experience! The customer service was available when I had questions at night.",
//   },
// ];

// const trustBadges = [
//   { icon: Award, label: "Trusted Since 2005" },
//   { icon: Shield, label: "Licensed Canadian Lender" },
//   { icon: Clock, label: "24/7 Secure Application" },
// ];

// const StarRating = ({ rating }: { rating: number }) => (
//   <div
//     className="flex gap-0.5"
//     role="img"
//     aria-label={`${rating} out of 5 stars`}
//   >
//     {[...Array(5)].map((_, i) => (
//       <Star
//         key={i}
//         className={`w-4 h-4 ${
//           i < rating ? "star-filled" : "text-muted-foreground/30"
//         }`}
//       />
//     ))}
//   </div>
// );

// export const TrustSection = () => {
//   return (
//     <section id="reviews" className="section-padding bg-muted">
//       <div className="container-custom mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//             Trusted by Canadians from coast to coast
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Join thousands of satisfied customers who've used Myloanbuddy for
//             their short-term lending needs.
//           </p>
//         </div>

//         {/* Trust Badges */}
//         <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
//           {trustBadges.map((badge, index) => (
//             <div key={index} className="trust-badge">
//               <badge.icon className="w-5 h-5 text-primary" />
//               <span>{badge.label}</span>
//             </div>
//           ))}
//         </div>

//         {/* Review Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {reviews.map((review, index) => (
//             <article
//               key={index}
//               className="card-elevated"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="flex items-center justify-between mb-3">
//                 <div>
//                   <p className="font-semibold text-card-foreground">
//                     {review.name}
//                   </p>
//                   <p className="text-sm text-muted-foreground">
//                     {review.province}
//                   </p>
//                 </div>
//                 <StarRating rating={review.rating} />
//               </div>
//               <p className="text-card-foreground/80 italic">"{review.text}"</p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import { Star, Shield, Clock, Award, CheckCircle2 } from "lucide-react";

/**
 * TrustSection Component
 * Premium trust-focused review cards with avatars + rating summary
 */

const reviews = [
  {
    name: "Sarah M.",
    province: "Ontario",
    rating: 5,
    text: "The application was incredibly quick. I had the funds in my account the same day!",
    date: "Nov 2025",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Raj P.",
    province: "British Columbia",
    rating: 5,
    text: "Friendly support team helped me through every step. Highly recommend for anyone in a tight spot.",
    date: "Nov 2025",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Mike T.",
    province: "Alberta",
    rating: 5,
    text: "No hassle, no faxing — just a simple online form. Exactly what I needed.",
    date: "Oct 2025",
    avatar: "https://i.pravatar.cc/100?img=22",
  },
  {
    name: "Emma L.",
    province: "Quebec",
    rating: 5,
    text: "I was worried about my credit, but they considered my income and approved me quickly.",
    date: "Sep 2025",
    avatar: "https://i.pravatar.cc/100?img=30",
  },
  {
    name: "James K.",
    province: "Manitoba",
    rating: 5,
    text: "Fast funding and clear terms. The whole process was transparent from start to finish.",
    date: "Sep 2025",
    avatar: "https://i.pravatar.cc/100?img=51",
  },
  {
    name: "Lisa C.",
    province: "Nova Scotia",
    rating: 5,
    text: "Great experience! The customer service was available when I had questions at night.",
    date: "Aug 2025",
    avatar: "https://i.pravatar.cc/100?img=39",
  },
];

// Rating Summary
const avgRating = 4.9;
const totalReviews = "12,482";

const trustBadges = [
  { icon: Award, label: "Trusted Since 2005" },
  { icon: Shield, label: "Licensed Canadian Lender" },
  { icon: Clock, label: "24/7 Secure Application" },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ))}
  </div>
);

export const TrustSection = () => {
  return (
    <section
      id="reviews"
      className="section-padding bg-gradient-to-b from-gray-100 to-white"
    >
      <div className="container-custom mx-auto">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Trusted by Canadians from coast to coast 🇨🇦
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from real customers who rely on us when it matters
            most.
          </p>
        </div>

        {/* Rating Summary */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-gray-900">
              {avgRating}
            </span>
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <span className="text-gray-600 font-medium">
              | Based on {totalReviews} verified reviews
            </span>
          </div>
          <p className="text-sm text-green-600 font-medium mt-1">
            Rated Excellent
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-14">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border hover:shadow-md transition"
            >
              <badge.icon className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-gray-700">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    Verified – {review.province}
                  </p>
                </div>
              </div>

              <StarRating rating={review.rating} />
              <p className="text-gray-700 italic mt-3">“{review.text}”</p>

              <p className="text-xs text-gray-400 text-right mt-4">
                {review.date}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
