import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LegalLayoutProps {
  title: string;
  updated: string;
  children: React.ReactNode;
}

const LegalLayout = ({ title, updated, children }: LegalLayoutProps) => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-36 md:pt-44 pb-20">
        <div className="container max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-foreground/60 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back home
          </Link>
          <span className="mt-10 block text-[11px] uppercase tracking-[0.3em] text-primary font-bold">
            ◉ {updated}
          </span>
          <h1 className="mt-5 font-display text-6xl md:text-8xl text-foreground tracking-wider">
            {title}
            <span className="text-primary">.</span>
          </h1>
          <div className="mt-12 prose-rebild space-y-8 text-foreground/75 leading-relaxed text-base md:text-lg">
            {children}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default LegalLayout;
