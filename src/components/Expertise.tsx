import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import reelFashion from "@/assets/reel-fashion.jpg";
import reelCosmetic from "@/assets/reel-cosmetic.jpg";
import reelWatch from "@/assets/reel-watch.jpg";
import reelDrink from "@/assets/reel-drink.jpg";

const items = [
  {
    num: "01",
    title: "Videography",
    desc: "Story-driven films, brand reels and social cuts that travel.",
    img: reelFashion,
  },
  {
    num: "02",
    title: "Graphic Design",
    desc: "Identity systems, packaging and campaign artwork with edge.",
    img: reelCosmetic,
  },
  {
    num: "03",
    title: "Photography",
    desc: "Editorial product, lifestyle and portrait shoots — built for the feed.",
    img: reelWatch,
  },
  {
    num: "04",
    title: "Digital Marketing",
    desc: "Performance content, organic growth and paid media that compounds.",
    img: reelDrink,
  },
];

const Expertise = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

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

        <div
          ref={wrapRef}
          onMouseMove={handleMove}
          onMouseLeave={() => setHovered(null)}
          className="relative border-t border-border"
        >
          {/* Floating preview that follows the cursor */}
          <div
            className={`pointer-events-none absolute z-20 hidden md:block w-[22vw] max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-primary/30 shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.5)] transition-[opacity,transform] duration-500 ease-out ${
              hovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{
              transform: `translate(${pos.x - 170}px, ${pos.y - 200}px) ${
                hovered ? "scale(1)" : "scale(0.95)"
              }`,
            }}
          >
            {items.map((it) => (
              <img
                key={it.num}
                src={it.img}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  hovered === it.num ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          {items.map((it) => (
            <Link
              key={it.num}
              to="/services"
              onMouseEnter={() => setHovered(it.num)}
              className="group relative block border-b border-border py-8 md:py-10 transition-colors"
            >
              <div className="grid grid-cols-12 gap-6 items-center">
                <span className="col-span-2 md:col-span-1 text-[11px] uppercase tracking-[0.3em] text-foreground/40 font-bold">
                  {it.num}
                </span>
                <h3
                  className={`col-span-10 md:col-span-5 font-display text-4xl md:text-6xl lg:text-7xl tracking-wider transition-all duration-500 ${
                    hovered === it.num
                      ? "text-primary translate-x-3"
                      : hovered
                      ? "text-foreground/30"
                      : "text-foreground"
                  }`}
                >
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
