import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";

const serviceData: Record<string, { title: string; metaTitle: string; metaDesc: string; content: string[]; benefits: string[] }> = {
  "gas-heating": {
    title: "Gas Heating Services",
    metaTitle: "Gas Heating Installation & Repair - Ottawa",
    metaDesc: "Professional gas furnace installation, repair, and maintenance by TSSA-certified technicians. Safe, efficient gas heating solutions in Ottawa and surrounding areas.",
    content: [
      "Starco HVAC specializes in gas heating systems for residential and commercial properties. Our TSSA-certified technicians deliver expert gas furnace installation, repair, and maintenance services that ensure your home stays warm and your energy bills stay low.",
      "Whether you need a brand-new high-efficiency gas furnace installed, a gas line inspection, or emergency gas heating repair, our team has the expertise and equipment to handle it all. We work with all major brands including Lennox, Carrier, Trane, and Goodman.",
      "Gas heating remains one of the most cost-effective and reliable heating methods in Ontario and Quebec. With proper installation and regular maintenance, a modern gas furnace can achieve efficiency ratings of 95% or higher, significantly reducing your heating costs.",
    ],
    benefits: ["TSSA-certified gas technicians", "High-efficiency furnace options (95%+ AFUE)", "Gas line installation and inspection", "24/7 emergency gas heating repair", "Free in-home estimates", "All major brands serviced"],
  },
  "furnace-repair": {
    title: "Furnace Repair Services",
    metaTitle: "Furnace Repair Near Me - Same Day Service",
    metaDesc: "Fast, reliable furnace repair in Ottawa. Same-day emergency service available. Our certified technicians fix all makes and models. Call Starco HVAC today.",
    content: [
      "When your furnace breaks down, you need fast, reliable repair service. Starco HVAC provides same-day furnace repair across Ottawa and surrounding areas. Our certified technicians arrive equipped to diagnose and fix most furnace issues on the first visit.",
      "Common furnace problems we repair include ignitor failures, blower motor issues, thermostat malfunctions, pilot light problems, strange noises, and insufficient heating. We service all makes and models of gas, electric, and oil furnaces.",
      "Don't wait until your furnace fails completely. Signs like unusual noises, uneven heating, frequent cycling, or rising energy bills often indicate a furnace that needs professional attention. Early repair prevents costly breakdowns and keeps your family safe and comfortable.",
    ],
    benefits: ["Same-day emergency repair", "All makes and models", "Transparent upfront pricing", "90-day repair warranty", "Fully stocked service vehicles", "Licensed and insured technicians"],
  },
  "air-conditioning": {
    title: "Air Conditioning Services",
    metaTitle: "Air Conditioning Installation & Repair - Ottawa",
    metaDesc: "Complete AC installation, repair, and maintenance services. Central air, ductless mini-splits, and commercial cooling. Stay cool with Starco HVAC.",
    content: [
      "Stay comfortable all summer with Starco HVAC's comprehensive air conditioning services. From central AC installation to ductless mini-split systems, we provide cooling solutions tailored to your space and budget.",
      "Our AC services include new system installation, emergency repair, seasonal tune-ups, refrigerant recharging, and complete system replacements. We help you choose the right size and efficiency rating for optimal comfort and energy savings.",
      "Regular AC maintenance extends the life of your system and prevents unexpected breakdowns during peak summer heat. Our seasonal tune-up packages include filter replacement, coil cleaning, refrigerant check, and electrical inspection.",
    ],
    benefits: ["Central AC and ductless systems", "Energy-efficient models", "Seasonal maintenance plans", "Emergency AC repair", "Free cooling assessments", "Quiet, modern equipment"],
  },
  "refrigeration": {
    title: "Refrigeration Services",
    metaTitle: "Commercial Refrigeration Repair & Installation",
    metaDesc: "Expert commercial refrigeration services including walk-in coolers, freezers, and display cases. 24/7 emergency repair. Protect your inventory with Starco HVAC.",
    content: [
      "Starco HVAC provides comprehensive commercial refrigeration services for restaurants, grocery stores, convenience stores, and food service operations. We install, repair, and maintain all types of commercial refrigeration equipment.",
      "Our refrigeration services cover walk-in coolers and freezers, reach-in refrigerators, display cases, ice machines, and blast chillers. We understand that equipment failure means lost inventory, which is why we offer 24/7 emergency repair service.",
      "Preventive maintenance is critical for commercial refrigeration. Our maintenance programs include compressor inspection, condenser cleaning, thermostat calibration, door seal inspection, and defrost system checks to keep your equipment running efficiently.",
    ],
    benefits: ["24/7 emergency refrigeration repair", "Walk-in coolers and freezers", "Display case service", "Preventive maintenance programs", "Health code compliance", "All commercial brands"],
  },
  "heat-pumps": {
    title: "Heat Pump Services",
    metaTitle: "Heat Pump Installation & Repair - Ottawa",
    metaDesc: "Energy-efficient heat pump installation and repair. Air-source and ground-source systems for year-round heating and cooling. Save on energy costs with Starco HVAC.",
    content: [
      "Heat pumps are one of the most energy-efficient ways to heat and cool your home. Starco HVAC installs and services both air-source and ground-source (geothermal) heat pump systems that provide year-round comfort while significantly reducing energy costs.",
      "Modern cold-climate heat pumps can operate efficiently even in Ottawa's harsh winters, providing reliable heating down to -25°C. Combined with their cooling capability in summer, a heat pump can replace both your furnace and air conditioner.",
      "We help you navigate available rebates and incentives, including the Canada Greener Homes Grant and provincial programs. Many homeowners recoup their investment within 5-7 years through energy savings alone.",
    ],
    benefits: ["Air-source and ground-source options", "Cold-climate rated systems", "Government rebate assistance", "Year-round heating and cooling", "Lower energy bills", "Environmentally friendly"],
  },
  "commercial-kitchen-ventilation": {
    title: "Commercial Kitchen Ventilation",
    metaTitle: "Commercial Kitchen Ventilation Systems - Ottawa",
    metaDesc: "Code-compliant kitchen ventilation for restaurants. Hood systems, exhaust fans, make-up air units, and fire suppression. Licensed installation by Starco HVAC.",
    content: [
      "Proper ventilation is critical for any commercial kitchen. Starco HVAC designs, installs, and maintains complete kitchen ventilation systems that meet all building codes and health department requirements.",
      "Our commercial kitchen services include exhaust hood systems, make-up air units, grease duct installation, fire suppression systems, and rooftop exhaust fans. We work with restaurant owners, food truck operators, and institutional kitchens.",
      "We ensure your kitchen ventilation system properly removes heat, grease, smoke, and odors while maintaining comfortable working conditions for your staff. Our systems are designed for energy efficiency without compromising performance.",
    ],
    benefits: ["Code-compliant installations", "Hood and exhaust systems", "Make-up air units", "Fire suppression integration", "Grease duct cleaning", "Restaurant-specific expertise"],
  },
  "boiler-services": {
    title: "Boiler Services",
    metaTitle: "Boiler Installation, Repair & Maintenance",
    metaDesc: "Professional boiler services including installation, repair, and annual maintenance. Gas, oil, and electric boilers. TSSA-certified technicians at Starco HVAC.",
    content: [
      "Starco HVAC provides complete boiler services for residential and commercial properties. Our TSSA-certified technicians install, repair, and maintain gas, oil, and electric boilers of all sizes and brands.",
      "Boiler systems offer reliable, even heating through radiators, baseboard heaters, or in-floor radiant systems. We help you choose the right boiler for your needs and ensure it operates at peak efficiency.",
      "Annual boiler maintenance is essential for safety and efficiency. Our maintenance service includes combustion analysis, pressure testing, safety control inspection, cleaning, and complete system check to prevent mid-winter breakdowns.",
    ],
    benefits: ["Gas, oil, and electric boilers", "Radiant floor heating", "Annual safety inspections", "Emergency boiler repair", "High-efficiency upgrades", "TSSA-certified service"],
  },
  "hvac-repairs": {
    title: "General HVAC Repairs",
    metaTitle: "HVAC Repair Services - All Systems & Brands",
    metaDesc: "Comprehensive HVAC repair for all heating, cooling, and ventilation systems. Residential and commercial. Same-day service available from Starco HVAC.",
    content: [
      "Starco HVAC is your one-stop shop for all HVAC repairs. Whether it's a residential furnace, commercial rooftop unit, or industrial ventilation system, our experienced technicians can diagnose and repair it.",
      "We service all major HVAC brands and system types. Our fully stocked service vehicles carry the most common replacement parts, allowing us to complete most repairs on the first visit.",
      "From thermostat issues and ductwork problems to compressor failures and electrical faults, no HVAC repair is too big or too small. We provide transparent pricing before any work begins, so there are no surprises.",
    ],
    benefits: ["All systems and brands", "Residential and commercial", "Same-day availability", "Upfront pricing", "Parts warranty included", "Licensed, insured technicians"],
  },
};

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <Layout>
        <SEO title="Service Not Found" description="The requested service page was not found." noindex />
        <div className="container section-padding text-center">
          <h1 className="text-3xl font-heading font-bold mb-4">Service Not Found</h1>
          <Link to="/services"><Button>View All Services</Button></Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={service.metaTitle}
        description={service.metaDesc}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          provider: { "@type": "Organization", name: "Starco HVAC Inc." },
          areaServed: { "@type": "Place", name: "Ottawa, Ontario, Canada" },
          description: service.metaDesc,
        }}
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container max-w-3xl">
          <Link to="/services" className="inline-flex items-center gap-1 text-sm text-primary-foreground/60 hover:text-accent transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{service.title}</h1>
          <p className="text-primary-foreground/70 text-lg">{service.metaDesc}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-white hover:bg-flame-dark w-full sm:w-auto">Request a Quote</Button>
            </Link>
            <a href="tel:+16138628242">
              <Button size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 gap-2 w-full sm:w-auto">
                <Phone className="w-4 h-4" /> (613) 862-8242
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none space-y-6">
            {service.content.map((p, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed">{p}</p>
            ))}
          </div>

          <div className="mt-12 bg-muted rounded-xl p-8">
            <h2 className="text-2xl font-heading font-bold mb-6">Why Choose Starco HVAC</h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {service.benefits.map(b => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection title="Need This Service?" subtitle="Contact our team for a free estimate. We're available 24/7 for emergency calls." />
    </Layout>
  );
};

export default ServiceDetailPage;
