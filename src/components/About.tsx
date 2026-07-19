import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2>About Us</h2>
          <p className="about-subtitle">Company Profile & Heritage</p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>
              Welcome to <strong>WHITE MARBLE VIETNAM</strong>, a trusted supplier and exporter of premium natural white marble in Vietnam. We are dedicated to providing high-quality marble products that combine timeless beauty, exceptional durability, and superior craftsmanship for residential, commercial, and architectural projects.
            </p>
            <p>
              With a strong commitment to quality and customer satisfaction, we source and process carefully selected natural stone to meet the highest industry standards. Our marble is suitable for a wide range of applications, including flooring, wall cladding, staircases, countertops, monuments, sculptures, landscaping, and luxury interior and exterior designs.
            </p>
            <p>
              Our experienced team works closely with architects, builders, designers, distributors, and project developers to deliver customized stone solutions that meet each client's unique requirements. From selecting the perfect material to precision cutting, finishing, packaging, and delivery, we ensure every order is handled with professionalism and attention to detail.
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div 
              className="about-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3>Our Mission</h3>
              <p>Our mission is to become one of Vietnam's most trusted natural stone suppliers by delivering premium-quality white marble products, creating long-term partnerships, and exceeding customer expectations through reliability, integrity, and continuous improvement.</p>
            </motion.div>

            <motion.div 
              className="about-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3>Our Vision</h3>
              <p>To be recognized internationally as a leading Vietnamese supplier of natural white marble, known for exceptional quality, sustainable business practices, innovation, and customer satisfaction.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
