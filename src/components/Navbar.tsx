import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary" />
          <span className="font-display text-2xl tracking-wider text-foreground">
            REBILD<span className="text-primary">.</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `relative text-[11px] font-semibold uppercase tracking-[0.25em] transition-colors duration-300 py-2 ${
                    isActive ? "text-primary" : "text-foreground/75 hover:text-primary"
                  } after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-primary after:transition-all after:duration-300 ${
                    isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="group relative hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-foreground/40 overflow-hidden transition-colors duration-500 hover:border-primary"
        >
          <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]" />
          <span className="relative text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground group-hover:text-primary-foreground transition-colors duration-500">
            Get in touch
          </span>
        </Link>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="block py-2 font-display text-3xl tracking-wider"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold uppercase tracking-wide"
            >
              Get in touch
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
