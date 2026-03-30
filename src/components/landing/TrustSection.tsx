// import { Star, Shield, Clock, Award, CheckCircle2 } from "lucide-react";

// /**
//  * TrustSection Component
//  * Premium trust-focused review cards with avatars + rating summary
//  */

// const reviews = [
//   {
//     name: "Olivia Martin",
//     province: "Ontario",
//     rating: 5,
//     text: "Despite my low credit score and multiple rejections from other lenders, my funding manager guided me through a simple insurance process that required no upfront payment or extra charges. The steps were clear and easy to follow, and within just 2 hours, I received my $3,000 loan. I’m very satisfied with the fast, professional, and transparent service.",
//     date: "Nov 2025",
//     avatar: "/avatars/woman.jpg",
//   },
//   {
//     name: "William Campbell",
//     province: "British Columbia",
//     rating: 5,
//     text: "When I was ready to go home, my car wouldn't start and it needed to be towed to a shop to be fixed. Since I hadn't been paid yet this week, I went online to see if I could find help. I found Cashbuddy. It took me 5 minutes to fill out the form and get approved. I got the money the same day. Thank you!",
//     date: "Nov 2025",
//     avatar: "/avatars/old_man_1.jpg",
//   },
//   {
//     name: "Mike T.",
//     province: "Alberta",
//     rating: 5,
//     text: "A pipe in my house burst and I didn't have any money at the time to fix it. My friend had used Cashbuddy before and told me they could help. I went online and filled out a their form. After only a couple of minutes they told me I could get $10,000 got the money same day and was able to repair the pipe right away.",
//     date: "Oct 2025",
//     avatar: "/avatars/old_man_2.jpg",
//   },
//   {
//     name: "Anderson.",
//     province: "Quebec",
//     rating: 5,
//     text: "had to travel out of town unexpectedly for a family emergency, but I didn’t have enough saved for the trip. I tried Cashbuddy after seeing their ad online. The process was straightforward, and I got the money within 24 hours. The fees were a bit higher than I expected, but it helped me make the trip on time.",
//     date: "Sep 2025",
//     avatar: "/avatars/young_man.jpg",
//   },
//   {
//     name: "James K.",
//     province: "Manitoba",
//     rating: 5,
//     text: "I had a sudden medical expense that I wasn’t prepared for and needed help urgently. I applied through Cashbuddy, and the process was quick and stress-free. Within just a few hours, the funds were in my account and I could pay the hospital bill right away. I’m really thankful — Cashbuddy truly came through when it mattered most.",
//     date: "Sep 2025",
//     avatar: "/avatars/Raymod_Carter.jpeg",
//   },
//   {
//     name: "Lisa C.",
//     province: "Nova Scotia",
//     rating: 5,
//     text: "I had a small medical bill come up that I wasn’t prepared for. I applied with Loan Quick and got approved right away. The process was quick, transparent, and stress-free. I’m really grateful for how fast they helped.",
//     date: "Aug 2025",
//     avatar: "/avatars/lady.jpeg",
//   },
// ];

// // Rating Summary
// const avgRating = 4.9;
// const totalReviews = "12,482";

// const trustBadges = [
//   { icon: Award, label: "Trusted Since 2005" },
//   { icon: Shield, label: "Licensed Canadian Lender" },
//   { icon: Clock, label: "24/7 Secure Application" },
// ];

// const StarRating = ({ rating }: { rating: number }) => (
//   <div className="flex gap-0.5">
//     {[...Array(5)].map((_, i) => (
//       <Star
//         key={i}
//         className={`w-4 h-4 ${
//           i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
//         }`}
//       />
//     ))}
//   </div>
// );

// export const TrustSection = () => {
//   return (
//     <section
//       id="reviews"
//       className="section-padding bg-gradient-to-b from-gray-100 to-white"
//     >
//       <div className="container-custom mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//             Trusted by Canadians from coast to coast 🇨🇦
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Real feedback from real customers who rely on us when it matters
//             most.
//           </p>
//         </div>

//         {/* Rating Summary */}
//         {/* <div className="flex flex-col items-center mb-12">
//           <div className="flex items-center gap-2">
//             <span className="text-3xl font-bold text-gray-900">
//               {avgRating}
//             </span>
//             <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
//             <span className="text-gray-600 font-medium">
//               | Based on {totalReviews} verified reviews
//             </span>
//           </div>
//           <p className="text-sm text-green-600 font-medium mt-1">
//             Rated Excellent
//           </p>
//         </div> */}
//         {/* Rating Summary */}
//         <div className="flex flex-col items-center">
//           <div className="flex items-center gap-2">
//             <span className="text-3xl font-bold text-gray-900">
//               {avgRating}
//             </span>
//             <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
//             <span className="text-gray-600 font-medium">
//               | Based on {totalReviews} verified reviews
//             </span>
//           </div>
//           <p className="text-sm text-green-600 font-medium mt-1">
//             Rated Excellent
//           </p>
//         </div>

