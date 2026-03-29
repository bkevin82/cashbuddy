import {
  Briefcase,
  Users,
  TrendingUp,
  Globe,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Globe,
    title: "Remote-Friendly",
    description:
      "Work from anywhere in Canada with flexible schedules and modern tools.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "We invest in learning, development, and long-term career progression.",
  },
  {
    icon: Users,
    title: "Collaborative Team",
    description:
      "Join a diverse team that values respect, teamwork, and innovation.",
  },
];

const openings = [
  {
    role: "Frontend Developer",
    type: "Full-time / Remote",
    location: "Canada",
  },
  {
    role: "Backend Developer",
    type: "Full-time / Remote",
    location: "Canada",
  },
  {
    role: "Customer Support Specialist",
    type: "Full-time",
    location: "Canada",
  },
];

const Careers = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Careers at Cashbuddy.ca
        </h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Build your career while helping Canadians access fast and secure
          financial solutions.
        </p>
      </section>

      {/* WHY WORK WITH US */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-foreground">
            Why Work With Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-accent rounded-xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
            Current Openings
          </h2>

          <div className="space-y-6">
            {openings.map((job, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">
                      {job.role}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {job.type} · {job.location}
                    </p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="mt-4 md:mt-0 btn-secondary text-sm px-6 py-2"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="py-20 px-4 bg-background text-center">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Our Culture</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-10">
          At Cashbuddy.ca, we foster a culture of trust, ownership, and
          innovation. We believe in empowering our team members to do meaningful
          work and grow together.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: HeartHandshake, text: "Respect & Inclusion" },
            { icon: Sparkles, text: "Innovation & Ownership" },
            { icon: Users, text: "Teamwork & Transparency" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-secondary rounded-full px-6 py-3 flex items-center gap-2 shadow-card"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-secondary/40 mt-10 px-4">
        <Link
          to="/contact"
          className="btn-primary text-base sm:text-lg font-semibold px-6 sm:px-10 py-3 sm:py-4 shadow-lg hover:shadow-xl transition-all inline-block"
        >
          Join Our Team
        </Link>
      </section>
    </>
  );
};

export default Careers;
