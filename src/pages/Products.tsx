import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";

const products = [
  { name: "Lennox SL297NV Gas Furnace", desc: "97% AFUE high-efficiency gas furnace with variable-speed blower. Quiet operation, reliable performance.", price: "$3,200", category: "Furnaces" },
  { name: "Carrier Infinity 24ANB1 AC", desc: "Up to 21 SEER central air conditioner with Greenspeed intelligence for maximum energy savings.", price: "$4,500", category: "Air Conditioners" },
  { name: "Goodman GMVC96 Gas Furnace", desc: "96% AFUE two-stage gas furnace. Great value with consistent comfort and quiet operation.", price: "$2,100", category: "Furnaces" },
  { name: "Trane XR15 Heat Pump", desc: "15 SEER heat pump for year-round heating and cooling. ENERGY STAR certified.", price: "$3,800", category: "Heat Pumps" },
  { name: "Honeywell T6 Pro Thermostat", desc: "Programmable smart thermostat with touchscreen, Wi-Fi, and flexible scheduling.", price: "$189", category: "Thermostats" },
  { name: "Ecobee SmartThermostat Premium", desc: "Smart thermostat with built-in air quality monitor and voice control.", price: "$329", category: "Thermostats" },
  { name: "AprilAire 413 Air Filter (4-Pack)", desc: "MERV 13 whole-home air filters for cleaner indoor air quality.", price: "$89", category: "Filters & Parts" },
  { name: "Navien NCB-240E Combi Boiler", desc: "High-efficiency condensing combi boiler for heating and domestic hot water.", price: "$5,200", category: "Boilers" },
  { name: "Mitsubishi MSZ-FH Ductless Mini-Split", desc: "Hyper-Heating inverter mini-split for heating down to -25°C.", price: "$3,400", category: "Heat Pumps" },
  { name: "Broan HRV200TE Ventilator", desc: "Heat recovery ventilator for fresh indoor air with energy recovery.", price: "$1,250", category: "Ventilation" },
  { name: "Rinnai RU199iN Tankless Water Heater", desc: "Ultra-series tankless gas water heater with recirculation.", price: "$2,800", category: "Water Heaters" },
  { name: "Fujitsu Halcyon Wall Mount", desc: "Ductless mini-split heat pump, ENERGY STAR, whisper-quiet operation.", price: "$2,900", category: "Heat Pumps" },
];

const ProductsPage = () => (
  <Layout>
    <SEO
      title="HVAC Products - Furnaces, AC, Heat Pumps & More"
      description="Browse our selection of high-quality HVAC products including furnaces, air conditioners, heat pumps, thermostats, and more. Buy on our eBay store."
    />

    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">HVAC Products</h1>
        <p className="text-primary-foreground/70 text-lg">
          Quality HVAC equipment from trusted brands. Browse our selection and purchase through our eBay store.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.name} className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm">{product.category}</span>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-sm mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-accent">{product.price}</span>
                  <a href="https://www.ebay.ca" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="gap-1.5 text-xs">
                      Buy on eBay <ExternalLink className="w-3 h-3" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection title="Need Help Choosing?" subtitle="Our experts can recommend the right equipment for your needs and budget. Contact us for a free consultation." />
  </Layout>
);

export default ProductsPage;
