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
  const row = [...words, ...words];
  return (
    <section className="py-8 border-y border-border bg-foreground text-background overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="font-display text-5xl md:text-6xl tracking-tight flex items-center gap-12">
            {w}
            <span className="text-primary">●</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
