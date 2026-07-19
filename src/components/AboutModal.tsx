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
          <h2 style={{ textAlign: 'center' }}>About Us</h2>
          <p className="about-lead" style={{ textAlign: 'center' }}>
            Welcome to WHITE MARBLE VIETNAM, a trusted supplier and exporter of premium natural white marble in Vietnam. We are dedicated to providing high-quality marble products that combine timeless beauty, exceptional durability, and superior craftsmanship.
          </p>
          <div className="about-grid">
            <div className="about-column">
              <h3>Our Company</h3>
              <p>With a strong commitment to quality and customer satisfaction, we source and process carefully selected natural stone to meet the highest industry standards. Our marble is suitable for a wide range of applications, including flooring, wall cladding, staircases, countertops, and luxury interior designs.</p>
            </div>
            <div className="about-column">
              <h3>Our Mission</h3>
              <p>Our mission is to become one of Vietnam's most trusted natural stone suppliers by delivering premium-quality white marble products, creating long-term partnerships, and exceeding customer expectations through reliability, integrity, and continuous improvement.</p>
            </div>
            <div className="about-column">
              <h3>Our Vision</h3>
              <p>To be recognized internationally as a leading Vietnamese supplier of natural white marble, known for exceptional quality, sustainable business practices, innovation, and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
