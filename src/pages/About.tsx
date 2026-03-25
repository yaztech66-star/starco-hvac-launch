import { Shield, Users, Clock, Award } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

const values = [
  { icon: Shield, title: "Safety First", desc: "TSSA-certified and fully insured. Every job meets or exceeds safety standards and building codes." },
  { icon: Users, title: "Customer Focus", desc: "We treat every client like family. Transparent pricing, honest advice, and respect for your home or business." },
  { icon: Clock, title: "Reliable Service", desc: "We show up on time, every time. 24/7 emergency availability for when you need us most." },
  { icon: Award, title: "Quality Work", desc: "We stand behind our work with industry-leading warranties and use only premium parts and equipment." },
];

const AboutPage = () => (
  <Layout>
    <SEO
      title="About Starco HVAC - Licensed HVAC Experts"
      description="Learn about Starco HVAC Inc., a licensed and insured HVAC company serving Ontario and Quebec. Meet our team of certified gas heating, cooling, and refrigeration experts."
    />

    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Starco HVAC</h1>
        <p className="text-primary-foreground/70 text-lg">
          Your trusted partner for gas heating, cooling, and refrigeration services across Ontario and Quebec.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container max-w-3xl">
        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p>
            Starco HVAC Inc. was founded with a simple mission: to provide honest, reliable, and expert HVAC services to homeowners and businesses across Ontario and Quebec. From gas furnace installations to commercial refrigeration systems, our team brings decades of combined experience to every project.
          </p>
          <p>
            As a TSSA-licensed and fully insured company, we specialize in gas heating systems while offering comprehensive services across all heating, cooling, and ventilation disciplines. Our technicians undergo continuous training to stay current with the latest technologies and safety standards.
          </p>
          <p>
            Whether it's a 2 AM emergency furnace repair or a planned commercial kitchen ventilation installation, we bring the same level of professionalism, expertise, and care to every job. Our clients trust us because we deliver what we promise — quality work, fair pricing, and lasting results.
          </p>
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted">
      <div className="container">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border rounded-lg p-6 text-center"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default AboutPage;
