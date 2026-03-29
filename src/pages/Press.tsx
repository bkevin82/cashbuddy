import {
  Newspaper,
  Mail,
  Download,
  CalendarDays,
  Megaphone,
} from "lucide-react";
import { Link } from "react-router-dom";

const pressReleases = [
  {
    title: "Cashbuddy.ca Launches Digital Lending Platform",
    date: "January 2025",
    summary:
      "Cashbuddy.ca officially launches its digital platform to provide fast, secure, and transparent funding solutions across Canada.",
  },
  {
    title: "Cashbuddy.ca Expands Responsible Lending Initiatives",
    date: "March 2025",
    summary:
      "The company strengthens its commitment to ethical and transparent lending through enhanced compliance and customer-first policies.",
  },
];

const Press = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Press & Media</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          News, announcements, and media resources from Cashbuddy.ca
        </p>
      </section>

      {/* PRESS CONTACT */}
      {/* <section className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Media Inquiries
          </h2>
          <p className="text-muted-foreground mb-6">
            For press, media requests, or official statements, please contact
            our communications team.
          </p>

          <div className="inline-flex items-center gap-3 bg-secondary rounded-full px-6 py-3 shadow-card">
            <Mail className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">
              press@Cashbuddy.ca
            </span>
          </div>
        </div>
      </section> */}

      {/* PRESS RELEASES */}
      <section className="py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Latest Press Releases
          </h2>

          <div className="space-y-6">
            {pressReleases.map((item, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Newspaper className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <CalendarDays className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {item.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA KIT */}
      <section className="py-20 px-4 bg-background text-center">
        <h2 className="text-3xl font-bold mb-6 text-foreground">
          Media Resources
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
          Download official Cashbuddy.ca logos, brand assets, and company
          information for media use.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="/media/Cashbuddy_Media_Kit.zip"
            className="btn-secondary flex items-center gap-2 px-6 py-3"
          >
            <Download className="w-5 h-5" />
            Download Media Kit
          </a>

          <Link
            to="/about-us"
            className="btn-ghost flex items-center gap-2 px-6 py-3"
          >
            <Megaphone className="w-5 h-5" />
            Learn About Cashbuddy.ca
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-secondary/40 mt-10 px-4">
        <Link
          to="/contact"
          className="btn-primary text-base sm:text-lg font-semibold px-6 sm:px-10 py-3 sm:py-4 shadow-lg hover:shadow-xl transition-all inline-block"
        >
          Contact Our Media Team
        </Link>
      </section>
    </>
  );
};

export default Press;
