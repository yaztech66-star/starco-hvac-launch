import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

const posts = [
  {
    slug: "signs-gas-furnace-needs-repair",
    title: "5 Signs Your Gas Furnace Needs Repair",
    excerpt: "Don't wait for a complete breakdown. Learn the warning signs that your gas furnace needs professional attention before it fails on the coldest night of the year.",
    date: "2026-03-15",
    category: "Gas Heating",
  },
  {
    slug: "benefits-of-gas-heating",
    title: "The Benefits of Gas Heating for Canadian Homes",
    excerpt: "Gas heating remains one of the most efficient and cost-effective ways to heat your home in Canada. Here's why so many homeowners choose natural gas furnaces.",
    date: "2026-03-01",
    category: "Gas Heating",
  },
  {
    slug: "commercial-refrigeration-maintenance",
    title: "How to Maintain Your Commercial Refrigeration",
    excerpt: "Proper maintenance of walk-in coolers, freezers, and display cases can prevent costly breakdowns and extend equipment life by years. Follow these expert tips.",
    date: "2026-02-20",
    category: "Refrigeration",
  },
  {
    slug: "heat-pump-vs-furnace",
    title: "Heat Pump vs. Gas Furnace: Which Is Right for You?",
    excerpt: "Both systems have their advantages. We break down the costs, efficiency, and comfort factors to help you make the best decision for your home.",
    date: "2026-02-10",
    category: "Heat Pumps",
  },
  {
    slug: "when-to-replace-furnace",
    title: "When to Replace vs. Repair Your Furnace",
    excerpt: "Furnace repair isn't always the best investment. Learn the factors that determine whether it's time to repair your existing furnace or invest in a new one.",
    date: "2026-01-25",
    category: "Furnace Repair",
  },
];

const BlogPage = () => (
  <Layout>
    <SEO
      title="HVAC Blog - Heating, Cooling & Repair Tips"
      description="Expert tips and guides on gas heating, furnace repair, air conditioning, and commercial refrigeration from the Starco HVAC team."
    />

    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">HVAC Blog</h1>
        <p className="text-primary-foreground/70 text-lg">Expert tips, guides, and industry insights from our certified technicians.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container max-w-4xl">
        <div className="space-y-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                <span className="bg-accent/10 text-accent px-2.5 py-0.5 rounded-full text-xs font-medium">{post.category}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {new Date(post.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-3">
                <Link to={`/blog/${post.slug}`} className="hover:text-accent transition-colors">{post.title}</Link>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="text-sm font-medium text-accent flex items-center gap-1 hover:gap-2 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default BlogPage;
