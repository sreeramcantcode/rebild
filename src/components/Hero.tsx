import { useEffect, useState } from "react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import { Link } from "react-router-dom";

const words = ["Bolder", "Sharper", "Louder", "Faster"];

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
      <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />

      <div className="container">
        {/* Stacked rotating headline */}
        <div className="relative max-w-6xl">
          <p className="mb-6 md:mb-10 text-[11px] md:text-xs uppercase tracking-[0.35em] text-foreground/55">
            Rebild — A creative studio
          </p>

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
            <span className="sr-only">Rebild — Bolder. Sharper. Louder. Faster.</span>
          </div>

          <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-6 text-base md:text-lg text-foreground/70 max-w-xl leading-relaxed">
              Rebild is a creative studio for ambitious brands — built around
              ideas that move people, products that earn attention and growth
              that actually compounds.
            </p>
            <div className="md:col-span-6 md:justify-self-end flex items-center gap-4">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-7 py-4 rounded-full bg-primary text-primary-foreground text-[12px] font-bold uppercase tracking-[0.2em] overflow-hidden transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-15px_hsl(var(--primary)/0.7)]"
              >
                <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]" />
                <span className="relative group-hover:text-background transition-colors duration-500">
                  Start a project
                </span>
              </Link>
              <Link
                to="/work"
                className="hidden md:inline-flex text-[12px] font-semibold uppercase tracking-[0.2em] text-foreground/70 hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                See our work →
              </Link>
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
