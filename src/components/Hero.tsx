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
          <h1 className="hero-title" style={{ marginBottom: '3rem' }}>
            <span className="hero-title-light">Premium White Marble.</span><br />
            Direct from Vietnam.
          </h1>
          {/* <p className="hero-subtitle">
            Welcome to WHITE MARBLE VIETNAM. We are a trusted supplier and exporter of premium natural white marble, providing exceptional durability and superior craftsmanship for your most ambitious architectural projects.
          </p> */}
          <div className="hero-cta">
            <button 
              onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="btn"
            >
              Explore Collection
            </button>
            <button 
              onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
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
