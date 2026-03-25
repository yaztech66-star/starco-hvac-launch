import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const NotFound = () => (
  <Layout>
    <SEO title="Page Not Found" description="The page you're looking for doesn't exist." noindex />
    <div className="container section-padding text-center max-w-lg">
      <div className="text-8xl font-heading font-bold text-accent mb-4">404</div>
      <h1 className="text-2xl font-heading font-bold mb-3">Page Not Found</h1>
      <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/">
        <Button className="bg-accent text-accent-foreground hover:bg-flame-dark gap-2">
          <Home className="w-4 h-4" /> Back to Home
        </Button>
      </Link>
    </div>
  </Layout>
);

export default NotFound;
