import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

interface NavbarProps {
  onOpenAbout: () => void;
}

export default function Navbar({ onOpenAbout }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling down 100px or full hero height
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.nav 
          className="navbar glass"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="navbar-container">
            <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="navbar-brand">
              LuxeMarble
            </a>
            
            <ul className="navbar-links">
              <li>
                <button onClick={onOpenAbout} className="navbar-btn-link">About</button>
              </li>
              <li>
                <a href="#collection" onClick={(e) => handleNavClick(e, 'collection')}>Catalogues</a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>Gallery</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
              </li>
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
