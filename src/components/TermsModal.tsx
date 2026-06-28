import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import './AboutModal.css';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
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
          <h2>Terms & Conditions</h2>
          <p className="about-lead">
            Welcome to LuxeMarble. By accessing our website and engaging our services, you agree to comply with the following terms and conditions.
          </p>
          <div className="about-grid">
            <div className="about-column">
              <h3>Product Information</h3>
              <p>Marble is a natural product. Variations in color, veining, and texture are inherent and constitute the unique beauty of the stone. Actual products may differ slightly from the digital representations.</p>
            </div>
            <div className="about-column">
              <h3>Pricing & Quotes</h3>
              <p>All quotes provided are valid for 30 days unless otherwise stated. Prices are subject to change based on raw material availability and international shipping rates.</p>
            </div>
            <div className="about-column">
              <h3>Liability</h3>
              <p>LuxeMarble is not liable for indirect, incidental, or consequential damages arising from the installation or use of our products by third-party contractors.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
