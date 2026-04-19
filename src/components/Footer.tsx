import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Link to="/#top" className="flex items-center gap-2.5">
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
              href="https://instagram.com"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="mailto:hello@rebild.in"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-bold mb-5">
            Studio
          </p>
          <ul className="space-y-3 text-foreground/80">
            <li><a href="/#work" className="hover:text-primary transition-colors">Work</a></li>
            <li><a href="/#services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="/#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
            <li><a href="/#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-bold mb-5">
            Legal
          </p>
          <ul className="space-y-3 text-foreground/80">
            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      {/* Massive wordmark */}
      <div className="container mt-16 overflow-hidden">
        <div className="font-display text-[24vw] leading-[0.85] text-foreground/[0.06] tracking-wider select-none">
          REBILD<span className="text-primary/30">.</span>
        </div>
      </div>

      <div className="container mt-8 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-foreground/50 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Rebild Studio · All rights reserved
        </p>
        <p className="text-xs text-foreground/50 uppercase tracking-[0.2em]">
          Made in India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
