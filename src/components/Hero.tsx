import { useEffect, useRef, useState } from "react";
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
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-0 overflow-hidden bg-background">
      <div className="container">
        {/* Stacked rotating headline — ADKO style, left-aligned, monumental */}
        <div className="relative max-w-6xl">
          <div className="relative h-[28vw] min-h-[200px] md:min-h-[260px] lg:min-h-[300px]">
            {words.map((w, i) => (
              <h1
                key={w}
                className={`absolute inset-0 font-display text-[20vw] md:text-[14rem] lg:text-[16rem] text-foreground transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${
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
            {/* SR-only stable heading */}
            <span className="sr-only">Rebild — Creativity. Strategy. Content. Growth.</span>
          </div>

          <p className="mt-10 md:mt-14 text-base md:text-lg text-muted-foreground max-w-xl">
            We lead with content. We scale with digital. A creative studio building
            brands that earn attention.
          </p>
        </div>
      </div>

      {/* Tilted scattered card row — ADKO signature */}
      <div ref={railRef} className="relative mt-16 md:mt-24 h-[300px] sm:h-[380px] md:h-[480px]">
        <div className="absolute inset-x-0 bottom-[-40px] flex items-end justify-center gap-3 md:gap-6 px-4">
          {cards.map((c, i) => (
            <div
              key={i}
              className="relative shrink-0 w-[16vw] min-w-[110px] max-w-[200px] aspect-[3/4] rounded-2xl overflow-hidden bg-muted transition-all duration-500 hover:!rotate-0 hover:!translate-y-[-30px] hover:z-10"
              style={{
                transform: `rotate(${c.rotate}deg) translateY(${Math.abs(c.rotate) * 2}px)`,
                boxShadow: "0 30px 50px -20px rgba(0,0,0,0.25)",
              }}
            >
              <img
                src={c.src}
                alt="Rebild work"
                className="w-full h-full object-cover"
                loading={i < 3 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
