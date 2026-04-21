import { Link } from "react-router-dom";
import { Instagram, ArrowUpRight } from "lucide-react";
import contactFigure from "@/assets/contact-figure.jpg";

const Footer = () => {
  return (
    <footer className="bg-background">
      {/* CTA band — dark with orange accent + figure */}
      <div className="relative bg-card border-t border-border overflow-hidden">
        {/* Soft orange glow */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

        <div className="container relative grid md:grid-cols-12 gap-10 pt-20 pb-10 items-end">
          {/* Left — headline + CTA */}
          <div className="md:col-span-7">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-wider text-foreground">
              Ready to bring <br />
              your vision <span className="text-primary">to life?</span>
              <br />
              Contact Rebild today!
            </h2>

            <a
              href="mailto:rebild@gmail.com"
              className="group mt-12 inline-flex items-center justify-between gap-6 w-full max-w-md border-b border-foreground/30 pb-3 hover:border-primary transition-colors"
            >
              <span className="uppercase tracking-[0.25em] text-sm text-foreground/80 group-hover:text-primary transition-colors">
                Get in touch
              </span>
              <ArrowUpRight className="w-5 h-5 text-foreground/60 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

            <p className="mt-8 max-w-md text-foreground/60 leading-relaxed">
              We'd love to hear from you. Whether you have a question, feedback,
              or a project idea — our team responds within 24 hours.
            </p>
          </div>

          {/* Right — figure */}
          <div className="md:col-span-5 self-end">
            <img
              src={contactFigure}
              alt="Creative collaborator on orange blocks"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-auto object-contain max-h-[520px] ml-auto"
            />
          </div>
        </div>
      </div>

      {/* Footer columns — dark */}
      <div className="bg-background border-t border-border">
        <div className="container pt-16 pb-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="font-display text-3xl tracking-wider text-foreground">
                REBILD<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed text-foreground/60">
              A creative studio specialising in videography, graphic design,
              photography, and digital marketing — building brands that earn
              attention and convert it.
            </p>
            <a
              href="https://www.instagram.com/rebild_/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="mt-8 w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-5 text-foreground/40">
              Quick Links
            </p>
            <ul className="space-y-3 uppercase tracking-[0.15em] text-sm text-foreground/80">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/work" className="hover:text-primary transition-colors">Our Work</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-5 text-foreground/40">
              Explore
            </p>
            <ul className="space-y-3 uppercase tracking-[0.15em] text-sm text-foreground/80">
              <li><Link to="/services" className="hover:text-primary transition-colors">Our Photography</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Our Videography</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Graphic Design</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
              <li>
                <a href="mailto:rebild@gmail.com" className="hover:text-primary transition-colors normal-case tracking-normal">
                  rebild@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Massive shadowy wordmark */}
        <div className="container overflow-hidden pb-4">
          <div
            className="font-display leading-[0.85] tracking-wider select-none whitespace-nowrap text-foreground/[0.06]"
            style={{ fontSize: "clamp(4rem, 19vw, 22rem)" }}
          >
            WE ARE REBILD<span className="text-primary/20">.</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border">
          <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-foreground/60 uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} <span className="font-bold text-foreground">REBILD</span>
            </p>
            <div className="flex items-center gap-6 text-xs text-foreground/60 uppercase tracking-[0.2em]">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <span className="text-foreground/30">|</span>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
