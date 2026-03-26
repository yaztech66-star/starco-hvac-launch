import { Link } from "react-router-dom";
import { Phone, Flame, Snowflake, Wrench, ThermometerSun, Wind, ChefHat, Gauge, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import TestimonialSlider from "@/components/TestimonialSlider";
import heroImg from "@/assets/hero-hvac.jpg";

const services = [
  { title: "Gas Heating", description: "Expert gas furnace installation, repair, and maintenance for maximum efficiency and safety.", icon: Flame, path: "/services/gas-heating" },
  { title: "Furnace Repair", description: "Fast, reliable furnace diagnostics and repairs to keep your home warm when it matters most.", icon: Wrench, path: "/services/furnace-repair" },
  { title: "Air Conditioning", description: "Complete AC installation, repair, and tune-ups for year-round comfort.", icon: Snowflake, path: "/services/air-conditioning" },
  { title: "Refrigeration", description: "Commercial and residential refrigeration services to protect your products and investments.", icon: ThermometerSun, path: "/services/refrigeration" },
  { title: "Heat Pumps", description: "Energy-efficient heat pump systems for heating and cooling with lower energy costs.", icon: Wind, path: "/services/heat-pumps" },
  { title: "Commercial Kitchen Ventilation", description: "Code-compliant ventilation systems for restaurants and commercial kitchens.", icon: ChefHat, path: "/services/commercial-kitchen-ventilation" },
  { title: "Boiler Services", description: "Professional boiler installation, repair, and annual maintenance for reliable heating.", icon: Gauge, path: "/services/boiler-services" },
  { title: "HVAC Repairs", description: "General HVAC repair services for all makes and models — residential and commercial.", icon: Settings, path: "/services/hvac-repairs" },
];

const Index = () => (
  <Layout>
    <SEO
      title="Expert Gas Heating & HVAC Services in Ottawa"
      description="Starco HVAC Inc. provides professional gas heating, furnace repair, air conditioning, refrigeration, and commercial HVAC services across Ontario and Quebec. 24/7 emergency service."
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Starco HVAC Inc.",
        url: "https://www.starcohvac.ca",
        logo: "https://www.starcohvac.ca/starco-logo.png",
      }}
    />

    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Professional HVAC technician" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>
      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            24/7 Emergency Service Available
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Expert Gas Heating & HVAC Repairs in Ottawa
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
            Licensed, insured, and TSSA-certified technicians delivering reliable heating, cooling, and refrigeration solutions for homes and businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-flame-dark text-base px-8 w-full sm:w-auto">
                Get a Free Quote
              </Button>
            </Link>
            <a href="tel:+16138628242">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 text-base w-full sm:w-auto">
                <Phone className="w-5 h-5" /> Call Now
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="section-padding">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our HVAC Services</h2>
          <p className="text-muted-foreground">From gas furnace installations to emergency AC repairs, we provide comprehensive heating, cooling, and ventilation solutions.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.path} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <TestimonialSlider />

    {/* Service Areas */}
    <section className="section-padding">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Serving Ontario & Quebec</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">We proudly serve residential and commercial clients across the following regions.</p>
        <div className="flex flex-wrap justify-center gap-3">
          {["Ottawa", "Toronto", "Gatineau", "Montreal", "Kingston", "Barrie"].map(city => (
            <Link
              key={city}
              to={`/locations/${city.toLowerCase()}`}
              className="bg-card border rounded-full px-5 py-2.5 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              {city}
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <CTASection />
  </Layout>
);

export default Index;
