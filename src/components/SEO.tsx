import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_NAME = "Starco HVAC Inc.";
const BASE_URL = "https://www.starcohvac.ca";

const SEO = ({ title, description, canonical, noindex = false, jsonLd }: SEOProps) => {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    if (noindex) setMeta("robots", "noindex, nofollow");
    else setMeta("robots", "index, follow");

    setMeta("og:title", `${title} | ${SITE_NAME}`, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical || `${BASE_URL}${window.location.pathname}`;

    // JSON-LD
    const existingScripts = document.querySelectorAll('script[data-seo-jsonld]');
    existingScripts.forEach(s => s.remove());

    const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
    
    // Always add LocalBusiness
    schemas.push({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Starco HVAC Inc.",
      url: BASE_URL,
      telephone: "+1-613-862-8242",
      email: "starcohvacinc@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2487 Kaladar Ave, Bay 4",
        addressLocality: "Ottawa",
        addressRegion: "ON",
        postalCode: "K1V 8B9",
        addressCountry: "CA",
      },
      openingHours: ["Mo-Fr 07:00-18:00", "Sa 08:00-14:00"],
      priceRange: "$$",
    });

    schemas.forEach(schema => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      document.querySelectorAll('script[data-seo-jsonld]').forEach(s => s.remove());
    };
  }, [title, description, canonical, noindex, jsonLd]);

  return null;
};

export default SEO;
