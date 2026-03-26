const DOMAIN = "https://www.starcohvac.ca";
const today = new Date().toISOString().split("T")[0];

interface SitemapEntry {
  path: string;
  priority: string;
  changefreq: string;
}

const routes: SitemapEntry[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/services/gas-heating", priority: "0.8", changefreq: "monthly" },
  { path: "/services/furnace-repair", priority: "0.8", changefreq: "monthly" },
  { path: "/services/air-conditioning", priority: "0.8", changefreq: "monthly" },
  { path: "/services/refrigeration", priority: "0.8", changefreq: "monthly" },
  { path: "/services/heat-pumps", priority: "0.8", changefreq: "monthly" },
  { path: "/services/commercial-kitchen-ventilation", priority: "0.8", changefreq: "monthly" },
  { path: "/services/boiler-services", priority: "0.8", changefreq: "monthly" },
  { path: "/services/hvac-repairs", priority: "0.8", changefreq: "monthly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/blog", priority: "0.7", changefreq: "weekly" },
  { path: "/blog/signs-gas-furnace-needs-repair", priority: "0.6", changefreq: "yearly" },
  { path: "/blog/benefits-of-gas-heating", priority: "0.6", changefreq: "yearly" },
  { path: "/blog/commercial-refrigeration-maintenance", priority: "0.6", changefreq: "yearly" },
  { path: "/blog/heat-pump-vs-furnace", priority: "0.6", changefreq: "yearly" },
  { path: "/blog/when-to-replace-furnace", priority: "0.6", changefreq: "yearly" },
  { path: "/locations/ottawa", priority: "0.7", changefreq: "monthly" },
  { path: "/locations/toronto", priority: "0.7", changefreq: "monthly" },
  { path: "/locations/gatineau", priority: "0.7", changefreq: "monthly" },
  { path: "/locations/montreal", priority: "0.7", changefreq: "monthly" },
  { path: "/locations/kingston", priority: "0.7", changefreq: "monthly" },
  { path: "/locations/barrie", priority: "0.7", changefreq: "monthly" },
];

const urls = routes
  .map(
    (r) => `  <url>
    <loc>${DOMAIN}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const fs = await import("fs");
const path = await import("path");
const outPath = path.resolve(import.meta.dirname ?? ".", "../public/sitemap.xml");
fs.writeFileSync(outPath, sitemap, "utf-8");
console.log(`✅ Sitemap generated with ${routes.length} URLs → ${outPath}`);
