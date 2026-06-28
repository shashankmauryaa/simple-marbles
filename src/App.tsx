import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutModal from './components/AboutModal';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';

function Home({ onOpenAbout }: { onOpenAbout: () => void }) {
  return (
    <>
      <Hero />
      <Collection />
      <Gallery />
      <Process />
      <Footer onOpenAbout={onOpenAbout} />
    </>
  );
}

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="app-container">
      <Navbar onOpenAbout={() => setIsAboutOpen(true)} />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      
      <Routes>
        <Route path="/" element={<Home onOpenAbout={() => setIsAboutOpen(true)} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
