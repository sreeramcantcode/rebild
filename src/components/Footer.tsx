import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram } from "lucide-react";
import footerFigure from "@/assets/footer-figure-v2.jpg";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[44rem] bg-gradient-to-b from-card via-card to-background" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[16rem] bg-gradient-to-b from-background via-background/85 to-transparent" />
      <div className="pointer-events-none absolute -top-24 right-[-8rem] h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-48 left-[-8rem] h-[18rem] w-[18rem] rounded-full bg-primary/6 blur-3xl" />

      <div className="container relative pt-20 sm:pt-24 lg:pt-28">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-foreground/45">
              Get in touch
            </p>
            <h2 className="mt-5 max-w-5xl font-display text-[3.6rem] leading-[0.88] tracking-wider text-foreground sm:text-[4.75rem] md:text-[5.5rem] lg:text-[7.1rem]">
              Ready to bring your vision <span className="text-primary">to life?</span>
              <br />
              Contact Rebild today!
            </h2>

            <a
              href="mailto:rebild@gmail.com"
              className="group mt-10 inline-flex w-full max-w-[32rem] items-center justify-between gap-6 border-b border-foreground/20 pb-4 transition-colors hover:border-primary"
            >
              <span className="text-sm uppercase tracking-[0.28em] text-foreground/80 transition-colors group-hover:text-primary">
                Get in touch
              </span>
              <ArrowUpRight className="h-5 w-5 text-foreground/60 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
            </a>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/60 md:text-lg">
              We’d love to hear from you. Whether you have a question, feedback,
              or a project idea — our team responds within 24 hours.
            </p>
          </div>

          <div className="relative lg:col-span-5">
            <div className="pointer-events-none absolute inset-x-8 bottom-0 h-28 bg-gradient-to-t from-background via-background/80 to-transparent" />
            <div className="pointer-events-none absolute right-10 bottom-10 h-40 w-40 rounded-full bg-primary/16 blur-3xl" />
            <img
              src={footerFigure}
              alt="Creative collaborator seated on sculptural orange blocks"
              width={960}
              height={1200}
              loading="lazy"
              className="relative ml-auto w-full max-w-[23rem] object-contain opacity-95 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_88%,transparent_100%)] sm:max-w-[26rem] md:max-w-[30rem] lg:max-w-[34rem]"
            />
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent lg:mt-4" />

        <div className="grid gap-10 py-14 md:grid-cols-12 md:gap-8 md:py-16">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
              <span className="font-display text-3xl tracking-wider text-foreground">
                REBILD<span className="text-primary">.</span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-lg leading-relaxed text-foreground/62">
              A creative studio specialising in videography, graphic design,
              photography, and digital marketing — building brands that earn
              attention and convert it.
            </p>

            <a
              href="https://www.instagram.com/rebild_/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="mt-8 flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground/70 transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/38">
              Quick Links
            </p>
            <ul className="space-y-4 text-sm uppercase tracking-[0.18em] text-foreground/80">
              <li><Link to="/" className="transition-colors hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-primary">About</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-primary">Contact</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-primary">Our Services</Link></li>
              <li><Link to="/work" className="transition-colors hover:text-primary">Our Work</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/38">
              Explore
            </p>
            <ul className="space-y-4 text-sm uppercase tracking-[0.18em] text-foreground/80">
              <li><Link to="/services" className="transition-colors hover:text-primary">Our Photography</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-primary">Our Videography</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-primary">Graphic Design</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-primary">Digital Marketing</Link></li>
              <li>
                <a
                  href="mailto:rebild@gmail.com"
                  className="normal-case tracking-normal text-foreground/72 transition-colors hover:text-primary"
                >
                  rebild@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="overflow-hidden pb-6">
          <div
            className="font-display whitespace-nowrap leading-[0.82] tracking-wider text-foreground/[0.055]"
            style={{ fontSize: "clamp(5rem, 18vw, 18rem)" }}
          >
            REBILD<span className="text-primary/20">.</span>
          </div>
        </div>
      </div>

      <div className="relative border-t border-border/80 bg-background/95">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/58">
            © {new Date().getFullYear()} <span className="font-bold text-foreground">REBILD</span>
          </p>
          <div className="flex items-center gap-5 text-xs uppercase tracking-[0.2em] text-foreground/58 md:gap-6">
            <Link to="/privacy" className="transition-colors hover:text-primary">Privacy Policy</Link>
            <span className="text-foreground/25">|</span>
            <Link to="/terms" className="transition-colors hover:text-primary">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
