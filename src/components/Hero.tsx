import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

const words = ["Creativity", "Strategy", "Content", "Growth"];

const cards = [
  { src: work1, rotate: -10 },
  { src: work6, rotate: -5 },
  { src: work3, rotate: -2 },
  { src: work5, rotate: 2 },
  { src: work2, rotate: 5 },
  { src: work4, rotate: 10 },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="top"
      className="relative pt-36 md:pt-44 pb-0 overflow-hidden bg-background grain"
    >
      {/* faint orange glow corner */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />

      <div className="container">
        {/* Eyebrow row */}
        <div className="flex items-center justify-between mb-10 md:mb-14">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-foreground/60">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for projects · 2025
          </div>
          <div className="hidden md:block text-[11px] uppercase tracking-[0.3em] text-foreground/50">
            A Creative Studio · IND
          </div>
        </div>

        {/* Stacked rotating headline */}
        <div className="relative max-w-6xl">
          <div className="relative h-[24vw] min-h-[200px] md:min-h-[260px] lg:min-h-[320px]">
            {words.map((w, i) => (
              <h1
                key={w}
                className={`absolute inset-0 font-display text-[20vw] md:text-[16rem] lg:text-[19rem] text-foreground transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                  i === index
                    ? "opacity-100 translate-y-0"
                    : i === (index - 1 + words.length) % words.length
                    ? "opacity-0 -translate-y-6"
                    : "opacity-0 translate-y-6"
                }`}
                aria-hidden={i !== index}
              >
                {w}
                <span className="text-primary">.</span>
              </h1>
            ))}
            <span className="sr-only">Rebild — Creativity. Strategy. Content. Growth.</span>
          </div>

          <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-6 text-base md:text-lg text-foreground/70 max-w-xl leading-relaxed">
              We lead with content. We scale with digital. Rebild is a creative
              studio building brands that earn attention — and convert it.
            </p>
            <div className="md:col-span-6 md:justify-self-end flex items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-full bg-primary text-primary-foreground text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-all"
              >
                Start a project
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#work"
                className="hidden md:inline-flex text-[12px] font-semibold uppercase tracking-[0.2em] text-foreground/70 hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                See our work →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tilted scattered card row */}
      <div className="relative mt-20 md:mt-28 h-[300px] sm:h-[380px] md:h-[480px]">
        <div className="absolute inset-x-0 bottom-[-40px] flex items-end justify-center gap-3 md:gap-6 px-4">
          {cards.map((c, i) => (
            <div
              key={i}
              className="relative shrink-0 w-[16vw] min-w-[110px] max-w-[210px] aspect-[3/4] rounded-2xl overflow-hidden bg-muted ring-1 ring-border/60 transition-all duration-500 hover:!rotate-0 hover:!translate-y-[-30px] hover:z-10"
              style={{
                transform: `rotate(${c.rotate}deg) translateY(${Math.abs(c.rotate) * 2}px)`,
                boxShadow: "0 30px 60px -20px hsl(0 0% 0% / 0.6)",
              }}
            >
              <img
                src={c.src}
                alt="Rebild work"
                className="w-full h-full object-cover"
                loading={i < 3 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
