import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import StickyCTA from "./components/StickyCTA";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import WelcomeSlider from "./components/WelcomeSlider";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface dark:bg-navy pb-14 lg:pb-0">

      <WelcomeSlider />

      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <StickyCTA />

    </div>
  );
}