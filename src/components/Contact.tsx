import { Mail, Phone, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 md:py-36 bg-background border-t border-border overflow-hidden">
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
      <div className="container relative">
        <h2 className="font-display text-7xl md:text-[10rem] lg:text-[14rem] leading-[0.85] text-foreground text-balance tracking-wider">
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
              href="mailto:rebild@gmail.com"
              className="inline-flex items-center gap-3 text-xl md:text-2xl font-semibold text-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              rebild@gmail.com
            </a>
            <a
              href="tel:+919999999999"
              className="inline-flex items-center gap-3 text-xl md:text-2xl font-semibold text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91 99999 99999
            </a>
            <a
              href="https://www.instagram.com/rebild_/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-xl md:text-2xl font-semibold text-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @rebild_
            </a>
          </div>
        </div>

        <a
          href="mailto:rebild@gmail.com"
          className="group relative mt-16 inline-flex items-center justify-center px-8 py-5 rounded-full bg-primary overflow-hidden transition-[transform,box-shadow] duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-15px_hsl(var(--primary)/0.7)]"
        >
          <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]" />
          <span className="relative text-primary-foreground group-hover:text-background font-bold uppercase tracking-[0.2em] text-sm transition-colors duration-500">
            Start a project
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
