import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Ottawa, ON",
    text: "Starco installed our new gas furnace in record time. The team was professional, clean, and thorough. Our heating bills dropped 30% — highly recommend!",
    rating: 5,
  },
  {
    name: "David K.",
    location: "Toronto, ON",
    text: "Emergency repair on a Friday night — they arrived within an hour and had our AC running perfectly. Outstanding service when we needed it most.",
    rating: 5,
  },
  {
    name: "Restaurant Le Jardin",
    location: "Gatineau, QC",
    text: "Starco handles all our commercial kitchen ventilation and refrigeration. Reliable, knowledgeable, and always on time. They keep our kitchen running.",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section className="section-padding bg-muted">
      <div className="container max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10">What Our Clients Say</h2>
        <div className="bg-card rounded-xl p-8 md:p-10 shadow-sm border relative">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>
          <blockquote className="text-lg leading-relaxed mb-6 text-foreground/90">"{t.text}"</blockquote>
          <p className="font-semibold">{t.name}</p>
          <p className="text-sm text-muted-foreground">{t.location}</p>

          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}
              className="p-2 rounded-full bg-secondary hover:bg-accent/10 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIdx((idx + 1) % testimonials.length)}
              className="p-2 rounded-full bg-secondary hover:bg-accent/10 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
