import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Work from "@/components/Work";

const WorkPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32">
        <Work />
      </div>
      <Footer />
    </main>
  );
};

export default WorkPage;
