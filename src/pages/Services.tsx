import { Link } from "react-router-dom";
import { Flame, Wrench, Snowflake, ThermometerSun, Wind, ChefHat, Gauge, Settings } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

const services = [
  { title: "Gas Heating", description: "Gas furnace installation, repair, gas line work, and safety inspections by TSSA-certified technicians.", icon: Flame, path: "/services/gas-heating" },
  { title: "Furnace Repair", description: "Fast diagnostics and expert repairs for all furnace makes and models. Same-day service available.", icon: Wrench, path: "/services/furnace-repair" },
  { title: "Air Conditioning", description: "Central AC, ductless mini-splits, and commercial cooling system installation and maintenance.", icon: Snowflake, path: "/services/air-conditioning" },
  { title: "Refrigeration", description: "Walk-in coolers, freezers, display cases, and commercial refrigeration repair and installation.", icon: ThermometerSun, path: "/services/refrigeration" },
  { title: "Heat Pumps", description: "Air-source and ground-source heat pump systems for energy-efficient year-round climate control.", icon: Wind, path: "/services/heat-pumps" },
  { title: "Commercial Kitchen Ventilation", description: "Hood systems, exhaust fans, make-up air units, and fire suppression for restaurants.", icon: ChefHat, path: "/services/commercial-kitchen-ventilation" },
  { title: "Boiler Services", description: "Boiler installation, repair, annual maintenance, and emergency service for all boiler types.", icon: Gauge, path: "/services/boiler-services" },
  { title: "HVAC Repairs", description: "Comprehensive repair services for residential and commercial heating, cooling, and ventilation systems.", icon: Settings, path: "/services/hvac-repairs" },
];

const ServicesPage = () => (
  <Layout>
    <SEO
      title="HVAC Services - Gas Heating, AC, Refrigeration & Repairs"
      description="Starco HVAC offers comprehensive heating, cooling, and refrigeration services including gas furnace repair, AC installation, heat pumps, and commercial kitchen ventilation."
    />

    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our HVAC Services</h1>
        <p className="text-primary-foreground/70 text-lg">
          Licensed, certified, and insured — delivering reliable heating, cooling, and ventilation solutions since day one.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.path} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default ServicesPage;
