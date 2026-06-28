import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import './AboutModal.css';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div 
      className="about-modal-overlay glass"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div 
        className="about-modal-content"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <button className="close-btn" onClick={onClose}>
          <X size={32} strokeWidth={1.5} />
        </button>
        
        <div className="about-inner container">
          <h2>Our Legacy</h2>
          <p className="about-lead">
            Founded in 1998, LuxeMarble has been at the forefront of the architectural stone industry, sourcing the world's most magnificent and rare marbles for elite projects across the globe.
          </p>
          <div className="about-grid">
            <div className="about-column">
              <h3>Ethical Sourcing</h3>
              <p>We work directly with quarries in Italy, Greece, and Brazil to ensure that every slab we procure is extracted with the utmost respect for the environment and the local communities.</p>
            </div>
            <div className="about-column">
              <h3>Master Craftsmanship</h3>
              <p>Our state-of-the-art facility uses a blend of traditional artisan techniques and cutting-edge technology to cut, polish, and hone each stone to absolute perfection.</p>
            </div>
            <div className="about-column">
              <h3>Bespoke Service</h3>
              <p>From private residences to grand commercial spaces, our dedicated consultants guide architects and designers to find the exact stone that brings their vision to life.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
