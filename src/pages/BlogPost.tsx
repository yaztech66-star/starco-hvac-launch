import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";

const blogContent: Record<string, { title: string; date: string; category: string; content: string[] }> = {
  "signs-gas-furnace-needs-repair": {
    title: "5 Signs Your Gas Furnace Needs Repair",
    date: "2026-03-15",
    category: "Gas Heating",
    content: [
      "Your gas furnace is the heart of your home's heating system. When it's working properly, you barely notice it. But when problems develop, ignoring the warning signs can lead to a complete breakdown — often at the worst possible time.",
      "1. Unusual Noises: Banging, rattling, squealing, or clicking sounds from your furnace indicate mechanical issues. A failing blower motor, loose components, or a cracked heat exchanger can all produce alarming noises that warrant immediate professional inspection.",
      "2. Rising Energy Bills: If your heating costs are climbing without a corresponding increase in usage, your furnace may be losing efficiency. Dirty burners, clogged filters, or aging components force the system to work harder, consuming more gas.",
      "3. Uneven Heating: Cold spots in certain rooms while others are too warm suggest ductwork issues, a failing blower, or an improperly sized furnace. A professional assessment can identify the root cause.",
      "4. Frequent Cycling: If your furnace turns on and off more frequently than normal (short cycling), it may indicate a faulty thermostat, clogged filter, or overheating issue that needs attention.",
      "5. Yellow Pilot Light: A healthy gas furnace should have a blue flame. A yellow or flickering flame could indicate incomplete combustion and potential carbon monoxide production — a serious safety concern that requires immediate professional service.",
      "Don't wait for a complete failure. If you notice any of these signs, contact Starco HVAC for a professional diagnosis. Early intervention is safer, less expensive, and prevents the inconvenience of an unexpected breakdown.",
    ],
  },
  "benefits-of-gas-heating": {
    title: "The Benefits of Gas Heating for Canadian Homes",
    date: "2026-03-01",
    category: "Gas Heating",
    content: [
      "Natural gas remains the preferred heating fuel for millions of Canadian homeowners, and for good reason. Gas heating offers a compelling combination of efficiency, comfort, reliability, and affordability that's hard to match.",
      "Cost Efficiency: Natural gas is typically the most affordable heating fuel in Ontario and Quebec. A high-efficiency gas furnace (95%+ AFUE) converts nearly all the fuel it burns into usable heat, keeping your energy bills manageable even during our harsh winters.",
      "Fast, Powerful Heating: Gas furnaces deliver warm air quickly. Unlike heat pumps that produce a steady stream of moderately warm air, a gas furnace produces air temperatures of 120-140°F, warming your home rapidly when you need it most.",
      "Reliability: Gas furnaces are proven technology with decades of refinement. They work regardless of outdoor temperature, unlike air-source heat pumps that can struggle in extreme cold (though modern cold-climate models are improving rapidly).",
      "Modern gas furnaces are also remarkably clean-burning and can be paired with smart thermostats for precise temperature control and energy management. Many homeowners combine a gas furnace with a heat pump in a dual-fuel system for the best of both worlds.",
      "At Starco HVAC, our TSSA-certified technicians specialize in gas heating systems. Whether you're installing a new furnace or maintaining an existing one, we ensure your system operates safely and efficiently.",
    ],
  },
  "commercial-refrigeration-maintenance": {
    title: "How to Maintain Your Commercial Refrigeration",
    date: "2026-02-20",
    category: "Refrigeration",
    content: [
      "Commercial refrigeration equipment is a significant investment for any food service business. Proper maintenance not only prevents costly breakdowns but also ensures food safety, extends equipment life, and reduces energy costs.",
      "Clean Condenser Coils Monthly: Dirty condenser coils force the compressor to work harder, increasing energy consumption and accelerating wear. Clean coils with a brush or compressed air monthly, or more frequently in dusty environments.",
      "Check Door Seals Regularly: Damaged or worn gaskets allow cold air to escape, forcing the system to run longer. Test by placing a dollar bill in the door — if it slides out easily, the seal needs replacement.",
      "Monitor Temperature Logs: Keep daily temperature logs for all refrigeration units. Gradual temperature increases often indicate developing problems that can be addressed before they become emergencies.",
      "Schedule Professional Maintenance: Have a certified technician inspect your equipment at least twice a year. Professional service includes compressor testing, refrigerant level checks, electrical connection tightening, and defrost system calibration.",
      "Commercial refrigeration failures can result in thousands of dollars in lost inventory and potential health code violations. A proactive maintenance program with Starco HVAC protects your investment and keeps your business running smoothly.",
    ],
  },
  "heat-pump-vs-furnace": {
    title: "Heat Pump vs. Gas Furnace: Which Is Right for You?",
    date: "2026-02-10",
    category: "Heat Pumps",
    content: [
      "Choosing between a heat pump and a gas furnace is one of the most important HVAC decisions you'll make. Both systems have their strengths, and the best choice depends on your climate, home, energy costs, and personal preferences.",
      "Gas Furnace Advantages: Gas furnaces excel in extreme cold, delivering powerful heating regardless of outdoor temperature. They have lower upfront costs and use well-established infrastructure. If you already have a natural gas connection, a high-efficiency gas furnace is often the most economical choice.",
      "Heat Pump Advantages: Heat pumps provide both heating and cooling in one system, eliminating the need for a separate air conditioner. They're more energy-efficient than gas furnaces in moderate temperatures and produce no on-site emissions. Modern cold-climate heat pumps can operate effectively down to -25°C.",
      "Cost Comparison: While heat pumps have higher upfront costs, they can offer lower operating costs depending on local gas and electricity prices. Government rebates through programs like the Canada Greener Homes Grant can significantly offset the installation cost of a heat pump.",
      "The Dual-Fuel Option: Many homeowners are choosing dual-fuel systems that combine a heat pump with a gas furnace. The heat pump handles heating and cooling in moderate weather, while the gas furnace kicks in during extreme cold. This provides the best efficiency and comfort year-round.",
      "The right choice depends on your specific situation. Contact Starco HVAC for a free in-home assessment. We'll analyze your home, energy costs, and preferences to recommend the optimal heating solution.",
    ],
  },
  "when-to-replace-furnace": {
    title: "When to Replace vs. Repair Your Furnace",
    date: "2026-01-25",
    category: "Furnace Repair",
    content: [
      "Every furnace owner eventually faces the decision: repair the existing unit or invest in a new one? Making the right choice can save you thousands of dollars and years of frustration.",
      "The Age Factor: Most gas furnaces last 15-20 years with proper maintenance. If your furnace is over 15 years old, repair costs should be weighed carefully against the benefits of a new, more efficient system.",
      "The 50% Rule: A common guideline is that if a repair costs more than 50% of the price of a new furnace, replacement is usually the better investment. This is especially true for older units where additional repairs are likely.",
      "Efficiency Gains: Older furnaces operate at 60-80% AFUE (Annual Fuel Utilization Efficiency), while modern furnaces achieve 95-98% AFUE. Upgrading from an 80% to a 96% AFUE furnace can reduce your gas bills by up to 20%.",
      "Safety Considerations: Cracked heat exchangers, persistent carbon monoxide issues, or repeated ignition problems are safety concerns that often warrant replacement rather than repair.",
      "Comfort Factors: If your current furnace produces uneven heating, excessive noise, or poor air quality despite repairs, a new system with modern features like variable-speed blowers and multi-stage heating can dramatically improve comfort.",
      "At Starco HVAC, we provide honest assessments. We'll never recommend a replacement when a simple repair will do — and we'll never patch a system that should be replaced. Contact us for a free evaluation of your furnace.",
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogContent[slug] : null;

  if (!post) {
    return (
      <Layout>
        <SEO title="Post Not Found" description="Blog post not found." noindex />
        <div className="container section-padding text-center">
          <h1 className="text-3xl font-heading font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-accent hover:underline">Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.content[0].slice(0, 155)}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.date,
          author: { "@type": "Organization", name: "Starco HVAC Inc." },
        }}
      />

      <section className="section-padding">
        <article className="container max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <span className="bg-accent/10 text-accent px-2.5 py-0.5 rounded-full text-xs font-medium">{post.category}</span>
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {new Date(post.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">{post.title}</h1>
          <div className="space-y-5">
            {post.content.map((p, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed">{p}</p>
            ))}
          </div>
        </article>
      </section>

      <CTASection />
    </Layout>
  );
};

export default BlogPost;
