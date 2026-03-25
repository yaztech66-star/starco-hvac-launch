import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

const projects = [
  { title: "Commercial Kitchen Ventilation – Le Bistro", location: "Ottawa, ON", desc: "Complete kitchen exhaust and make-up air system for a 120-seat restaurant. Installed custom stainless steel hoods, grease duct system, and rooftop exhaust fans. Achieved full code compliance and passed health inspection on first visit.", category: "Commercial" },
  { title: "Whole-Home Gas Furnace Upgrade", location: "Kanata, ON", desc: "Replaced a 20-year-old 80% AFUE furnace with a new Lennox 97% high-efficiency system. Added smart thermostat and whole-home air filtration. Client reports 35% reduction in heating costs.", category: "Residential" },
  { title: "Walk-In Cooler & Freezer Installation", location: "Toronto, ON", desc: "Designed and installed custom walk-in cooler and freezer for a new grocery store. Included remote condenser units, digital temperature monitoring, and energy-efficient LED lighting.", category: "Commercial" },
  { title: "Ductless Heat Pump System", location: "Gatineau, QC", desc: "Installed a multi-zone Mitsubishi ductless heat pump system in a heritage home where traditional ductwork was not feasible. Four indoor units provide zoned heating and cooling year-round.", category: "Residential" },
  { title: "Office Building HVAC Retrofit", location: "Ottawa, ON", desc: "Replaced aging rooftop units with modern high-efficiency systems for a 15,000 sq ft office building. Improved comfort, reduced energy consumption by 40%, and qualified for government energy incentives.", category: "Commercial" },
  { title: "Emergency Boiler Replacement", location: "Montreal, QC", desc: "Emergency replacement of a failed commercial boiler in a 50-unit apartment building. Mobilized within 2 hours, installed temporary heating, and completed full boiler replacement within 48 hours.", category: "Commercial" },
];

const ProjectsPage = () => (
  <Layout>
    <SEO
      title="Completed HVAC Projects & Case Studies"
      description="View our portfolio of completed HVAC projects including commercial kitchen ventilation, furnace installations, refrigeration systems, and boiler replacements."
    />

    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Projects</h1>
        <p className="text-primary-foreground/70 text-lg">
          A selection of completed heating, cooling, and ventilation projects across Ontario and Quebec.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border rounded-xl overflow-hidden"
            >
              <div className="aspect-video bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm">{p.category} Project</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-accent uppercase tracking-wide">{p.category} · {p.location}</span>
                <h3 className="font-heading text-xl font-bold mt-2 mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTASection title="Have a Project in Mind?" subtitle="We'd love to discuss your HVAC needs. Get a free quote today." />
  </Layout>
);

export default ProjectsPage;
