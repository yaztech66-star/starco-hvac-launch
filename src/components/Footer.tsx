import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Shield, Star } from "lucide-react";
import logo from "@/assets/starco-logo.png";

const serviceAreas = ["Ottawa", "Toronto", "Gatineau", "Montreal", "Kingston", "Barrie"];
const services = [
  { label: "Gas Heating", path: "/services/gas-heating" },
  { label: "Furnace Repair", path: "/services/furnace-repair" },
  { label: "Air Conditioning", path: "/services/air-conditioning" },
  { label: "Refrigeration", path: "/services/refrigeration" },
  { label: "Heat Pumps", path: "/services/heat-pumps" },
  { label: "Boiler Services", path: "/services/boiler-services" },
];

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    {/* Trust bar */}
    <div className="border-b border-primary-foreground/10">
      <div className="container py-6 flex flex-wrap justify-center gap-8 text-sm">
        <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-accent" /> TSSA Licensed</span>
        <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-accent" /> Fully Insured</span>
        <span className="flex items-center gap-2"><Star className="w-4 h-4 text-accent" /> 5-Star Rated</span>
        <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent" /> 24/7 Emergency</span>
      </div>
    </div>

    <div className="container py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* Brand */}
      <div>
        <img src={logo} alt="Starco HVAC" className="h-12 mb-4 brightness-0 invert" />
        <p className="text-sm text-primary-foreground/70 leading-relaxed">
          Expert gas heating, cooling, and refrigeration services for residential and commercial clients across Ontario and Quebec.
        </p>
      </div>

      {/* Services */}
      <div>
        <h4 className="font-heading text-base font-semibold mb-4">Our Services</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          {services.map(s => (
            <li key={s.path}>
              <Link to={s.path} className="hover:text-accent transition-colors">{s.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Service Areas */}
      <div>
        <h4 className="font-heading text-base font-semibold mb-4">Service Areas</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          {serviceAreas.map(city => (
            <li key={city}>
              <Link to={`/locations/${city.toLowerCase()}`} className="hover:text-accent transition-colors">{city}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-heading text-base font-semibold mb-4">Contact Us</h4>
        <ul className="space-y-3 text-sm text-primary-foreground/70">
          <li className="flex items-start gap-2">
            <Phone className="w-4 h-4 mt-0.5 text-accent" />
            <a href="tel:+16135550123" className="hover:text-accent transition-colors">(613) 555-0123</a>
          </li>
          <li className="flex items-start gap-2">
            <Mail className="w-4 h-4 mt-0.5 text-accent" />
            <a href="mailto:info@starcotech.ca" className="hover:text-accent transition-colors">info@starcotech.ca</a>
          </li>
          <li className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 text-accent" />
            <span>123 Industrial Drive, Ottawa, ON K1A 0A1</span>
          </li>
          <li className="flex items-start gap-2">
            <Clock className="w-4 h-4 mt-0.5 text-accent" />
            <span>Mon–Fri: 7am–6pm<br />Sat: 8am–2pm</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} Starco HVAC Inc. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/about" className="hover:text-accent transition-colors">About</Link>
          <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
          <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
