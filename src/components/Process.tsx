import { motion } from 'framer-motion';
import { Pickaxe, ShieldCheck, Diamond } from 'lucide-react';
import './Process.css';

const steps = [
  {
    icon: <Pickaxe size={32} strokeWidth={1.5} />,
    title: 'Ethical Extraction',
    description: 'Sourced from the most prestigious quarries globally, ensuring sustainable and responsible extraction methods.'
  },
  {
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    title: 'Meticulous Inspection',
    description: 'Every slab undergoes rigorous quality control to guarantee flawless structural integrity and aesthetic perfection.'
  },
  {
    icon: <Diamond size={32} strokeWidth={1.5} />,
    title: 'Masterful Finishing',
    description: 'Polished to a luminous shine or honed to a velvety matte by artisans with decades of experience.'
  }
];

export default function Process() {
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <div className="process-layout">
          <motion.div 
            className="process-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2>The Art of Stone</h2>
            <p className="process-description">
              From the heart of the mountain to the center of your home, our process is defined by an uncompromising commitment to quality and artistry. We believe that every piece of marble tells a unique story of the earth's history.
            </p>
            <a href="#contact" className="btn">Get in Touch</a>
          </motion.div>

          <div className="process-steps">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="step-card glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="step-icon">
                  {step.icon}
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
