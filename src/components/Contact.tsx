import { ArrowUpRight, Mail, Phone, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 md:py-36 bg-background border-t border-border overflow-hidden">
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
      <div className="container relative">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-bold inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Contact
        </span>
        <h2 className="mt-6 font-display text-7xl md:text-[10rem] lg:text-[14rem] leading-[0.85] text-foreground text-balance tracking-wider">
          Let's <span className="text-primary">rebuild</span> <br />
          together.
        </h2>

        <div className="mt-16 grid md:grid-cols-12 gap-10 items-end">
          <p className="md:col-span-5 text-lg text-foreground/70 leading-relaxed">
            Drop us a line. We reply within 24 hours and start most projects within
            a week.
          </p>

          <div className="md:col-span-7 flex flex-col gap-3 md:items-end">
            <a
              href="mailto:hello@rebild.in"
              className="group inline-flex items-center gap-3 text-xl md:text-2xl font-semibold text-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              hello@rebild.in
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="tel:+919999999999"
              className="group inline-flex items-center gap-3 text-xl md:text-2xl font-semibold text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91 99999 99999
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="https://instagram.com"
              className="group inline-flex items-center gap-3 text-xl md:text-2xl font-semibold text-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @rebild.studio
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        <a
          href="mailto:hello@rebild.in"
          className="mt-16 inline-flex items-center gap-3 px-8 py-5 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-[0.2em] text-sm hover:bg-foreground hover:text-background transition-all"
        >
          Start a project
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
