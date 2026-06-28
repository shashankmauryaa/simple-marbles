import { Mail, MapPin, Phone } from 'lucide-react';
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
              Let's discuss how LuxeMarble can elevate your next project.
            </p>
            <p className="footer-desc">
              We are defined by an uncompromising commitment to quality and artistry. We believe that every piece of marble tells a unique story.
            </p>
            
            <div className="footer-social-inline">
              <a href="#" className="social-link" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                Instagram
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                Facebook
              </a>
              <a href="https://wa.me/84948973901" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
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
            <a href="mailto:contact@luxemarble.com" className="icon-link">
              <Mail size={16} className="contact-icon" /> 
              contact@luxemarble.com
            </a>
            <a href="https://wa.me/84948973901" className="icon-link">
              <Phone size={16} className="contact-icon" /> 
              +84 94 897 39 01
            </a>
            <span className="icon-link location-text">
              <MapPin size={16} className="contact-icon map-icon" /> 
              <span>Elu's Rd, Hanumanthappa Layout<br/>Kyalasanahalli, Bengaluru 560077</span>
            </span>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.586616422709!2d77.64332211534346!3d13.061937990796335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1a5b81a5fb5b%3A0xc3b8655bd55a6d71!2sElu&#39;s%20Rd%2C%20Hanumanthappa%20Layout%2C%20Kyalasanahalli%2C%20Bengaluru%2C%20Karnataka%20560077!5e0!3m2!1sen!2sin!4v1689253592398!5m2!1sen!2sin" 
              className="small-map"
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>

        </div>

      </div>
      
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            &copy; {new Date().getFullYear()} LuxeMarble. 
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
