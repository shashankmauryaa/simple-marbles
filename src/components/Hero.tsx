import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      
      <div className="hero-content container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-text-wrapper"
        >
          <h1 className="hero-title">
            <span className="hero-title-light">Timeless Elegance.</span><br />
            Carved in Stone.
          </h1>
          <p className="hero-subtitle">
            Discover the world's most exquisite premium marble collections, ethically sourced and perfectly crafted for your visionary spaces.
          </p>
          <div className="hero-cta">
            <button 
              onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
              className="btn"
            >
              Explore Collection
            </button>
            <button 
              onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
              className="btn btn-outline glass"
            >
              Our Process
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
