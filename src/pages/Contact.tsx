import { Mail, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";

const Contact = () => {
  return (
    <>
      {/* HERO */}
      <section className="pt-36 pb-20 bg-gradient-to-r from-primary to-primary/90 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Contact Our Support Team
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Friendly help from real people in Canada 🇨🇦 — available when life
          happens.
        </p>
      </section>

      {/* TRUST CARD */}
      <div className="flex justify-center -mt-10 mb-16 px-4">
        <div className="bg-white shadow-lg rounded-2xl px-6 py-4 flex items-center gap-3 border border-border">
          <ShieldCheck className="text-primary w-6 h-6" />
          <span className="font-semibold text-sm text-foreground">
            100% Secure • Confidential • Canadian Support
          </span>
        </div>
      </div>

      {/* CONTACT OPTIONS */}
      <section className="container-custom mx-auto px-4 grid md:grid-cols-3 gap-8 pb-20">
        {[
          {
            icon: <Mail className="w-10 h-10 text-primary mx-auto mb-3" />,
            title: "Email Support",
            desc: "Fast responses, usually within 1–3 hours.",
            action: (
              <a
                href="mailto:support@myloanbuddy.ca"
                className="underline text-primary font-medium"
              >
                support@Cashbuddy.ca
              </a>
            ),
          },
          // {
          //   icon: <Phone className="w-10 h-10 text-primary mx-auto mb-3" />,
          //   title: "Call Us",
          //   desc: "Monday – Saturday • 9AM – 9PM EST",
          //   action: (
          //     <a
          //       href="tel:+11234567890"
          //       className="underline text-primary font-medium"
          //     >
          //       +1 (123) 456-7890
          //     </a>
          //   ),
          // },
          {
            icon: <Phone className="w-10 h-10 text-primary mx-auto mb-3" />,
            title: "Call Us",
            desc: "Monday – Saturday ",
            action: (
              <div className="flex flex-col items-center gap-1">
                <a
                  href="tel:+14375620558"
                  className="underline text-primary font-medium"
                >
                  {/* (705) 408-4763 */}
                  {/* +1 (705) 664-0327 */}
                  +1 (226) 793-6777
                </a>
                <a
                  href="tel:+18005550123"
                  className="underline text-primary font-medium"
                >
                  {/* (800) 555-0123 */}
                  +1 ( 800 ) 888-4686
                </a>
              </div>
            ),
          },

          {
            icon: <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />,
            title: "Head Office",
            desc: "Proudly Canadian 🇨🇦",
            action: (
              // <p className="text-primary font-medium">Toronto, Ontario</p>
              <p className="text-muted-foreground">
                19 Queen St W,
                <br /> Toronto, ON M5H 3W4 🇨🇦
              </p>
            ),
          },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white border p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-center"
          >
            {card.icon}
            <h3 className="font-bold text-xl mb-2">{card.title}</h3>
            <p className="text-muted-foreground mb-4">{card.desc}</p>
            {card.action}
          </div>
        ))}
      </section>

      {/* FORM SECTION */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg border border-border">
          <h2 className="text-3xl font-bold text-center mb-3">
            Send Us a Message
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Ask anything — we’re always happy to help you!
          </p>

          <form
            action="https://formsubmit.co/support@myloanbuddy.ca"
            method="POST"
            className="grid gap-6"
          >
            {/* Hidden FormSubmit Options */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_subject"
              value="📩 New Support Inquiry"
            />

            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="+1 (___) ___-____"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="What can we help you with?"
              ></textarea>
            </div>

            <button className="btn-primary py-4 text-lg font-semibold w-full">
              Send Message ✉️
            </button>
          </form>
        </div>
      </section>

      {/* HOURS */}
      <section className="text-center py-20">
        <Clock className="w-10 h-10 mx-auto text-primary mb-3" />
        <h3 className="font-bold text-xl mb-1">Support Hours</h3>
        <p className="text-muted-foreground">
          Mon–Sat • 9:00 AM – 9:00 PM EST (Closed Sundays & Holidays)
        </p>
      </section>

      <div className="text-center py-16 bg-secondary/20 text-foreground">
        <h3 className="text-2xl font-bold mb-4">Need funds urgently?</h3>
        <a href="/apply" className="btn-primary px-8 py-4 text-lg">
          Apply Now →
        </a>
      </div>
    </>
  );
};

export default Contact;
