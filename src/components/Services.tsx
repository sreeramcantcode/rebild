import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    num: "01",
    title: "Digital Marketing",
    desc: "End-to-end social, content strategy and community building. We turn channels into compounding growth engines.",
    tag: null,
  },
  {
    num: "02",
    title: "Meta Ads",
    desc: "Performance-driven Facebook & Instagram campaigns engineered for ROAS — funnels, creatives, scaling.",
    tag: "Coming Soon",
  },
  {
    num: "03",
    title: "Graphic Design",
    desc: "Identities, social creatives, packaging and brand systems. Bold, considered, scroll-stopping.",
    tag: null,
  },
  {
    num: "04",
    title: "Videography",
    desc: "Reels, brand films and product videos. Concept to edit, built for every platform that matters.",
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
          <div className="md:col-span-7">
            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground tracking-wider">
              We get the <br /> job <span className="text-primary">done.</span>
            </h2>
          </div>
          <div className="md:col-span-5 flex items-end">
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
              A full-stack creative team under one roof. From strategy to shoot,
              from design to distribution — whatever your brand needs to grow,
              we build it.
            </p>
          </div>
        </div>

        <div className="border-t border-foreground/30">
          {services.map((s) => (
            <Link
              key={s.num}
              to="/contact"
              className="group grid grid-cols-12 gap-4 md:gap-8 items-center py-7 md:py-9 border-b border-foreground/15 hover:border-primary transition-colors"
            >
              <span className="col-span-2 md:col-span-1 font-display text-2xl md:text-3xl text-foreground/40 group-hover:text-primary transition-colors tracking-wider">
                {s.num}
              </span>
              <div className="col-span-10 md:col-span-4 flex items-center gap-3 flex-wrap">
                <h3 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground tracking-wider group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                {s.tag && (
                  <span className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full bg-primary text-primary-foreground">
                    {s.tag}
                  </span>
                )}
              </div>
              <p className="hidden md:block md:col-span-6 text-foreground/60 text-base">
                {s.desc}
              </p>
              <div className="col-span-12 md:col-span-1 md:justify-self-end">
                <ArrowUpRight className="w-7 h-7 text-foreground/60 transition-all group-hover:text-primary group-hover:rotate-45" />
              </div>
              <p className="md:hidden col-span-12 text-foreground/60 text-sm -mt-2">
                {s.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
