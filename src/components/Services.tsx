import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Digital Marketing",
    desc: "End-to-end social management, content strategy and community building. We turn your channels into a growth engine.",
    tag: null,
  },
  {
    num: "02",
    title: "Meta Ads",
    desc: "Performance-driven Facebook & Instagram ad campaigns engineered for ROAS. Launching at Rebild soon.",
    tag: "Coming Soon",
  },
  {
    num: "03",
    title: "Graphic Design",
    desc: "Logos, identities, social creatives and packaging. Bold, clean visuals that stop the scroll.",
    tag: null,
  },
  {
    num: "04",
    title: "Videography",
    desc: "Reels, shorts, brand films and product videos — shot, edited and built for every platform.",
    tag: null,
  },
  {
    num: "05",
    title: "Photography",
    desc: "Product, lifestyle and brand shoots that turn first impressions into conversions.",
    tag: null,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-36 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-24">
          <div className="md:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold">
              ◉ Services
            </span>
            <h2 className="mt-5 font-display text-6xl md:text-8xl text-foreground">
              We get the <br /> job <span className="text-primary">done.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-base md:text-lg text-muted-foreground">
              A full-stack creative team under one roof. From strategy to shoot,
              from design to distribution — whatever your brand needs to grow,
              we build it.
            </p>
          </div>
        </div>

        {/* Editorial list — ADKO style numbered rows */}
        <div className="border-t border-foreground">
          {services.map((s) => (
            <a
              key={s.num}
              href="#contact"
              className="group grid grid-cols-12 gap-4 md:gap-8 items-center py-8 md:py-10 border-b border-foreground/15 hover:border-foreground transition-colors"
            >
              <span className="col-span-2 md:col-span-1 font-display text-2xl md:text-3xl text-muted-foreground group-hover:text-primary transition-colors">
                {s.num}
              </span>
              <div className="col-span-10 md:col-span-4 flex items-center gap-3 flex-wrap">
                <h3 className="font-display text-3xl md:text-5xl text-foreground">
                  {s.title}
                </h3>
                {s.tag && (
                  <span className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full bg-primary text-primary-foreground">
                    {s.tag}
                  </span>
                )}
              </div>
              <p className="hidden md:block md:col-span-6 text-muted-foreground text-base">
                {s.desc}
              </p>
              <div className="col-span-12 md:col-span-1 md:justify-self-end">
                <ArrowUpRight className="w-7 h-7 text-foreground transition-all group-hover:text-primary group-hover:rotate-45" />
              </div>
              <p className="md:hidden col-span-12 text-muted-foreground text-sm -mt-2">
                {s.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
