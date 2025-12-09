import { Star, Shield, Clock, Award, CheckCircle2 } from "lucide-react";

/**
 * TrustSection Component
 * Premium trust-focused review cards with avatars + rating summary
 */

const reviews = [
  {
    name: "Olivia Martin",
    province: "Ontario",
    rating: 5,
    text: "Despite my low credit score and multiple rejections from other lenders, my funding manager guided me through a simple insurance process that required no upfront payment or extra charges. The steps were clear and easy to follow, and within just 2 hours, I received my $3,000 loan. I’m very satisfied with the fast, professional, and transparent service.",
    date: "Nov 2025",
    avatar: "/avatars/woman.jpg",
  },
  {
    name: "William Campbell",
    province: "British Columbia",
    rating: 5,
    text: "When I was ready to go home, my car wouldn't start and it needed to be towed to a shop to be fixed. Since I hadn't been paid yet this week, I went online to see if I could find help. I found Myloanbuddy. It took me 5 minutes to fill out the form and get approved. I got the money the same day. Thank you!",
    date: "Nov 2025",
    avatar: "/avatars/old_man_1.jpg",
  },
  {
    name: "Mike T.",
    province: "Alberta",
    rating: 5,
    text: "A pipe in my house burst and I didn't have any money at the time to fix it. My friend had used Myloanbuddy before and told me they could help. I went online and filled out a their form. After only a couple of minutes they told me I could get $10,000 got the money same day and was able to repair the pipe right away.",
    date: "Oct 2025",
    avatar: "/avatars/old_man_2.jpg",
  },
  {
    name: "Emma L.",
    province: "Quebec",
    rating: 5,
    text: "had to travel out of town unexpectedly for a family emergency, but I didn’t have enough saved for the trip. I tried Myloanbuddy after seeing their ad online. The process was straightforward, and I got the money within 24 hours. The fees were a bit higher than I expected, but it helped me make the trip on time.",
    date: "Sep 2025",
    avatar: "/avatars/young_man.jpg",
  },
  {
    name: "James K.",
    province: "Manitoba",
    rating: 5,
    text: "I had a sudden medical expense that I wasn’t prepared for and needed help urgently. I applied through MyLoanBuddy, and the process was quick and stress-free. Within just a few hours, the funds were in my account and I could pay the hospital bill right away. I’m really thankful — MyLoanBuddy truly came through when it mattered most.",
    date: "Sep 2025",
    avatar: "/avatars/Raymod_Carter.jpeg",
  },
  {
    name: "Lisa C.",
    province: "Nova Scotia",
    rating: 5,
    text: "I had a small medical bill come up that I wasn’t prepared for. I applied with Loan Quick and got approved right away. The process was quick, transparent, and stress-free. I’m really grateful for how fast they helped.",
    date: "Aug 2025",
    avatar: "/avatars/lady.jpeg",
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
        {/* <div className="flex flex-col items-center mb-12">
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
        </div> */}
        {/* Rating Summary */}
        <div className="flex flex-col items-center">
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

        {/* Trust Index Badge */}
        <div className="flex flex-col items-center mt-0 mb-12">
          <img
            src="/avatars/trust.png"
            alt="TrustIndex Verified"
            className="h-16 opacity-80"
          />
          <span className="text-xs text-gray-500 mt-1">
            Verified Reviews Powered by TrustPilot®
          </span>
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
