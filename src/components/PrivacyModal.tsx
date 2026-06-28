import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import './AboutModal.css';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
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
          <h2>Privacy Policy</h2>
          <p className="about-lead">
            At LuxeMarble, we are committed to safeguarding your privacy and protecting the personal information you share with us.
          </p>
          <div className="about-grid">
            <div className="about-column">
              <h3>Data Collection</h3>
              <p>We collect necessary information such as your name, contact details, and project requirements to provide you with tailored quotes and bespoke architectural services.</p>
            </div>
            <div className="about-column">
              <h3>Data Usage</h3>
              <p>Your information is used exclusively to facilitate your orders, improve our services, and communicate important updates regarding your marble selection and delivery.</p>
            </div>
            <div className="about-column">
              <h3>Data Protection</h3>
              <p>We do not sell or share your personal data with third parties, except as required for logistics, delivery, or where mandated by law.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
