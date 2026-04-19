import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

const items = [
  { src: work6, title: "Cafe Brand Identity", tag: "Branding" },
  { src: work2, title: "Night City Campaign", tag: "Videography" },
  { src: work4, title: "Britime Watches", tag: "Product Shoot" },
  { src: work3, title: "Poster Series", tag: "Graphic Design" },
  { src: work5, title: "Editorial Lookbook", tag: "Photography" },
  { src: work1, title: "Packaging Mockup", tag: "Branding" },
];

const Work = () => {
  return (
    <section id="work" className="py-24 md:py-36 bg-foreground text-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
              ◉ Our work
            </span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl">
              Brands we've helped <span className="text-primary">rebuild.</span>
            </h2>
          </div>
          <p className="text-background/70 max-w-md">
            A glimpse of our recent work across content, performance, and design.
            Real results for real brands.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((it, i) => (
            <a
              key={i}
              href="#contact"
              className={`group relative overflow-hidden rounded-3xl ${
                i % 5 === 0 ? "md:row-span-2 aspect-[3/4] md:aspect-[3/5]" : "aspect-square"
              }`}
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary font-semibold">
                    {it.tag}
                  </p>
                  <h3 className="mt-1 font-display text-2xl md:text-3xl">{it.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
