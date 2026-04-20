import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import reelWatch from "@/assets/reel-watch.jpg";
import reelSneaker from "@/assets/reel-sneaker.jpg";
import reelCosmetic from "@/assets/reel-cosmetic.jpg";
import reelDrink from "@/assets/reel-drink.jpg";
import reelPackaging from "@/assets/reel-packaging.jpg";
import reelHeadphones from "@/assets/reel-headphones.jpg";
import reelFashion from "@/assets/reel-fashion.jpg";
import reelCoffee from "@/assets/reel-coffee.jpg";

const words = ["CONTENT", "STORIES", "BRANDS", "GROWTH"];

const reel = [
  { src: reelWatch, label: "Timepiece Co." },
  { src: reelSneaker, label: "Stride Athletics" },
  { src: reelCosmetic, label: "Hue Beauty" },
  { src: reelDrink, label: "Volt Beverages" },
  { src: reelPackaging, label: "Noir Skincare" },
  { src: reelHeadphones, label: "Sonic Audio" },
  { src: reelFashion, label: "Ember Apparel" },
  { src: reelCoffee, label: "Brewline Cafe" },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), 1800);
    return () => clearInterval(t);
  }, []);

  const reelDoubled = [...reel, ...reel];

  return (
    <section
      id="top"
      className="relative pt-32 md:pt-40 pb-0 overflow-hidden bg-background grain"
    >
      <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />

      {/* Centered, ADKO-style oversized rotating word */}
      <div className="container text-center">
        <p className="mb-6 text-[11px] md:text-xs uppercase tracking-[0.4em] text-foreground/55">
          A creative studio for ambitious brands
        </p>

        <div className="relative mx-auto h-[18vw] min-h-[140px] md:min-h-[200px] lg:min-h-[260px] flex items-center justify-center">
          {words.map((w, i) => (
            <h1
              key={w}
              className={`absolute font-display text-[18vw] md:text-[14rem] lg:text-[17rem] leading-none text-foreground transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                i === index
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-8 blur-sm"
              }`}
              aria-hidden={i !== index}
            >
              {w}
              <span className="text-primary">.</span>
            </h1>
          ))}
          <span className="sr-only">Rebild — Content. Stories. Brands. Growth.</span>
        </div>

        <p className="mx-auto mt-8 md:mt-10 max-w-2xl text-base md:text-lg text-foreground/70 leading-relaxed">
          We build brands that move — through content that stops the scroll,
          design that earns attention, and campaigns that compound.
        </p>

        <div className="mt-10 flex items-center justify-center gap-6">
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground text-[12px] font-bold uppercase tracking-[0.2em] overflow-hidden transition-transform duration-500 ease-out hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]" />
            <span className="relative group-hover:text-background transition-colors duration-500">
              Start a project
            </span>
          </Link>
          <Link
            to="/work"
            className="hidden md:inline-flex text-[12px] font-semibold uppercase tracking-[0.2em] text-foreground/70 hover:text-primary transition-colors"
          >
            See our work
          </Link>
        </div>
      </div>

      {/* Continuous moving reel of brand mockups */}
      <div className="relative mt-20 md:mt-28">
        <div className="flex gap-5 md:gap-7 w-max animate-marquee will-change-transform">
          {reelDoubled.map((c, i) => (
            <div
              key={i}
              className="relative shrink-0 w-[58vw] sm:w-[40vw] md:w-[26vw] lg:w-[22vw] max-w-[360px] aspect-[3/4] rounded-2xl overflow-hidden bg-muted ring-1 ring-border/60 group"
            >
              <img
                src={c.src}
                alt={c.label}
                width={768}
                height={1024}
                loading={i < 4 ? "eager" : "lazy"}
                className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary">
                  Brand mockup
                </p>
                <p className="mt-1 font-display text-2xl md:text-3xl text-foreground tracking-wider">
                  {c.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
