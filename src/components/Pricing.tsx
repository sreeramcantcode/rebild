import { Check, ArrowUpRight } from "lucide-react";

const plans = [
  {
    name: "Videography",
    price: "₹25,000",
    unit: "/ 10 videos",
    features: [
      "10 short-form videos (≤60s)",
      "Concept + scripting",
      "Pro shoot & editing",
      "Platform-ready exports",
      "1 revision per video",
    ],
  },
  {
    name: "Digital Marketing",
    price: "₹20,000",
    unit: "/ month",
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
    features: [
      "Up to 8 hours on location",
      "30+ retouched final images",
      "Mood-board & art direction",
      "Commercial usage rights",
      "48-hour turnaround",
    ],
  },
  {
    name: "Graphic Design",
    price: "₹10,000",
    unit: "/ month",
    features: [
      "20 deliverables / month",
      "Brand kit & templates",
      "Unlimited revisions",
      "48h average turnaround",
      "Source files included",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-36 bg-background border-y border-border">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-bold inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Pricing
            </span>
            <h2 className="mt-6 font-display text-6xl md:text-8xl lg:text-9xl text-foreground tracking-wider">
              Simple, honest <br />
              <span className="text-primary">pricing.</span>
            </h2>
          </div>
          <div className="md:col-span-5 flex items-end">
            <p className="text-foreground/60 text-lg leading-relaxed">
              No retainer surprises. Pick a service, scale anytime. Custom bundles
              available on request.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden ring-1 ring-border">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative p-7 lg:p-8 flex flex-col transition-colors ${
                p.highlight
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-card-foreground hover:bg-muted"
              }`}
            >
              {p.highlight && (
                <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-background text-primary">
                  Popular
                </span>
              )}
              <h3 className="font-display text-3xl tracking-wider">{p.name}</h3>
              <div className="mt-6 flex items-end gap-1.5">
                <span className="font-display text-5xl lg:text-6xl tracking-wider">
                  {p.price}
                </span>
                <span
                  className={`pb-2 text-sm ${
                    p.highlight ? "text-primary-foreground/80" : "text-foreground/60"
                  }`}
                >
                  {p.unit}
                </span>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        p.highlight ? "text-primary-foreground" : "text-primary"
                      }`}
                    />
                    <span className={p.highlight ? "" : "text-foreground/85"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-between gap-2 px-5 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all ${
                  p.highlight
                    ? "bg-background text-foreground hover:bg-foreground hover:text-background"
                    : "bg-primary text-primary-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                Get started
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-foreground/60">
          Need something custom?{" "}
          <a href="#contact" className="text-primary font-semibold hover:underline">
            Talk to us →
          </a>
        </p>
      </div>
    </section>
  );
};

export default Pricing;
