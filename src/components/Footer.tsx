import { MapPin, Phone } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Footer.css';

interface FooterProps {
  onOpenAbout?: () => void;
  onOpenTerms?: () => void;
  onOpenPrivacy?: () => void;
}

export default function Footer({ onOpenAbout, onOpenTerms, onOpenPrivacy }: FooterProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onOpenAbout) {
      onOpenAbout();
    }
  };

  const handleTermsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onOpenTerms) {
      onOpenTerms();
    }
  };

  const handlePrivacyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onOpenPrivacy) {
      onOpenPrivacy();
    }
  };

  return (
    <footer id="contact" className="footer section footer-section">
      <div className="container footer-container">
        
        <div className="footer-top-row">
          
          <div className="footer-col brand-col">
            <h2 className="contact-heading">Contact Us</h2>
            <p className="footer-italic">
              Let's discuss how WHITE MARBLE VIETNAM can elevate your next project.
            </p>
            <p className="footer-desc">
              We are defined by an uncompromising commitment to quality and artistry. We believe that every piece of marble tells a unique story.
            </p>
            
            <div className="footer-social-inline">
              <a href="https://wa.me/84948973901" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp (Ravi Chandank)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                WhatsApp
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="col-heading">PAGES</h4>
            <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>Home</a>
            <a href="#about" onClick={handleAboutClick}>About</a>
            <a href="#collection" onClick={(e) => handleNavClick(e, 'collection')}>Catalogues</a>
            <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>Gallery</a>
          </div>

          <div className="footer-col">
            <h4 className="col-heading">GET STARTED</h4>
            <a href="#collection" onClick={(e) => handleNavClick(e, 'collection')}>View Collection</a>
            <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>Project Gallery</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Request Quote</a>
          </div>

          <div className="footer-col">
            <h4 className="col-heading">REACH OUT</h4>
            <a href="tel:+84948973901" className="icon-link">
              <Phone size={16} className="contact-icon" /> 
              +84 948973901 (RAVI)
            </a>
            <a href="tel:+84989890303" className="icon-link">
              <Phone size={16} className="contact-icon" /> 
              +84 989890303 (KAMAL)
            </a>
            <span className="icon-link location-text">
              <MapPin size={16} className="contact-icon map-icon" /> 
              <span><strong>OFFICE:</strong> R.1201, 12nd Floor, A5 Building - Thang Long International Village, Tran Dang Ninh Str., Dich Vong Ward, Cau Giay Dist., Hanoi, Vietnam.</span>
            </span>
            <span className="icon-link location-text" style={{ marginTop: '0.5rem' }}>
              <MapPin size={16} className="contact-icon map-icon" /> 
              <span><strong>SHOWROOM:</strong> Minh Tien, Luc Yen, Yen Bai, Lao Cai, Vietnam.</span>
            </span>
          </div>

        </div>

      </div>
      
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            &copy; {new Date().getFullYear()} WHITE MARBLE VIETNAM. 
            <span className="footer-separator">&bull;</span> 
            <a href="#terms" onClick={handleTermsClick}>Terms & Conditions</a> 
            <span className="footer-separator">&bull;</span> 
            <a href="#privacy" onClick={handlePrivacyClick}>Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
