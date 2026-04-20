import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32">
        <About />
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
