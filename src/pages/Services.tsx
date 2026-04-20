import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32">
        <Services />
      </div>
      <Footer />
    </main>
  );
};

export default ServicesPage;
