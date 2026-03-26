import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/starco-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 px-4 hidden md:block">
        <div className="container flex justify-between items-center">
          <span>24/7 Emergency HVAC Service Available</span>
          <a href="tel:+16138628242" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Phone className="w-3.5 h-3.5" /> (613) 862-8242
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b shadow-sm">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Starco HVAC Inc." className="h-12 md:h-14 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.path
                    ? "text-accent font-semibold"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+16138628242">
              <Button variant="outline" size="sm" className="gap-1.5">
                <Phone className="w-4 h-4" /> Call Now
              </Button>
            </a>
            <Link to="/contact">
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-flame-dark">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav className="lg:hidden bg-card border-t pb-4">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block px-6 py-3 text-sm font-medium ${
                  pathname === link.path ? "text-accent" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-6 pt-2 flex flex-col gap-2">
              <a href="tel:+16138628242">
                <Button variant="outline" className="w-full gap-1.5">
                  <Phone className="w-4 h-4" /> Call Now
                </Button>
              </a>
              <Link to="/contact" onClick={() => setOpen(false)}>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-flame-dark">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </header>

      {/* Mobile sticky call button */}
      <a
        href="tel:+16138628242"
        className="fixed bottom-4 right-4 z-50 lg:hidden bg-accent text-accent-foreground p-4 rounded-full shadow-lg hover:bg-flame-dark transition-colors"
        aria-label="Call Starco HVAC"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  );
};

export default Header;
