const stats = [
  { num: "50+", label: "Projects delivered" },
  { num: "20+", label: "Happy clients" },
  { num: "5", label: "Core services" },
  { num: "100%", label: "Hands-on team" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
            ◉ About Rebild
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl text-foreground">
            Built to <span className="text-primary">rebuild.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Rebild is a young, sharp, and slightly obsessive digital marketing studio.
            We partner with founders and brands who want more than pretty posts —
            we build content engines, design systems, and ad funnels that compound.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            One team. One roof. Strategy, content, design, video, and growth — without
            the agency overhead.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-8 rounded-3xl bg-foreground text-background flex flex-col justify-between aspect-square"
            >
              <span className="font-display text-6xl md:text-7xl text-primary">
                {s.num}
              </span>
              <span className="text-sm uppercase tracking-widest text-background/70">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
