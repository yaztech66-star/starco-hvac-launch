import { useParams, Link } from "react-router-dom";
import { MapPin, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";

const locationData: Record<string, { city: string; region: string; desc: string }> = {
  ottawa: { city: "Ottawa", region: "ON", desc: "As our home base, Ottawa receives priority service with the fastest response times. We serve all Ottawa neighborhoods including Kanata, Barrhaven, Orleans, Nepean, and Gloucester." },
  toronto: { city: "Toronto", region: "ON", desc: "We provide comprehensive HVAC services across the Greater Toronto Area including Scarborough, North York, Etobicoke, Mississauga, and Brampton." },
  gatineau: { city: "Gatineau", region: "QC", desc: "Just across the river from our Ottawa headquarters, Gatineau and the surrounding Outaouais region receive full-service coverage including Hull, Aylmer, and Chelsea." },
  montreal: { city: "Montreal", region: "QC", desc: "Our Montreal service team covers the Greater Montreal Area including Laval, Longueuil, Brossard, and the West Island." },
  kingston: { city: "Kingston", region: "ON", desc: "We serve the Kingston area and surrounding communities with scheduled HVAC services and emergency repair calls." },
  barrie: { city: "Barrie", region: "ON", desc: "Our Barrie service area covers Simcoe County including Orillia, Innisfil, and surrounding communities north of the GTA." },
};

const LocationPage = () => {
  const { city } = useParams<{ city: string }>();
  const location = city ? locationData[city] : null;

  if (!location) {
    return (
      <Layout>
        <SEO title="Location Not Found" description="Service area not found." noindex />
        <div className="container section-padding text-center">
          <h1 className="text-3xl font-heading font-bold mb-4">Location Not Found</h1>
          <Link to="/" className="text-accent hover:underline">Return Home</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={`HVAC Services in ${location.city}, ${location.region}`}
        description={`Starco HVAC provides gas heating, furnace repair, air conditioning, and refrigeration services in ${location.city}, ${location.region}. TSSA-certified, 24/7 emergency service.`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `HVAC Services in ${location.city}`,
          provider: { "@type": "Organization", name: "Starco HVAC Inc." },
          areaServed: { "@type": "Place", name: `${location.city}, ${location.region}, Canada` },
        }}
      />

      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-2 text-accent mb-4">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wide">{location.city}, {location.region}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            HVAC Services in {location.city}
          </h1>
          <p className="text-primary-foreground/70 text-lg">{location.desc}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-flame-dark w-full sm:w-auto">Get a Free Quote</Button>
            </Link>
            <a href="tel:+16135550123">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 w-full sm:w-auto">
                <Phone className="w-4 h-4" /> (613) 555-0123
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-heading font-bold mb-6">Our Services in {location.city}</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {["Gas Furnace Installation & Repair", "Central & Ductless Air Conditioning", "Commercial Refrigeration", "Heat Pump Systems", "Boiler Service & Repair", "Commercial Kitchen Ventilation", "24/7 Emergency HVAC Repair", "Preventive Maintenance Plans"].map(s => (
              <div key={s} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>{s}</span>
              </div>
            ))}
          </div>

          <div className="bg-muted rounded-xl p-8">
            <h3 className="text-xl font-heading font-bold mb-4">Why {location.city} Trusts Starco HVAC</h3>
            <p className="text-muted-foreground leading-relaxed">
              {location.city} residents and businesses rely on Starco HVAC for fast, professional, and affordable HVAC services. Our TSSA-certified technicians are familiar with local building codes, climate challenges, and the specific heating and cooling needs of properties in the {location.city} area. Whether you need a new gas furnace installed, an emergency AC repair, or routine maintenance, we're here to help.
            </p>
          </div>
        </div>
      </section>

      <CTASection title={`Need HVAC Service in ${location.city}?`} subtitle="Contact us today for a free estimate. Fast response times guaranteed." />
    </Layout>
  );
};

export default LocationPage;
