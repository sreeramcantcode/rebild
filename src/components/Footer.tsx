import logo from "@/assets/rebild-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Rebild" className="h-8 w-auto" />
          <span className="font-display text-xl">REBILD<span className="text-primary">.</span></span>
        </div>
        <p className="text-sm text-background/60">
          © {new Date().getFullYear()} Rebild Studio. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-background/70">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#work" className="hover:text-primary transition-colors">Work</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
