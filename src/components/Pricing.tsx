import { Check } from "lucide-react";

const plans = [
  {
    name: "Videography",
    price: "₹25,000",
    unit: "/ 10 videos",
    desc: "Perfect for brands building a consistent reel & shorts presence.",
    features: [
      "10 short-form videos (≤60s)",
      "Concept + scripting support",
      "Pro shoot & editing",
      "Platform-ready exports",
      "1 round of revisions per video",
    ],
    highlight: false,
  },
  {
    name: "Digital Marketing",
    price: "₹20,000",
    unit: "/ month",
    desc: "Full social media management to grow & engage your audience.",
    features: [
      "Content calendar & strategy",
      "12 designed posts + 8 stories",
      "Community management",
      "Monthly analytics report",
      "Hashtag & SEO research",
    ],
    highlight: true,
  },
  {
    name: "Photography",
    price: "₹15,000",
    unit: "/ shoot day",
    desc: "Product, lifestyle or brand photography that converts.",
    features: [
      "Up to 8 hours on location",
      "30+ retouched final images",
      "Mood-board & art direction",
      "Commercial usage rights",
      "48-hour turnaround",
    ],
    highlight: false,
  },
  {
    name: "Graphic Design",
    price: "₹10,000",
    unit: "/ month",
    desc: "On-tap design for socials, ads, packaging & brand collateral.",
    features: [
      "20 design deliverables / month",
      "Brand kit & templates",
      "Unlimited revisions",
      "48h average turnaround",
      "Source files included",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-36 bg-muted/40">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
            ◉ Pricing
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl text-foreground">
            Simple, honest <span className="text-primary">pricing.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            No retainer surprises. Pick a service, scale anytime. Custom bundles
            available on request.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative p-7 rounded-3xl border transition-all duration-500 hover:-translate-y-2 ${
                p.highlight
                  ? "bg-foreground text-background border-foreground shadow-card"
                  : "bg-card border-border"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-7 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl">{p.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="font-display text-5xl">{p.price}</span>
                <span
                  className={`pb-2 text-sm ${
                    p.highlight ? "text-background/60" : "text-muted-foreground"
                  }`}
                >
                  {p.unit}
                </span>
              </div>
              <p
                className={`mt-3 text-sm ${
                  p.highlight ? "text-background/70" : "text-muted-foreground"
                }`}
              >
                {p.desc}
              </p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        p.highlight ? "text-primary" : "text-primary"
                      }`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-7 block w-full text-center px-5 py-3 rounded-full font-semibold uppercase tracking-wide text-sm transition-all ${
                  p.highlight
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-foreground text-background hover:bg-primary"
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Need something custom? <a href="#contact" className="text-primary font-semibold underline-offset-4 hover:underline">Talk to us →</a>
        </p>
      </div>
    </section>
  );
};

export default Pricing;
