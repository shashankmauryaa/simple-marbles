import './Footer.css';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2>Lumina Stone</h2>
          <p>Curators of the world's finest premium marble, delivering unparalleled elegance to architectural masterpieces since 1998.</p>
        </div>
        
        <div className="footer-links-group">
          <div className="footer-links">
            <h3>Collections</h3>
            <ul>
              <li><a href="#collection">Carrara</a></li>
              <li><a href="#collection">Calacatta</a></li>
              <li><a href="#collection">Onyx</a></li>
              <li><a href="#collection">Travertine</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>Studio</h3>
            <ul>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#sustainability">Sustainability</a></li>
              <li><a href="#journal">Journal</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:contact@luminastone.com">contact@luminastone.com</a></li>
              <li><a href="tel:+18001234567">+1 (800) 123-4567</a></li>
              <li><p>123 Luxury Ave, Design District</p></li>
              <li><p>New York, NY 10001</p></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Lumina Stone. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
