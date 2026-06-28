import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

const projects = [
  { id: 1, image: 'images/exhibits/indian_temple_white.png', title: 'Grand Temple' },
  { id: 2, image: 'images/exhibits/indian_bathroom_onyx.png', title: 'Luxury En Suite' },
  { id: 3, image: 'images/exhibits/indian_hotel_black.png', title: 'Hotel Lobby' },
  { id: 4, image: 'images/exhibits/indian_courtyard_onyx.png', title: 'Private Courtyard' },
  { id: 5, image: 'images/exhibits/indian_penthouse_green.png', title: 'Skyline Penthouse' },
  { id: 6, image: 'images/exhibits/indian_home_white.png', title: 'Modern Residence' },
];

export default function Gallery() {
  const basePath = import.meta.env.BASE_URL;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % projects.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + projects.length) % projects.length);
    }
  };

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <motion.div 
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2>Projects Gallery</h2>
          <p className="gallery-subtitle">A showcase of unparalleled elegance. Witness how our premium stone transforms spaces into masterpieces.</p>
        </motion.div>
      </div>

      <div className="gallery-marquee-container">
        <div className="gallery-marquee-track">
          {/* First Group */}
          <div className="marquee-group">
            {projects.map((project, index) => (
              <div 
                key={`primary-${project.id}`} 
                className="gallery-item"
                onClick={() => setSelectedIndex(index)}
              >
                <img src={`${basePath}${project.image}`} alt={project.title} />
                <div className="gallery-overlay glass">
                  <span>{project.title}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Second Group (Duplicate for seamless loop) */}
          <div className="marquee-group" aria-hidden="true">
            {projects.map((project, index) => (
              <div 
                key={`duplicate-${project.id}`} 
                className="gallery-item"
                onClick={() => setSelectedIndex(index)}
              >
                <img src={`${basePath}${project.image}`} alt={project.title} />
                <div className="gallery-overlay glass">
                  <span>{project.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <button className="lightbox-close" onClick={() => setSelectedIndex(null)}>
              <X size={32} />
            </button>
            
            <button className="lightbox-nav lightbox-prev" onClick={handlePrev}>
              <ChevronLeft size={48} />
            </button>

            <motion.img 
              key={selectedIndex}
              src={`${basePath}${projects[selectedIndex].image}`} 
              alt="Enlarged project" 
              className="lightbox-image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} 
            />

            <button className="lightbox-nav lightbox-next" onClick={handleNext}>
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
