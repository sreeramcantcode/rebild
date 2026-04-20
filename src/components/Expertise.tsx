import { Link } from "react-router-dom";

const items = [
  {
    num: "01",
    title: "Videography",
    desc: "Story-driven films, brand reels and social cuts that travel.",
  },
  {
    num: "02",
    title: "Graphic Design",
    desc: "Identity systems, packaging and campaign artwork with edge.",
  },
  {
    num: "03",
    title: "Photography",
    desc: "Editorial product, lifestyle and portrait shoots — built for the feed.",
  },
  {
    num: "04",
    title: "Digital Marketing",
    desc: "Performance content, organic growth and paid media that compounds.",
  },
];

const Expertise = () => {
  return (
    <section className="relative py-24 md:py-36 bg-background border-t border-border">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-24 items-end">
          <div className="md:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.3em] text-primary font-bold mb-6">
              ◉ Our expertise
            </p>
            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground tracking-wider leading-[0.9]">
              Everything <br />
              under <span className="text-primary">one roof.</span>
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-foreground/65 text-base md:text-lg leading-relaxed">
            Four disciplines, one studio. We move fast, ship sharp, and keep
            every pixel on brand.
          </p>
        </div>

        <div className="border-t border-border">
          {items.map((it) => (
            <Link
              key={it.num}
              to="/services"
              className="group relative block border-b border-border py-8 md:py-10 transition-colors hover:bg-card/40"
            >
              <div className="grid grid-cols-12 gap-6 items-center">
                <span className="col-span-2 md:col-span-1 text-[11px] uppercase tracking-[0.3em] text-foreground/40 font-bold">
                  {it.num}
                </span>
                <h3 className="col-span-10 md:col-span-5 font-display text-4xl md:text-6xl lg:text-7xl tracking-wider text-foreground transition-colors group-hover:text-primary">
                  {it.title}
                </h3>
                <p className="hidden md:block md:col-span-5 text-foreground/65 text-base md:text-lg leading-relaxed">
                  {it.desc}
                </p>
                <span className="hidden md:flex md:col-span-1 justify-end">
                  <span className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground/60 transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:rotate-45">
                    +
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
