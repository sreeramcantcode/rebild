import { ArrowUpRight, Mail, Phone, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-36 bg-primary text-primary-foreground overflow-hidden relative">
      <div className="container">
        <span className="text-sm uppercase tracking-[0.3em] font-semibold opacity-80">
          ◉ Let's build
        </span>
        <h2 className="mt-4 font-display text-6xl md:text-[10rem] leading-[0.85] text-balance">
          Ready to <br /> rebuild your <br /> brand?
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-10 items-end">
          <p className="text-lg md:text-xl max-w-md opacity-90">
            Drop us a line. We reply within 24 hours and start most projects within
            a week.
          </p>

          <div className="flex flex-col gap-4 md:items-end">
            <a
              href="mailto:hello@rebild.in"
              className="group inline-flex items-center gap-3 text-lg font-semibold border-b-2 border-primary-foreground/40 hover:border-primary-foreground pb-1 transition-colors"
            >
              <Mail className="w-5 h-5" />
              hello@rebild.in
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="tel:+919999999999"
              className="group inline-flex items-center gap-3 text-lg font-semibold border-b-2 border-primary-foreground/40 hover:border-primary-foreground pb-1 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91 99999 99999
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="https://instagram.com"
              className="group inline-flex items-center gap-3 text-lg font-semibold border-b-2 border-primary-foreground/40 hover:border-primary-foreground pb-1 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @rebild.studio
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        <a
          href="mailto:hello@rebild.in"
          className="mt-16 inline-flex items-center gap-3 px-8 py-5 rounded-full bg-foreground text-background font-bold uppercase tracking-wide text-lg hover:bg-background hover:text-foreground transition-all"
        >
          Start a project
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
