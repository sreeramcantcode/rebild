import { Mail, Phone, Instagram } from "lucide-react";
import contactFigure from "@/assets/contact-figure.jpg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 bg-background border-t border-border overflow-hidden"
    >
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
      <div className="container relative">
        <p className="text-[11px] uppercase tracking-[0.3em] text-primary font-bold mb-6">
          ◉ Get in touch
        </p>
        <h2 className="font-display text-6xl md:text-[9rem] lg:text-[13rem] leading-[0.85] text-foreground text-balance tracking-wider">
          Ready to bring <br />
          your vision <span className="text-primary">to life?</span>
        </h2>

        <div className="mt-20 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-xl">
              Drop us a line. We reply within 24 hours and start most projects
              within a week.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <a
                href="mailto:rebild@gmail.com"
                className="group inline-flex items-center gap-4 text-xl md:text-2xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                <span className="w-11 h-11 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
                  <Mail className="w-4 h-4" />
                </span>
                rebild@gmail.com
              </a>
              <a
                href="tel:+919999999999"
                className="group inline-flex items-center gap-4 text-xl md:text-2xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                <span className="w-11 h-11 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
                  <Phone className="w-4 h-4" />
                </span>
                +91 99999 99999
              </a>
              <a
                href="https://www.instagram.com/rebild_/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 text-xl md:text-2xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                <span className="w-11 h-11 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
                  <Instagram className="w-4 h-4" />
                </span>
                @rebild_
              </a>
            </div>

            <a
              href="mailto:rebild@gmail.com"
              className="group relative mt-12 inline-flex items-center justify-center px-8 py-5 rounded-full bg-primary overflow-hidden transition-[transform,box-shadow] duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-15px_hsl(var(--primary)/0.7)]"
            >
              <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]" />
              <span className="relative text-primary-foreground group-hover:text-background font-bold uppercase tracking-[0.2em] text-sm transition-colors duration-500">
                Start a project
              </span>
            </a>
          </div>

          <div className="md:col-span-5 order-1 md:order-2">
            <div className="relative rounded-3xl overflow-hidden ring-1 ring-border/60 bg-card aspect-[4/5]">
              <img
                src={contactFigure}
                alt="Creative collaborator on orange blocks"
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
