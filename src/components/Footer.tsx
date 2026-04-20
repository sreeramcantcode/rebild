import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-8">
      <div className="container grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="font-display text-3xl tracking-wider text-foreground">
              REBILD<span className="text-primary">.</span>
            </span>
          </Link>
          <p className="mt-5 text-foreground/60 max-w-sm leading-relaxed">
            A creative studio building brands that earn attention and convert it.
            Strategy, content, design, video — under one roof.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.instagram.com/rebild_/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="mailto:rebild@gmail.com"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-bold mb-5">
            Quick Links
          </p>
          <ul className="space-y-3 text-foreground/80">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/work" className="hover:text-primary transition-colors">Our Work</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-bold mb-5">
            Get in touch
          </p>
          <ul className="space-y-3 text-foreground/80">
            <li>
              <a href="mailto:rebild@gmail.com" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5" /> rebild@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+919999999999" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-3.5 h-3.5" /> +91 99999 99999
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/rebild_/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" /> @rebild_
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Massive wordmark */}
      <div className="container mt-16 overflow-hidden">
        <div className="font-display text-[24vw] leading-[0.85] text-foreground/[0.06] tracking-wider select-none">
          REBILD<span className="text-primary/30">.</span>
        </div>
      </div>

      <div className="container mt-6 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-foreground/50 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Rebild Studio · All rights reserved
        </p>
        <div className="flex items-center gap-6 text-xs text-foreground/50 uppercase tracking-[0.2em]">
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