//         {/* Trust Index Badge */}
//         <div className="flex flex-col items-center mt-0 mb-12">
//           <img
//             src="/avatars/trust.png"
//             alt="TrustIndex Verified"
//             className="h-16 opacity-80"
//           />
//           <span className="text-xs text-gray-500 mt-1">
//             Verified Reviews Powered by TrustPilot®
//           </span>
//         </div>

//         {/* Trust Badges */}
//         <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-14">
//           {trustBadges.map((badge, index) => (
//             <div
//               key={index}
//               className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border hover:shadow-md transition"
//             >
//               <badge.icon className="w-5 h-5 text-blue-600" />
//               <span className="font-medium text-gray-700">{badge.label}</span>
//             </div>
//           ))}
//         </div>

//         {/* Reviews */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {reviews.map((review, index) => (
//             <article
//               key={index}
//               className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl hover:-translate-y-1 transition duration-300"
//             >
//               <div className="flex items-center gap-3 mb-3">
//                 <img
//                   src={review.avatar}
//                   alt={review.name}
//                   className="w-12 h-12 rounded-full object-cover border"
//                 />
//                 <div>
//                   <p className="font-semibold text-gray-900">{review.name}</p>
//                   <p className="text-sm text-gray-500 flex items-center gap-1">
//                     <CheckCircle2 className="w-3 h-3 text-green-600" />
//                     Verified – {review.province}
//                   </p>
//                 </div>
//               </div>

//               <StarRating rating={review.rating} />
//               <p className="text-gray-700 italic mt-3">“{review.text}”</p>

