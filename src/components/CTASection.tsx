import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

const CTASection = ({
  title = "Ready to Get Started?",
  subtitle = "Contact us today for a free quote on any HVAC service. Our certified technicians are ready to help.",
}: CTASectionProps) => (
  <section className="bg-primary text-primary-foreground section-padding">
    <div className="container text-center max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{title}</h2>
      <p className="text-primary-foreground/70 mb-8">{subtitle}</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link to="/contact">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-flame-dark w-full sm:w-auto">
            Request a Quote
          </Button>
        </Link>
        <a href="tel:+16138628242">
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 w-full sm:w-auto">
            <Phone className="w-4 h-4" /> (613) 862-8242
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
