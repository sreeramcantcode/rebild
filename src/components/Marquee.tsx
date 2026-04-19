const words = [
  "Creativity",
  "Strategy",
  "Content",
  "Performance",
  "Design",
  "Videography",
  "Photography",
  "Brand",
];

const Marquee = () => {
  const row = [...words, ...words, ...words];
  return (
    <section className="py-10 md:py-14 border-y border-border bg-background overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap items-center">
        {row.map((w, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="font-display text-5xl md:text-7xl text-foreground">
              {w}
            </span>
            <span className="w-3 h-3 rounded-full bg-primary shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