//               <p className="text-xs text-gray-400 text-right mt-4">
//                 {review.date}
//               </p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import { useEffect, useState } from "react";
import {
  Star,
  Award,
  Shield,
  Clock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ------------------ DATA ------------------ */

// const reviews = [
//   {
//     name: "Mike T.",
//     province: "Alberta",
//     rating: 5,
//     text: "Easy online application with clear terms. I like the different options the company provides like instant funding which is very helpful in case of emergency. Always ready to help customers and their service is 10/10. I highly recommend Simple Fast loans, If you need financial assistance at anytime. Thank you so much for all your help and support. It means a lot.",
//     date: "Oct 2025",
//     avatar: "/avatars/old_man_2.jpg",
//   },
//   {
//     name: "Olivia Martin",
//     province: "Ontario",
//     rating: 5,
//     text: "This was the fastest approval I have ever received. And just when I needed assistance.",
//     date: "Nov 2025",
//     avatar: "/avatars/woman.jpg",
//   },
//   {
//     name: "William Campbell",
//     province: "British Columbia",
//     rating: 5,
//     text: "Easy process. Quick response and moves fast. Will recommend to anyone that needs cash right away",
//     date: "Nov 2025",
//     avatar: "/avatars/old_man_1.jpg",
//   },
// ];

const reviews = [
  {
    name: "Mike T.",
    province: "Alberta",
    rating: 5,
    text: "Easy online application with clear terms. I like the different options the company provides like instant funding which is very helpful in case of emergency. Always ready to help customers and their service is 10/10. I highly recommend Simple Fast loans, If you need financial assistance at anytime.",
    date: "Oct 2025",
    avatar: "/avatars/old_man_2.jpg",
  },
  {
    name: "Olivia Martin",
    province: "Ontario",
    rating: 5,
    text: "This was the fastest approval I have ever received. And just when I needed assistance.",
    date: "Nov 2025",
    avatar: "/avatars/woman.jpg",
  },
  {
    name: "William Campbell",
    province: "British Columbia",
    rating: 4,
    text: "Easy process. Quick response and moves fast. Will recommend to anyone that needs cash right away.",
    date: "Nov 2025",
    avatar: "/avatars/old_man_1.jpg",
  },

  // ❗ BAD / MIXED REVIEWS

  {
    name: "Ethan J.",
    province: "Ontario",
    rating: 3,
    text: "Reliable service, but a few delays in confirmation caused minor stress. Also experienced a little delay in receiving the funds.",
    date: "Feb 2026",
    avatar: "/avatars/man5.jpg",
  },
  {
    name: "Chloe D.",
    province: "Alberta",
    rating: 3,
    text: "Loan disbursal was quick, but responses to queries were sometimes slow. However, they explained everything clearly in the end.",
    date: "Feb 2026",
    avatar: "/avatars/woman6.jpg",
  },
  {
    name: "Ryan S.",
    province: "British Columbia",
    rating: 2,
    text: "The process was fast, but customer support was hard to reach at times. Still managed to get the funds eventually.",
    date: "Mar 2026",
    avatar: "/avatars/man6.jpg",
  },
  {
    name: "Anonymous",
    province: "Manitoba",
    rating: 1,
    text: "Bad service. Did not receive the funds.",
    date: "Mar 2026",
    avatar: "/avatars/katela.jpg",
  },

  // ✅ NEW REVIEWS

  {
    name: "James R.",
    province: "Ontario",
    rating: 4,
    text: "Honest loans for bad credit. Hands down the very best. It's a lifesaver, straightforward and at a fair rate. I would recommend this to anyone who needs cash. So much better than payday loan companies. This really helped my family in our time of need.",
    date: "Dec 2025",
    avatar: "/avatars/man1.jpeg",
  },
  {
    name: "Sophia L.",
    province: "Alberta",
    rating: 5,
    text: "Great service and very fast! Application process is painless and real quick.",
    date: "Dec 2025",
    avatar: "/avatars/woman2.jpeg",
  },
  {
    name: "Daniel K.",
    province: "British Columbia",
    rating: 5,
    text: "I recently used their program and my experience was very good. The process was simple and quick with minimal documentation. My loan got approved within just 2–3 hours which was really impressive. The team was also very helpful.",
    date: "Jan 2026",
    avatar: "/avatars/woman3.jpeg",
  },
  {
    name: "Emma W.",
    province: "Manitoba",
    rating: 4,
    text: "I had a great experience with their Credit Gain Program. It’s easy to follow and well organized. I liked how they focus on improving credit score step by step with proper guidance. Their team was always supportive.",
    date: "Jan 2026",
    avatar: "/avatars/woman4.jpeg",
  },
  {
    name: "Noah P.",
    province: "Saskatchewan",
    rating: 5,
    text: "Quick and easy loan approval. Very satisfied. Minimal paperwork and fast process. Highly recommend. Simple, reliable, and professional service.",
    date: "Feb 2026",
    avatar: "/avatars/woman5.jpg",
  },
  {
    name: "Liam H.",
    province: "Ontario",
    rating: 5,
    text: "Very efficient and professional team. Quick disbursal and smooth experience. Transparent and hassle-free process with great customer support.",
    date: "Feb 2026",
    avatar: "/avatars/man4.jpg",
  },
  {
    name: "Ava M.",
    province: "Alberta",
    rating: 4,
    text: "Easy application and timely approval. Fast loan with excellent support. Highly recommended for CashBuddy.",
    date: "Mar 2026",
    avatar: "/avatars/woman4.jpeg",
  },
];
const avgRating = 4.9;
const totalReviews = "12,482";

const trustBadges = [
  { icon: Award, label: "Trusted Since 2005" },
  { icon: Shield, label: "Licensed Canadian Lender" },
  { icon: Clock, label: "24/7 Secure Application" },
];

/* ------------------ COMPONENT ------------------ */

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 mt-2">
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

const TrustSection = () => {
  const [index, setIndex] = useState(0);

  /* 🔥 AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((index + 1) % reviews.length);
  const prev = () => setIndex((index - 1 + reviews.length) % reviews.length);

  const review = reviews[index];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADING */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            Trusted by Canadians from coast to coast 🇨🇦
          </h2>

          <p className="text-gray-600 mt-3">
            Real feedback from customers who rely on CashBuddy when it matters
            most.
          </p>
        </div>

        {/* RATING */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-gray-900">
              {avgRating}
            </span>

            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            <span className="text-gray-600 text-sm">
              Based on {totalReviews} reviews
            </span>
          </div>

          <p className="text-green-600 text-sm mt-1 font-medium">
            Rated Excellent
          </p>
        </div>

        {/* TRUSTPILOT */}
        <div className="flex flex-col items-center mt-4 mb-10">
          <img src="/avatars/trust.png" alt="Trustpilot" className="h-10" />
          <p className="text-xs text-gray-500 mt-1">
            Verified Reviews Powered by Trustpilot®
          </p>
        </div>

        {/* BADGES */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-5 py-2 rounded-full border border-green-400 text-green-700 bg-white"
            >
              <badge.icon className="w-4 h-4" />
              {badge.label}
            </div>
          ))}
        </div>

        {/* 🔥 REVIEW SLIDER */}
        <div className="relative flex justify-center mt-12">
          {/* CARD */}
          <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-lg border p-8">
            {/* LEFT BUTTON (inside card edge) */}
            <button
              onClick={prev}
              className="absolute -left-5 top-1/2 -translate-y-1/2 
      bg-white border shadow-md rounded-full p-2 
      hover:scale-110 transition z-10"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            {/* RIGHT BUTTON (inside card edge) */}
            <button
              onClick={next}
              className="absolute -right-5 top-1/2 -translate-y-1/2 
      bg-white border shadow-md rounded-full p-2 
      hover:scale-110 transition z-10"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* USER */}
            <div className="flex items-center gap-3">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-green-600" />
                  Verified – {review.province}
                </p>
              </div>
            </div>

            {/* STARS */}
            <StarRating rating={review.rating} />

            {/* TEXT */}
            <p className="text-gray-700 italic mt-4 leading-relaxed">
              “{review.text}”
            </p>

            {/* DATE */}
            <p className="text-sm text-gray-400 text-right mt-6">
              {review.date}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
