import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import { ArrowUpRight } from "lucide-react";

const items = [
  { src: work6, title: "Brewline Cafe", tag: "Brand · Content", span: "md:col-span-7" },
  { src: work4, title: "Stride Footwear", tag: "Product Shoot", span: "md:col-span-5" },
  { src: work2, title: "Night Drive Series", tag: "Videography", span: "md:col-span-5" },
  { src: work3, title: "Lumen Identity", tag: "Graphic Design", span: "md:col-span-7" },
  { src: work1, title: "Pulp & Co.", tag: "Packaging · Ads", span: "md:col-span-6" },
  { src: work5, title: "Drift Apparel", tag: "Lookbook", span: "md:col-span-6" },
];

const Work = () => {
  return (
    <section id="work" className="py-24 md:py-36 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold">
              ◉ Selected Work
            </span>
            <h2 className="mt-5 font-display text-6xl md:text-8xl text-foreground">
              Brands we've <br />
              <span className="text-primary">rebuilt.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            A snapshot of recent work across content, performance and design — for
            real brands shipping real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {items.map((it, i) => (
            <a
              key={i}
              href="#contact"
              className={`group relative overflow-hidden rounded-2xl bg-muted aspect-[4/5] md:aspect-[5/6] ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-background">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary">
                    {it.tag}
                  </p>
                  <h3 className="mt-2 font-display text-2xl md:text-4xl">
                    {it.title}
                  </h3>
                </div>
                <ArrowUpRight className="w-7 h-7 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
