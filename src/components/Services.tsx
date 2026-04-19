import { Megaphone, Target, Palette, Video, Camera } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "End-to-end social media management, content strategy, community building & growth campaigns that move the needle.",
    tag: "Available",
  },
  {
    icon: Target,
    title: "Meta Ads",
    desc: "Performance-driven Facebook & Instagram ad campaigns engineered for ROAS. Coming soon to Rebild.",
    tag: "Coming Soon",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    desc: "Logos, brand identities, social creatives, posters & packaging. Bold visuals that make your brand impossible to scroll past.",
    tag: "Available",
  },
  {
    icon: Video,
    title: "Videography",
    desc: "Reels, shorts, brand films & product videos shot and edited to perform on every platform.",
    tag: "Available",
  },
  {
    icon: Camera,
    title: "Photography",
    desc: "Product, lifestyle and brand shoots that turn first impressions into conversions.",
    tag: "Available",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-36">
      <div className="container">
        <div className="max-w-3xl">
          <span className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
            ◉ What we do
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl text-foreground">
            We get the job <span className="text-primary">done.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A full-stack creative team under one roof — from strategy to shoot, from
            design to distribution. Whatever your brand needs to grow, we build it.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`group relative p-8 rounded-3xl border border-border bg-card hover:bg-foreground hover:text-background transition-all duration-500 ${
                i === 0 ? "lg:col-span-2 bg-foreground text-background" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`p-3 rounded-2xl ${
                    i === 0
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground group-hover:bg-primary group-hover:text-primary-foreground"
                  } transition-colors`}
                >
                  <s.icon className="w-6 h-6" />
                </div>
                <span
                  className={`text-xs uppercase tracking-wider px-3 py-1 rounded-full ${
                    s.tag === "Coming Soon"
                      ? "bg-primary text-primary-foreground"
                      : i === 0
                      ? "bg-background/10 text-background"
                      : "bg-muted text-muted-foreground group-hover:bg-background/10 group-hover:text-background"
                  }`}
                >
                  {s.tag}
                </span>
              </div>
              <h3 className="mt-10 font-display text-3xl md:text-4xl">{s.title}</h3>
              <p
                className={`mt-3 text-base leading-relaxed ${
                  i === 0 ? "text-background/70" : "text-muted-foreground group-hover:text-background/70"
                }`}
              >
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
