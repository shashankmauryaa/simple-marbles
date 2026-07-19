import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/84948973901" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
