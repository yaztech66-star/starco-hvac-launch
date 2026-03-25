import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Quote Request Sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <SEO
        title="Contact Us - Get a Free HVAC Quote"
        description="Contact Starco HVAC for a free quote on gas heating, furnace repair, air conditioning, and refrigeration services. Call (613) 555-0123 or fill out our online form."
      />

      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-primary-foreground/70 text-lg">Get a free quote or schedule a service call. We respond within 24 hours.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-heading font-bold mb-6">Request a Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Full Name *" required name="name" />
                  <Input placeholder="Email *" type="email" required name="email" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Phone Number *" type="tel" required name="phone" />
                  <Select name="service">
                    <SelectTrigger><SelectValue placeholder="Service Type" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gas-heating">Gas Heating</SelectItem>
                      <SelectItem value="furnace-repair">Furnace Repair</SelectItem>
                      <SelectItem value="air-conditioning">Air Conditioning</SelectItem>
                      <SelectItem value="refrigeration">Refrigeration</SelectItem>
                      <SelectItem value="heat-pumps">Heat Pumps</SelectItem>
                      <SelectItem value="ventilation">Commercial Ventilation</SelectItem>
                      <SelectItem value="boiler">Boiler Services</SelectItem>
                      <SelectItem value="other">Other / General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Textarea placeholder="Tell us about your project or issue..." rows={5} name="message" />
                <Button type="submit" size="lg" disabled={loading} className="bg-accent text-accent-foreground hover:bg-flame-dark gap-2">
                  <Send className="w-4 h-4" /> {loading ? "Sending..." : "Send Quote Request"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Phone</p>
                    <a href="tel:+16135550123" className="text-muted-foreground hover:text-accent transition-colors">(613) 555-0123</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <a href="mailto:info@starcotech.ca" className="text-muted-foreground hover:text-accent transition-colors">info@starcotech.ca</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Address</p>
                    <p className="text-muted-foreground">123 Industrial Drive<br />Ottawa, ON K1A 0A1</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Hours</p>
                    <p className="text-muted-foreground">Mon–Fri: 7am–6pm<br />Sat: 8am–2pm<br />24/7 Emergency Available</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden border">
                <iframe
                  title="Starco HVAC Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.0!2d-75.69!3d45.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI1JzEyLjAiTiA3NcKwNDEnMjQuMCJX!5e0!3m2!1sen!2sca!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
