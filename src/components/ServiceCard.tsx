import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  index?: number;
}

const ServiceCard = ({ title, description, icon: Icon, path, index = 0 }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    <Link
      to={path}
      className="group block bg-card rounded-lg border p-6 hover:shadow-lg hover:border-accent/40 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className="font-heading text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <span className="text-sm font-medium text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
        Learn More <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  </motion.div>
);

export default ServiceCard;
