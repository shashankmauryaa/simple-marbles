import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutModal from "./components/AboutModal";
import TermsModal from "./components/TermsModal";
import PrivacyModal from "./components/PrivacyModal";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import Gallery from "./components/Gallery";
import Process from "./components/Process";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ProductDetail from "./pages/ProductDetail";

interface HomeProps {
  onOpenAbout: () => void;
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

function Home({ onOpenAbout, onOpenTerms, onOpenPrivacy }: HomeProps) {
  return (
    <>
      <Hero />
      <Collection />
      <Gallery />
      <Process />
      <Footer
        onOpenAbout={onOpenAbout}
        onOpenTerms={onOpenTerms}
        onOpenPrivacy={onOpenPrivacy}
      />
    </>
  );
}

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="app-container">
      <Navbar onOpenAbout={() => setIsAboutOpen(true)} />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
      <FloatingWhatsApp />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              onOpenAbout={() => setIsAboutOpen(true)}
              onOpenTerms={() => setIsTermsOpen(true)}
              onOpenPrivacy={() => setIsPrivacyOpen(true)}
            />
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
