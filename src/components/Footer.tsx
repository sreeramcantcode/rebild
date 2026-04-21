import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background">
      {/* Orange band — ADKO-style */}
      <div className="bg-primary text-primary-foreground">
        <div className="container pt-20 pb-10">
          <div className="grid md:grid-cols-12 gap-10">
            {/* Brand blurb + social */}
            <div className="md:col-span-5">
              <Link to="/" className="flex items-center gap-2.5">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary-foreground" />
                <span className="font-display text-3xl tracking-wider">
                  REBILD<span>.</span>
                </span>
              </Link>
              <p className="mt-5 max-w-sm leading-relaxed text-primary-foreground/85">
                A creative studio specialising in videography, graphic design,
                photography, and digital marketing — building brands that earn
                attention and convert it.
              </p>
              <a
                href="https://www.instagram.com/rebild_/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="mt-8 w-10 h-10 rounded-full border border-primary-foreground/40 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 md:col-start-7">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-5 text-primary-foreground/70">
                Quick Links
              </p>
              <ul className="space-y-3 font-medium uppercase tracking-[0.15em] text-sm">
                <li><Link to="/" className="hover:opacity-60 transition-opacity">Home</Link></li>
                <li><Link to="/about" className="hover:opacity-60 transition-opacity">About</Link></li>
                <li><Link to="/contact" className="hover:opacity-60 transition-opacity">Contact</Link></li>
                <li><Link to="/services" className="hover:opacity-60 transition-opacity">Our Services</Link></li>
                <li><Link to="/work" className="hover:opacity-60 transition-opacity">Our Work</Link></li>
              </ul>
            </div>

            {/* Explore */}
            <div className="md:col-span-3">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-5 text-primary-foreground/70">
                Explore
              </p>
              <ul className="space-y-3 font-medium uppercase tracking-[0.15em] text-sm">
                <li><Link to="/services" className="hover:opacity-60 transition-opacity">Our Photography</Link></li>
                <li><Link to="/services" className="hover:opacity-60 transition-opacity">Our Videography</Link></li>
                <li><Link to="/services" className="hover:opacity-60 transition-opacity">Graphic Design</Link></li>
                <li><Link to="/services" className="hover:opacity-60 transition-opacity">Digital Marketing</Link></li>
                <li>
                  <a href="mailto:rebild@gmail.com" className="hover:opacity-60 transition-opacity">
                    rebild@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Massive wordmark */}
          <div className="mt-16 overflow-hidden">
            <div className="font-display text-[22vw] leading-[0.85] tracking-wider select-none whitespace-nowrap">
              WE ARE REBILD<span className="opacity-60">.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar — dark */}
      <div className="bg-background border-t border-border">
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
    </footer>
  );
};

export default Footer;
