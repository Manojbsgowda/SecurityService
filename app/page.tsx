import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="pt-16 pb-16 relative">
      <Header />
      <main className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center my-8">Welcome to Security Services</h1>
        <p className="text-center">Your trusted partner in providing world-class security solutions.</p>
      </main>

      {/* WhatsApp Button */}
      {/* <WhatsApp /> */}

      <Footer />
    </div>
  );
}
