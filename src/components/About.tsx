const stats = [
  { num: "50+", label: "Projects shipped" },
  { num: "20+", label: "Brands grown" },
  { num: "5", label: "Core services" },
  { num: "24h", label: "Avg. response" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-36 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold">
              ◉ About
            </span>
            <h2 className="mt-5 font-display text-6xl md:text-8xl text-foreground">
              Built to <br /><span className="text-primary">rebuild.</span>
            </h2>
            <div className="mt-10 space-y-5 text-lg text-muted-foreground max-w-xl">
              <p>
                Rebild is a young, sharp digital studio. We work with founders and
                brands who want more than pretty posts — we build content engines,
                design systems and ad funnels that compound.
              </p>
              <p>
                One team. One roof. Strategy, content, design, video and growth —
                without the agency overhead.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden self-start">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-background p-8 aspect-square flex flex-col justify-between"
              >
                <span className="font-display text-5xl md:text-6xl text-foreground">
                  {s.num}
                  <span className="text-primary">.</span>
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
