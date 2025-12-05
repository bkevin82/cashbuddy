import { Phone, Mail, Clock, AlertTriangle } from "lucide-react";

/**
 * ContactSection Component
 * Contact information and support hours
 */

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container-custom mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need help? We're here for you
            </h2>
            <p className="text-lg text-muted-foreground">
              Our friendly Canadian support team is ready to assist you with any questions.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Phone */}
            <div className="card-flat text-center">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Call Us</h3>
              <a 
                href="tel:1-800-555-0123" 
                className="text-accent hover:underline font-medium"
              >
                1-800-555-0123
              </a>
              <p className="text-sm text-muted-foreground mt-1">Toll-free across Canada</p>
            </div>

            {/* Email */}
            <div className="card-flat text-center">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Email Us</h3>
              <a 
                href="mailto:support@maplecash.ca" 
                className="text-accent hover:underline font-medium"
              >
                support@maplecash.ca
              </a>
              <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
            </div>

            {/* Hours */}
            <div className="card-flat text-center">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Support Hours</h3>
              <p className="text-card-foreground font-medium">Mon–Fri: 8am–8pm ET</p>
              <p className="text-sm text-muted-foreground mt-1">Sat–Sun: 10am–6pm ET</p>
            </div>
          </div>

          {/* Emergency Note */}
          <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-1">In a financial emergency?</h4>
              <p className="text-sm text-muted-foreground">
                If you're experiencing a financial crisis, please consider reaching out to local support services. 
                In Canada, you can contact the{" "}
                <a href="#" className="text-primary underline hover:no-underline">Financial Consumer Agency of Canada</a>
                {" "}or provincial debt helplines for free, confidential assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
