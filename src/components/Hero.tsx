import { useEffect, useState } from "react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

const words = ["Creativity.", "Strategy.", "Content.", "Growth."];

const images = [
  { src: work1, rotate: -14, y: 40 },
  { src: work6, rotate: -8, y: 10 },
  { src: work3, rotate: -3, y: 0 },
  { src: work5, rotate: 3, y: 0 },
  { src: work2, rotate: 8, y: 10 },
  { src: work4, rotate: 14, y: 40 },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative pt-32 pb-0 overflow-hidden">
      <div className="container text-center">
        <div className="relative mx-auto max-w-5xl">
          <div className="h-[18vw] min-h-[140px] sm:min-h-[180px] md:min-h-[220px] flex items-center justify-center">
            {words.map((w, i) => (
              <h1
                key={w}
                className={`absolute font-display text-[16vw] md:text-[12rem] leading-none text-foreground transition-all duration-700 ${
                  i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {w.replace(".", "")}
                <span className="text-primary">.</span>
              </h1>
            ))}
          </div>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            We lead with content. We scale with digital. A creative agency built to
            <span className="text-foreground font-semibold"> rebuild </span>
            brands from the ground up.
          </p>
        </div>

        {/* tilted image fan */}
        <div className="relative mt-20 md:mt-28 h-[280px] sm:h-[360px] md:h-[460px]">
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-2 sm:gap-3 md:gap-5">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative shrink-0 w-[14vw] min-w-[90px] max-w-[180px] aspect-[3/4] rounded-2xl overflow-hidden shadow-card transition-transform duration-500 hover:!rotate-0 hover:!translate-y-[-20px]"
                style={{
                  transform: `rotate(${img.rotate}deg) translateY(${img.y}px)`,
                }}
              >
                <img
                  src={img.src}
                  alt="Rebild work showcase"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
